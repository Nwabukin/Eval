import { apiGet, apiPost, apiPatch, apiDelete } from "@/lib/api-client";
import type { EvaluationQuestion, CreateQuestionPayload, UpdateQuestionPayload, BulkCreateQuestionsPayload } from "@/types/shared";

export const questionsService = {
  list: (params?: Record<string, unknown>) =>
    apiGet<EvaluationQuestion[]>("/evaluation-questions", params),

  getById: (id: string) =>
    apiGet<EvaluationQuestion>(`/evaluation-questions/${id}`),

  create: (payload: CreateQuestionPayload) =>
    apiPost<EvaluationQuestion>("/evaluation-questions", payload),

  bulkCreate: (payload: BulkCreateQuestionsPayload) =>
    apiPost<EvaluationQuestion[]>("/evaluation-questions/bulk", payload),

  update: (id: string, payload: UpdateQuestionPayload) =>
    apiPatch<EvaluationQuestion>(`/evaluation-questions/${id}`, payload),

  remove: (id: string) =>
    apiDelete<void>(`/evaluation-questions/${id}`),
};
