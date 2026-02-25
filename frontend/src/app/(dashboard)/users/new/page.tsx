"use client";

import { useRouter } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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

const createUserSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  role: z.nativeEnum(UserRole),
  departmentId: z.string().optional(),
  levelId: z.string().optional(),
  lineManagerId: z.string().optional(),
});

type CreateUserForm = z.infer<typeof createUserSchema>;

export default function NewUserPage() {
  const router = useRouter();
  const queryClient = useQueryClient();

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

  const createMutation = useMutation({
    mutationFn: (data: CreateUserForm) => usersService.create(data),
    onSuccess: () => {
      toast.success("User created");
      queryClient.invalidateQueries({ queryKey: queryKeys.users.all });
      router.push("/users");
    },
    onError: () => toast.error("Failed to create user"),
  });

  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<CreateUserForm>({
    resolver: zodResolver(createUserSchema),
    defaultValues: { role: UserRole.EMPLOYEE },
  });

  return (
    <>
      <PageHeader title="Add User" description="Create a new user account" />

      <form
        onSubmit={handleSubmit((data) => createMutation.mutate(data))}
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
            {errors.lastName && <p className="text-xs text-destructive">{errors.lastName.message}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <Label className="section-label text-muted-foreground">Email</Label>
          <Input {...register("email")} type="email" className="rounded-xl h-10" />
          {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <Label className="section-label text-muted-foreground">Password</Label>
          <Input {...register("password")} type="password" className="rounded-xl h-10" />
          {errors.password && <p className="text-xs text-destructive">{errors.password.message}</p>}
        </div>

        <div className="space-y-2">
          <Label className="section-label text-muted-foreground">Role</Label>
          <Select value={watch("role")} onValueChange={(v) => setValue("role", v as UserRole)}>
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
          <Select value={watch("departmentId") || ""} onValueChange={(v) => setValue("departmentId", v || undefined)}>
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
          <Select value={watch("levelId") || ""} onValueChange={(v) => setValue("levelId", v || undefined)}>
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
          <Select value={watch("lineManagerId") || ""} onValueChange={(v) => setValue("lineManagerId", v || undefined)}>
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
          <Button type="submit" disabled={createMutation.isPending} className="rounded-full text-xs tracking-wider uppercase font-light">
            {createMutation.isPending ? "Creating..." : "Create User"}
          </Button>
        </div>
      </form>
    </>
  );
}
