"use client";

import { useRouter } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuthStore } from "@/stores/auth-store";
import { authService } from "@/services/auth.service";
import { queryKeys } from "@/lib/query-keys";
import type { LoginPayload } from "@/types/shared";
import { toast } from "sonner";

export function useAuth() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { setTokens, setUser, logout: clearAuth, accessToken, user } = useAuthStore();

  const meQuery = useQuery({
    queryKey: queryKeys.auth.me,
    queryFn: async () => {
      const res = await authService.me();
      setUser(res.data);
      return res.data;
    },
    enabled: !!accessToken,
    retry: false,
  });

  const loginMutation = useMutation({
    mutationFn: (payload: LoginPayload) => authService.login(payload),
    onSuccess: async (res) => {
      setTokens(res.data.accessToken, res.data.refreshToken);
      const me = await authService.me();
      setUser(me.data);
      router.push("/");
    },
    onError: () => {
      toast.error("Invalid email or password");
    },
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      const refreshToken = useAuthStore.getState().refreshToken;
      if (!refreshToken) return { success: true as const, data: undefined, message: "" };
      return authService.logout(refreshToken);
    },
    onSettled: () => {
      clearAuth();
      queryClient.clear();
      router.push("/login");
    },
  });

  return {
    user: meQuery.data || user,
    isLoading: meQuery.isLoading,
    login: loginMutation.mutate,
    isLoggingIn: loginMutation.isPending,
    logout: logoutMutation.mutate,
    isAuthenticated: !!accessToken,
  };
}
