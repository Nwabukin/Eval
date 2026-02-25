import { apiGet, apiPost, apiPatch, apiDelete } from "@/lib/api-client";
import type { Level, CreateLevelPayload, UpdateLevelPayload } from "@/types/shared";

export const levelsService = {
  list: () => apiGet<Level[]>("/levels"),
  getById: (id: string) => apiGet<Level>(`/levels/${id}`),
  create: (payload: CreateLevelPayload) => apiPost<Level>("/levels", payload),
  update: (id: string, payload: UpdateLevelPayload) => apiPatch<Level>(`/levels/${id}`, payload),
  remove: (id: string) => apiDelete<void>(`/levels/${id}`),
};
