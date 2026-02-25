'use client';

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { type ColumnDef } from "@tanstack/react-table";
import { ChevronRight } from "lucide-react";
import { useCurrentUser } from "@/hooks/use-current-user";
import { evaluationsService } from "@/services/evaluations.service";
import { queryKeys } from "@/lib/query-keys";
import { formatDate } from "@/lib/utils";
import { PageHeader } from "@/components/layout/page-header";
import { DataTable } from "@/components/domain/data-table";
import { StatusBadge } from "@/components/domain/status-badge";
import { UserAvatar } from "@/components/domain/user-avatar";
import { UserRole, type Evaluation } from "@/types/shared";

export default function ManagerAllEvaluationsPage() {
  const router = useRouter();
  const user = useCurrentUser();
  const role = user?.role as UserRole | undefined;

  const isManager = role === UserRole.LINE_MANAGER;

  const { data, isLoading } = useQuery({
    queryKey: queryKeys.evaluations.managerAll(),
    queryFn: () => evaluationsService.managerAll(),
    enabled: isManager,
  });

  const evaluations = data?.data || [];

  const columns: ColumnDef<Evaluation>[] = [
    {
      accessorKey: "employee",
      header: "Employee",
      cell: ({ row }) => (
        <button
          type="button"
          onClick={() => router.push(`/evaluations/${row.original.id}/review`)}
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
        <span className="text-xs font-light">{row.original.cycle.name}</span>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => <StatusBadge status={row.original.status} />,
    },
    {
      accessorKey: "updatedAt",
      header: "Last Updated",
      cell: ({ row }) => (
        <span className="text-xs font-light text-muted-foreground">
          {formatDate(row.original.updatedAt)}
        </span>
      ),
    },
    {
      id: "action",
      cell: ({ row }) => (
        <button
          onClick={() => router.push(`/evaluations/${row.original.id}/review`)}
          className="text-slate-200 dark:text-slate-600 hover:text-muted-foreground transition-colors"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      ),
    },
  ];

  if (!isManager) {
    return (
      <>
        <PageHeader
          title="All Evaluations"
          description="This view is only available to line managers."
        />
        <p className="text-sm text-muted-foreground mt-6">
          You do not have permission to view this page.
        </p>
      </>
    );
  }

  return (
    <>
      <PageHeader
          title="All Evaluations"
          description="All evaluations for your direct reports across every status"
      />
      <DataTable
        columns={columns}
        data={evaluations}
        isLoading={isLoading}
      />
    </>
  );
}

