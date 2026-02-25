export const queryKeys = {
  auth: {
    me: ["auth", "me"] as const,
  },
  users: {
    all: ["users"] as const,
    list: (filters?: Record<string, unknown>) => ["users", "list", filters] as const,
    detail: (id: string) => ["users", "detail", id] as const,
  },
  departments: {
    all: ["departments"] as const,
    list: () => ["departments", "list"] as const,
    detail: (id: string) => ["departments", "detail", id] as const,
  },
  levels: {
    all: ["levels"] as const,
    list: () => ["levels", "list"] as const,
    detail: (id: string) => ["levels", "detail", id] as const,
  },
  cycles: {
    all: ["cycles"] as const,
    list: (filters?: Record<string, unknown>) => ["cycles", "list", filters] as const,
    detail: (id: string) => ["cycles", "detail", id] as const,
  },
  sheets: {
    all: ["sheets"] as const,
    list: (filters?: Record<string, unknown>) => ["sheets", "list", filters] as const,
    detail: (id: string) => ["sheets", "detail", id] as const,
  },
  questions: {
    all: ["questions"] as const,
    list: (filters?: Record<string, unknown>) => ["questions", "list", filters] as const,
    detail: (id: string) => ["questions", "detail", id] as const,
  },
  evaluations: {
    all: ["evaluations"] as const,
    list: (filters?: Record<string, unknown>) => ["evaluations", "list", filters] as const,
    detail: (id: string) => ["evaluations", "detail", id] as const,
    my: () => ["evaluations", "my"] as const,
    pendingReview: () => ["evaluations", "pending-review"] as const,
    pendingCalibration: () => ["evaluations", "pending-calibration"] as const,
    calibrationScores: (id: string) => ["evaluations", "calibration-scores", id] as const,
    managerAll: () => ["evaluations", "manager-all"] as const,
  },
  reports: {
    dashboard: (cycleId?: string) => ["reports", "dashboard", cycleId] as const,
  },
};
