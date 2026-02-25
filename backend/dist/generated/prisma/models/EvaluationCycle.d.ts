import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EvaluationCycleModel = runtime.Types.Result.DefaultSelection<Prisma.$EvaluationCyclePayload>;
export type AggregateEvaluationCycle = {
    _count: EvaluationCycleCountAggregateOutputType | null;
    _min: EvaluationCycleMinAggregateOutputType | null;
    _max: EvaluationCycleMaxAggregateOutputType | null;
};
export type EvaluationCycleMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    startDate: Date | null;
    endDate: Date | null;
    status: $Enums.CycleStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EvaluationCycleMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    startDate: Date | null;
    endDate: Date | null;
    status: $Enums.CycleStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EvaluationCycleCountAggregateOutputType = {
    id: number;
    name: number;
    startDate: number;
    endDate: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type EvaluationCycleMinAggregateInputType = {
    id?: true;
    name?: true;
    startDate?: true;
    endDate?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EvaluationCycleMaxAggregateInputType = {
    id?: true;
    name?: true;
    startDate?: true;
    endDate?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EvaluationCycleCountAggregateInputType = {
    id?: true;
    name?: true;
    startDate?: true;
    endDate?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type EvaluationCycleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvaluationCycleWhereInput;
    orderBy?: Prisma.EvaluationCycleOrderByWithRelationInput | Prisma.EvaluationCycleOrderByWithRelationInput[];
    cursor?: Prisma.EvaluationCycleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EvaluationCycleCountAggregateInputType;
    _min?: EvaluationCycleMinAggregateInputType;
    _max?: EvaluationCycleMaxAggregateInputType;
};
export type GetEvaluationCycleAggregateType<T extends EvaluationCycleAggregateArgs> = {
    [P in keyof T & keyof AggregateEvaluationCycle]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEvaluationCycle[P]> : Prisma.GetScalarType<T[P], AggregateEvaluationCycle[P]>;
};
export type EvaluationCycleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvaluationCycleWhereInput;
    orderBy?: Prisma.EvaluationCycleOrderByWithAggregationInput | Prisma.EvaluationCycleOrderByWithAggregationInput[];
    by: Prisma.EvaluationCycleScalarFieldEnum[] | Prisma.EvaluationCycleScalarFieldEnum;
    having?: Prisma.EvaluationCycleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EvaluationCycleCountAggregateInputType | true;
    _min?: EvaluationCycleMinAggregateInputType;
    _max?: EvaluationCycleMaxAggregateInputType;
};
export type EvaluationCycleGroupByOutputType = {
    id: string;
    name: string;
    startDate: Date;
    endDate: Date;
    status: $Enums.CycleStatus;
    createdAt: Date;
    updatedAt: Date;
    _count: EvaluationCycleCountAggregateOutputType | null;
    _min: EvaluationCycleMinAggregateOutputType | null;
    _max: EvaluationCycleMaxAggregateOutputType | null;
};
type GetEvaluationCycleGroupByPayload<T extends EvaluationCycleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EvaluationCycleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EvaluationCycleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EvaluationCycleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EvaluationCycleGroupByOutputType[P]>;
}>>;
export type EvaluationCycleWhereInput = {
    AND?: Prisma.EvaluationCycleWhereInput | Prisma.EvaluationCycleWhereInput[];
    OR?: Prisma.EvaluationCycleWhereInput[];
    NOT?: Prisma.EvaluationCycleWhereInput | Prisma.EvaluationCycleWhereInput[];
    id?: Prisma.UuidFilter<"EvaluationCycle"> | string;
    name?: Prisma.StringFilter<"EvaluationCycle"> | string;
    startDate?: Prisma.DateTimeFilter<"EvaluationCycle"> | Date | string;
    endDate?: Prisma.DateTimeFilter<"EvaluationCycle"> | Date | string;
    status?: Prisma.EnumCycleStatusFilter<"EvaluationCycle"> | $Enums.CycleStatus;
    createdAt?: Prisma.DateTimeFilter<"EvaluationCycle"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EvaluationCycle"> | Date | string;
    evaluations?: Prisma.EvaluationListRelationFilter;
    sheets?: Prisma.EvaluationSheetListRelationFilter;
    calibrationMembers?: Prisma.CycleCalibrationMemberListRelationFilter;
};
export type EvaluationCycleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    evaluations?: Prisma.EvaluationOrderByRelationAggregateInput;
    sheets?: Prisma.EvaluationSheetOrderByRelationAggregateInput;
    calibrationMembers?: Prisma.CycleCalibrationMemberOrderByRelationAggregateInput;
};
export type EvaluationCycleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.EvaluationCycleWhereInput | Prisma.EvaluationCycleWhereInput[];
    OR?: Prisma.EvaluationCycleWhereInput[];
    NOT?: Prisma.EvaluationCycleWhereInput | Prisma.EvaluationCycleWhereInput[];
    name?: Prisma.StringFilter<"EvaluationCycle"> | string;
    startDate?: Prisma.DateTimeFilter<"EvaluationCycle"> | Date | string;
    endDate?: Prisma.DateTimeFilter<"EvaluationCycle"> | Date | string;
    status?: Prisma.EnumCycleStatusFilter<"EvaluationCycle"> | $Enums.CycleStatus;
    createdAt?: Prisma.DateTimeFilter<"EvaluationCycle"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EvaluationCycle"> | Date | string;
    evaluations?: Prisma.EvaluationListRelationFilter;
    sheets?: Prisma.EvaluationSheetListRelationFilter;
    calibrationMembers?: Prisma.CycleCalibrationMemberListRelationFilter;
}, "id">;
export type EvaluationCycleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.EvaluationCycleCountOrderByAggregateInput;
    _max?: Prisma.EvaluationCycleMaxOrderByAggregateInput;
    _min?: Prisma.EvaluationCycleMinOrderByAggregateInput;
};
export type EvaluationCycleScalarWhereWithAggregatesInput = {
    AND?: Prisma.EvaluationCycleScalarWhereWithAggregatesInput | Prisma.EvaluationCycleScalarWhereWithAggregatesInput[];
    OR?: Prisma.EvaluationCycleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EvaluationCycleScalarWhereWithAggregatesInput | Prisma.EvaluationCycleScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"EvaluationCycle"> | string;
    name?: Prisma.StringWithAggregatesFilter<"EvaluationCycle"> | string;
    startDate?: Prisma.DateTimeWithAggregatesFilter<"EvaluationCycle"> | Date | string;
    endDate?: Prisma.DateTimeWithAggregatesFilter<"EvaluationCycle"> | Date | string;
    status?: Prisma.EnumCycleStatusWithAggregatesFilter<"EvaluationCycle"> | $Enums.CycleStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"EvaluationCycle"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"EvaluationCycle"> | Date | string;
};
export type EvaluationCycleCreateInput = {
    id?: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    status?: $Enums.CycleStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    evaluations?: Prisma.EvaluationCreateNestedManyWithoutCycleInput;
    sheets?: Prisma.EvaluationSheetCreateNestedManyWithoutCycleInput;
    calibrationMembers?: Prisma.CycleCalibrationMemberCreateNestedManyWithoutCycleInput;
};
export type EvaluationCycleUncheckedCreateInput = {
    id?: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    status?: $Enums.CycleStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    evaluations?: Prisma.EvaluationUncheckedCreateNestedManyWithoutCycleInput;
    sheets?: Prisma.EvaluationSheetUncheckedCreateNestedManyWithoutCycleInput;
    calibrationMembers?: Prisma.CycleCalibrationMemberUncheckedCreateNestedManyWithoutCycleInput;
};
export type EvaluationCycleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumCycleStatusFieldUpdateOperationsInput | $Enums.CycleStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    evaluations?: Prisma.EvaluationUpdateManyWithoutCycleNestedInput;
    sheets?: Prisma.EvaluationSheetUpdateManyWithoutCycleNestedInput;
    calibrationMembers?: Prisma.CycleCalibrationMemberUpdateManyWithoutCycleNestedInput;
};
export type EvaluationCycleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumCycleStatusFieldUpdateOperationsInput | $Enums.CycleStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    evaluations?: Prisma.EvaluationUncheckedUpdateManyWithoutCycleNestedInput;
    sheets?: Prisma.EvaluationSheetUncheckedUpdateManyWithoutCycleNestedInput;
    calibrationMembers?: Prisma.CycleCalibrationMemberUncheckedUpdateManyWithoutCycleNestedInput;
};
export type EvaluationCycleCreateManyInput = {
    id?: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    status?: $Enums.CycleStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EvaluationCycleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumCycleStatusFieldUpdateOperationsInput | $Enums.CycleStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvaluationCycleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumCycleStatusFieldUpdateOperationsInput | $Enums.CycleStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvaluationCycleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EvaluationCycleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EvaluationCycleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type EvaluationCycleScalarRelationFilter = {
    is?: Prisma.EvaluationCycleWhereInput;
    isNot?: Prisma.EvaluationCycleWhereInput;
};
export type EnumCycleStatusFieldUpdateOperationsInput = {
    set?: $Enums.CycleStatus;
};
export type EvaluationCycleCreateNestedOneWithoutCalibrationMembersInput = {
    create?: Prisma.XOR<Prisma.EvaluationCycleCreateWithoutCalibrationMembersInput, Prisma.EvaluationCycleUncheckedCreateWithoutCalibrationMembersInput>;
    connectOrCreate?: Prisma.EvaluationCycleCreateOrConnectWithoutCalibrationMembersInput;
    connect?: Prisma.EvaluationCycleWhereUniqueInput;
};
export type EvaluationCycleUpdateOneRequiredWithoutCalibrationMembersNestedInput = {
    create?: Prisma.XOR<Prisma.EvaluationCycleCreateWithoutCalibrationMembersInput, Prisma.EvaluationCycleUncheckedCreateWithoutCalibrationMembersInput>;
    connectOrCreate?: Prisma.EvaluationCycleCreateOrConnectWithoutCalibrationMembersInput;
    upsert?: Prisma.EvaluationCycleUpsertWithoutCalibrationMembersInput;
    connect?: Prisma.EvaluationCycleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EvaluationCycleUpdateToOneWithWhereWithoutCalibrationMembersInput, Prisma.EvaluationCycleUpdateWithoutCalibrationMembersInput>, Prisma.EvaluationCycleUncheckedUpdateWithoutCalibrationMembersInput>;
};
export type EvaluationCycleCreateNestedOneWithoutSheetsInput = {
    create?: Prisma.XOR<Prisma.EvaluationCycleCreateWithoutSheetsInput, Prisma.EvaluationCycleUncheckedCreateWithoutSheetsInput>;
    connectOrCreate?: Prisma.EvaluationCycleCreateOrConnectWithoutSheetsInput;
    connect?: Prisma.EvaluationCycleWhereUniqueInput;
};
export type EvaluationCycleUpdateOneRequiredWithoutSheetsNestedInput = {
    create?: Prisma.XOR<Prisma.EvaluationCycleCreateWithoutSheetsInput, Prisma.EvaluationCycleUncheckedCreateWithoutSheetsInput>;
    connectOrCreate?: Prisma.EvaluationCycleCreateOrConnectWithoutSheetsInput;
    upsert?: Prisma.EvaluationCycleUpsertWithoutSheetsInput;
    connect?: Prisma.EvaluationCycleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EvaluationCycleUpdateToOneWithWhereWithoutSheetsInput, Prisma.EvaluationCycleUpdateWithoutSheetsInput>, Prisma.EvaluationCycleUncheckedUpdateWithoutSheetsInput>;
};
export type EvaluationCycleCreateNestedOneWithoutEvaluationsInput = {
    create?: Prisma.XOR<Prisma.EvaluationCycleCreateWithoutEvaluationsInput, Prisma.EvaluationCycleUncheckedCreateWithoutEvaluationsInput>;
    connectOrCreate?: Prisma.EvaluationCycleCreateOrConnectWithoutEvaluationsInput;
    connect?: Prisma.EvaluationCycleWhereUniqueInput;
};
export type EvaluationCycleUpdateOneRequiredWithoutEvaluationsNestedInput = {
    create?: Prisma.XOR<Prisma.EvaluationCycleCreateWithoutEvaluationsInput, Prisma.EvaluationCycleUncheckedCreateWithoutEvaluationsInput>;
    connectOrCreate?: Prisma.EvaluationCycleCreateOrConnectWithoutEvaluationsInput;
    upsert?: Prisma.EvaluationCycleUpsertWithoutEvaluationsInput;
    connect?: Prisma.EvaluationCycleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EvaluationCycleUpdateToOneWithWhereWithoutEvaluationsInput, Prisma.EvaluationCycleUpdateWithoutEvaluationsInput>, Prisma.EvaluationCycleUncheckedUpdateWithoutEvaluationsInput>;
};
export type EvaluationCycleCreateWithoutCalibrationMembersInput = {
    id?: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    status?: $Enums.CycleStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    evaluations?: Prisma.EvaluationCreateNestedManyWithoutCycleInput;
    sheets?: Prisma.EvaluationSheetCreateNestedManyWithoutCycleInput;
};
export type EvaluationCycleUncheckedCreateWithoutCalibrationMembersInput = {
    id?: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    status?: $Enums.CycleStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    evaluations?: Prisma.EvaluationUncheckedCreateNestedManyWithoutCycleInput;
    sheets?: Prisma.EvaluationSheetUncheckedCreateNestedManyWithoutCycleInput;
};
export type EvaluationCycleCreateOrConnectWithoutCalibrationMembersInput = {
    where: Prisma.EvaluationCycleWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvaluationCycleCreateWithoutCalibrationMembersInput, Prisma.EvaluationCycleUncheckedCreateWithoutCalibrationMembersInput>;
};
export type EvaluationCycleUpsertWithoutCalibrationMembersInput = {
    update: Prisma.XOR<Prisma.EvaluationCycleUpdateWithoutCalibrationMembersInput, Prisma.EvaluationCycleUncheckedUpdateWithoutCalibrationMembersInput>;
    create: Prisma.XOR<Prisma.EvaluationCycleCreateWithoutCalibrationMembersInput, Prisma.EvaluationCycleUncheckedCreateWithoutCalibrationMembersInput>;
    where?: Prisma.EvaluationCycleWhereInput;
};
export type EvaluationCycleUpdateToOneWithWhereWithoutCalibrationMembersInput = {
    where?: Prisma.EvaluationCycleWhereInput;
    data: Prisma.XOR<Prisma.EvaluationCycleUpdateWithoutCalibrationMembersInput, Prisma.EvaluationCycleUncheckedUpdateWithoutCalibrationMembersInput>;
};
export type EvaluationCycleUpdateWithoutCalibrationMembersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumCycleStatusFieldUpdateOperationsInput | $Enums.CycleStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    evaluations?: Prisma.EvaluationUpdateManyWithoutCycleNestedInput;
    sheets?: Prisma.EvaluationSheetUpdateManyWithoutCycleNestedInput;
};
export type EvaluationCycleUncheckedUpdateWithoutCalibrationMembersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumCycleStatusFieldUpdateOperationsInput | $Enums.CycleStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    evaluations?: Prisma.EvaluationUncheckedUpdateManyWithoutCycleNestedInput;
    sheets?: Prisma.EvaluationSheetUncheckedUpdateManyWithoutCycleNestedInput;
};
export type EvaluationCycleCreateWithoutSheetsInput = {
    id?: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    status?: $Enums.CycleStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    evaluations?: Prisma.EvaluationCreateNestedManyWithoutCycleInput;
    calibrationMembers?: Prisma.CycleCalibrationMemberCreateNestedManyWithoutCycleInput;
};
export type EvaluationCycleUncheckedCreateWithoutSheetsInput = {
    id?: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    status?: $Enums.CycleStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    evaluations?: Prisma.EvaluationUncheckedCreateNestedManyWithoutCycleInput;
    calibrationMembers?: Prisma.CycleCalibrationMemberUncheckedCreateNestedManyWithoutCycleInput;
};
export type EvaluationCycleCreateOrConnectWithoutSheetsInput = {
    where: Prisma.EvaluationCycleWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvaluationCycleCreateWithoutSheetsInput, Prisma.EvaluationCycleUncheckedCreateWithoutSheetsInput>;
};
export type EvaluationCycleUpsertWithoutSheetsInput = {
    update: Prisma.XOR<Prisma.EvaluationCycleUpdateWithoutSheetsInput, Prisma.EvaluationCycleUncheckedUpdateWithoutSheetsInput>;
    create: Prisma.XOR<Prisma.EvaluationCycleCreateWithoutSheetsInput, Prisma.EvaluationCycleUncheckedCreateWithoutSheetsInput>;
    where?: Prisma.EvaluationCycleWhereInput;
};
export type EvaluationCycleUpdateToOneWithWhereWithoutSheetsInput = {
    where?: Prisma.EvaluationCycleWhereInput;
    data: Prisma.XOR<Prisma.EvaluationCycleUpdateWithoutSheetsInput, Prisma.EvaluationCycleUncheckedUpdateWithoutSheetsInput>;
};
export type EvaluationCycleUpdateWithoutSheetsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumCycleStatusFieldUpdateOperationsInput | $Enums.CycleStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    evaluations?: Prisma.EvaluationUpdateManyWithoutCycleNestedInput;
    calibrationMembers?: Prisma.CycleCalibrationMemberUpdateManyWithoutCycleNestedInput;
};
export type EvaluationCycleUncheckedUpdateWithoutSheetsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumCycleStatusFieldUpdateOperationsInput | $Enums.CycleStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    evaluations?: Prisma.EvaluationUncheckedUpdateManyWithoutCycleNestedInput;
    calibrationMembers?: Prisma.CycleCalibrationMemberUncheckedUpdateManyWithoutCycleNestedInput;
};
export type EvaluationCycleCreateWithoutEvaluationsInput = {
    id?: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    status?: $Enums.CycleStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sheets?: Prisma.EvaluationSheetCreateNestedManyWithoutCycleInput;
    calibrationMembers?: Prisma.CycleCalibrationMemberCreateNestedManyWithoutCycleInput;
};
export type EvaluationCycleUncheckedCreateWithoutEvaluationsInput = {
    id?: string;
    name: string;
    startDate: Date | string;
    endDate: Date | string;
    status?: $Enums.CycleStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sheets?: Prisma.EvaluationSheetUncheckedCreateNestedManyWithoutCycleInput;
    calibrationMembers?: Prisma.CycleCalibrationMemberUncheckedCreateNestedManyWithoutCycleInput;
};
export type EvaluationCycleCreateOrConnectWithoutEvaluationsInput = {
    where: Prisma.EvaluationCycleWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvaluationCycleCreateWithoutEvaluationsInput, Prisma.EvaluationCycleUncheckedCreateWithoutEvaluationsInput>;
};
export type EvaluationCycleUpsertWithoutEvaluationsInput = {
    update: Prisma.XOR<Prisma.EvaluationCycleUpdateWithoutEvaluationsInput, Prisma.EvaluationCycleUncheckedUpdateWithoutEvaluationsInput>;
    create: Prisma.XOR<Prisma.EvaluationCycleCreateWithoutEvaluationsInput, Prisma.EvaluationCycleUncheckedCreateWithoutEvaluationsInput>;
    where?: Prisma.EvaluationCycleWhereInput;
};
export type EvaluationCycleUpdateToOneWithWhereWithoutEvaluationsInput = {
    where?: Prisma.EvaluationCycleWhereInput;
    data: Prisma.XOR<Prisma.EvaluationCycleUpdateWithoutEvaluationsInput, Prisma.EvaluationCycleUncheckedUpdateWithoutEvaluationsInput>;
};
export type EvaluationCycleUpdateWithoutEvaluationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumCycleStatusFieldUpdateOperationsInput | $Enums.CycleStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sheets?: Prisma.EvaluationSheetUpdateManyWithoutCycleNestedInput;
    calibrationMembers?: Prisma.CycleCalibrationMemberUpdateManyWithoutCycleNestedInput;
};
export type EvaluationCycleUncheckedUpdateWithoutEvaluationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumCycleStatusFieldUpdateOperationsInput | $Enums.CycleStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sheets?: Prisma.EvaluationSheetUncheckedUpdateManyWithoutCycleNestedInput;
    calibrationMembers?: Prisma.CycleCalibrationMemberUncheckedUpdateManyWithoutCycleNestedInput;
};
export type EvaluationCycleCountOutputType = {
    evaluations: number;
    sheets: number;
    calibrationMembers: number;
};
export type EvaluationCycleCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    evaluations?: boolean | EvaluationCycleCountOutputTypeCountEvaluationsArgs;
    sheets?: boolean | EvaluationCycleCountOutputTypeCountSheetsArgs;
    calibrationMembers?: boolean | EvaluationCycleCountOutputTypeCountCalibrationMembersArgs;
};
export type EvaluationCycleCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationCycleCountOutputTypeSelect<ExtArgs> | null;
};
export type EvaluationCycleCountOutputTypeCountEvaluationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvaluationWhereInput;
};
export type EvaluationCycleCountOutputTypeCountSheetsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvaluationSheetWhereInput;
};
export type EvaluationCycleCountOutputTypeCountCalibrationMembersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CycleCalibrationMemberWhereInput;
};
export type EvaluationCycleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    evaluations?: boolean | Prisma.EvaluationCycle$evaluationsArgs<ExtArgs>;
    sheets?: boolean | Prisma.EvaluationCycle$sheetsArgs<ExtArgs>;
    calibrationMembers?: boolean | Prisma.EvaluationCycle$calibrationMembersArgs<ExtArgs>;
    _count?: boolean | Prisma.EvaluationCycleCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["evaluationCycle"]>;
