"use client";

import { useAuthStore } from "@/stores/auth-store";

export function useCurrentUser() {
  const user = useAuthStore((s) => s.user);
  return user;
}
