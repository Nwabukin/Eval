import { apiGet, apiPost, apiPatch, apiDelete } from "@/lib/api-client";
import type {
  User,
  CreateUserPayload,
  UpdateUserPayload,
  AssignUserPayload,
  BulkCreateUsersPayload,
} from "@/types/shared";

export const usersService = {
  list: (params?: Record<string, unknown>) =>
    apiGet<User[]>("/users", params),

  getById: (id: string) =>
    apiGet<User>(`/users/${id}`),

  create: (payload: CreateUserPayload) =>
    apiPost<User>("/users", payload),

  bulkCreate: (payload: BulkCreateUsersPayload) =>
    apiPost<{ created: number; errors: string[] }>("/users/bulk", payload),

  update: (id: string, payload: UpdateUserPayload) =>
    apiPatch<User>(`/users/${id}`, payload),

  assign: (id: string, payload: AssignUserPayload) =>
    apiPost<User>(`/users/${id}/assign`, payload),

  remove: (id: string) =>
    apiDelete<void>(`/users/${id}`),
};
