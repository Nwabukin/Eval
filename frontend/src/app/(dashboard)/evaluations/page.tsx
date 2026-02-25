"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { type ColumnDef } from "@tanstack/react-table";
import { ChevronRight } from "lucide-react";
import { useCurrentUser } from "@/hooks/use-current-user";
import { evaluationsService } from "@/services/evaluations.service";
import { queryKeys } from "@/lib/query-keys";
import { formatDate, getStatusLabel } from "@/lib/utils";
import { PageHeader } from "@/components/layout/page-header";
import { DataTable } from "@/components/domain/data-table";
import { StatusBadge } from "@/components/domain/status-badge";
import { UserAvatar } from "@/components/domain/user-avatar";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UserRole, EvaluationStatus } from "@/types/shared";
import type { Evaluation } from "@/types/shared";

export default function EvaluationsPage() {
  const router = useRouter();
  const user = useCurrentUser();
  const role = user?.role as UserRole;

  const isAdmin = role === UserRole.ADMIN;
  const isManager = role === UserRole.LINE_MANAGER;
  const isCalibration = role === UserRole.CALIBRATION;

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [page, setPage] = useState(1);

  // Admin: list all evaluations
  const { data: allEvalsRes, isLoading: allLoading } = useQuery({
    queryKey: queryKeys.evaluations.list({ search, status: statusFilter, page }),
    queryFn: () =>
      evaluationsService.list({
        search: search || undefined,
        status: statusFilter !== "all" ? statusFilter : undefined,
        page,
        limit: 10,
      }),
    enabled: isAdmin,
  });

  // Manager: pending reviews
  const { data: pendingReviewRes, isLoading: reviewLoading } = useQuery({
    queryKey: queryKeys.evaluations.pendingReview(),
    queryFn: () => evaluationsService.pendingReview(),
    enabled: isManager,
  });

  // Calibration: pending calibration
  const { data: pendingCalRes, isLoading: calLoading } = useQuery({
    queryKey: queryKeys.evaluations.pendingCalibration(),
    queryFn: () => evaluationsService.pendingCalibration(),
    enabled: isCalibration,
  });

  const evaluations = isAdmin
    ? allEvalsRes?.data || []
    : isManager
      ? pendingReviewRes?.data || []
      : pendingCalRes?.data || [];

  const loading = isAdmin ? allLoading : isManager ? reviewLoading : calLoading;

  const title = isAdmin
    ? "All Evaluations"
    : isManager
      ? "Pending Reviews"
      : "Pending Calibration";

  const description = isAdmin
    ? "View and manage all employee evaluations"
    : isManager
      ? "Team member evaluations awaiting your review"
      : "Evaluations awaiting calibration scoring";

  const getRowAction = (evalItem: Evaluation) => {
    if (isManager) return `/evaluations/${evalItem.id}/review`;
    if (isCalibration) return `/evaluations/${evalItem.id}/calibrate`;
    return `/evaluations/${evalItem.id}`;
  };

  const columns: ColumnDef<Evaluation>[] = [
    {
      accessorKey: "employee",
      header: "Employee",
      cell: ({ row }) => (
        <button
          type="button"
          onClick={() => router.push(getRowAction(row.original))}
          className="flex w-full items-center space-x-3 text-left hover:bg-muted/60 rounded-xl px-2 py-1 transition-colors"
        >
          <UserAvatar
            firstName={row.original.employee.firstName}
            lastName={row.original.employee.lastName}
            className="h-8 w-8"
          />
          <div>
            <p className="font-medium text-foreground text-sm">
              {row.original.employee.firstName} {row.original.employee.lastName}
            </p>
            <p className="text-xs text-muted-foreground">{row.original.employee.email}</p>
          </div>
        </button>
      ),
    },
    {
      accessorKey: "cycle",
      header: "Cycle",
      cell: ({ row }) => (
        <button
          type="button"
          onClick={() => router.push(getRowAction(row.original))}
          className="text-xs font-light hover:underline"
        >
          {row.original.cycle.name}
        </button>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <button
          type="button"
          onClick={() => router.push(getRowAction(row.original))}
          className="inline-flex"
        >
          <StatusBadge status={row.original.status} />
        </button>
      ),
    },
    {
      accessorKey: "updatedAt",
      header: "Last Updated",
      cell: ({ row }) => (
        <button
          type="button"
          onClick={() => router.push(getRowAction(row.original))}
          className="text-xs font-light text-muted-foreground hover:underline"
        >
          {formatDate(row.original.updatedAt)}
        </button>
      ),
    },
  ];

  return (
    <>
      <PageHeader title={title} description={description} />

      {isAdmin && (
        <div className="flex items-center space-x-4 mb-8">
          <Input
            placeholder="Search evaluations..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            className="max-w-xs rounded-xl h-10 bg-white dark:bg-card"
          />
          <Select value={statusFilter} onValueChange={(v) => { setStatusFilter(v); setPage(1); }}>
            <SelectTrigger className="w-52 rounded-xl h-10 bg-white dark:bg-card">
              <SelectValue placeholder="All statuses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              {Object.values(EvaluationStatus).map((s) => (
                <SelectItem key={s} value={s}>{getStatusLabel(s)}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      <DataTable
        columns={columns}
        data={evaluations}
        isLoading={loading}
        totalItems={isAdmin ? allEvalsRes?.meta?.total : undefined}
        currentPage={page}
        onPageChange={isAdmin ? setPage : undefined}
      />
    </>
  );
}
