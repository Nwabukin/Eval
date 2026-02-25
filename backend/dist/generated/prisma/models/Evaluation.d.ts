import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EvaluationModel = runtime.Types.Result.DefaultSelection<Prisma.$EvaluationPayload>;
export type AggregateEvaluation = {
    _count: EvaluationCountAggregateOutputType | null;
    _min: EvaluationMinAggregateOutputType | null;
    _max: EvaluationMaxAggregateOutputType | null;
};
export type EvaluationMinAggregateOutputType = {
    id: string | null;
    status: $Enums.EvaluationStatus | null;
    calibrationMode: $Enums.CalibrationMode | null;
    submittedAt: Date | null;
    managerSubmittedAt: Date | null;
    finalizedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    employeeId: string | null;
    cycleId: string | null;
};
export type EvaluationMaxAggregateOutputType = {
    id: string | null;
    status: $Enums.EvaluationStatus | null;
    calibrationMode: $Enums.CalibrationMode | null;
    submittedAt: Date | null;
    managerSubmittedAt: Date | null;
    finalizedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    employeeId: string | null;
    cycleId: string | null;
};
export type EvaluationCountAggregateOutputType = {
    id: number;
    status: number;
    calibrationMode: number;
    submittedAt: number;
    managerSubmittedAt: number;
    finalizedAt: number;
    createdAt: number;
    updatedAt: number;
    employeeId: number;
    cycleId: number;
    _all: number;
};
export type EvaluationMinAggregateInputType = {
    id?: true;
    status?: true;
    calibrationMode?: true;
    submittedAt?: true;
    managerSubmittedAt?: true;
    finalizedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    employeeId?: true;
    cycleId?: true;
};
export type EvaluationMaxAggregateInputType = {
    id?: true;
    status?: true;
    calibrationMode?: true;
    submittedAt?: true;
    managerSubmittedAt?: true;
    finalizedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    employeeId?: true;
    cycleId?: true;
};
export type EvaluationCountAggregateInputType = {
    id?: true;
    status?: true;
    calibrationMode?: true;
    submittedAt?: true;
    managerSubmittedAt?: true;
    finalizedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    employeeId?: true;
    cycleId?: true;
    _all?: true;
};
export type EvaluationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvaluationWhereInput;
    orderBy?: Prisma.EvaluationOrderByWithRelationInput | Prisma.EvaluationOrderByWithRelationInput[];
    cursor?: Prisma.EvaluationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EvaluationCountAggregateInputType;
    _min?: EvaluationMinAggregateInputType;
    _max?: EvaluationMaxAggregateInputType;
};
export type GetEvaluationAggregateType<T extends EvaluationAggregateArgs> = {
    [P in keyof T & keyof AggregateEvaluation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEvaluation[P]> : Prisma.GetScalarType<T[P], AggregateEvaluation[P]>;
};
export type EvaluationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvaluationWhereInput;
    orderBy?: Prisma.EvaluationOrderByWithAggregationInput | Prisma.EvaluationOrderByWithAggregationInput[];
    by: Prisma.EvaluationScalarFieldEnum[] | Prisma.EvaluationScalarFieldEnum;
    having?: Prisma.EvaluationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EvaluationCountAggregateInputType | true;
    _min?: EvaluationMinAggregateInputType;
    _max?: EvaluationMaxAggregateInputType;
};
export type EvaluationGroupByOutputType = {
    id: string;
    status: $Enums.EvaluationStatus;
    calibrationMode: $Enums.CalibrationMode | null;
    submittedAt: Date | null;
    managerSubmittedAt: Date | null;
    finalizedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    employeeId: string;
    cycleId: string;
    _count: EvaluationCountAggregateOutputType | null;
    _min: EvaluationMinAggregateOutputType | null;
    _max: EvaluationMaxAggregateOutputType | null;
};
type GetEvaluationGroupByPayload<T extends EvaluationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EvaluationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EvaluationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EvaluationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EvaluationGroupByOutputType[P]>;
}>>;
export type EvaluationWhereInput = {
    AND?: Prisma.EvaluationWhereInput | Prisma.EvaluationWhereInput[];
    OR?: Prisma.EvaluationWhereInput[];
    NOT?: Prisma.EvaluationWhereInput | Prisma.EvaluationWhereInput[];
    id?: Prisma.UuidFilter<"Evaluation"> | string;
    status?: Prisma.EnumEvaluationStatusFilter<"Evaluation"> | $Enums.EvaluationStatus;
    calibrationMode?: Prisma.EnumCalibrationModeNullableFilter<"Evaluation"> | $Enums.CalibrationMode | null;
    submittedAt?: Prisma.DateTimeNullableFilter<"Evaluation"> | Date | string | null;
    managerSubmittedAt?: Prisma.DateTimeNullableFilter<"Evaluation"> | Date | string | null;
    finalizedAt?: Prisma.DateTimeNullableFilter<"Evaluation"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Evaluation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Evaluation"> | Date | string;
    employeeId?: Prisma.UuidFilter<"Evaluation"> | string;
    cycleId?: Prisma.UuidFilter<"Evaluation"> | string;
    employee?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    cycle?: Prisma.XOR<Prisma.EvaluationCycleScalarRelationFilter, Prisma.EvaluationCycleWhereInput>;
    answers?: Prisma.EvaluationAnswerListRelationFilter;
};
export type EvaluationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    calibrationMode?: Prisma.SortOrderInput | Prisma.SortOrder;
    submittedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    managerSubmittedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    finalizedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    cycleId?: Prisma.SortOrder;
    employee?: Prisma.UserOrderByWithRelationInput;
    cycle?: Prisma.EvaluationCycleOrderByWithRelationInput;
    answers?: Prisma.EvaluationAnswerOrderByRelationAggregateInput;
};
export type EvaluationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    employeeId_cycleId?: Prisma.EvaluationEmployeeIdCycleIdCompoundUniqueInput;
    AND?: Prisma.EvaluationWhereInput | Prisma.EvaluationWhereInput[];
    OR?: Prisma.EvaluationWhereInput[];
    NOT?: Prisma.EvaluationWhereInput | Prisma.EvaluationWhereInput[];
    status?: Prisma.EnumEvaluationStatusFilter<"Evaluation"> | $Enums.EvaluationStatus;
    calibrationMode?: Prisma.EnumCalibrationModeNullableFilter<"Evaluation"> | $Enums.CalibrationMode | null;
    submittedAt?: Prisma.DateTimeNullableFilter<"Evaluation"> | Date | string | null;
    managerSubmittedAt?: Prisma.DateTimeNullableFilter<"Evaluation"> | Date | string | null;
    finalizedAt?: Prisma.DateTimeNullableFilter<"Evaluation"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Evaluation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Evaluation"> | Date | string;
    employeeId?: Prisma.UuidFilter<"Evaluation"> | string;
    cycleId?: Prisma.UuidFilter<"Evaluation"> | string;
    employee?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    cycle?: Prisma.XOR<Prisma.EvaluationCycleScalarRelationFilter, Prisma.EvaluationCycleWhereInput>;
    answers?: Prisma.EvaluationAnswerListRelationFilter;
}, "id" | "employeeId_cycleId">;
export type EvaluationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    calibrationMode?: Prisma.SortOrderInput | Prisma.SortOrder;
    submittedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    managerSubmittedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    finalizedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    cycleId?: Prisma.SortOrder;
    _count?: Prisma.EvaluationCountOrderByAggregateInput;
    _max?: Prisma.EvaluationMaxOrderByAggregateInput;
    _min?: Prisma.EvaluationMinOrderByAggregateInput;
};
export type EvaluationScalarWhereWithAggregatesInput = {
    AND?: Prisma.EvaluationScalarWhereWithAggregatesInput | Prisma.EvaluationScalarWhereWithAggregatesInput[];
    OR?: Prisma.EvaluationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EvaluationScalarWhereWithAggregatesInput | Prisma.EvaluationScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Evaluation"> | string;
    status?: Prisma.EnumEvaluationStatusWithAggregatesFilter<"Evaluation"> | $Enums.EvaluationStatus;
    calibrationMode?: Prisma.EnumCalibrationModeNullableWithAggregatesFilter<"Evaluation"> | $Enums.CalibrationMode | null;
    submittedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Evaluation"> | Date | string | null;
    managerSubmittedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Evaluation"> | Date | string | null;
    finalizedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Evaluation"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Evaluation"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Evaluation"> | Date | string;
    employeeId?: Prisma.UuidWithAggregatesFilter<"Evaluation"> | string;
    cycleId?: Prisma.UuidWithAggregatesFilter<"Evaluation"> | string;
};
export type EvaluationCreateInput = {
    id?: string;
    status?: $Enums.EvaluationStatus;
    calibrationMode?: $Enums.CalibrationMode | null;
    submittedAt?: Date | string | null;
    managerSubmittedAt?: Date | string | null;
    finalizedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    employee: Prisma.UserCreateNestedOneWithoutEvaluationsAsEmployeeInput;
    cycle: Prisma.EvaluationCycleCreateNestedOneWithoutEvaluationsInput;
    answers?: Prisma.EvaluationAnswerCreateNestedManyWithoutEvaluationInput;
};
export type EvaluationUncheckedCreateInput = {
    id?: string;
    status?: $Enums.EvaluationStatus;
    calibrationMode?: $Enums.CalibrationMode | null;
    submittedAt?: Date | string | null;
    managerSubmittedAt?: Date | string | null;
    finalizedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    employeeId: string;
    cycleId: string;
    answers?: Prisma.EvaluationAnswerUncheckedCreateNestedManyWithoutEvaluationInput;
};
export type EvaluationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEvaluationStatusFieldUpdateOperationsInput | $Enums.EvaluationStatus;
    calibrationMode?: Prisma.NullableEnumCalibrationModeFieldUpdateOperationsInput | $Enums.CalibrationMode | null;
    submittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    managerSubmittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finalizedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.UserUpdateOneRequiredWithoutEvaluationsAsEmployeeNestedInput;
    cycle?: Prisma.EvaluationCycleUpdateOneRequiredWithoutEvaluationsNestedInput;
    answers?: Prisma.EvaluationAnswerUpdateManyWithoutEvaluationNestedInput;
};
export type EvaluationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEvaluationStatusFieldUpdateOperationsInput | $Enums.EvaluationStatus;
    calibrationMode?: Prisma.NullableEnumCalibrationModeFieldUpdateOperationsInput | $Enums.CalibrationMode | null;
    submittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    managerSubmittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finalizedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    cycleId?: Prisma.StringFieldUpdateOperationsInput | string;
    answers?: Prisma.EvaluationAnswerUncheckedUpdateManyWithoutEvaluationNestedInput;
};
export type EvaluationCreateManyInput = {
    id?: string;
    status?: $Enums.EvaluationStatus;
    calibrationMode?: $Enums.CalibrationMode | null;
    submittedAt?: Date | string | null;
    managerSubmittedAt?: Date | string | null;
    finalizedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    employeeId: string;
    cycleId: string;
};
export type EvaluationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEvaluationStatusFieldUpdateOperationsInput | $Enums.EvaluationStatus;
    calibrationMode?: Prisma.NullableEnumCalibrationModeFieldUpdateOperationsInput | $Enums.CalibrationMode | null;
    submittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    managerSubmittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finalizedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvaluationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEvaluationStatusFieldUpdateOperationsInput | $Enums.EvaluationStatus;
    calibrationMode?: Prisma.NullableEnumCalibrationModeFieldUpdateOperationsInput | $Enums.CalibrationMode | null;
    submittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    managerSubmittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finalizedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    cycleId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EvaluationListRelationFilter = {
    every?: Prisma.EvaluationWhereInput;
    some?: Prisma.EvaluationWhereInput;
    none?: Prisma.EvaluationWhereInput;
};
export type EvaluationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EvaluationEmployeeIdCycleIdCompoundUniqueInput = {
    employeeId: string;
    cycleId: string;
};
export type EvaluationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    calibrationMode?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
    managerSubmittedAt?: Prisma.SortOrder;
    finalizedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    cycleId?: Prisma.SortOrder;
};
export type EvaluationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    calibrationMode?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
    managerSubmittedAt?: Prisma.SortOrder;
    finalizedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    cycleId?: Prisma.SortOrder;
};
export type EvaluationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    calibrationMode?: Prisma.SortOrder;
    submittedAt?: Prisma.SortOrder;
    managerSubmittedAt?: Prisma.SortOrder;
    finalizedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    cycleId?: Prisma.SortOrder;
};
export type EvaluationScalarRelationFilter = {
    is?: Prisma.EvaluationWhereInput;
    isNot?: Prisma.EvaluationWhereInput;
};
export type EvaluationCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.EvaluationCreateWithoutEmployeeInput, Prisma.EvaluationUncheckedCreateWithoutEmployeeInput> | Prisma.EvaluationCreateWithoutEmployeeInput[] | Prisma.EvaluationUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.EvaluationCreateOrConnectWithoutEmployeeInput | Prisma.EvaluationCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.EvaluationCreateManyEmployeeInputEnvelope;
    connect?: Prisma.EvaluationWhereUniqueInput | Prisma.EvaluationWhereUniqueInput[];
};
export type EvaluationUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.EvaluationCreateWithoutEmployeeInput, Prisma.EvaluationUncheckedCreateWithoutEmployeeInput> | Prisma.EvaluationCreateWithoutEmployeeInput[] | Prisma.EvaluationUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.EvaluationCreateOrConnectWithoutEmployeeInput | Prisma.EvaluationCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.EvaluationCreateManyEmployeeInputEnvelope;
    connect?: Prisma.EvaluationWhereUniqueInput | Prisma.EvaluationWhereUniqueInput[];
};
export type EvaluationUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.EvaluationCreateWithoutEmployeeInput, Prisma.EvaluationUncheckedCreateWithoutEmployeeInput> | Prisma.EvaluationCreateWithoutEmployeeInput[] | Prisma.EvaluationUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.EvaluationCreateOrConnectWithoutEmployeeInput | Prisma.EvaluationCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.EvaluationUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.EvaluationUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.EvaluationCreateManyEmployeeInputEnvelope;
    set?: Prisma.EvaluationWhereUniqueInput | Prisma.EvaluationWhereUniqueInput[];
    disconnect?: Prisma.EvaluationWhereUniqueInput | Prisma.EvaluationWhereUniqueInput[];
    delete?: Prisma.EvaluationWhereUniqueInput | Prisma.EvaluationWhereUniqueInput[];
    connect?: Prisma.EvaluationWhereUniqueInput | Prisma.EvaluationWhereUniqueInput[];
    update?: Prisma.EvaluationUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.EvaluationUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.EvaluationUpdateManyWithWhereWithoutEmployeeInput | Prisma.EvaluationUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.EvaluationScalarWhereInput | Prisma.EvaluationScalarWhereInput[];
};
export type EvaluationUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.EvaluationCreateWithoutEmployeeInput, Prisma.EvaluationUncheckedCreateWithoutEmployeeInput> | Prisma.EvaluationCreateWithoutEmployeeInput[] | Prisma.EvaluationUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.EvaluationCreateOrConnectWithoutEmployeeInput | Prisma.EvaluationCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.EvaluationUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.EvaluationUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.EvaluationCreateManyEmployeeInputEnvelope;
    set?: Prisma.EvaluationWhereUniqueInput | Prisma.EvaluationWhereUniqueInput[];
    disconnect?: Prisma.EvaluationWhereUniqueInput | Prisma.EvaluationWhereUniqueInput[];
    delete?: Prisma.EvaluationWhereUniqueInput | Prisma.EvaluationWhereUniqueInput[];
    connect?: Prisma.EvaluationWhereUniqueInput | Prisma.EvaluationWhereUniqueInput[];
    update?: Prisma.EvaluationUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.EvaluationUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.EvaluationUpdateManyWithWhereWithoutEmployeeInput | Prisma.EvaluationUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.EvaluationScalarWhereInput | Prisma.EvaluationScalarWhereInput[];
};
export type EvaluationCreateNestedManyWithoutCycleInput = {
    create?: Prisma.XOR<Prisma.EvaluationCreateWithoutCycleInput, Prisma.EvaluationUncheckedCreateWithoutCycleInput> | Prisma.EvaluationCreateWithoutCycleInput[] | Prisma.EvaluationUncheckedCreateWithoutCycleInput[];
    connectOrCreate?: Prisma.EvaluationCreateOrConnectWithoutCycleInput | Prisma.EvaluationCreateOrConnectWithoutCycleInput[];
    createMany?: Prisma.EvaluationCreateManyCycleInputEnvelope;
    connect?: Prisma.EvaluationWhereUniqueInput | Prisma.EvaluationWhereUniqueInput[];
};
export type EvaluationUncheckedCreateNestedManyWithoutCycleInput = {
    create?: Prisma.XOR<Prisma.EvaluationCreateWithoutCycleInput, Prisma.EvaluationUncheckedCreateWithoutCycleInput> | Prisma.EvaluationCreateWithoutCycleInput[] | Prisma.EvaluationUncheckedCreateWithoutCycleInput[];
    connectOrCreate?: Prisma.EvaluationCreateOrConnectWithoutCycleInput | Prisma.EvaluationCreateOrConnectWithoutCycleInput[];
    createMany?: Prisma.EvaluationCreateManyCycleInputEnvelope;
    connect?: Prisma.EvaluationWhereUniqueInput | Prisma.EvaluationWhereUniqueInput[];
};
export type EvaluationUpdateManyWithoutCycleNestedInput = {
    create?: Prisma.XOR<Prisma.EvaluationCreateWithoutCycleInput, Prisma.EvaluationUncheckedCreateWithoutCycleInput> | Prisma.EvaluationCreateWithoutCycleInput[] | Prisma.EvaluationUncheckedCreateWithoutCycleInput[];
    connectOrCreate?: Prisma.EvaluationCreateOrConnectWithoutCycleInput | Prisma.EvaluationCreateOrConnectWithoutCycleInput[];
    upsert?: Prisma.EvaluationUpsertWithWhereUniqueWithoutCycleInput | Prisma.EvaluationUpsertWithWhereUniqueWithoutCycleInput[];
    createMany?: Prisma.EvaluationCreateManyCycleInputEnvelope;
    set?: Prisma.EvaluationWhereUniqueInput | Prisma.EvaluationWhereUniqueInput[];
    disconnect?: Prisma.EvaluationWhereUniqueInput | Prisma.EvaluationWhereUniqueInput[];
    delete?: Prisma.EvaluationWhereUniqueInput | Prisma.EvaluationWhereUniqueInput[];
    connect?: Prisma.EvaluationWhereUniqueInput | Prisma.EvaluationWhereUniqueInput[];
    update?: Prisma.EvaluationUpdateWithWhereUniqueWithoutCycleInput | Prisma.EvaluationUpdateWithWhereUniqueWithoutCycleInput[];
    updateMany?: Prisma.EvaluationUpdateManyWithWhereWithoutCycleInput | Prisma.EvaluationUpdateManyWithWhereWithoutCycleInput[];
    deleteMany?: Prisma.EvaluationScalarWhereInput | Prisma.EvaluationScalarWhereInput[];
};
export type EvaluationUncheckedUpdateManyWithoutCycleNestedInput = {
    create?: Prisma.XOR<Prisma.EvaluationCreateWithoutCycleInput, Prisma.EvaluationUncheckedCreateWithoutCycleInput> | Prisma.EvaluationCreateWithoutCycleInput[] | Prisma.EvaluationUncheckedCreateWithoutCycleInput[];
    connectOrCreate?: Prisma.EvaluationCreateOrConnectWithoutCycleInput | Prisma.EvaluationCreateOrConnectWithoutCycleInput[];
    upsert?: Prisma.EvaluationUpsertWithWhereUniqueWithoutCycleInput | Prisma.EvaluationUpsertWithWhereUniqueWithoutCycleInput[];
    createMany?: Prisma.EvaluationCreateManyCycleInputEnvelope;
    set?: Prisma.EvaluationWhereUniqueInput | Prisma.EvaluationWhereUniqueInput[];
    disconnect?: Prisma.EvaluationWhereUniqueInput | Prisma.EvaluationWhereUniqueInput[];
    delete?: Prisma.EvaluationWhereUniqueInput | Prisma.EvaluationWhereUniqueInput[];
    connect?: Prisma.EvaluationWhereUniqueInput | Prisma.EvaluationWhereUniqueInput[];
    update?: Prisma.EvaluationUpdateWithWhereUniqueWithoutCycleInput | Prisma.EvaluationUpdateWithWhereUniqueWithoutCycleInput[];
    updateMany?: Prisma.EvaluationUpdateManyWithWhereWithoutCycleInput | Prisma.EvaluationUpdateManyWithWhereWithoutCycleInput[];
    deleteMany?: Prisma.EvaluationScalarWhereInput | Prisma.EvaluationScalarWhereInput[];
};
export type EnumEvaluationStatusFieldUpdateOperationsInput = {
    set?: $Enums.EvaluationStatus;
};
export type NullableEnumCalibrationModeFieldUpdateOperationsInput = {
    set?: $Enums.CalibrationMode | null;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type EvaluationCreateNestedOneWithoutAnswersInput = {
    create?: Prisma.XOR<Prisma.EvaluationCreateWithoutAnswersInput, Prisma.EvaluationUncheckedCreateWithoutAnswersInput>;
    connectOrCreate?: Prisma.EvaluationCreateOrConnectWithoutAnswersInput;
    connect?: Prisma.EvaluationWhereUniqueInput;
};
export type EvaluationUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: Prisma.XOR<Prisma.EvaluationCreateWithoutAnswersInput, Prisma.EvaluationUncheckedCreateWithoutAnswersInput>;
    connectOrCreate?: Prisma.EvaluationCreateOrConnectWithoutAnswersInput;
    upsert?: Prisma.EvaluationUpsertWithoutAnswersInput;
    connect?: Prisma.EvaluationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EvaluationUpdateToOneWithWhereWithoutAnswersInput, Prisma.EvaluationUpdateWithoutAnswersInput>, Prisma.EvaluationUncheckedUpdateWithoutAnswersInput>;
};
export type EvaluationCreateWithoutEmployeeInput = {
    id?: string;
    status?: $Enums.EvaluationStatus;
    calibrationMode?: $Enums.CalibrationMode | null;
    submittedAt?: Date | string | null;
    managerSubmittedAt?: Date | string | null;
    finalizedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cycle: Prisma.EvaluationCycleCreateNestedOneWithoutEvaluationsInput;
    answers?: Prisma.EvaluationAnswerCreateNestedManyWithoutEvaluationInput;
};
export type EvaluationUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    status?: $Enums.EvaluationStatus;
    calibrationMode?: $Enums.CalibrationMode | null;
    submittedAt?: Date | string | null;
    managerSubmittedAt?: Date | string | null;
    finalizedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cycleId: string;
    answers?: Prisma.EvaluationAnswerUncheckedCreateNestedManyWithoutEvaluationInput;
};
export type EvaluationCreateOrConnectWithoutEmployeeInput = {
    where: Prisma.EvaluationWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvaluationCreateWithoutEmployeeInput, Prisma.EvaluationUncheckedCreateWithoutEmployeeInput>;
};
export type EvaluationCreateManyEmployeeInputEnvelope = {
    data: Prisma.EvaluationCreateManyEmployeeInput | Prisma.EvaluationCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
};
export type EvaluationUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.EvaluationWhereUniqueInput;
    update: Prisma.XOR<Prisma.EvaluationUpdateWithoutEmployeeInput, Prisma.EvaluationUncheckedUpdateWithoutEmployeeInput>;
    create: Prisma.XOR<Prisma.EvaluationCreateWithoutEmployeeInput, Prisma.EvaluationUncheckedCreateWithoutEmployeeInput>;
};
export type EvaluationUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.EvaluationWhereUniqueInput;
    data: Prisma.XOR<Prisma.EvaluationUpdateWithoutEmployeeInput, Prisma.EvaluationUncheckedUpdateWithoutEmployeeInput>;
};
export type EvaluationUpdateManyWithWhereWithoutEmployeeInput = {
    where: Prisma.EvaluationScalarWhereInput;
    data: Prisma.XOR<Prisma.EvaluationUpdateManyMutationInput, Prisma.EvaluationUncheckedUpdateManyWithoutEmployeeInput>;
};
export type EvaluationScalarWhereInput = {
    AND?: Prisma.EvaluationScalarWhereInput | Prisma.EvaluationScalarWhereInput[];
    OR?: Prisma.EvaluationScalarWhereInput[];
    NOT?: Prisma.EvaluationScalarWhereInput | Prisma.EvaluationScalarWhereInput[];
    id?: Prisma.UuidFilter<"Evaluation"> | string;
    status?: Prisma.EnumEvaluationStatusFilter<"Evaluation"> | $Enums.EvaluationStatus;
    calibrationMode?: Prisma.EnumCalibrationModeNullableFilter<"Evaluation"> | $Enums.CalibrationMode | null;
    submittedAt?: Prisma.DateTimeNullableFilter<"Evaluation"> | Date | string | null;
    managerSubmittedAt?: Prisma.DateTimeNullableFilter<"Evaluation"> | Date | string | null;
    finalizedAt?: Prisma.DateTimeNullableFilter<"Evaluation"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Evaluation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Evaluation"> | Date | string;
    employeeId?: Prisma.UuidFilter<"Evaluation"> | string;
    cycleId?: Prisma.UuidFilter<"Evaluation"> | string;
};
export type EvaluationCreateWithoutCycleInput = {
    id?: string;
    status?: $Enums.EvaluationStatus;
    calibrationMode?: $Enums.CalibrationMode | null;
    submittedAt?: Date | string | null;
    managerSubmittedAt?: Date | string | null;
    finalizedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    employee: Prisma.UserCreateNestedOneWithoutEvaluationsAsEmployeeInput;
    answers?: Prisma.EvaluationAnswerCreateNestedManyWithoutEvaluationInput;
};
export type EvaluationUncheckedCreateWithoutCycleInput = {
    id?: string;
    status?: $Enums.EvaluationStatus;
    calibrationMode?: $Enums.CalibrationMode | null;
    submittedAt?: Date | string | null;
    managerSubmittedAt?: Date | string | null;
    finalizedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    employeeId: string;
    answers?: Prisma.EvaluationAnswerUncheckedCreateNestedManyWithoutEvaluationInput;
};
export type EvaluationCreateOrConnectWithoutCycleInput = {
    where: Prisma.EvaluationWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvaluationCreateWithoutCycleInput, Prisma.EvaluationUncheckedCreateWithoutCycleInput>;
};
export type EvaluationCreateManyCycleInputEnvelope = {
    data: Prisma.EvaluationCreateManyCycleInput | Prisma.EvaluationCreateManyCycleInput[];
    skipDuplicates?: boolean;
};
export type EvaluationUpsertWithWhereUniqueWithoutCycleInput = {
    where: Prisma.EvaluationWhereUniqueInput;
    update: Prisma.XOR<Prisma.EvaluationUpdateWithoutCycleInput, Prisma.EvaluationUncheckedUpdateWithoutCycleInput>;
    create: Prisma.XOR<Prisma.EvaluationCreateWithoutCycleInput, Prisma.EvaluationUncheckedCreateWithoutCycleInput>;
};
export type EvaluationUpdateWithWhereUniqueWithoutCycleInput = {
    where: Prisma.EvaluationWhereUniqueInput;
    data: Prisma.XOR<Prisma.EvaluationUpdateWithoutCycleInput, Prisma.EvaluationUncheckedUpdateWithoutCycleInput>;
};
export type EvaluationUpdateManyWithWhereWithoutCycleInput = {
    where: Prisma.EvaluationScalarWhereInput;
    data: Prisma.XOR<Prisma.EvaluationUpdateManyMutationInput, Prisma.EvaluationUncheckedUpdateManyWithoutCycleInput>;
};
export type EvaluationCreateWithoutAnswersInput = {
    id?: string;
    status?: $Enums.EvaluationStatus;
    calibrationMode?: $Enums.CalibrationMode | null;
    submittedAt?: Date | string | null;
    managerSubmittedAt?: Date | string | null;
    finalizedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    employee: Prisma.UserCreateNestedOneWithoutEvaluationsAsEmployeeInput;
    cycle: Prisma.EvaluationCycleCreateNestedOneWithoutEvaluationsInput;
};
export type EvaluationUncheckedCreateWithoutAnswersInput = {
    id?: string;
    status?: $Enums.EvaluationStatus;
    calibrationMode?: $Enums.CalibrationMode | null;
    submittedAt?: Date | string | null;
    managerSubmittedAt?: Date | string | null;
    finalizedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    employeeId: string;
    cycleId: string;
};
export type EvaluationCreateOrConnectWithoutAnswersInput = {
    where: Prisma.EvaluationWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvaluationCreateWithoutAnswersInput, Prisma.EvaluationUncheckedCreateWithoutAnswersInput>;
};
export type EvaluationUpsertWithoutAnswersInput = {
    update: Prisma.XOR<Prisma.EvaluationUpdateWithoutAnswersInput, Prisma.EvaluationUncheckedUpdateWithoutAnswersInput>;
    create: Prisma.XOR<Prisma.EvaluationCreateWithoutAnswersInput, Prisma.EvaluationUncheckedCreateWithoutAnswersInput>;
    where?: Prisma.EvaluationWhereInput;
};
export type EvaluationUpdateToOneWithWhereWithoutAnswersInput = {
    where?: Prisma.EvaluationWhereInput;
    data: Prisma.XOR<Prisma.EvaluationUpdateWithoutAnswersInput, Prisma.EvaluationUncheckedUpdateWithoutAnswersInput>;
};
export type EvaluationUpdateWithoutAnswersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEvaluationStatusFieldUpdateOperationsInput | $Enums.EvaluationStatus;
    calibrationMode?: Prisma.NullableEnumCalibrationModeFieldUpdateOperationsInput | $Enums.CalibrationMode | null;
    submittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    managerSubmittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finalizedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.UserUpdateOneRequiredWithoutEvaluationsAsEmployeeNestedInput;
    cycle?: Prisma.EvaluationCycleUpdateOneRequiredWithoutEvaluationsNestedInput;
};
export type EvaluationUncheckedUpdateWithoutAnswersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEvaluationStatusFieldUpdateOperationsInput | $Enums.EvaluationStatus;
    calibrationMode?: Prisma.NullableEnumCalibrationModeFieldUpdateOperationsInput | $Enums.CalibrationMode | null;
    submittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    managerSubmittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finalizedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    cycleId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EvaluationCreateManyEmployeeInput = {
    id?: string;
    status?: $Enums.EvaluationStatus;
    calibrationMode?: $Enums.CalibrationMode | null;
    submittedAt?: Date | string | null;
    managerSubmittedAt?: Date | string | null;
    finalizedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cycleId: string;
};
export type EvaluationUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEvaluationStatusFieldUpdateOperationsInput | $Enums.EvaluationStatus;
    calibrationMode?: Prisma.NullableEnumCalibrationModeFieldUpdateOperationsInput | $Enums.CalibrationMode | null;
    submittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    managerSubmittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finalizedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cycle?: Prisma.EvaluationCycleUpdateOneRequiredWithoutEvaluationsNestedInput;
    answers?: Prisma.EvaluationAnswerUpdateManyWithoutEvaluationNestedInput;
};
export type EvaluationUncheckedUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEvaluationStatusFieldUpdateOperationsInput | $Enums.EvaluationStatus;
    calibrationMode?: Prisma.NullableEnumCalibrationModeFieldUpdateOperationsInput | $Enums.CalibrationMode | null;
    submittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    managerSubmittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finalizedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cycleId?: Prisma.StringFieldUpdateOperationsInput | string;
    answers?: Prisma.EvaluationAnswerUncheckedUpdateManyWithoutEvaluationNestedInput;
};
export type EvaluationUncheckedUpdateManyWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEvaluationStatusFieldUpdateOperationsInput | $Enums.EvaluationStatus;
    calibrationMode?: Prisma.NullableEnumCalibrationModeFieldUpdateOperationsInput | $Enums.CalibrationMode | null;
    submittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    managerSubmittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finalizedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cycleId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EvaluationCreateManyCycleInput = {
    id?: string;
    status?: $Enums.EvaluationStatus;
    calibrationMode?: $Enums.CalibrationMode | null;
    submittedAt?: Date | string | null;
    managerSubmittedAt?: Date | string | null;
    finalizedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    employeeId: string;
};
export type EvaluationUpdateWithoutCycleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEvaluationStatusFieldUpdateOperationsInput | $Enums.EvaluationStatus;
    calibrationMode?: Prisma.NullableEnumCalibrationModeFieldUpdateOperationsInput | $Enums.CalibrationMode | null;
    submittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    managerSubmittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finalizedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.UserUpdateOneRequiredWithoutEvaluationsAsEmployeeNestedInput;
    answers?: Prisma.EvaluationAnswerUpdateManyWithoutEvaluationNestedInput;
};
export type EvaluationUncheckedUpdateWithoutCycleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEvaluationStatusFieldUpdateOperationsInput | $Enums.EvaluationStatus;
    calibrationMode?: Prisma.NullableEnumCalibrationModeFieldUpdateOperationsInput | $Enums.CalibrationMode | null;
    submittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    managerSubmittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finalizedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    answers?: Prisma.EvaluationAnswerUncheckedUpdateManyWithoutEvaluationNestedInput;
};
export type EvaluationUncheckedUpdateManyWithoutCycleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumEvaluationStatusFieldUpdateOperationsInput | $Enums.EvaluationStatus;
    calibrationMode?: Prisma.NullableEnumCalibrationModeFieldUpdateOperationsInput | $Enums.CalibrationMode | null;
    submittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    managerSubmittedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finalizedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EvaluationCountOutputType = {
    answers: number;
};
export type EvaluationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    answers?: boolean | EvaluationCountOutputTypeCountAnswersArgs;
};
export type EvaluationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationCountOutputTypeSelect<ExtArgs> | null;
};
export type EvaluationCountOutputTypeCountAnswersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvaluationAnswerWhereInput;
};
export type EvaluationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    status?: boolean;
    calibrationMode?: boolean;
    submittedAt?: boolean;
    managerSubmittedAt?: boolean;
    finalizedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    employeeId?: boolean;
    cycleId?: boolean;
    employee?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    cycle?: boolean | Prisma.EvaluationCycleDefaultArgs<ExtArgs>;
    answers?: boolean | Prisma.Evaluation$answersArgs<ExtArgs>;
    _count?: boolean | Prisma.EvaluationCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["evaluation"]>;
