export declare const UserRole: {
    readonly ADMIN: "ADMIN";
    readonly EMPLOYEE: "EMPLOYEE";
    readonly LINE_MANAGER: "LINE_MANAGER";
    readonly CALIBRATION: "CALIBRATION";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const CycleStatus: {
    readonly OPEN: "OPEN";
    readonly CLOSED: "CLOSED";
};
export type CycleStatus = (typeof CycleStatus)[keyof typeof CycleStatus];
export declare const EvaluationStatus: {
    readonly DRAFT: "DRAFT";
    readonly SUBMITTED_TO_MANAGER: "SUBMITTED_TO_MANAGER";
    readonly SUBMITTED_TO_CALIBRATION: "SUBMITTED_TO_CALIBRATION";
    readonly FINALIZED: "FINALIZED";
};
export type EvaluationStatus = (typeof EvaluationStatus)[keyof typeof EvaluationStatus];
export declare const CalibrationMode: {
    readonly INDIVIDUAL_AGGREGATE: "INDIVIDUAL_AGGREGATE";
    readonly DIRECT_TEAM: "DIRECT_TEAM";
};
export type CalibrationMode = (typeof CalibrationMode)[keyof typeof CalibrationMode];
export declare class PrismaClient {
    $connect: (...args: unknown[]) => unknown;
    $disconnect: (...args: unknown[]) => unknown;
    $transaction: (...args: unknown[]) => unknown;
}
