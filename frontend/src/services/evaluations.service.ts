import { apiGet, apiPost, apiPatch } from "@/lib/api-client";
import type {
  Evaluation,
  SaveSelfEvaluationPayload,
  SaveManagerReviewPayload,
  SetCalibrationModePayload,
  SaveDirectCalibrationPayload,
  SaveIndividualCalibrationPayload,
} from "@/types/shared";

export const evaluationsService = {
  list: (params?: Record<string, unknown>) =>
    apiGet<Evaluation[]>("/evaluations", params),

  getById: (id: string) =>
    apiGet<Evaluation>(`/evaluations/${id}`),

  my: () =>
    apiGet<Evaluation>("/evaluations/my"),

  saveSelf: (id: string, payload: SaveSelfEvaluationPayload) =>
    apiPatch<Evaluation>(`/evaluations/${id}/self`, payload),

  submitSelf: (id: string) =>
    apiPost<Evaluation>(`/evaluations/${id}/submit-self`),

  pendingReview: () =>
    apiGet<Evaluation[]>("/evaluations/pending-review"),

  managerAll: () =>
    apiGet<Evaluation[]>("/evaluations/manager/all"),

  saveManager: (id: string, payload: SaveManagerReviewPayload) =>
    apiPatch<Evaluation>(`/evaluations/${id}/manager`, payload),

  submitManager: (id: string) =>
    apiPost<Evaluation>(`/evaluations/${id}/submit-manager`),

  pendingCalibration: () =>
    apiGet<Evaluation[]>("/evaluations/pending-calibration"),

  setCalibrationMode: (id: string, payload: SetCalibrationModePayload) =>
    apiPatch<Evaluation>(`/evaluations/${id}/calibration-mode`, payload),

  saveDirectCalibration: (id: string, payload: SaveDirectCalibrationPayload) =>
    apiPatch<Evaluation>(`/evaluations/${id}/calibration`, payload),

  saveIndividualCalibration: (id: string, payload: SaveIndividualCalibrationPayload) =>
    apiPatch<Evaluation>(`/evaluations/${id}/calibration-individual`, payload),

  getCalibrationScores: (id: string) =>
    apiGet<Evaluation>(`/evaluations/${id}/calibration-scores`),

  finalize: (id: string) =>
    apiPost<Evaluation>(`/evaluations/${id}/finalize`),
};