export type EvaluationCycleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["evaluationCycle"]>;
export type EvaluationCycleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["evaluationCycle"]>;
export type EvaluationCycleSelectScalar = {
    id?: boolean;
    name?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type EvaluationCycleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "startDate" | "endDate" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["evaluationCycle"]>;
export type EvaluationCycleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    evaluations?: boolean | Prisma.EvaluationCycle$evaluationsArgs<ExtArgs>;
    sheets?: boolean | Prisma.EvaluationCycle$sheetsArgs<ExtArgs>;
    calibrationMembers?: boolean | Prisma.EvaluationCycle$calibrationMembersArgs<ExtArgs>;
    _count?: boolean | Prisma.EvaluationCycleCountOutputTypeDefaultArgs<ExtArgs>;
};
export type EvaluationCycleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type EvaluationCycleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $EvaluationCyclePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EvaluationCycle";
    objects: {
        evaluations: Prisma.$EvaluationPayload<ExtArgs>[];
        sheets: Prisma.$EvaluationSheetPayload<ExtArgs>[];
        calibrationMembers: Prisma.$CycleCalibrationMemberPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        startDate: Date;
        endDate: Date;
        status: $Enums.CycleStatus;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["evaluationCycle"]>;
    composites: {};
};
export type EvaluationCycleGetPayload<S extends boolean | null | undefined | EvaluationCycleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EvaluationCyclePayload, S>;
export type EvaluationCycleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EvaluationCycleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EvaluationCycleCountAggregateInputType | true;
};
export interface EvaluationCycleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EvaluationCycle'];
        meta: {
            name: 'EvaluationCycle';
        };
    };
    findUnique<T extends EvaluationCycleFindUniqueArgs>(args: Prisma.SelectSubset<T, EvaluationCycleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EvaluationCycleClient<runtime.Types.Result.GetResult<Prisma.$EvaluationCyclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EvaluationCycleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EvaluationCycleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EvaluationCycleClient<runtime.Types.Result.GetResult<Prisma.$EvaluationCyclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EvaluationCycleFindFirstArgs>(args?: Prisma.SelectSubset<T, EvaluationCycleFindFirstArgs<ExtArgs>>): Prisma.Prisma__EvaluationCycleClient<runtime.Types.Result.GetResult<Prisma.$EvaluationCyclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EvaluationCycleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EvaluationCycleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EvaluationCycleClient<runtime.Types.Result.GetResult<Prisma.$EvaluationCyclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EvaluationCycleFindManyArgs>(args?: Prisma.SelectSubset<T, EvaluationCycleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvaluationCyclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EvaluationCycleCreateArgs>(args: Prisma.SelectSubset<T, EvaluationCycleCreateArgs<ExtArgs>>): Prisma.Prisma__EvaluationCycleClient<runtime.Types.Result.GetResult<Prisma.$EvaluationCyclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EvaluationCycleCreateManyArgs>(args?: Prisma.SelectSubset<T, EvaluationCycleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EvaluationCycleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EvaluationCycleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvaluationCyclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EvaluationCycleDeleteArgs>(args: Prisma.SelectSubset<T, EvaluationCycleDeleteArgs<ExtArgs>>): Prisma.Prisma__EvaluationCycleClient<runtime.Types.Result.GetResult<Prisma.$EvaluationCyclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EvaluationCycleUpdateArgs>(args: Prisma.SelectSubset<T, EvaluationCycleUpdateArgs<ExtArgs>>): Prisma.Prisma__EvaluationCycleClient<runtime.Types.Result.GetResult<Prisma.$EvaluationCyclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EvaluationCycleDeleteManyArgs>(args?: Prisma.SelectSubset<T, EvaluationCycleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EvaluationCycleUpdateManyArgs>(args: Prisma.SelectSubset<T, EvaluationCycleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EvaluationCycleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EvaluationCycleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvaluationCyclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EvaluationCycleUpsertArgs>(args: Prisma.SelectSubset<T, EvaluationCycleUpsertArgs<ExtArgs>>): Prisma.Prisma__EvaluationCycleClient<runtime.Types.Result.GetResult<Prisma.$EvaluationCyclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EvaluationCycleCountArgs>(args?: Prisma.Subset<T, EvaluationCycleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EvaluationCycleCountAggregateOutputType> : number>;
    aggregate<T extends EvaluationCycleAggregateArgs>(args: Prisma.Subset<T, EvaluationCycleAggregateArgs>): Prisma.PrismaPromise<GetEvaluationCycleAggregateType<T>>;
    groupBy<T extends EvaluationCycleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EvaluationCycleGroupByArgs['orderBy'];
    } : {
        orderBy?: EvaluationCycleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EvaluationCycleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvaluationCycleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EvaluationCycleFieldRefs;
}
export interface Prisma__EvaluationCycleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    evaluations<T extends Prisma.EvaluationCycle$evaluationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EvaluationCycle$evaluationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    sheets<T extends Prisma.EvaluationCycle$sheetsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EvaluationCycle$sheetsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvaluationSheetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    calibrationMembers<T extends Prisma.EvaluationCycle$calibrationMembersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EvaluationCycle$calibrationMembersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CycleCalibrationMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EvaluationCycleFieldRefs {
    readonly id: Prisma.FieldRef<"EvaluationCycle", 'String'>;
    readonly name: Prisma.FieldRef<"EvaluationCycle", 'String'>;
    readonly startDate: Prisma.FieldRef<"EvaluationCycle", 'DateTime'>;
    readonly endDate: Prisma.FieldRef<"EvaluationCycle", 'DateTime'>;
    readonly status: Prisma.FieldRef<"EvaluationCycle", 'CycleStatus'>;
    readonly createdAt: Prisma.FieldRef<"EvaluationCycle", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"EvaluationCycle", 'DateTime'>;
}
export type EvaluationCycleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationCycleSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationCycleOmit<ExtArgs> | null;
    include?: Prisma.EvaluationCycleInclude<ExtArgs> | null;
    where: Prisma.EvaluationCycleWhereUniqueInput;
};
export type EvaluationCycleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationCycleSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationCycleOmit<ExtArgs> | null;
    include?: Prisma.EvaluationCycleInclude<ExtArgs> | null;
    where: Prisma.EvaluationCycleWhereUniqueInput;
};
export type EvaluationCycleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationCycleSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationCycleOmit<ExtArgs> | null;
    include?: Prisma.EvaluationCycleInclude<ExtArgs> | null;
    where?: Prisma.EvaluationCycleWhereInput;
    orderBy?: Prisma.EvaluationCycleOrderByWithRelationInput | Prisma.EvaluationCycleOrderByWithRelationInput[];
    cursor?: Prisma.EvaluationCycleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EvaluationCycleScalarFieldEnum | Prisma.EvaluationCycleScalarFieldEnum[];
};
export type EvaluationCycleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationCycleSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationCycleOmit<ExtArgs> | null;
    include?: Prisma.EvaluationCycleInclude<ExtArgs> | null;
    where?: Prisma.EvaluationCycleWhereInput;
    orderBy?: Prisma.EvaluationCycleOrderByWithRelationInput | Prisma.EvaluationCycleOrderByWithRelationInput[];
    cursor?: Prisma.EvaluationCycleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EvaluationCycleScalarFieldEnum | Prisma.EvaluationCycleScalarFieldEnum[];
};
export type EvaluationCycleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationCycleSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationCycleOmit<ExtArgs> | null;
    include?: Prisma.EvaluationCycleInclude<ExtArgs> | null;
    where?: Prisma.EvaluationCycleWhereInput;
    orderBy?: Prisma.EvaluationCycleOrderByWithRelationInput | Prisma.EvaluationCycleOrderByWithRelationInput[];
    cursor?: Prisma.EvaluationCycleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EvaluationCycleScalarFieldEnum | Prisma.EvaluationCycleScalarFieldEnum[];
};
export type EvaluationCycleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationCycleSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationCycleOmit<ExtArgs> | null;
    include?: Prisma.EvaluationCycleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EvaluationCycleCreateInput, Prisma.EvaluationCycleUncheckedCreateInput>;
};
export type EvaluationCycleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EvaluationCycleCreateManyInput | Prisma.EvaluationCycleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EvaluationCycleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationCycleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EvaluationCycleOmit<ExtArgs> | null;
    data: Prisma.EvaluationCycleCreateManyInput | Prisma.EvaluationCycleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EvaluationCycleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationCycleSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationCycleOmit<ExtArgs> | null;
    include?: Prisma.EvaluationCycleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EvaluationCycleUpdateInput, Prisma.EvaluationCycleUncheckedUpdateInput>;
    where: Prisma.EvaluationCycleWhereUniqueInput;
};
export type EvaluationCycleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EvaluationCycleUpdateManyMutationInput, Prisma.EvaluationCycleUncheckedUpdateManyInput>;
    where?: Prisma.EvaluationCycleWhereInput;
    limit?: number;
};
export type EvaluationCycleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationCycleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EvaluationCycleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EvaluationCycleUpdateManyMutationInput, Prisma.EvaluationCycleUncheckedUpdateManyInput>;
    where?: Prisma.EvaluationCycleWhereInput;
    limit?: number;
};
export type EvaluationCycleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationCycleSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationCycleOmit<ExtArgs> | null;
    include?: Prisma.EvaluationCycleInclude<ExtArgs> | null;
    where: Prisma.EvaluationCycleWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvaluationCycleCreateInput, Prisma.EvaluationCycleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EvaluationCycleUpdateInput, Prisma.EvaluationCycleUncheckedUpdateInput>;
};
export type EvaluationCycleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationCycleSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationCycleOmit<ExtArgs> | null;
    include?: Prisma.EvaluationCycleInclude<ExtArgs> | null;
    where: Prisma.EvaluationCycleWhereUniqueInput;
};
export type EvaluationCycleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvaluationCycleWhereInput;
    limit?: number;
};
export type EvaluationCycle$evaluationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type EvaluationCycle$sheetsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationSheetSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationSheetOmit<ExtArgs> | null;
    include?: Prisma.EvaluationSheetInclude<ExtArgs> | null;
    where?: Prisma.EvaluationSheetWhereInput;
    orderBy?: Prisma.EvaluationSheetOrderByWithRelationInput | Prisma.EvaluationSheetOrderByWithRelationInput[];
    cursor?: Prisma.EvaluationSheetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EvaluationSheetScalarFieldEnum | Prisma.EvaluationSheetScalarFieldEnum[];
};
export type EvaluationCycle$calibrationMembersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CycleCalibrationMemberSelect<ExtArgs> | null;
    omit?: Prisma.CycleCalibrationMemberOmit<ExtArgs> | null;
    include?: Prisma.CycleCalibrationMemberInclude<ExtArgs> | null;
    where?: Prisma.CycleCalibrationMemberWhereInput;
    orderBy?: Prisma.CycleCalibrationMemberOrderByWithRelationInput | Prisma.CycleCalibrationMemberOrderByWithRelationInput[];
    cursor?: Prisma.CycleCalibrationMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CycleCalibrationMemberScalarFieldEnum | Prisma.CycleCalibrationMemberScalarFieldEnum[];
};
export type EvaluationCycleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationCycleSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationCycleOmit<ExtArgs> | null;
    include?: Prisma.EvaluationCycleInclude<ExtArgs> | null;
};
export {};
