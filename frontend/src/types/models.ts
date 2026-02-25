import type {
  UserRole,
  CycleStatus,
  EvaluationStatus,
  CalibrationMode,
} from "./enums";

export interface Department {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface Level {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserSummary {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  isActive: boolean;
  departmentId: string | null;
  department: Department | null;
  levelId: string | null;
  level: Level | null;
  lineManagerId: string | null;
  lineManager: UserSummary | null;
  createdAt: string;
  updatedAt: string;
}

export interface CalibrationMember {
  id: string;
  createdAt: string;
  cycleId: string;
  userId: string;
  user: UserSummary;
}

export interface EvaluationCycle {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  status: CycleStatus;
  calibrationMembers: CalibrationMember[];
  createdAt: string;
  updatedAt: string;
}

export interface EvaluationSheet {
  id: string;
  name: string;
  weight: number;
  minScore: number;
  maxScore: number;
  sortOrder: number;
  cycleId: string;
  departmentId: string;
  levelId: string;
  cycle?: { id: string; name: string };
  department?: { id: string; name: string };
  level?: { id: string; name: string };
  createdAt: string;
  updatedAt: string;
}

export interface EvaluationQuestion {
  id: string;
  text: string;
  category: string | null;
  weight: number;
  sortOrder: number;
  sheetId: string;
  sheet?: {
    id: string;
    name: string;
    minScore: number;
    maxScore: number;
    weight: number;
    sortOrder: number;
  };
  createdAt: string;
  updatedAt: string;
}

export interface CalibrationIndividualScoreEntry {
  id: string;
  score: number;
  scoredAt: string;
  calibrator: UserSummary;
}

export interface EvaluationAnswer {
  id: string;
  selfScore: number | null;
  selfRemarks: string | null;
  managerScore: number | null;
  managerRemarks: string | null;
  finalScore: number | null;
  question: {
    id: string;
    text: string;
    category?: string | null;
    weight?: number;
    sortOrder?: number;
    sheet?: {
      id: string;
      name: string;
      weight: number;
      minScore: number;
      maxScore: number;
      sortOrder: number;
    };
  };
  calibrationIndividualScores: CalibrationIndividualScoreEntry[];
}

export interface Evaluation {
  id: string;
  status: EvaluationStatus;
  calibrationMode: CalibrationMode | null;
  submittedAt: string | null;
  managerSubmittedAt: string | null;
  finalizedAt: string | null;
  employeeId: string;
  employee: UserSummary & { departmentId: string | null };
  cycleId: string;
  cycle: { id: string; name: string };
  answers: EvaluationAnswer[];
  createdAt: string;
  updatedAt: string;
}

export interface DashboardStats {
  evaluations: {
    draft: number;
    submittedToManager: number;
    submittedToCalibration: number;
    finalized: number;
  };
  totalEmployees: number;
  totalDepartments: number;
  totalPending: number;
  totalCompleted: number;
  completionRate: number;
  averages: {
    self: number;
    manager: number;
    final: number;
  };
}
