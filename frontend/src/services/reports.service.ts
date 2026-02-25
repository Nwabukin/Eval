import { apiGet, apiDownload } from "@/lib/api-client";
import type { DashboardStats } from "@/types/shared";

export const reportsService = {
  dashboard: (cycleId?: string) =>
    apiGet<DashboardStats>("/reports/dashboard", cycleId ? { cycleId } : undefined),

  exportCsv: (cycleId: string) =>
    apiDownload("/reports/export/csv", { cycleId }),

  exportExcel: (cycleId: string) =>
    apiDownload("/reports/export/excel", { cycleId }),

  exportPdf: (cycleId: string) =>
    apiDownload("/reports/export/pdf", { cycleId }),
};
