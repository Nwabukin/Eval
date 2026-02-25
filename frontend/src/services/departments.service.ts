import { apiGet, apiPost, apiPatch, apiDelete } from "@/lib/api-client";
import type { Department, CreateDepartmentPayload, UpdateDepartmentPayload } from "@/types/shared";

export const departmentsService = {
  list: () => apiGet<Department[]>("/departments"),
  getById: (id: string) => apiGet<Department>(`/departments/${id}`),
  create: (payload: CreateDepartmentPayload) => apiPost<Department>("/departments", payload),
  update: (id: string, payload: UpdateDepartmentPayload) => apiPatch<Department>(`/departments/${id}`, payload),
  remove: (id: string) => apiDelete<void>(`/departments/${id}`),
};