export type EvaluationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    status?: boolean;
    calibrationMode?: boolean;
    submittedAt?: boolean;
    managerSubmittedAt?: boolean;
    finalizedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    employeeId?: boolean;
    cycleId?: boolean;
    employee?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    cycle?: boolean | Prisma.EvaluationCycleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["evaluation"]>;
export type EvaluationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    status?: boolean;
    calibrationMode?: boolean;
    submittedAt?: boolean;
    managerSubmittedAt?: boolean;
    finalizedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    employeeId?: boolean;
    cycleId?: boolean;
    employee?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    cycle?: boolean | Prisma.EvaluationCycleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["evaluation"]>;
export type EvaluationSelectScalar = {
    id?: boolean;
    status?: boolean;
    calibrationMode?: boolean;
    submittedAt?: boolean;
    managerSubmittedAt?: boolean;
    finalizedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    employeeId?: boolean;
    cycleId?: boolean;
};
export type EvaluationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "status" | "calibrationMode" | "submittedAt" | "managerSubmittedAt" | "finalizedAt" | "createdAt" | "updatedAt" | "employeeId" | "cycleId", ExtArgs["result"]["evaluation"]>;
export type EvaluationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    cycle?: boolean | Prisma.EvaluationCycleDefaultArgs<ExtArgs>;
    answers?: boolean | Prisma.Evaluation$answersArgs<ExtArgs>;
    _count?: boolean | Prisma.EvaluationCountOutputTypeDefaultArgs<ExtArgs>;
};
export type EvaluationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    cycle?: boolean | Prisma.EvaluationCycleDefaultArgs<ExtArgs>;
};
export type EvaluationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    cycle?: boolean | Prisma.EvaluationCycleDefaultArgs<ExtArgs>;
};
export type $EvaluationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Evaluation";
    objects: {
        employee: Prisma.$UserPayload<ExtArgs>;
        cycle: Prisma.$EvaluationCyclePayload<ExtArgs>;
        answers: Prisma.$EvaluationAnswerPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        status: $Enums.EvaluationStatus;
        calibrationMode: $Enums.CalibrationMode | null;
        submittedAt: Date | null;
        managerSubmittedAt: Date | null;
        finalizedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        employeeId: string;
        cycleId: string;
    }, ExtArgs["result"]["evaluation"]>;
    composites: {};
};
export type EvaluationGetPayload<S extends boolean | null | undefined | EvaluationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EvaluationPayload, S>;
export type EvaluationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EvaluationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EvaluationCountAggregateInputType | true;
};
export interface EvaluationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Evaluation'];
        meta: {
            name: 'Evaluation';
        };
    };
    findUnique<T extends EvaluationFindUniqueArgs>(args: Prisma.SelectSubset<T, EvaluationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EvaluationClient<runtime.Types.Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EvaluationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EvaluationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EvaluationClient<runtime.Types.Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EvaluationFindFirstArgs>(args?: Prisma.SelectSubset<T, EvaluationFindFirstArgs<ExtArgs>>): Prisma.Prisma__EvaluationClient<runtime.Types.Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EvaluationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EvaluationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EvaluationClient<runtime.Types.Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EvaluationFindManyArgs>(args?: Prisma.SelectSubset<T, EvaluationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EvaluationCreateArgs>(args: Prisma.SelectSubset<T, EvaluationCreateArgs<ExtArgs>>): Prisma.Prisma__EvaluationClient<runtime.Types.Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EvaluationCreateManyArgs>(args?: Prisma.SelectSubset<T, EvaluationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EvaluationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EvaluationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EvaluationDeleteArgs>(args: Prisma.SelectSubset<T, EvaluationDeleteArgs<ExtArgs>>): Prisma.Prisma__EvaluationClient<runtime.Types.Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EvaluationUpdateArgs>(args: Prisma.SelectSubset<T, EvaluationUpdateArgs<ExtArgs>>): Prisma.Prisma__EvaluationClient<runtime.Types.Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EvaluationDeleteManyArgs>(args?: Prisma.SelectSubset<T, EvaluationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EvaluationUpdateManyArgs>(args: Prisma.SelectSubset<T, EvaluationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EvaluationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EvaluationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EvaluationUpsertArgs>(args: Prisma.SelectSubset<T, EvaluationUpsertArgs<ExtArgs>>): Prisma.Prisma__EvaluationClient<runtime.Types.Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EvaluationCountArgs>(args?: Prisma.Subset<T, EvaluationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EvaluationCountAggregateOutputType> : number>;
    aggregate<T extends EvaluationAggregateArgs>(args: Prisma.Subset<T, EvaluationAggregateArgs>): Prisma.PrismaPromise<GetEvaluationAggregateType<T>>;
    groupBy<T extends EvaluationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EvaluationGroupByArgs['orderBy'];
    } : {
        orderBy?: EvaluationGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EvaluationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvaluationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EvaluationFieldRefs;
}
export interface Prisma__EvaluationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    employee<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    cycle<T extends Prisma.EvaluationCycleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EvaluationCycleDefaultArgs<ExtArgs>>): Prisma.Prisma__EvaluationCycleClient<runtime.Types.Result.GetResult<Prisma.$EvaluationCyclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    answers<T extends Prisma.Evaluation$answersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Evaluation$answersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvaluationAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EvaluationFieldRefs {
    readonly id: Prisma.FieldRef<"Evaluation", 'String'>;
    readonly status: Prisma.FieldRef<"Evaluation", 'EvaluationStatus'>;
    readonly calibrationMode: Prisma.FieldRef<"Evaluation", 'CalibrationMode'>;
    readonly submittedAt: Prisma.FieldRef<"Evaluation", 'DateTime'>;
    readonly managerSubmittedAt: Prisma.FieldRef<"Evaluation", 'DateTime'>;
    readonly finalizedAt: Prisma.FieldRef<"Evaluation", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Evaluation", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Evaluation", 'DateTime'>;
    readonly employeeId: Prisma.FieldRef<"Evaluation", 'String'>;
    readonly cycleId: Prisma.FieldRef<"Evaluation", 'String'>;
}
export type EvaluationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationOmit<ExtArgs> | null;
    include?: Prisma.EvaluationInclude<ExtArgs> | null;
    where: Prisma.EvaluationWhereUniqueInput;
};
export type EvaluationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationOmit<ExtArgs> | null;
    include?: Prisma.EvaluationInclude<ExtArgs> | null;
    where: Prisma.EvaluationWhereUniqueInput;
};
export type EvaluationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationOmit<ExtArgs> | null;
    include?: Prisma.EvaluationInclude<ExtArgs> | null;
    where?: Prisma.EvaluationWhereInput;
    orderBy?: Prisma.EvaluationOrderByWithRelationInput | Prisma.EvaluationOrderByWithRelationInput[];
    cursor?: Prisma.EvaluationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EvaluationScalarFieldEnum | Prisma.EvaluationScalarFieldEnum[];
};
export type EvaluationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationOmit<ExtArgs> | null;
    include?: Prisma.EvaluationInclude<ExtArgs> | null;
    where?: Prisma.EvaluationWhereInput;
    orderBy?: Prisma.EvaluationOrderByWithRelationInput | Prisma.EvaluationOrderByWithRelationInput[];
    cursor?: Prisma.EvaluationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EvaluationScalarFieldEnum | Prisma.EvaluationScalarFieldEnum[];
};
export type EvaluationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationOmit<ExtArgs> | null;
    include?: Prisma.EvaluationInclude<ExtArgs> | null;
    where?: Prisma.EvaluationWhereInput;
    orderBy?: Prisma.EvaluationOrderByWithRelationInput | Prisma.EvaluationOrderByWithRelationInput[];
    cursor?: Prisma.EvaluationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EvaluationScalarFieldEnum | Prisma.EvaluationScalarFieldEnum[];
};
export type EvaluationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationOmit<ExtArgs> | null;
    include?: Prisma.EvaluationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EvaluationCreateInput, Prisma.EvaluationUncheckedCreateInput>;
};
export type EvaluationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EvaluationCreateManyInput | Prisma.EvaluationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EvaluationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EvaluationOmit<ExtArgs> | null;
    data: Prisma.EvaluationCreateManyInput | Prisma.EvaluationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.EvaluationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EvaluationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationOmit<ExtArgs> | null;
    include?: Prisma.EvaluationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EvaluationUpdateInput, Prisma.EvaluationUncheckedUpdateInput>;
    where: Prisma.EvaluationWhereUniqueInput;
};
export type EvaluationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EvaluationUpdateManyMutationInput, Prisma.EvaluationUncheckedUpdateManyInput>;
    where?: Prisma.EvaluationWhereInput;
    limit?: number;
};
export type EvaluationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EvaluationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EvaluationUpdateManyMutationInput, Prisma.EvaluationUncheckedUpdateManyInput>;
    where?: Prisma.EvaluationWhereInput;
    limit?: number;
    include?: Prisma.EvaluationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EvaluationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationOmit<ExtArgs> | null;
    include?: Prisma.EvaluationInclude<ExtArgs> | null;
    where: Prisma.EvaluationWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvaluationCreateInput, Prisma.EvaluationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EvaluationUpdateInput, Prisma.EvaluationUncheckedUpdateInput>;
};
export type EvaluationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationOmit<ExtArgs> | null;
    include?: Prisma.EvaluationInclude<ExtArgs> | null;
    where: Prisma.EvaluationWhereUniqueInput;
};
export type EvaluationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvaluationWhereInput;
    limit?: number;
};
export type Evaluation$answersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationAnswerSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationAnswerOmit<ExtArgs> | null;
    include?: Prisma.EvaluationAnswerInclude<ExtArgs> | null;
    where?: Prisma.EvaluationAnswerWhereInput;
    orderBy?: Prisma.EvaluationAnswerOrderByWithRelationInput | Prisma.EvaluationAnswerOrderByWithRelationInput[];
    cursor?: Prisma.EvaluationAnswerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EvaluationAnswerScalarFieldEnum | Prisma.EvaluationAnswerScalarFieldEnum[];
};
export type EvaluationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationOmit<ExtArgs> | null;
    include?: Prisma.EvaluationInclude<ExtArgs> | null;
};
export {};
