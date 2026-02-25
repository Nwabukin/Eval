import { EvaluationStatus } from "../../../../generated/prisma/client.js";
export declare class QueryEvaluationsDto {
    readonly cycleId?: string;
    readonly status?: EvaluationStatus;
    readonly departmentId?: string;
    readonly search?: string;
    readonly page?: number;
    readonly limit?: number;
}
