import { PrismaService } from "../../database/prisma.service.js";
import type { AuthenticatedUser } from "../../common/interfaces/index.js";
export declare class ReportsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getDashboard(cycleId?: string, user?: AuthenticatedUser): Promise<{
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
    }>;
    generateCsvReport(cycleId: string, user?: AuthenticatedUser): Promise<string>;
    generateExcelReport(cycleId: string, user?: AuthenticatedUser): Promise<Buffer>;
    generatePdfReport(cycleId: string, user?: AuthenticatedUser): Promise<Buffer>;
    private assertCycleExists;
    private getEvaluationsForReport;
    private buildScopeFilter;
    private computeStats;
    private drawPdfHeader;
    private drawKpiCards;
    private drawScoreAverages;
    private drawDepartmentBreakdown;
    private drawEvaluationTable;
    private buildSummarySheet;
    private buildDetailSheet;
    private buildDepartmentSheet;
    private fmtDate;
}
