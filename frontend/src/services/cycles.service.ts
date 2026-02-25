import { apiGet, apiPost, apiPatch } from "@/lib/api-client";
import type { EvaluationCycle, CreateCyclePayload, UpdateCyclePayload } from "@/types/shared";

export const cyclesService = {
  list: (params?: Record<string, unknown>) =>
    apiGet<EvaluationCycle[]>("/evaluation-cycles", params),

  getById: (id: string) =>
    apiGet<EvaluationCycle>(`/evaluation-cycles/${id}`),

  create: (payload: CreateCyclePayload) =>
    apiPost<EvaluationCycle>("/evaluation-cycles", payload),

  update: (id: string, payload: UpdateCyclePayload) =>
    apiPatch<EvaluationCycle>(`/evaluation-cycles/${id}`, payload),

  close: (id: string) =>
    apiPost<EvaluationCycle>(`/evaluation-cycles/${id}/close`),
};
