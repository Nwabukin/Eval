import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "department" | "level" | "user" | "evaluationCycle" | "cycleCalibrationMember" | "evaluationSheet" | "evaluationQuestion" | "evaluation" | "evaluationAnswer" | "revokedToken" | "calibrationIndividualScore";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Department: {
            payload: Prisma.$DepartmentPayload<ExtArgs>;
            fields: Prisma.DepartmentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DepartmentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload>;
                };
                findFirst: {
                    args: Prisma.DepartmentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload>;
                };
                findMany: {
                    args: Prisma.DepartmentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload>[];
                };
                create: {
                    args: Prisma.DepartmentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload>;
                };
                createMany: {
                    args: Prisma.DepartmentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DepartmentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload>[];
                };
                delete: {
                    args: Prisma.DepartmentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload>;
                };
                update: {
                    args: Prisma.DepartmentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload>;
                };
                deleteMany: {
                    args: Prisma.DepartmentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DepartmentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DepartmentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload>[];
                };
                upsert: {
                    args: Prisma.DepartmentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DepartmentPayload>;
                };
                aggregate: {
                    args: Prisma.DepartmentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDepartment>;
                };
                groupBy: {
                    args: Prisma.DepartmentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DepartmentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DepartmentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DepartmentCountAggregateOutputType> | number;
                };
            };
        };
        Level: {
            payload: Prisma.$LevelPayload<ExtArgs>;
            fields: Prisma.LevelFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LevelFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LevelPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LevelFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LevelPayload>;
                };
                findFirst: {
                    args: Prisma.LevelFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LevelPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LevelFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LevelPayload>;
                };
                findMany: {
                    args: Prisma.LevelFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LevelPayload>[];
                };
                create: {
                    args: Prisma.LevelCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LevelPayload>;
                };
                createMany: {
                    args: Prisma.LevelCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LevelCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LevelPayload>[];
                };
                delete: {
                    args: Prisma.LevelDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LevelPayload>;
                };
                update: {
                    args: Prisma.LevelUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LevelPayload>;
                };
                deleteMany: {
                    args: Prisma.LevelDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LevelUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LevelUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LevelPayload>[];
                };
                upsert: {
                    args: Prisma.LevelUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LevelPayload>;
                };
                aggregate: {
                    args: Prisma.LevelAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLevel>;
                };
                groupBy: {
                    args: Prisma.LevelGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LevelGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LevelCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LevelCountAggregateOutputType> | number;
                };
            };
        };
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        EvaluationCycle: {
            payload: Prisma.$EvaluationCyclePayload<ExtArgs>;
            fields: Prisma.EvaluationCycleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EvaluationCycleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationCyclePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EvaluationCycleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationCyclePayload>;
                };
                findFirst: {
                    args: Prisma.EvaluationCycleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationCyclePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EvaluationCycleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationCyclePayload>;
                };
                findMany: {
                    args: Prisma.EvaluationCycleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationCyclePayload>[];
                };
                create: {
                    args: Prisma.EvaluationCycleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationCyclePayload>;
                };
                createMany: {
                    args: Prisma.EvaluationCycleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EvaluationCycleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationCyclePayload>[];
                };
                delete: {
                    args: Prisma.EvaluationCycleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationCyclePayload>;
                };
                update: {
                    args: Prisma.EvaluationCycleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationCyclePayload>;
                };
                deleteMany: {
                    args: Prisma.EvaluationCycleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EvaluationCycleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EvaluationCycleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationCyclePayload>[];
                };
                upsert: {
                    args: Prisma.EvaluationCycleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationCyclePayload>;
                };
                aggregate: {
                    args: Prisma.EvaluationCycleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEvaluationCycle>;
                };
                groupBy: {
                    args: Prisma.EvaluationCycleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EvaluationCycleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EvaluationCycleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EvaluationCycleCountAggregateOutputType> | number;
                };
            };
        };
        CycleCalibrationMember: {
            payload: Prisma.$CycleCalibrationMemberPayload<ExtArgs>;
            fields: Prisma.CycleCalibrationMemberFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CycleCalibrationMemberFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CycleCalibrationMemberPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CycleCalibrationMemberFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CycleCalibrationMemberPayload>;
                };
                findFirst: {
                    args: Prisma.CycleCalibrationMemberFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CycleCalibrationMemberPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CycleCalibrationMemberFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CycleCalibrationMemberPayload>;
                };
                findMany: {
                    args: Prisma.CycleCalibrationMemberFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CycleCalibrationMemberPayload>[];
                };
                create: {
                    args: Prisma.CycleCalibrationMemberCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CycleCalibrationMemberPayload>;
                };
                createMany: {
                    args: Prisma.CycleCalibrationMemberCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CycleCalibrationMemberCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CycleCalibrationMemberPayload>[];
                };
                delete: {
                    args: Prisma.CycleCalibrationMemberDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CycleCalibrationMemberPayload>;
                };
                update: {
                    args: Prisma.CycleCalibrationMemberUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CycleCalibrationMemberPayload>;
                };
                deleteMany: {
                    args: Prisma.CycleCalibrationMemberDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CycleCalibrationMemberUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CycleCalibrationMemberUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CycleCalibrationMemberPayload>[];
                };
                upsert: {
                    args: Prisma.CycleCalibrationMemberUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CycleCalibrationMemberPayload>;
                };
                aggregate: {
                    args: Prisma.CycleCalibrationMemberAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCycleCalibrationMember>;
                };
                groupBy: {
                    args: Prisma.CycleCalibrationMemberGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CycleCalibrationMemberGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CycleCalibrationMemberCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CycleCalibrationMemberCountAggregateOutputType> | number;
                };
            };
        };
        EvaluationSheet: {
            payload: Prisma.$EvaluationSheetPayload<ExtArgs>;
            fields: Prisma.EvaluationSheetFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EvaluationSheetFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationSheetPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EvaluationSheetFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationSheetPayload>;
                };
                findFirst: {
                    args: Prisma.EvaluationSheetFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationSheetPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EvaluationSheetFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationSheetPayload>;
                };
                findMany: {
                    args: Prisma.EvaluationSheetFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationSheetPayload>[];
                };
                create: {
                    args: Prisma.EvaluationSheetCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationSheetPayload>;
                };
                createMany: {
                    args: Prisma.EvaluationSheetCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EvaluationSheetCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationSheetPayload>[];
                };
                delete: {
                    args: Prisma.EvaluationSheetDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationSheetPayload>;
                };
                update: {
                    args: Prisma.EvaluationSheetUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationSheetPayload>;
                };
                deleteMany: {
                    args: Prisma.EvaluationSheetDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EvaluationSheetUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EvaluationSheetUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationSheetPayload>[];
                };
                upsert: {
                    args: Prisma.EvaluationSheetUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationSheetPayload>;
                };
                aggregate: {
                    args: Prisma.EvaluationSheetAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEvaluationSheet>;
                };
                groupBy: {
                    args: Prisma.EvaluationSheetGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EvaluationSheetGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EvaluationSheetCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EvaluationSheetCountAggregateOutputType> | number;
                };
            };
        };
        EvaluationQuestion: {
            payload: Prisma.$EvaluationQuestionPayload<ExtArgs>;
            fields: Prisma.EvaluationQuestionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EvaluationQuestionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationQuestionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EvaluationQuestionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationQuestionPayload>;
                };
                findFirst: {
                    args: Prisma.EvaluationQuestionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationQuestionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EvaluationQuestionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationQuestionPayload>;
                };
                findMany: {
                    args: Prisma.EvaluationQuestionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationQuestionPayload>[];
                };
                create: {
                    args: Prisma.EvaluationQuestionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationQuestionPayload>;
                };
                createMany: {
                    args: Prisma.EvaluationQuestionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EvaluationQuestionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationQuestionPayload>[];
                };
                delete: {
                    args: Prisma.EvaluationQuestionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationQuestionPayload>;
                };
                update: {
                    args: Prisma.EvaluationQuestionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationQuestionPayload>;
                };
                deleteMany: {
                    args: Prisma.EvaluationQuestionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EvaluationQuestionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EvaluationQuestionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationQuestionPayload>[];
                };
                upsert: {
                    args: Prisma.EvaluationQuestionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationQuestionPayload>;
                };
                aggregate: {
                    args: Prisma.EvaluationQuestionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEvaluationQuestion>;
                };
                groupBy: {
                    args: Prisma.EvaluationQuestionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EvaluationQuestionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EvaluationQuestionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EvaluationQuestionCountAggregateOutputType> | number;
                };
            };
        };
        Evaluation: {
            payload: Prisma.$EvaluationPayload<ExtArgs>;
            fields: Prisma.EvaluationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EvaluationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EvaluationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationPayload>;
                };
                findFirst: {
                    args: Prisma.EvaluationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EvaluationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationPayload>;
                };
                findMany: {
                    args: Prisma.EvaluationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationPayload>[];
                };
                create: {
                    args: Prisma.EvaluationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationPayload>;
                };
                createMany: {
                    args: Prisma.EvaluationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EvaluationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationPayload>[];
                };
                delete: {
                    args: Prisma.EvaluationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationPayload>;
                };
                update: {
                    args: Prisma.EvaluationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationPayload>;
                };
                deleteMany: {
                    args: Prisma.EvaluationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EvaluationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EvaluationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationPayload>[];
                };
                upsert: {
                    args: Prisma.EvaluationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationPayload>;
                };
                aggregate: {
                    args: Prisma.EvaluationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEvaluation>;
                };
                groupBy: {
                    args: Prisma.EvaluationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EvaluationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EvaluationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EvaluationCountAggregateOutputType> | number;
                };
            };
        };
        EvaluationAnswer: {
            payload: Prisma.$EvaluationAnswerPayload<ExtArgs>;
            fields: Prisma.EvaluationAnswerFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EvaluationAnswerFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationAnswerPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EvaluationAnswerFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationAnswerPayload>;
                };
                findFirst: {
                    args: Prisma.EvaluationAnswerFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationAnswerPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EvaluationAnswerFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationAnswerPayload>;
                };
                findMany: {
                    args: Prisma.EvaluationAnswerFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationAnswerPayload>[];
                };
                create: {
                    args: Prisma.EvaluationAnswerCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationAnswerPayload>;
                };
                createMany: {
                    args: Prisma.EvaluationAnswerCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EvaluationAnswerCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationAnswerPayload>[];
                };
                delete: {
                    args: Prisma.EvaluationAnswerDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationAnswerPayload>;
                };
                update: {
                    args: Prisma.EvaluationAnswerUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationAnswerPayload>;
                };
                deleteMany: {
                    args: Prisma.EvaluationAnswerDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EvaluationAnswerUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EvaluationAnswerUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationAnswerPayload>[];
                };
                upsert: {
                    args: Prisma.EvaluationAnswerUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EvaluationAnswerPayload>;
                };
                aggregate: {
                    args: Prisma.EvaluationAnswerAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEvaluationAnswer>;
                };
                groupBy: {
                    args: Prisma.EvaluationAnswerGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EvaluationAnswerGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EvaluationAnswerCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EvaluationAnswerCountAggregateOutputType> | number;
                };
            };
        };
        RevokedToken: {
            payload: Prisma.$RevokedTokenPayload<ExtArgs>;
            fields: Prisma.RevokedTokenFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RevokedTokenFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RevokedTokenPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RevokedTokenFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RevokedTokenPayload>;
                };
                findFirst: {
                    args: Prisma.RevokedTokenFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RevokedTokenPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RevokedTokenFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RevokedTokenPayload>;
                };
                findMany: {
                    args: Prisma.RevokedTokenFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RevokedTokenPayload>[];
                };
                create: {
                    args: Prisma.RevokedTokenCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RevokedTokenPayload>;
                };
                createMany: {
                    args: Prisma.RevokedTokenCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RevokedTokenCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RevokedTokenPayload>[];
                };
                delete: {
                    args: Prisma.RevokedTokenDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RevokedTokenPayload>;
                };
                update: {
                    args: Prisma.RevokedTokenUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RevokedTokenPayload>;
                };
                deleteMany: {
                    args: Prisma.RevokedTokenDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RevokedTokenUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RevokedTokenUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RevokedTokenPayload>[];
                };
                upsert: {
                    args: Prisma.RevokedTokenUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RevokedTokenPayload>;
                };
                aggregate: {
                    args: Prisma.RevokedTokenAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRevokedToken>;
                };
                groupBy: {
                    args: Prisma.RevokedTokenGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RevokedTokenGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RevokedTokenCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RevokedTokenCountAggregateOutputType> | number;
                };
            };
        };
        CalibrationIndividualScore: {
            payload: Prisma.$CalibrationIndividualScorePayload<ExtArgs>;
            fields: Prisma.CalibrationIndividualScoreFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CalibrationIndividualScoreFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CalibrationIndividualScorePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CalibrationIndividualScoreFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CalibrationIndividualScorePayload>;
                };
                findFirst: {
                    args: Prisma.CalibrationIndividualScoreFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CalibrationIndividualScorePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CalibrationIndividualScoreFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CalibrationIndividualScorePayload>;
                };
                findMany: {
                    args: Prisma.CalibrationIndividualScoreFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CalibrationIndividualScorePayload>[];
                };
                create: {
                    args: Prisma.CalibrationIndividualScoreCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CalibrationIndividualScorePayload>;
                };
                createMany: {
                    args: Prisma.CalibrationIndividualScoreCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CalibrationIndividualScoreCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CalibrationIndividualScorePayload>[];
                };
                delete: {
                    args: Prisma.CalibrationIndividualScoreDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CalibrationIndividualScorePayload>;
                };
                update: {
                    args: Prisma.CalibrationIndividualScoreUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CalibrationIndividualScorePayload>;
                };
                deleteMany: {
                    args: Prisma.CalibrationIndividualScoreDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CalibrationIndividualScoreUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CalibrationIndividualScoreUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CalibrationIndividualScorePayload>[];
                };
                upsert: {
                    args: Prisma.CalibrationIndividualScoreUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CalibrationIndividualScorePayload>;
                };
                aggregate: {
                    args: Prisma.CalibrationIndividualScoreAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCalibrationIndividualScore>;
                };
                groupBy: {
                    args: Prisma.CalibrationIndividualScoreGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CalibrationIndividualScoreGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CalibrationIndividualScoreCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CalibrationIndividualScoreCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
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
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>;
export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type EnumCycleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CycleStatus'>;
export type ListEnumCycleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CycleStatus[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type EnumEvaluationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EvaluationStatus'>;
export type ListEnumEvaluationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EvaluationStatus[]'>;
export type EnumCalibrationModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CalibrationMode'>;
export type ListEnumCalibrationModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CalibrationMode[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
};
export type GlobalOmitConfig = {
    department?: Prisma.DepartmentOmit;
    level?: Prisma.LevelOmit;
    user?: Prisma.UserOmit;
    evaluationCycle?: Prisma.EvaluationCycleOmit;
    cycleCalibrationMember?: Prisma.CycleCalibrationMemberOmit;
    evaluationSheet?: Prisma.EvaluationSheetOmit;
    evaluationQuestion?: Prisma.EvaluationQuestionOmit;
    evaluation?: Prisma.EvaluationOmit;
    evaluationAnswer?: Prisma.EvaluationAnswerOmit;
    revokedToken?: Prisma.RevokedTokenOmit;
    calibrationIndividualScore?: Prisma.CalibrationIndividualScoreOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
