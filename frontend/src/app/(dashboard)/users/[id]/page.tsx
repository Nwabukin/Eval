"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod/v4";
import { zodResolver } from "@hookform/resolvers/zod";
import { usersService } from "@/services/users.service";
import { departmentsService } from "@/services/departments.service";
import { levelsService } from "@/services/levels.service";
import { queryKeys } from "@/lib/query-keys";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { UserRole } from "@/types/shared";
import { getRoleLabel } from "@/lib/utils";

const updateUserSchema = z.object({
  email: z.email().optional(),
  firstName: z.string().min(1).optional(),
  lastName: z.string().min(1).optional(),
  role: z.nativeEnum(UserRole).optional(),
  departmentId: z.string().optional(),
  levelId: z.string().optional(),
  lineManagerId: z.string().optional(),
});

type UpdateUserForm = z.infer<typeof updateUserSchema>;

export default function EditUserPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const queryClient = useQueryClient();

  const { data: userRes, isLoading } = useQuery({
    queryKey: queryKeys.users.detail(id),
    queryFn: () => usersService.getById(id),
  });

  const { data: depsRes } = useQuery({
    queryKey: queryKeys.departments.list(),
    queryFn: () => departmentsService.list(),
  });

  const { data: levelsRes } = useQuery({
    queryKey: queryKeys.levels.list(),
    queryFn: () => levelsService.list(),
  });

  const { data: managersRes } = useQuery({
    queryKey: queryKeys.users.list({ role: UserRole.LINE_MANAGER }),
    queryFn: () => usersService.list({ role: UserRole.LINE_MANAGER, limit: 100 }),
  });

  const updateMutation = useMutation({
    mutationFn: (data: UpdateUserForm) => {
      const { departmentId, levelId, lineManagerId, ...userFields } = data;
      const promises: Promise<unknown>[] = [usersService.update(id, userFields)];
      if (departmentId || levelId || lineManagerId) {
        promises.push(usersService.assign(id, { departmentId, levelId, lineManagerId }));
      }
      return Promise.all(promises);
    },
    onSuccess: () => {
      toast.success("User updated");
      queryClient.invalidateQueries({ queryKey: queryKeys.users.all });
      router.push("/users");
    },
    onError: () => toast.error("Failed to update user"),
  });

  const user = userRes?.data;

  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<UpdateUserForm>({
    resolver: zodResolver(updateUserSchema),
    values: user
      ? {
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role,
          departmentId: user.departmentId || undefined,
          levelId: user.levelId || undefined,
          lineManagerId: user.lineManagerId || undefined,
        }
      : undefined,
  });

  if (isLoading) {
    return <div className="flex justify-center py-20"><span className="section-label text-muted-foreground">Loading...</span></div>;
  }

  return (
    <>
      <PageHeader title="Edit User" description={user ? `${user.firstName} ${user.lastName}` : ""} />

      <form
        onSubmit={handleSubmit((data) => updateMutation.mutate(data))}
        className="bg-white dark:bg-card rounded-3xl premium-shadow p-10 border border-border/40 max-w-2xl space-y-6"
      >
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label className="section-label text-muted-foreground">First Name</Label>
            <Input {...register("firstName")} className="rounded-xl h-10" />
            {errors.firstName && <p className="text-xs text-destructive">{errors.firstName.message}</p>}
          </div>
          <div className="space-y-2">
            <Label className="section-label text-muted-foreground">Last Name</Label>
            <Input {...register("lastName")} className="rounded-xl h-10" />
          </div>
        </div>

        <div className="space-y-2">
          <Label className="section-label text-muted-foreground">Email</Label>
          <Input {...register("email")} type="email" className="rounded-xl h-10" />
        </div>

        <div className="space-y-2">
          <Label className="section-label text-muted-foreground">Role</Label>
          <Select value={watch("role") || ""} onValueChange={(v) => setValue("role", v as UserRole)}>
            <SelectTrigger className="rounded-xl h-10"><SelectValue /></SelectTrigger>
            <SelectContent>
              {Object.values(UserRole).map((r) => (
                <SelectItem key={r} value={r}>{getRoleLabel(r)}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="section-label text-muted-foreground">Department</Label>
          <Select value={watch("departmentId") || ""} onValueChange={(v) => setValue("departmentId", v)}>
            <SelectTrigger className="rounded-xl h-10"><SelectValue placeholder="Select department" /></SelectTrigger>
            <SelectContent>
              {(depsRes?.data || []).map((d) => (
                <SelectItem key={d.id} value={d.id}>{d.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="section-label text-muted-foreground">Level</Label>
          <Select value={watch("levelId") || ""} onValueChange={(v) => setValue("levelId", v)}>
            <SelectTrigger className="rounded-xl h-10"><SelectValue placeholder="Select level" /></SelectTrigger>
            <SelectContent>
              {(levelsRes?.data || []).map((l) => (
                <SelectItem key={l.id} value={l.id}>{l.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="section-label text-muted-foreground">Line Manager</Label>
          <Select value={watch("lineManagerId") || ""} onValueChange={(v) => setValue("lineManagerId", v)}>
            <SelectTrigger className="rounded-xl h-10"><SelectValue placeholder="Select manager" /></SelectTrigger>
            <SelectContent>
              {(managersRes?.data || []).map((m) => (
                <SelectItem key={m.id} value={m.id}>{m.firstName} {m.lastName}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex justify-end space-x-4 pt-4">
          <Button type="button" variant="outline" onClick={() => router.back()} className="rounded-full text-xs tracking-wider uppercase font-light">
            Cancel
          </Button>
          <Button type="submit" disabled={updateMutation.isPending} className="rounded-full text-xs tracking-wider uppercase font-light">
            {updateMutation.isPending ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </form>
    </>
  );
}
