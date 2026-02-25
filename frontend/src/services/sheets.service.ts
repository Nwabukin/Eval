import { apiGet, apiPost, apiPatch, apiDelete } from "@/lib/api-client";
import type { EvaluationSheet, CreateSheetPayload, UpdateSheetPayload, BulkCreateSheetsPayload } from "@/types/shared";

export const sheetsService = {
  list: (params?: Record<string, unknown>) =>
    apiGet<EvaluationSheet[]>("/evaluation-sheets", params),

  getById: (id: string) =>
    apiGet<EvaluationSheet>(`/evaluation-sheets/${id}`),

  create: (payload: CreateSheetPayload) =>
    apiPost<EvaluationSheet>("/evaluation-sheets", payload),

  bulkCreate: (payload: BulkCreateSheetsPayload) =>
    apiPost<EvaluationSheet[]>("/evaluation-sheets/bulk", payload),

  update: (id: string, payload: UpdateSheetPayload) =>
    apiPatch<EvaluationSheet>(`/evaluation-sheets/${id}`, payload),

  remove: (id: string) =>
    apiDelete<void>(`/evaluation-sheets/${id}`),
};
