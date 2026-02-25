"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { type ColumnDef } from "@tanstack/react-table";
import { Plus, Upload, MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { usersService } from "@/services/users.service";
import { queryKeys } from "@/lib/query-keys";
import { getRoleLabel, formatDate } from "@/lib/utils";
import { PageHeader } from "@/components/layout/page-header";
import { DataTable } from "@/components/domain/data-table";
import { UserAvatar } from "@/components/domain/user-avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import type { User } from "@/types/shared";
import { UserRole } from "@/types/shared";

export default function UsersPage() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState<string>("all");
  const [page, setPage] = useState(1);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const { data, isLoading } = useQuery({
    queryKey: queryKeys.users.list({ search, role: roleFilter, page }),
    queryFn: () =>
      usersService.list({
        search: search || undefined,
        role: roleFilter !== "all" ? roleFilter : undefined,
        page,
        limit: 10,
      }),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => usersService.remove(id),
    onSuccess: () => {
      toast.success("User deleted");
      queryClient.invalidateQueries({ queryKey: queryKeys.users.all });
      setDeleteId(null);
    },
    onError: () => toast.error("Failed to delete user"),
  });

  const columns: ColumnDef<User>[] = [
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => (
        <button
          type="button"
          onClick={() => router.push(`/users/${row.original.id}`)}
          className="flex w-full items-center space-x-3 text-left hover:bg-muted/60 rounded-xl px-2 py-1 transition-colors"
        >
          <UserAvatar
            firstName={row.original.firstName}
            lastName={row.original.lastName}
            className="h-8 w-8"
          />
          <div>
            <p className="font-medium text-foreground text-sm">
              {row.original.firstName} {row.original.lastName}
            </p>
            <p className="text-xs text-muted-foreground">{row.original.email}</p>
          </div>
        </button>
      ),
    },
    {
      accessorKey: "role",
      header: "Role",
      cell: ({ row }) => (
        <span className="text-xs font-light">{getRoleLabel(row.original.role)}</span>
      ),
    },
    {
      accessorKey: "department",
      header: "Department",
      cell: ({ row }) => (
        <span className="text-xs font-light">{row.original.department?.name || "—"}</span>
      ),
    },
    {
      accessorKey: "level",
      header: "Level",
      cell: ({ row }) => (
        <span className="text-xs font-light">{row.original.level?.name || "—"}</span>
      ),
    },
    {
      accessorKey: "createdAt",
      header: "Joined",
      cell: ({ row }) => (
        <span className="text-xs font-light text-muted-foreground">
          {formatDate(row.original.createdAt)}
        </span>
      ),
    },
    {
      id: "actions",
      cell: ({ row }) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => router.push(`/users/${row.original.id}`)}>
              <Pencil className="mr-2 h-3 w-3" /> Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setDeleteId(row.original.id)}
              className="text-destructive"
            >
              <Trash2 className="mr-2 h-3 w-3" /> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  return (
    <>
      <PageHeader
        title="Users"
        description="Manage employee accounts and assignments"
        action={
          <div className="flex space-x-3">
            <Button
              variant="outline"
              onClick={() => router.push("/users/bulk")}
              className="rounded-full text-xs tracking-wider uppercase font-light"
            >
              <Upload className="mr-2 h-4 w-4" /> Bulk Import
            </Button>
            <Button
              onClick={() => router.push("/users/new")}
              className="rounded-full text-xs tracking-wider uppercase font-light"
            >
              <Plus className="mr-2 h-4 w-4" /> Add User
            </Button>
          </div>
        }
      />

      <div className="flex items-center space-x-4 mb-8">
        <Input
          placeholder="Search users..."
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          className="max-w-xs rounded-xl h-10 bg-white dark:bg-card"
        />
        <Select value={roleFilter} onValueChange={(v) => { setRoleFilter(v); setPage(1); }}>
          <SelectTrigger className="w-44 rounded-xl h-10 bg-white dark:bg-card">
            <SelectValue placeholder="All roles" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Roles</SelectItem>
            {Object.values(UserRole).map((r) => (
              <SelectItem key={r} value={r}>{getRoleLabel(r)}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <DataTable
        columns={columns}
        data={data?.data || []}
        isLoading={isLoading}
        totalItems={data?.meta?.total}
        currentPage={page}
        onPageChange={setPage}
      />

      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete User</AlertDialogTitle>
            <AlertDialogDescription>
              This will deactivate the user account. This action can be reversed by an admin.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deleteId && deleteMutation.mutate(deleteId)}
              className="bg-destructive text-destructive-foreground"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
