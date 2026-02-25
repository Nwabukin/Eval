"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod/v4";
import { zodResolver } from "@hookform/resolvers/zod";
import { authService } from "@/services/auth.service";
import { useCurrentUser } from "@/hooks/use-current-user";
import { getRoleLabel } from "@/lib/utils";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, "Current password is required"),
  newPassword: z.string().min(6, "At least 6 characters"),
  confirmPassword: z.string().min(6),
}).refine((d) => d.newPassword === d.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type ChangePasswordForm = z.infer<typeof changePasswordSchema>;

export default function SettingsPage() {
  const user = useCurrentUser();

  const changePwMutation = useMutation({
    mutationFn: (data: ChangePasswordForm) =>
      authService.changePassword({
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
      }),
    onSuccess: () => {
      toast.success("Password changed successfully");
      reset();
    },
    onError: () => toast.error("Failed to change password"),
  });

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ChangePasswordForm>({
    resolver: zodResolver(changePasswordSchema),
  });

  return (
    <>
      <PageHeader title="Settings" description="Manage your account preferences" />

      <div className="space-y-10 max-w-2xl">
        {/* Profile Info */}
        <div className="bg-white dark:bg-card rounded-3xl premium-shadow p-8 border border-border/40">
          <h3 className="section-label text-muted-foreground mb-6">Profile</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-border/40">
              <span className="text-xs text-muted-foreground font-light">Name</span>
              <span className="text-sm font-light text-foreground">{user?.firstName} {user?.lastName}</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-border/40">
              <span className="text-xs text-muted-foreground font-light">Email</span>
              <span className="text-sm font-light text-foreground">{user?.email}</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-border/40">
              <span className="text-xs text-muted-foreground font-light">Role</span>
              <span className="text-sm font-light text-foreground">{getRoleLabel(user?.role || "")}</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-border/40">
              <span className="text-xs text-muted-foreground font-light">Department</span>
              <span className="text-sm font-light text-foreground">{user?.department?.name || "—"}</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-xs text-muted-foreground font-light">Level</span>
              <span className="text-sm font-light text-foreground">{user?.level?.name || "—"}</span>
            </div>
          </div>
        </div>

        {/* Change Password */}
        <div className="bg-white dark:bg-card rounded-3xl premium-shadow p-8 border border-border/40">
          <h3 className="section-label text-muted-foreground mb-6">Change Password</h3>
          <form onSubmit={handleSubmit((data) => changePwMutation.mutate(data))} className="space-y-5">
            <div className="space-y-2">
              <Label className="section-label text-muted-foreground">Current Password</Label>
              <Input {...register("currentPassword")} type="password" className="rounded-xl h-10" />
              {errors.currentPassword && <p className="text-xs text-destructive">{errors.currentPassword.message}</p>}
            </div>
            <div className="space-y-2">
              <Label className="section-label text-muted-foreground">New Password</Label>
              <Input {...register("newPassword")} type="password" className="rounded-xl h-10" />
              {errors.newPassword && <p className="text-xs text-destructive">{errors.newPassword.message}</p>}
            </div>
            <div className="space-y-2">
              <Label className="section-label text-muted-foreground">Confirm New Password</Label>
              <Input {...register("confirmPassword")} type="password" className="rounded-xl h-10" />
              {errors.confirmPassword && <p className="text-xs text-destructive">{errors.confirmPassword.message}</p>}
            </div>
            <div className="flex justify-end pt-2">
              <Button
                type="submit"
                disabled={changePwMutation.isPending}
                className="rounded-full text-xs tracking-wider uppercase font-light"
              >
                {changePwMutation.isPending ? "Updating..." : "Update Password"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
