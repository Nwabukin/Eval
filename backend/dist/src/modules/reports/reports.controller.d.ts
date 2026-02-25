import type { Response } from "express";
import { ReportsService } from "./reports.service.js";
import type { AuthenticatedUser } from "../../common/interfaces/index.js";
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    getDashboard(user: AuthenticatedUser, cycleId?: string): Promise<{
        data: {
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
        };
        message: string;
    }>;
    exportCsv(user: AuthenticatedUser, cycleId: string, res: Response): Promise<void>;
    exportExcel(user: AuthenticatedUser, cycleId: string, res: Response): Promise<void>;
    exportPdf(user: AuthenticatedUser, cycleId: string, res: Response): Promise<void>;
}
