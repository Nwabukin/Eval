import type { UserRole, CalibrationMode } from "./enums";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface TokenPairResponse {
  accessToken: string;
  refreshToken: string;
}

export interface ChangePasswordPayload {
  currentPassword: string;
  newPassword: string;
}

export interface CreateUserPayload {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  departmentId?: string;
  levelId?: string;
  lineManagerId?: string;
}

export interface UpdateUserPayload {
  email?: string;
  firstName?: string;
  lastName?: string;
  role?: UserRole;
  password?: string;
}

export interface AssignUserPayload {
  departmentId?: string;
  levelId?: string;
  lineManagerId?: string;
}

export interface CreateDepartmentPayload {
  name: string;
}

export interface UpdateDepartmentPayload {
  name?: string;
}

export interface CreateLevelPayload {
  name: string;
}

export interface UpdateLevelPayload {
  name?: string;
}

export interface CreateCyclePayload {
  name: string;
  startDate: string;
  endDate: string;
  calibrationMemberIds?: string[];
}

export interface UpdateCyclePayload {
  name?: string;
  startDate?: string;
  endDate?: string;
  calibrationMemberIds?: string[];
}

export interface CreateSheetPayload {
  name: string;
  weight?: number;
  minScore?: number;
  maxScore?: number;
  sortOrder?: number;
  cycleId: string;
  departmentId: string;
  levelId: string;
}

export interface UpdateSheetPayload {
  name?: string;
  weight?: number;
  minScore?: number;
  maxScore?: number;
  sortOrder?: number;
}

export interface BulkCreateSheetsPayload {
  cycleId: string;
  sheets: {
    name: string;
    weight?: number;
    minScore?: number;
    maxScore?: number;
    sortOrder?: number;
    departmentId: string;
    levelId: string;
  }[];
}

export interface CreateQuestionPayload {
  text: string;
  category?: string;
  weight?: number;
  sortOrder?: number;
  sheetId: string;
}

export interface UpdateQuestionPayload {
  text?: string;
  category?: string;
  weight?: number;
  sortOrder?: number;
}

export interface BulkCreateUsersPayload {
  users: CreateUserPayload[];
}

export interface BulkCreateQuestionsPayload {
  sheetId: string;
  questions: {
    text: string;
    category?: string;
    weight?: number;
    sortOrder?: number;
  }[];
}

export interface SelfScoreItem {
  questionId: string;
  score: number;
  remarks?: string;
}

export interface SaveSelfEvaluationPayload {
  answers: SelfScoreItem[];
}

export interface ManagerScoreItem {
  questionId: string;
  score: number;
  remarks?: string;
}

export interface SaveManagerReviewPayload {
  answers: ManagerScoreItem[];
}

export interface SetCalibrationModePayload {
  mode: CalibrationMode;
}

export interface DirectFinalScoreItem {
  questionId: string;
  finalScore: number;
}

export interface SaveDirectCalibrationPayload {
  answers: DirectFinalScoreItem[];
}

export interface IndividualScoreItem {
  questionId: string;
  score: number;
}

export interface SaveIndividualCalibrationPayload {
  answers: IndividualScoreItem[];
}
