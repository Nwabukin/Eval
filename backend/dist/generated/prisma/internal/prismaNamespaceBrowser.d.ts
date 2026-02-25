import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Department: "Department";
    readonly Level: "Level";
    readonly User: "User";
    readonly EvaluationCycle: "EvaluationCycle";
    readonly CycleCalibrationMember: "CycleCalibrationMember";
    readonly EvaluationSheet: "EvaluationSheet";
    readonly EvaluationQuestion: "EvaluationQuestion";
    readonly Evaluation: "Evaluation";
    readonly EvaluationAnswer: "EvaluationAnswer";
    readonly RevokedToken: "RevokedToken";
    readonly CalibrationIndividualScore: "CalibrationIndividualScore";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const DepartmentScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum];
export declare const LevelScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type LevelScalarFieldEnum = (typeof LevelScalarFieldEnum)[keyof typeof LevelScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly password: "password";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly role: "role";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly departmentId: "departmentId";
    readonly levelId: "levelId";
    readonly lineManagerId: "lineManagerId";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const EvaluationCycleScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly startDate: "startDate";
    readonly endDate: "endDate";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type EvaluationCycleScalarFieldEnum = (typeof EvaluationCycleScalarFieldEnum)[keyof typeof EvaluationCycleScalarFieldEnum];
export declare const CycleCalibrationMemberScalarFieldEnum: {
    readonly id: "id";
    readonly createdAt: "createdAt";
    readonly cycleId: "cycleId";
    readonly userId: "userId";
};
export type CycleCalibrationMemberScalarFieldEnum = (typeof CycleCalibrationMemberScalarFieldEnum)[keyof typeof CycleCalibrationMemberScalarFieldEnum];
export declare const EvaluationSheetScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly weight: "weight";
    readonly minScore: "minScore";
    readonly maxScore: "maxScore";
    readonly sortOrder: "sortOrder";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly cycleId: "cycleId";
    readonly departmentId: "departmentId";
    readonly levelId: "levelId";
};
export type EvaluationSheetScalarFieldEnum = (typeof EvaluationSheetScalarFieldEnum)[keyof typeof EvaluationSheetScalarFieldEnum];
export declare const EvaluationQuestionScalarFieldEnum: {
    readonly id: "id";
    readonly text: "text";
    readonly category: "category";
    readonly weight: "weight";
    readonly sortOrder: "sortOrder";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly sheetId: "sheetId";
};
export type EvaluationQuestionScalarFieldEnum = (typeof EvaluationQuestionScalarFieldEnum)[keyof typeof EvaluationQuestionScalarFieldEnum];
export declare const EvaluationScalarFieldEnum: {
    readonly id: "id";
    readonly status: "status";
    readonly calibrationMode: "calibrationMode";
    readonly submittedAt: "submittedAt";
    readonly managerSubmittedAt: "managerSubmittedAt";
    readonly finalizedAt: "finalizedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly employeeId: "employeeId";
    readonly cycleId: "cycleId";
};
export type EvaluationScalarFieldEnum = (typeof EvaluationScalarFieldEnum)[keyof typeof EvaluationScalarFieldEnum];
export declare const EvaluationAnswerScalarFieldEnum: {
    readonly id: "id";
    readonly selfScore: "selfScore";
    readonly selfRemarks: "selfRemarks";
    readonly managerScore: "managerScore";
    readonly managerRemarks: "managerRemarks";
    readonly finalScore: "finalScore";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly evaluationId: "evaluationId";
    readonly questionId: "questionId";
};
export type EvaluationAnswerScalarFieldEnum = (typeof EvaluationAnswerScalarFieldEnum)[keyof typeof EvaluationAnswerScalarFieldEnum];
export declare const RevokedTokenScalarFieldEnum: {
    readonly id: "id";
    readonly token: "token";
    readonly userId: "userId";
    readonly expiresAt: "expiresAt";
    readonly revokedAt: "revokedAt";
};
export type RevokedTokenScalarFieldEnum = (typeof RevokedTokenScalarFieldEnum)[keyof typeof RevokedTokenScalarFieldEnum];
export declare const CalibrationIndividualScoreScalarFieldEnum: {
    readonly id: "id";
    readonly score: "score";
    readonly scoredAt: "scoredAt";
    readonly answerId: "answerId";
    readonly calibratorId: "calibratorId";
};
export type CalibrationIndividualScoreScalarFieldEnum = (typeof CalibrationIndividualScoreScalarFieldEnum)[keyof typeof CalibrationIndividualScoreScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
