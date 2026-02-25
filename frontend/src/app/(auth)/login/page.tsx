"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod/v4";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";
import { useAuthStore } from "@/stores/auth-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const loginSchema = z.object({
  email: z.email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const accessToken = useAuthStore((s) => s.accessToken);
  const { login, isLoggingIn } = useAuth();

  useEffect(() => {
    if (accessToken) router.replace("/");
  }, [accessToken, router]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginForm) => login(data);

  return (
    <div className="w-full max-w-sm">
      <div className="mb-12 text-center">
        <div className="flex items-center justify-center space-x-3 mb-8">
          <div className="w-8 h-8 rounded-full bg-slate-50 border border-border flex items-center justify-center">
            <div className="w-3 h-3 rounded-full border-2 border-slate-400" />
          </div>
          <h1 className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
            Portal
          </h1>
        </div>
        <h2 className="font-serif text-3xl text-foreground">Welcome back</h2>
        <p className="text-muted-foreground font-light mt-2 text-sm tracking-wide">
          Sign in to your evaluation portal
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="section-label text-muted-foreground">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="name@company.com"
            className="rounded-xl h-12 border-border bg-white dark:bg-card"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="section-label text-muted-foreground">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="rounded-xl h-12 border-border bg-white dark:bg-card"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-xs text-destructive">{errors.password.message}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isLoggingIn}
          className="w-full h-12 rounded-full text-xs font-light tracking-widest uppercase"
        >
          {isLoggingIn ? "Signing in..." : "Sign In"}
        </Button>
      </form>
    </div>
  );
}
