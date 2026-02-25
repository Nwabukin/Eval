import { apiPost, apiGet, apiPatch } from "@/lib/api-client";
import type { User, LoginPayload, TokenPairResponse, ChangePasswordPayload } from "@/types/shared";

export const authService = {
  login: (payload: LoginPayload) =>
    apiPost<TokenPairResponse>("/auth/login", payload),

  refresh: (refreshToken: string) =>
    apiPost<TokenPairResponse>("/auth/refresh", { refreshToken }),

  me: () => apiGet<User>("/auth/me"),

  logout: (refreshToken: string) =>
    apiPost<void>("/auth/logout", { refreshToken }),

  changePassword: (payload: ChangePasswordPayload) =>
    apiPatch<void>("/auth/password", payload),
};
