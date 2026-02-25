import * as runtime from "@prisma/client/runtime/client";
export const PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export const PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export const PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export const PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export const PrismaClientValidationError = runtime.PrismaClientValidationError;
export const sql = runtime.sqltag;
export const empty = runtime.empty;
export const join = runtime.join;
export const raw = runtime.raw;
export const Sql = runtime.Sql;
export const Decimal = runtime.Decimal;
export const getExtensionContext = runtime.Extensions.getExtensionContext;
export const prismaVersion = {
    client: "7.4.1",
    engine: "55ae170b1ced7fc6ed07a15f110549408c501bb3"
};
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    Department: 'Department',
    Level: 'Level',
    User: 'User',
    EvaluationCycle: 'EvaluationCycle',
    CycleCalibrationMember: 'CycleCalibrationMember',
    EvaluationSheet: 'EvaluationSheet',
    EvaluationQuestion: 'EvaluationQuestion',
    Evaluation: 'Evaluation',
    EvaluationAnswer: 'EvaluationAnswer',
    RevokedToken: 'RevokedToken',
    CalibrationIndividualScore: 'CalibrationIndividualScore'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const DepartmentScalarFieldEnum = {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const LevelScalarFieldEnum = {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    departmentId: 'departmentId',
    levelId: 'levelId',
    lineManagerId: 'lineManagerId'
};
export const EvaluationCycleScalarFieldEnum = {
    id: 'id',
    name: 'name',
    startDate: 'startDate',
    endDate: 'endDate',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const CycleCalibrationMemberScalarFieldEnum = {
    id: 'id',
    createdAt: 'createdAt',
    cycleId: 'cycleId',
    userId: 'userId'
};
export const EvaluationSheetScalarFieldEnum = {
    id: 'id',
    name: 'name',
    weight: 'weight',
    minScore: 'minScore',
    maxScore: 'maxScore',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    cycleId: 'cycleId',
    departmentId: 'departmentId',
    levelId: 'levelId'
};
export const EvaluationQuestionScalarFieldEnum = {
    id: 'id',
    text: 'text',
    category: 'category',
    weight: 'weight',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    sheetId: 'sheetId'
};
export const EvaluationScalarFieldEnum = {
    id: 'id',
    status: 'status',
    calibrationMode: 'calibrationMode',
    submittedAt: 'submittedAt',
    managerSubmittedAt: 'managerSubmittedAt',
    finalizedAt: 'finalizedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    employeeId: 'employeeId',
    cycleId: 'cycleId'
};
export const EvaluationAnswerScalarFieldEnum = {
    id: 'id',
    selfScore: 'selfScore',
    selfRemarks: 'selfRemarks',
    managerScore: 'managerScore',
    managerRemarks: 'managerRemarks',
    finalScore: 'finalScore',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    evaluationId: 'evaluationId',
    questionId: 'questionId'
};
export const RevokedTokenScalarFieldEnum = {
    id: 'id',
    token: 'token',
    userId: 'userId',
    expiresAt: 'expiresAt',
    revokedAt: 'revokedAt'
};
export const CalibrationIndividualScoreScalarFieldEnum = {
    id: 'id',
    score: 'score',
    scoredAt: 'scoredAt',
    answerId: 'answerId',
    calibratorId: 'calibratorId'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
export const defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map