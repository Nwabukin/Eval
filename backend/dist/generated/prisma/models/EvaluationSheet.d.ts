import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EvaluationSheetModel = runtime.Types.Result.DefaultSelection<Prisma.$EvaluationSheetPayload>;
export type AggregateEvaluationSheet = {
    _count: EvaluationSheetCountAggregateOutputType | null;
    _avg: EvaluationSheetAvgAggregateOutputType | null;
    _sum: EvaluationSheetSumAggregateOutputType | null;
    _min: EvaluationSheetMinAggregateOutputType | null;
    _max: EvaluationSheetMaxAggregateOutputType | null;
};
export type EvaluationSheetAvgAggregateOutputType = {
    weight: number | null;
    minScore: number | null;
    maxScore: number | null;
    sortOrder: number | null;
};
export type EvaluationSheetSumAggregateOutputType = {
    weight: number | null;
    minScore: number | null;
    maxScore: number | null;
    sortOrder: number | null;
};
export type EvaluationSheetMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    weight: number | null;
    minScore: number | null;
    maxScore: number | null;
    sortOrder: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    cycleId: string | null;
    departmentId: string | null;
    levelId: string | null;
};
export type EvaluationSheetMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    weight: number | null;
    minScore: number | null;
    maxScore: number | null;
    sortOrder: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    cycleId: string | null;
    departmentId: string | null;
    levelId: string | null;
};
export type EvaluationSheetCountAggregateOutputType = {
    id: number;
    name: number;
    weight: number;
    minScore: number;
    maxScore: number;
    sortOrder: number;
    createdAt: number;
    updatedAt: number;
    cycleId: number;
    departmentId: number;
    levelId: number;
    _all: number;
};
export type EvaluationSheetAvgAggregateInputType = {
    weight?: true;
    minScore?: true;
    maxScore?: true;
    sortOrder?: true;
};
export type EvaluationSheetSumAggregateInputType = {
    weight?: true;
    minScore?: true;
    maxScore?: true;
    sortOrder?: true;
};
export type EvaluationSheetMinAggregateInputType = {
    id?: true;
    name?: true;
    weight?: true;
    minScore?: true;
    maxScore?: true;
    sortOrder?: true;
    createdAt?: true;
    updatedAt?: true;
    cycleId?: true;
    departmentId?: true;
    levelId?: true;
};
export type EvaluationSheetMaxAggregateInputType = {
    id?: true;
    name?: true;
    weight?: true;
    minScore?: true;
    maxScore?: true;
    sortOrder?: true;
    createdAt?: true;
    updatedAt?: true;
    cycleId?: true;
    departmentId?: true;
    levelId?: true;
};
export type EvaluationSheetCountAggregateInputType = {
    id?: true;
    name?: true;
    weight?: true;
    minScore?: true;
    maxScore?: true;
    sortOrder?: true;
    createdAt?: true;
    updatedAt?: true;
    cycleId?: true;
    departmentId?: true;
    levelId?: true;
    _all?: true;
};
export type EvaluationSheetAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvaluationSheetWhereInput;
    orderBy?: Prisma.EvaluationSheetOrderByWithRelationInput | Prisma.EvaluationSheetOrderByWithRelationInput[];
    cursor?: Prisma.EvaluationSheetWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EvaluationSheetCountAggregateInputType;
    _avg?: EvaluationSheetAvgAggregateInputType;
    _sum?: EvaluationSheetSumAggregateInputType;
    _min?: EvaluationSheetMinAggregateInputType;
    _max?: EvaluationSheetMaxAggregateInputType;
};
export type GetEvaluationSheetAggregateType<T extends EvaluationSheetAggregateArgs> = {
    [P in keyof T & keyof AggregateEvaluationSheet]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEvaluationSheet[P]> : Prisma.GetScalarType<T[P], AggregateEvaluationSheet[P]>;
};
export type EvaluationSheetGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvaluationSheetWhereInput;
    orderBy?: Prisma.EvaluationSheetOrderByWithAggregationInput | Prisma.EvaluationSheetOrderByWithAggregationInput[];
    by: Prisma.EvaluationSheetScalarFieldEnum[] | Prisma.EvaluationSheetScalarFieldEnum;
    having?: Prisma.EvaluationSheetScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EvaluationSheetCountAggregateInputType | true;
    _avg?: EvaluationSheetAvgAggregateInputType;
    _sum?: EvaluationSheetSumAggregateInputType;
    _min?: EvaluationSheetMinAggregateInputType;
    _max?: EvaluationSheetMaxAggregateInputType;
};
export type EvaluationSheetGroupByOutputType = {
    id: string;
    name: string;
    weight: number;
    minScore: number;
    maxScore: number;
    sortOrder: number;
    createdAt: Date;
    updatedAt: Date;
    cycleId: string;
    departmentId: string;
    levelId: string;
    _count: EvaluationSheetCountAggregateOutputType | null;
    _avg: EvaluationSheetAvgAggregateOutputType | null;
    _sum: EvaluationSheetSumAggregateOutputType | null;
    _min: EvaluationSheetMinAggregateOutputType | null;
    _max: EvaluationSheetMaxAggregateOutputType | null;
};
type GetEvaluationSheetGroupByPayload<T extends EvaluationSheetGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EvaluationSheetGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EvaluationSheetGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EvaluationSheetGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EvaluationSheetGroupByOutputType[P]>;
}>>;
export type EvaluationSheetWhereInput = {
    AND?: Prisma.EvaluationSheetWhereInput | Prisma.EvaluationSheetWhereInput[];
    OR?: Prisma.EvaluationSheetWhereInput[];
    NOT?: Prisma.EvaluationSheetWhereInput | Prisma.EvaluationSheetWhereInput[];
    id?: Prisma.UuidFilter<"EvaluationSheet"> | string;
    name?: Prisma.StringFilter<"EvaluationSheet"> | string;
    weight?: Prisma.IntFilter<"EvaluationSheet"> | number;
    minScore?: Prisma.IntFilter<"EvaluationSheet"> | number;
    maxScore?: Prisma.IntFilter<"EvaluationSheet"> | number;
    sortOrder?: Prisma.IntFilter<"EvaluationSheet"> | number;
    createdAt?: Prisma.DateTimeFilter<"EvaluationSheet"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EvaluationSheet"> | Date | string;
    cycleId?: Prisma.UuidFilter<"EvaluationSheet"> | string;
    departmentId?: Prisma.UuidFilter<"EvaluationSheet"> | string;
    levelId?: Prisma.UuidFilter<"EvaluationSheet"> | string;
    cycle?: Prisma.XOR<Prisma.EvaluationCycleScalarRelationFilter, Prisma.EvaluationCycleWhereInput>;
    department?: Prisma.XOR<Prisma.DepartmentScalarRelationFilter, Prisma.DepartmentWhereInput>;
    level?: Prisma.XOR<Prisma.LevelScalarRelationFilter, Prisma.LevelWhereInput>;
    questions?: Prisma.EvaluationQuestionListRelationFilter;
};
export type EvaluationSheetOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    minScore?: Prisma.SortOrder;
    maxScore?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    cycleId?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
    levelId?: Prisma.SortOrder;
    cycle?: Prisma.EvaluationCycleOrderByWithRelationInput;
    department?: Prisma.DepartmentOrderByWithRelationInput;
    level?: Prisma.LevelOrderByWithRelationInput;
    questions?: Prisma.EvaluationQuestionOrderByRelationAggregateInput;
};
export type EvaluationSheetWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.EvaluationSheetWhereInput | Prisma.EvaluationSheetWhereInput[];
    OR?: Prisma.EvaluationSheetWhereInput[];
    NOT?: Prisma.EvaluationSheetWhereInput | Prisma.EvaluationSheetWhereInput[];
    name?: Prisma.StringFilter<"EvaluationSheet"> | string;
    weight?: Prisma.IntFilter<"EvaluationSheet"> | number;
    minScore?: Prisma.IntFilter<"EvaluationSheet"> | number;
    maxScore?: Prisma.IntFilter<"EvaluationSheet"> | number;
    sortOrder?: Prisma.IntFilter<"EvaluationSheet"> | number;
    createdAt?: Prisma.DateTimeFilter<"EvaluationSheet"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EvaluationSheet"> | Date | string;
    cycleId?: Prisma.UuidFilter<"EvaluationSheet"> | string;
    departmentId?: Prisma.UuidFilter<"EvaluationSheet"> | string;
    levelId?: Prisma.UuidFilter<"EvaluationSheet"> | string;
    cycle?: Prisma.XOR<Prisma.EvaluationCycleScalarRelationFilter, Prisma.EvaluationCycleWhereInput>;
    department?: Prisma.XOR<Prisma.DepartmentScalarRelationFilter, Prisma.DepartmentWhereInput>;
    level?: Prisma.XOR<Prisma.LevelScalarRelationFilter, Prisma.LevelWhereInput>;
    questions?: Prisma.EvaluationQuestionListRelationFilter;
}, "id">;
export type EvaluationSheetOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    minScore?: Prisma.SortOrder;
    maxScore?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    cycleId?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
    levelId?: Prisma.SortOrder;
    _count?: Prisma.EvaluationSheetCountOrderByAggregateInput;
    _avg?: Prisma.EvaluationSheetAvgOrderByAggregateInput;
    _max?: Prisma.EvaluationSheetMaxOrderByAggregateInput;
    _min?: Prisma.EvaluationSheetMinOrderByAggregateInput;
    _sum?: Prisma.EvaluationSheetSumOrderByAggregateInput;
};
export type EvaluationSheetScalarWhereWithAggregatesInput = {
    AND?: Prisma.EvaluationSheetScalarWhereWithAggregatesInput | Prisma.EvaluationSheetScalarWhereWithAggregatesInput[];
    OR?: Prisma.EvaluationSheetScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EvaluationSheetScalarWhereWithAggregatesInput | Prisma.EvaluationSheetScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"EvaluationSheet"> | string;
    name?: Prisma.StringWithAggregatesFilter<"EvaluationSheet"> | string;
    weight?: Prisma.IntWithAggregatesFilter<"EvaluationSheet"> | number;
    minScore?: Prisma.IntWithAggregatesFilter<"EvaluationSheet"> | number;
    maxScore?: Prisma.IntWithAggregatesFilter<"EvaluationSheet"> | number;
    sortOrder?: Prisma.IntWithAggregatesFilter<"EvaluationSheet"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"EvaluationSheet"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"EvaluationSheet"> | Date | string;
    cycleId?: Prisma.UuidWithAggregatesFilter<"EvaluationSheet"> | string;
    departmentId?: Prisma.UuidWithAggregatesFilter<"EvaluationSheet"> | string;
    levelId?: Prisma.UuidWithAggregatesFilter<"EvaluationSheet"> | string;
};
export type EvaluationSheetCreateInput = {
    id?: string;
    name: string;
    weight?: number;
    minScore?: number;
    maxScore?: number;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cycle: Prisma.EvaluationCycleCreateNestedOneWithoutSheetsInput;
    department: Prisma.DepartmentCreateNestedOneWithoutSheetsInput;
    level: Prisma.LevelCreateNestedOneWithoutSheetsInput;
    questions?: Prisma.EvaluationQuestionCreateNestedManyWithoutSheetInput;
};
export type EvaluationSheetUncheckedCreateInput = {
    id?: string;
    name: string;
    weight?: number;
    minScore?: number;
    maxScore?: number;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cycleId: string;
    departmentId: string;
    levelId: string;
    questions?: Prisma.EvaluationQuestionUncheckedCreateNestedManyWithoutSheetInput;
};
export type EvaluationSheetUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    minScore?: Prisma.IntFieldUpdateOperationsInput | number;
    maxScore?: Prisma.IntFieldUpdateOperationsInput | number;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cycle?: Prisma.EvaluationCycleUpdateOneRequiredWithoutSheetsNestedInput;
    department?: Prisma.DepartmentUpdateOneRequiredWithoutSheetsNestedInput;
    level?: Prisma.LevelUpdateOneRequiredWithoutSheetsNestedInput;
    questions?: Prisma.EvaluationQuestionUpdateManyWithoutSheetNestedInput;
};
export type EvaluationSheetUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    minScore?: Prisma.IntFieldUpdateOperationsInput | number;
    maxScore?: Prisma.IntFieldUpdateOperationsInput | number;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cycleId?: Prisma.StringFieldUpdateOperationsInput | string;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    levelId?: Prisma.StringFieldUpdateOperationsInput | string;
    questions?: Prisma.EvaluationQuestionUncheckedUpdateManyWithoutSheetNestedInput;
};
export type EvaluationSheetCreateManyInput = {
    id?: string;
    name: string;
    weight?: number;
    minScore?: number;
    maxScore?: number;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cycleId: string;
    departmentId: string;
    levelId: string;
};
export type EvaluationSheetUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    minScore?: Prisma.IntFieldUpdateOperationsInput | number;
    maxScore?: Prisma.IntFieldUpdateOperationsInput | number;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvaluationSheetUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    minScore?: Prisma.IntFieldUpdateOperationsInput | number;
    maxScore?: Prisma.IntFieldUpdateOperationsInput | number;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cycleId?: Prisma.StringFieldUpdateOperationsInput | string;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    levelId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EvaluationSheetListRelationFilter = {
    every?: Prisma.EvaluationSheetWhereInput;
    some?: Prisma.EvaluationSheetWhereInput;
    none?: Prisma.EvaluationSheetWhereInput;
};
export type EvaluationSheetOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EvaluationSheetCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    minScore?: Prisma.SortOrder;
    maxScore?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    cycleId?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
    levelId?: Prisma.SortOrder;
};
export type EvaluationSheetAvgOrderByAggregateInput = {
    weight?: Prisma.SortOrder;
    minScore?: Prisma.SortOrder;
    maxScore?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type EvaluationSheetMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    minScore?: Prisma.SortOrder;
    maxScore?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    cycleId?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
    levelId?: Prisma.SortOrder;
};
export type EvaluationSheetMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    minScore?: Prisma.SortOrder;
    maxScore?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    cycleId?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
    levelId?: Prisma.SortOrder;
};
export type EvaluationSheetSumOrderByAggregateInput = {
    weight?: Prisma.SortOrder;
    minScore?: Prisma.SortOrder;
    maxScore?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type EvaluationSheetScalarRelationFilter = {
    is?: Prisma.EvaluationSheetWhereInput;
    isNot?: Prisma.EvaluationSheetWhereInput;
};
export type EvaluationSheetCreateNestedManyWithoutDepartmentInput = {
    create?: Prisma.XOR<Prisma.EvaluationSheetCreateWithoutDepartmentInput, Prisma.EvaluationSheetUncheckedCreateWithoutDepartmentInput> | Prisma.EvaluationSheetCreateWithoutDepartmentInput[] | Prisma.EvaluationSheetUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.EvaluationSheetCreateOrConnectWithoutDepartmentInput | Prisma.EvaluationSheetCreateOrConnectWithoutDepartmentInput[];
    createMany?: Prisma.EvaluationSheetCreateManyDepartmentInputEnvelope;
    connect?: Prisma.EvaluationSheetWhereUniqueInput | Prisma.EvaluationSheetWhereUniqueInput[];
};
export type EvaluationSheetUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: Prisma.XOR<Prisma.EvaluationSheetCreateWithoutDepartmentInput, Prisma.EvaluationSheetUncheckedCreateWithoutDepartmentInput> | Prisma.EvaluationSheetCreateWithoutDepartmentInput[] | Prisma.EvaluationSheetUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.EvaluationSheetCreateOrConnectWithoutDepartmentInput | Prisma.EvaluationSheetCreateOrConnectWithoutDepartmentInput[];
    createMany?: Prisma.EvaluationSheetCreateManyDepartmentInputEnvelope;
    connect?: Prisma.EvaluationSheetWhereUniqueInput | Prisma.EvaluationSheetWhereUniqueInput[];
};
export type EvaluationSheetUpdateManyWithoutDepartmentNestedInput = {
    create?: Prisma.XOR<Prisma.EvaluationSheetCreateWithoutDepartmentInput, Prisma.EvaluationSheetUncheckedCreateWithoutDepartmentInput> | Prisma.EvaluationSheetCreateWithoutDepartmentInput[] | Prisma.EvaluationSheetUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.EvaluationSheetCreateOrConnectWithoutDepartmentInput | Prisma.EvaluationSheetCreateOrConnectWithoutDepartmentInput[];
    upsert?: Prisma.EvaluationSheetUpsertWithWhereUniqueWithoutDepartmentInput | Prisma.EvaluationSheetUpsertWithWhereUniqueWithoutDepartmentInput[];
    createMany?: Prisma.EvaluationSheetCreateManyDepartmentInputEnvelope;
    set?: Prisma.EvaluationSheetWhereUniqueInput | Prisma.EvaluationSheetWhereUniqueInput[];
    disconnect?: Prisma.EvaluationSheetWhereUniqueInput | Prisma.EvaluationSheetWhereUniqueInput[];
    delete?: Prisma.EvaluationSheetWhereUniqueInput | Prisma.EvaluationSheetWhereUniqueInput[];
    connect?: Prisma.EvaluationSheetWhereUniqueInput | Prisma.EvaluationSheetWhereUniqueInput[];
    update?: Prisma.EvaluationSheetUpdateWithWhereUniqueWithoutDepartmentInput | Prisma.EvaluationSheetUpdateWithWhereUniqueWithoutDepartmentInput[];
    updateMany?: Prisma.EvaluationSheetUpdateManyWithWhereWithoutDepartmentInput | Prisma.EvaluationSheetUpdateManyWithWhereWithoutDepartmentInput[];
    deleteMany?: Prisma.EvaluationSheetScalarWhereInput | Prisma.EvaluationSheetScalarWhereInput[];
};
export type EvaluationSheetUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: Prisma.XOR<Prisma.EvaluationSheetCreateWithoutDepartmentInput, Prisma.EvaluationSheetUncheckedCreateWithoutDepartmentInput> | Prisma.EvaluationSheetCreateWithoutDepartmentInput[] | Prisma.EvaluationSheetUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.EvaluationSheetCreateOrConnectWithoutDepartmentInput | Prisma.EvaluationSheetCreateOrConnectWithoutDepartmentInput[];
    upsert?: Prisma.EvaluationSheetUpsertWithWhereUniqueWithoutDepartmentInput | Prisma.EvaluationSheetUpsertWithWhereUniqueWithoutDepartmentInput[];
    createMany?: Prisma.EvaluationSheetCreateManyDepartmentInputEnvelope;
    set?: Prisma.EvaluationSheetWhereUniqueInput | Prisma.EvaluationSheetWhereUniqueInput[];
    disconnect?: Prisma.EvaluationSheetWhereUniqueInput | Prisma.EvaluationSheetWhereUniqueInput[];
    delete?: Prisma.EvaluationSheetWhereUniqueInput | Prisma.EvaluationSheetWhereUniqueInput[];
    connect?: Prisma.EvaluationSheetWhereUniqueInput | Prisma.EvaluationSheetWhereUniqueInput[];
    update?: Prisma.EvaluationSheetUpdateWithWhereUniqueWithoutDepartmentInput | Prisma.EvaluationSheetUpdateWithWhereUniqueWithoutDepartmentInput[];
    updateMany?: Prisma.EvaluationSheetUpdateManyWithWhereWithoutDepartmentInput | Prisma.EvaluationSheetUpdateManyWithWhereWithoutDepartmentInput[];
    deleteMany?: Prisma.EvaluationSheetScalarWhereInput | Prisma.EvaluationSheetScalarWhereInput[];
};
export type EvaluationSheetCreateNestedManyWithoutLevelInput = {
    create?: Prisma.XOR<Prisma.EvaluationSheetCreateWithoutLevelInput, Prisma.EvaluationSheetUncheckedCreateWithoutLevelInput> | Prisma.EvaluationSheetCreateWithoutLevelInput[] | Prisma.EvaluationSheetUncheckedCreateWithoutLevelInput[];
    connectOrCreate?: Prisma.EvaluationSheetCreateOrConnectWithoutLevelInput | Prisma.EvaluationSheetCreateOrConnectWithoutLevelInput[];
    createMany?: Prisma.EvaluationSheetCreateManyLevelInputEnvelope;
    connect?: Prisma.EvaluationSheetWhereUniqueInput | Prisma.EvaluationSheetWhereUniqueInput[];
};
export type EvaluationSheetUncheckedCreateNestedManyWithoutLevelInput = {
    create?: Prisma.XOR<Prisma.EvaluationSheetCreateWithoutLevelInput, Prisma.EvaluationSheetUncheckedCreateWithoutLevelInput> | Prisma.EvaluationSheetCreateWithoutLevelInput[] | Prisma.EvaluationSheetUncheckedCreateWithoutLevelInput[];
    connectOrCreate?: Prisma.EvaluationSheetCreateOrConnectWithoutLevelInput | Prisma.EvaluationSheetCreateOrConnectWithoutLevelInput[];
    createMany?: Prisma.EvaluationSheetCreateManyLevelInputEnvelope;
    connect?: Prisma.EvaluationSheetWhereUniqueInput | Prisma.EvaluationSheetWhereUniqueInput[];
};
export type EvaluationSheetUpdateManyWithoutLevelNestedInput = {
    create?: Prisma.XOR<Prisma.EvaluationSheetCreateWithoutLevelInput, Prisma.EvaluationSheetUncheckedCreateWithoutLevelInput> | Prisma.EvaluationSheetCreateWithoutLevelInput[] | Prisma.EvaluationSheetUncheckedCreateWithoutLevelInput[];
    connectOrCreate?: Prisma.EvaluationSheetCreateOrConnectWithoutLevelInput | Prisma.EvaluationSheetCreateOrConnectWithoutLevelInput[];
    upsert?: Prisma.EvaluationSheetUpsertWithWhereUniqueWithoutLevelInput | Prisma.EvaluationSheetUpsertWithWhereUniqueWithoutLevelInput[];
    createMany?: Prisma.EvaluationSheetCreateManyLevelInputEnvelope;
    set?: Prisma.EvaluationSheetWhereUniqueInput | Prisma.EvaluationSheetWhereUniqueInput[];
    disconnect?: Prisma.EvaluationSheetWhereUniqueInput | Prisma.EvaluationSheetWhereUniqueInput[];
    delete?: Prisma.EvaluationSheetWhereUniqueInput | Prisma.EvaluationSheetWhereUniqueInput[];
    connect?: Prisma.EvaluationSheetWhereUniqueInput | Prisma.EvaluationSheetWhereUniqueInput[];
    update?: Prisma.EvaluationSheetUpdateWithWhereUniqueWithoutLevelInput | Prisma.EvaluationSheetUpdateWithWhereUniqueWithoutLevelInput[];
    updateMany?: Prisma.EvaluationSheetUpdateManyWithWhereWithoutLevelInput | Prisma.EvaluationSheetUpdateManyWithWhereWithoutLevelInput[];
    deleteMany?: Prisma.EvaluationSheetScalarWhereInput | Prisma.EvaluationSheetScalarWhereInput[];
};
export type EvaluationSheetUncheckedUpdateManyWithoutLevelNestedInput = {
    create?: Prisma.XOR<Prisma.EvaluationSheetCreateWithoutLevelInput, Prisma.EvaluationSheetUncheckedCreateWithoutLevelInput> | Prisma.EvaluationSheetCreateWithoutLevelInput[] | Prisma.EvaluationSheetUncheckedCreateWithoutLevelInput[];
    connectOrCreate?: Prisma.EvaluationSheetCreateOrConnectWithoutLevelInput | Prisma.EvaluationSheetCreateOrConnectWithoutLevelInput[];
    upsert?: Prisma.EvaluationSheetUpsertWithWhereUniqueWithoutLevelInput | Prisma.EvaluationSheetUpsertWithWhereUniqueWithoutLevelInput[];
    createMany?: Prisma.EvaluationSheetCreateManyLevelInputEnvelope;
    set?: Prisma.EvaluationSheetWhereUniqueInput | Prisma.EvaluationSheetWhereUniqueInput[];
    disconnect?: Prisma.EvaluationSheetWhereUniqueInput | Prisma.EvaluationSheetWhereUniqueInput[];
    delete?: Prisma.EvaluationSheetWhereUniqueInput | Prisma.EvaluationSheetWhereUniqueInput[];
    connect?: Prisma.EvaluationSheetWhereUniqueInput | Prisma.EvaluationSheetWhereUniqueInput[];
    update?: Prisma.EvaluationSheetUpdateWithWhereUniqueWithoutLevelInput | Prisma.EvaluationSheetUpdateWithWhereUniqueWithoutLevelInput[];
    updateMany?: Prisma.EvaluationSheetUpdateManyWithWhereWithoutLevelInput | Prisma.EvaluationSheetUpdateManyWithWhereWithoutLevelInput[];
    deleteMany?: Prisma.EvaluationSheetScalarWhereInput | Prisma.EvaluationSheetScalarWhereInput[];
};
export type EvaluationSheetCreateNestedManyWithoutCycleInput = {
    create?: Prisma.XOR<Prisma.EvaluationSheetCreateWithoutCycleInput, Prisma.EvaluationSheetUncheckedCreateWithoutCycleInput> | Prisma.EvaluationSheetCreateWithoutCycleInput[] | Prisma.EvaluationSheetUncheckedCreateWithoutCycleInput[];
    connectOrCreate?: Prisma.EvaluationSheetCreateOrConnectWithoutCycleInput | Prisma.EvaluationSheetCreateOrConnectWithoutCycleInput[];
    createMany?: Prisma.EvaluationSheetCreateManyCycleInputEnvelope;
    connect?: Prisma.EvaluationSheetWhereUniqueInput | Prisma.EvaluationSheetWhereUniqueInput[];
};
export type EvaluationSheetUncheckedCreateNestedManyWithoutCycleInput = {
    create?: Prisma.XOR<Prisma.EvaluationSheetCreateWithoutCycleInput, Prisma.EvaluationSheetUncheckedCreateWithoutCycleInput> | Prisma.EvaluationSheetCreateWithoutCycleInput[] | Prisma.EvaluationSheetUncheckedCreateWithoutCycleInput[];
    connectOrCreate?: Prisma.EvaluationSheetCreateOrConnectWithoutCycleInput | Prisma.EvaluationSheetCreateOrConnectWithoutCycleInput[];
    createMany?: Prisma.EvaluationSheetCreateManyCycleInputEnvelope;
    connect?: Prisma.EvaluationSheetWhereUniqueInput | Prisma.EvaluationSheetWhereUniqueInput[];
};
export type EvaluationSheetUpdateManyWithoutCycleNestedInput = {
    create?: Prisma.XOR<Prisma.EvaluationSheetCreateWithoutCycleInput, Prisma.EvaluationSheetUncheckedCreateWithoutCycleInput> | Prisma.EvaluationSheetCreateWithoutCycleInput[] | Prisma.EvaluationSheetUncheckedCreateWithoutCycleInput[];
    connectOrCreate?: Prisma.EvaluationSheetCreateOrConnectWithoutCycleInput | Prisma.EvaluationSheetCreateOrConnectWithoutCycleInput[];
    upsert?: Prisma.EvaluationSheetUpsertWithWhereUniqueWithoutCycleInput | Prisma.EvaluationSheetUpsertWithWhereUniqueWithoutCycleInput[];
    createMany?: Prisma.EvaluationSheetCreateManyCycleInputEnvelope;
    set?: Prisma.EvaluationSheetWhereUniqueInput | Prisma.EvaluationSheetWhereUniqueInput[];
    disconnect?: Prisma.EvaluationSheetWhereUniqueInput | Prisma.EvaluationSheetWhereUniqueInput[];
    delete?: Prisma.EvaluationSheetWhereUniqueInput | Prisma.EvaluationSheetWhereUniqueInput[];
    connect?: Prisma.EvaluationSheetWhereUniqueInput | Prisma.EvaluationSheetWhereUniqueInput[];
    update?: Prisma.EvaluationSheetUpdateWithWhereUniqueWithoutCycleInput | Prisma.EvaluationSheetUpdateWithWhereUniqueWithoutCycleInput[];
    updateMany?: Prisma.EvaluationSheetUpdateManyWithWhereWithoutCycleInput | Prisma.EvaluationSheetUpdateManyWithWhereWithoutCycleInput[];
    deleteMany?: Prisma.EvaluationSheetScalarWhereInput | Prisma.EvaluationSheetScalarWhereInput[];
};
export type EvaluationSheetUncheckedUpdateManyWithoutCycleNestedInput = {
    create?: Prisma.XOR<Prisma.EvaluationSheetCreateWithoutCycleInput, Prisma.EvaluationSheetUncheckedCreateWithoutCycleInput> | Prisma.EvaluationSheetCreateWithoutCycleInput[] | Prisma.EvaluationSheetUncheckedCreateWithoutCycleInput[];
    connectOrCreate?: Prisma.EvaluationSheetCreateOrConnectWithoutCycleInput | Prisma.EvaluationSheetCreateOrConnectWithoutCycleInput[];
    upsert?: Prisma.EvaluationSheetUpsertWithWhereUniqueWithoutCycleInput | Prisma.EvaluationSheetUpsertWithWhereUniqueWithoutCycleInput[];
    createMany?: Prisma.EvaluationSheetCreateManyCycleInputEnvelope;
    set?: Prisma.EvaluationSheetWhereUniqueInput | Prisma.EvaluationSheetWhereUniqueInput[];
    disconnect?: Prisma.EvaluationSheetWhereUniqueInput | Prisma.EvaluationSheetWhereUniqueInput[];
    delete?: Prisma.EvaluationSheetWhereUniqueInput | Prisma.EvaluationSheetWhereUniqueInput[];
    connect?: Prisma.EvaluationSheetWhereUniqueInput | Prisma.EvaluationSheetWhereUniqueInput[];
    update?: Prisma.EvaluationSheetUpdateWithWhereUniqueWithoutCycleInput | Prisma.EvaluationSheetUpdateWithWhereUniqueWithoutCycleInput[];
    updateMany?: Prisma.EvaluationSheetUpdateManyWithWhereWithoutCycleInput | Prisma.EvaluationSheetUpdateManyWithWhereWithoutCycleInput[];
    deleteMany?: Prisma.EvaluationSheetScalarWhereInput | Prisma.EvaluationSheetScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EvaluationSheetCreateNestedOneWithoutQuestionsInput = {
    create?: Prisma.XOR<Prisma.EvaluationSheetCreateWithoutQuestionsInput, Prisma.EvaluationSheetUncheckedCreateWithoutQuestionsInput>;
    connectOrCreate?: Prisma.EvaluationSheetCreateOrConnectWithoutQuestionsInput;
    connect?: Prisma.EvaluationSheetWhereUniqueInput;
};
export type EvaluationSheetUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: Prisma.XOR<Prisma.EvaluationSheetCreateWithoutQuestionsInput, Prisma.EvaluationSheetUncheckedCreateWithoutQuestionsInput>;
    connectOrCreate?: Prisma.EvaluationSheetCreateOrConnectWithoutQuestionsInput;
    upsert?: Prisma.EvaluationSheetUpsertWithoutQuestionsInput;
    connect?: Prisma.EvaluationSheetWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EvaluationSheetUpdateToOneWithWhereWithoutQuestionsInput, Prisma.EvaluationSheetUpdateWithoutQuestionsInput>, Prisma.EvaluationSheetUncheckedUpdateWithoutQuestionsInput>;
};
export type EvaluationSheetCreateWithoutDepartmentInput = {
    id?: string;
    name: string;
    weight?: number;
    minScore?: number;
    maxScore?: number;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cycle: Prisma.EvaluationCycleCreateNestedOneWithoutSheetsInput;
    level: Prisma.LevelCreateNestedOneWithoutSheetsInput;
    questions?: Prisma.EvaluationQuestionCreateNestedManyWithoutSheetInput;
};
export type EvaluationSheetUncheckedCreateWithoutDepartmentInput = {
    id?: string;
    name: string;
    weight?: number;
    minScore?: number;
    maxScore?: number;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cycleId: string;
    levelId: string;
    questions?: Prisma.EvaluationQuestionUncheckedCreateNestedManyWithoutSheetInput;
};
export type EvaluationSheetCreateOrConnectWithoutDepartmentInput = {
    where: Prisma.EvaluationSheetWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvaluationSheetCreateWithoutDepartmentInput, Prisma.EvaluationSheetUncheckedCreateWithoutDepartmentInput>;
};
export type EvaluationSheetCreateManyDepartmentInputEnvelope = {
    data: Prisma.EvaluationSheetCreateManyDepartmentInput | Prisma.EvaluationSheetCreateManyDepartmentInput[];
    skipDuplicates?: boolean;
};
export type EvaluationSheetUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: Prisma.EvaluationSheetWhereUniqueInput;
    update: Prisma.XOR<Prisma.EvaluationSheetUpdateWithoutDepartmentInput, Prisma.EvaluationSheetUncheckedUpdateWithoutDepartmentInput>;
    create: Prisma.XOR<Prisma.EvaluationSheetCreateWithoutDepartmentInput, Prisma.EvaluationSheetUncheckedCreateWithoutDepartmentInput>;
};
export type EvaluationSheetUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: Prisma.EvaluationSheetWhereUniqueInput;
    data: Prisma.XOR<Prisma.EvaluationSheetUpdateWithoutDepartmentInput, Prisma.EvaluationSheetUncheckedUpdateWithoutDepartmentInput>;
};
export type EvaluationSheetUpdateManyWithWhereWithoutDepartmentInput = {
    where: Prisma.EvaluationSheetScalarWhereInput;
    data: Prisma.XOR<Prisma.EvaluationSheetUpdateManyMutationInput, Prisma.EvaluationSheetUncheckedUpdateManyWithoutDepartmentInput>;
};
export type EvaluationSheetScalarWhereInput = {
    AND?: Prisma.EvaluationSheetScalarWhereInput | Prisma.EvaluationSheetScalarWhereInput[];
    OR?: Prisma.EvaluationSheetScalarWhereInput[];
    NOT?: Prisma.EvaluationSheetScalarWhereInput | Prisma.EvaluationSheetScalarWhereInput[];
    id?: Prisma.UuidFilter<"EvaluationSheet"> | string;
    name?: Prisma.StringFilter<"EvaluationSheet"> | string;
    weight?: Prisma.IntFilter<"EvaluationSheet"> | number;
    minScore?: Prisma.IntFilter<"EvaluationSheet"> | number;
    maxScore?: Prisma.IntFilter<"EvaluationSheet"> | number;
    sortOrder?: Prisma.IntFilter<"EvaluationSheet"> | number;
    createdAt?: Prisma.DateTimeFilter<"EvaluationSheet"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EvaluationSheet"> | Date | string;
    cycleId?: Prisma.UuidFilter<"EvaluationSheet"> | string;
    departmentId?: Prisma.UuidFilter<"EvaluationSheet"> | string;
    levelId?: Prisma.UuidFilter<"EvaluationSheet"> | string;
};
export type EvaluationSheetCreateWithoutLevelInput = {
    id?: string;
    name: string;
    weight?: number;
    minScore?: number;
    maxScore?: number;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cycle: Prisma.EvaluationCycleCreateNestedOneWithoutSheetsInput;
    department: Prisma.DepartmentCreateNestedOneWithoutSheetsInput;
    questions?: Prisma.EvaluationQuestionCreateNestedManyWithoutSheetInput;
};
export type EvaluationSheetUncheckedCreateWithoutLevelInput = {
    id?: string;
    name: string;
    weight?: number;
    minScore?: number;
    maxScore?: number;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cycleId: string;
    departmentId: string;
    questions?: Prisma.EvaluationQuestionUncheckedCreateNestedManyWithoutSheetInput;
};
export type EvaluationSheetCreateOrConnectWithoutLevelInput = {
    where: Prisma.EvaluationSheetWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvaluationSheetCreateWithoutLevelInput, Prisma.EvaluationSheetUncheckedCreateWithoutLevelInput>;
};
export type EvaluationSheetCreateManyLevelInputEnvelope = {
    data: Prisma.EvaluationSheetCreateManyLevelInput | Prisma.EvaluationSheetCreateManyLevelInput[];
    skipDuplicates?: boolean;
};
export type EvaluationSheetUpsertWithWhereUniqueWithoutLevelInput = {
    where: Prisma.EvaluationSheetWhereUniqueInput;
    update: Prisma.XOR<Prisma.EvaluationSheetUpdateWithoutLevelInput, Prisma.EvaluationSheetUncheckedUpdateWithoutLevelInput>;
    create: Prisma.XOR<Prisma.EvaluationSheetCreateWithoutLevelInput, Prisma.EvaluationSheetUncheckedCreateWithoutLevelInput>;
};
export type EvaluationSheetUpdateWithWhereUniqueWithoutLevelInput = {
    where: Prisma.EvaluationSheetWhereUniqueInput;
    data: Prisma.XOR<Prisma.EvaluationSheetUpdateWithoutLevelInput, Prisma.EvaluationSheetUncheckedUpdateWithoutLevelInput>;
};
export type EvaluationSheetUpdateManyWithWhereWithoutLevelInput = {
    where: Prisma.EvaluationSheetScalarWhereInput;
    data: Prisma.XOR<Prisma.EvaluationSheetUpdateManyMutationInput, Prisma.EvaluationSheetUncheckedUpdateManyWithoutLevelInput>;
};
export type EvaluationSheetCreateWithoutCycleInput = {
    id?: string;
    name: string;
    weight?: number;
    minScore?: number;
    maxScore?: number;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    department: Prisma.DepartmentCreateNestedOneWithoutSheetsInput;
    level: Prisma.LevelCreateNestedOneWithoutSheetsInput;
    questions?: Prisma.EvaluationQuestionCreateNestedManyWithoutSheetInput;
};
export type EvaluationSheetUncheckedCreateWithoutCycleInput = {
    id?: string;
    name: string;
    weight?: number;
    minScore?: number;
    maxScore?: number;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    departmentId: string;
    levelId: string;
    questions?: Prisma.EvaluationQuestionUncheckedCreateNestedManyWithoutSheetInput;
};
export type EvaluationSheetCreateOrConnectWithoutCycleInput = {
    where: Prisma.EvaluationSheetWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvaluationSheetCreateWithoutCycleInput, Prisma.EvaluationSheetUncheckedCreateWithoutCycleInput>;
};
export type EvaluationSheetCreateManyCycleInputEnvelope = {
    data: Prisma.EvaluationSheetCreateManyCycleInput | Prisma.EvaluationSheetCreateManyCycleInput[];
    skipDuplicates?: boolean;
};
export type EvaluationSheetUpsertWithWhereUniqueWithoutCycleInput = {
    where: Prisma.EvaluationSheetWhereUniqueInput;
    update: Prisma.XOR<Prisma.EvaluationSheetUpdateWithoutCycleInput, Prisma.EvaluationSheetUncheckedUpdateWithoutCycleInput>;
    create: Prisma.XOR<Prisma.EvaluationSheetCreateWithoutCycleInput, Prisma.EvaluationSheetUncheckedCreateWithoutCycleInput>;
};
export type EvaluationSheetUpdateWithWhereUniqueWithoutCycleInput = {
    where: Prisma.EvaluationSheetWhereUniqueInput;
    data: Prisma.XOR<Prisma.EvaluationSheetUpdateWithoutCycleInput, Prisma.EvaluationSheetUncheckedUpdateWithoutCycleInput>;
};
export type EvaluationSheetUpdateManyWithWhereWithoutCycleInput = {
    where: Prisma.EvaluationSheetScalarWhereInput;
    data: Prisma.XOR<Prisma.EvaluationSheetUpdateManyMutationInput, Prisma.EvaluationSheetUncheckedUpdateManyWithoutCycleInput>;
};
export type EvaluationSheetCreateWithoutQuestionsInput = {
    id?: string;
    name: string;
    weight?: number;
    minScore?: number;
    maxScore?: number;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cycle: Prisma.EvaluationCycleCreateNestedOneWithoutSheetsInput;
    department: Prisma.DepartmentCreateNestedOneWithoutSheetsInput;
    level: Prisma.LevelCreateNestedOneWithoutSheetsInput;
};
export type EvaluationSheetUncheckedCreateWithoutQuestionsInput = {
    id?: string;
    name: string;
    weight?: number;
    minScore?: number;
    maxScore?: number;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cycleId: string;
    departmentId: string;
    levelId: string;
};
export type EvaluationSheetCreateOrConnectWithoutQuestionsInput = {
    where: Prisma.EvaluationSheetWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvaluationSheetCreateWithoutQuestionsInput, Prisma.EvaluationSheetUncheckedCreateWithoutQuestionsInput>;
};
export type EvaluationSheetUpsertWithoutQuestionsInput = {
    update: Prisma.XOR<Prisma.EvaluationSheetUpdateWithoutQuestionsInput, Prisma.EvaluationSheetUncheckedUpdateWithoutQuestionsInput>;
    create: Prisma.XOR<Prisma.EvaluationSheetCreateWithoutQuestionsInput, Prisma.EvaluationSheetUncheckedCreateWithoutQuestionsInput>;
    where?: Prisma.EvaluationSheetWhereInput;
};
export type EvaluationSheetUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: Prisma.EvaluationSheetWhereInput;
    data: Prisma.XOR<Prisma.EvaluationSheetUpdateWithoutQuestionsInput, Prisma.EvaluationSheetUncheckedUpdateWithoutQuestionsInput>;
};
export type EvaluationSheetUpdateWithoutQuestionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    minScore?: Prisma.IntFieldUpdateOperationsInput | number;
    maxScore?: Prisma.IntFieldUpdateOperationsInput | number;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cycle?: Prisma.EvaluationCycleUpdateOneRequiredWithoutSheetsNestedInput;
    department?: Prisma.DepartmentUpdateOneRequiredWithoutSheetsNestedInput;
    level?: Prisma.LevelUpdateOneRequiredWithoutSheetsNestedInput;
};
export type EvaluationSheetUncheckedUpdateWithoutQuestionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    minScore?: Prisma.IntFieldUpdateOperationsInput | number;
    maxScore?: Prisma.IntFieldUpdateOperationsInput | number;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cycleId?: Prisma.StringFieldUpdateOperationsInput | string;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    levelId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EvaluationSheetCreateManyDepartmentInput = {
    id?: string;
    name: string;
    weight?: number;
    minScore?: number;
    maxScore?: number;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cycleId: string;
    levelId: string;
};
export type EvaluationSheetUpdateWithoutDepartmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    minScore?: Prisma.IntFieldUpdateOperationsInput | number;
    maxScore?: Prisma.IntFieldUpdateOperationsInput | number;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cycle?: Prisma.EvaluationCycleUpdateOneRequiredWithoutSheetsNestedInput;
    level?: Prisma.LevelUpdateOneRequiredWithoutSheetsNestedInput;
    questions?: Prisma.EvaluationQuestionUpdateManyWithoutSheetNestedInput;
};
export type EvaluationSheetUncheckedUpdateWithoutDepartmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    minScore?: Prisma.IntFieldUpdateOperationsInput | number;
    maxScore?: Prisma.IntFieldUpdateOperationsInput | number;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cycleId?: Prisma.StringFieldUpdateOperationsInput | string;
    levelId?: Prisma.StringFieldUpdateOperationsInput | string;
    questions?: Prisma.EvaluationQuestionUncheckedUpdateManyWithoutSheetNestedInput;
};
export type EvaluationSheetUncheckedUpdateManyWithoutDepartmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    minScore?: Prisma.IntFieldUpdateOperationsInput | number;
    maxScore?: Prisma.IntFieldUpdateOperationsInput | number;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cycleId?: Prisma.StringFieldUpdateOperationsInput | string;
    levelId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EvaluationSheetCreateManyLevelInput = {
    id?: string;
    name: string;
    weight?: number;
    minScore?: number;
    maxScore?: number;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cycleId: string;
    departmentId: string;
};
export type EvaluationSheetUpdateWithoutLevelInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    minScore?: Prisma.IntFieldUpdateOperationsInput | number;
    maxScore?: Prisma.IntFieldUpdateOperationsInput | number;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cycle?: Prisma.EvaluationCycleUpdateOneRequiredWithoutSheetsNestedInput;
    department?: Prisma.DepartmentUpdateOneRequiredWithoutSheetsNestedInput;
    questions?: Prisma.EvaluationQuestionUpdateManyWithoutSheetNestedInput;
};
export type EvaluationSheetUncheckedUpdateWithoutLevelInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    minScore?: Prisma.IntFieldUpdateOperationsInput | number;
    maxScore?: Prisma.IntFieldUpdateOperationsInput | number;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cycleId?: Prisma.StringFieldUpdateOperationsInput | string;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    questions?: Prisma.EvaluationQuestionUncheckedUpdateManyWithoutSheetNestedInput;
};
export type EvaluationSheetUncheckedUpdateManyWithoutLevelInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    minScore?: Prisma.IntFieldUpdateOperationsInput | number;
    maxScore?: Prisma.IntFieldUpdateOperationsInput | number;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cycleId?: Prisma.StringFieldUpdateOperationsInput | string;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EvaluationSheetCreateManyCycleInput = {
    id?: string;
    name: string;
    weight?: number;
    minScore?: number;
    maxScore?: number;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    departmentId: string;
    levelId: string;
};
export type EvaluationSheetUpdateWithoutCycleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    minScore?: Prisma.IntFieldUpdateOperationsInput | number;
    maxScore?: Prisma.IntFieldUpdateOperationsInput | number;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    department?: Prisma.DepartmentUpdateOneRequiredWithoutSheetsNestedInput;
    level?: Prisma.LevelUpdateOneRequiredWithoutSheetsNestedInput;
    questions?: Prisma.EvaluationQuestionUpdateManyWithoutSheetNestedInput;
};
export type EvaluationSheetUncheckedUpdateWithoutCycleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    minScore?: Prisma.IntFieldUpdateOperationsInput | number;
    maxScore?: Prisma.IntFieldUpdateOperationsInput | number;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    levelId?: Prisma.StringFieldUpdateOperationsInput | string;
    questions?: Prisma.EvaluationQuestionUncheckedUpdateManyWithoutSheetNestedInput;
};
export type EvaluationSheetUncheckedUpdateManyWithoutCycleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    minScore?: Prisma.IntFieldUpdateOperationsInput | number;
    maxScore?: Prisma.IntFieldUpdateOperationsInput | number;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    departmentId?: Prisma.StringFieldUpdateOperationsInput | string;
    levelId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EvaluationSheetCountOutputType = {
    questions: number;
};
export type EvaluationSheetCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    questions?: boolean | EvaluationSheetCountOutputTypeCountQuestionsArgs;
};
export type EvaluationSheetCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationSheetCountOutputTypeSelect<ExtArgs> | null;
};
export type EvaluationSheetCountOutputTypeCountQuestionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvaluationQuestionWhereInput;
};
export type EvaluationSheetSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    weight?: boolean;
    minScore?: boolean;
    maxScore?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    cycleId?: boolean;
    departmentId?: boolean;
    levelId?: boolean;
    cycle?: boolean | Prisma.EvaluationCycleDefaultArgs<ExtArgs>;
    department?: boolean | Prisma.DepartmentDefaultArgs<ExtArgs>;
    level?: boolean | Prisma.LevelDefaultArgs<ExtArgs>;
    questions?: boolean | Prisma.EvaluationSheet$questionsArgs<ExtArgs>;
    _count?: boolean | Prisma.EvaluationSheetCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["evaluationSheet"]>;
export type EvaluationSheetSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    weight?: boolean;
    minScore?: boolean;
    maxScore?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    cycleId?: boolean;
    departmentId?: boolean;
    levelId?: boolean;
    cycle?: boolean | Prisma.EvaluationCycleDefaultArgs<ExtArgs>;
    department?: boolean | Prisma.DepartmentDefaultArgs<ExtArgs>;
    level?: boolean | Prisma.LevelDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["evaluationSheet"]>;
export type EvaluationSheetSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    weight?: boolean;
    minScore?: boolean;
    maxScore?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    cycleId?: boolean;
    departmentId?: boolean;
    levelId?: boolean;
    cycle?: boolean | Prisma.EvaluationCycleDefaultArgs<ExtArgs>;
    department?: boolean | Prisma.DepartmentDefaultArgs<ExtArgs>;
    level?: boolean | Prisma.LevelDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["evaluationSheet"]>;
export type EvaluationSheetSelectScalar = {
    id?: boolean;
    name?: boolean;
    weight?: boolean;
    minScore?: boolean;
    maxScore?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    cycleId?: boolean;
    departmentId?: boolean;
    levelId?: boolean;
};
export type EvaluationSheetOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "weight" | "minScore" | "maxScore" | "sortOrder" | "createdAt" | "updatedAt" | "cycleId" | "departmentId" | "levelId", ExtArgs["result"]["evaluationSheet"]>;
export type EvaluationSheetInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cycle?: boolean | Prisma.EvaluationCycleDefaultArgs<ExtArgs>;
    department?: boolean | Prisma.DepartmentDefaultArgs<ExtArgs>;
    level?: boolean | Prisma.LevelDefaultArgs<ExtArgs>;
    questions?: boolean | Prisma.EvaluationSheet$questionsArgs<ExtArgs>;
    _count?: boolean | Prisma.EvaluationSheetCountOutputTypeDefaultArgs<ExtArgs>;
};
export type EvaluationSheetIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cycle?: boolean | Prisma.EvaluationCycleDefaultArgs<ExtArgs>;
    department?: boolean | Prisma.DepartmentDefaultArgs<ExtArgs>;
    level?: boolean | Prisma.LevelDefaultArgs<ExtArgs>;
};
export type EvaluationSheetIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cycle?: boolean | Prisma.EvaluationCycleDefaultArgs<ExtArgs>;
    department?: boolean | Prisma.DepartmentDefaultArgs<ExtArgs>;
    level?: boolean | Prisma.LevelDefaultArgs<ExtArgs>;
};
export type $EvaluationSheetPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EvaluationSheet";
    objects: {
        cycle: Prisma.$EvaluationCyclePayload<ExtArgs>;
        department: Prisma.$DepartmentPayload<ExtArgs>;
        level: Prisma.$LevelPayload<ExtArgs>;
        questions: Prisma.$EvaluationQuestionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        weight: number;
        minScore: number;
        maxScore: number;
        sortOrder: number;
        createdAt: Date;
        updatedAt: Date;
        cycleId: string;
        departmentId: string;
        levelId: string;
    }, ExtArgs["result"]["evaluationSheet"]>;
    composites: {};
};
export type EvaluationSheetGetPayload<S extends boolean | null | undefined | EvaluationSheetDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EvaluationSheetPayload, S>;
export type EvaluationSheetCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EvaluationSheetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EvaluationSheetCountAggregateInputType | true;
};
export interface EvaluationSheetDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EvaluationSheet'];
        meta: {
            name: 'EvaluationSheet';
        };
    };
    findUnique<T extends EvaluationSheetFindUniqueArgs>(args: Prisma.SelectSubset<T, EvaluationSheetFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EvaluationSheetClient<runtime.Types.Result.GetResult<Prisma.$EvaluationSheetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EvaluationSheetFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EvaluationSheetFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EvaluationSheetClient<runtime.Types.Result.GetResult<Prisma.$EvaluationSheetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EvaluationSheetFindFirstArgs>(args?: Prisma.SelectSubset<T, EvaluationSheetFindFirstArgs<ExtArgs>>): Prisma.Prisma__EvaluationSheetClient<runtime.Types.Result.GetResult<Prisma.$EvaluationSheetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EvaluationSheetFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EvaluationSheetFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EvaluationSheetClient<runtime.Types.Result.GetResult<Prisma.$EvaluationSheetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EvaluationSheetFindManyArgs>(args?: Prisma.SelectSubset<T, EvaluationSheetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvaluationSheetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EvaluationSheetCreateArgs>(args: Prisma.SelectSubset<T, EvaluationSheetCreateArgs<ExtArgs>>): Prisma.Prisma__EvaluationSheetClient<runtime.Types.Result.GetResult<Prisma.$EvaluationSheetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EvaluationSheetCreateManyArgs>(args?: Prisma.SelectSubset<T, EvaluationSheetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EvaluationSheetCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EvaluationSheetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvaluationSheetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EvaluationSheetDeleteArgs>(args: Prisma.SelectSubset<T, EvaluationSheetDeleteArgs<ExtArgs>>): Prisma.Prisma__EvaluationSheetClient<runtime.Types.Result.GetResult<Prisma.$EvaluationSheetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EvaluationSheetUpdateArgs>(args: Prisma.SelectSubset<T, EvaluationSheetUpdateArgs<ExtArgs>>): Prisma.Prisma__EvaluationSheetClient<runtime.Types.Result.GetResult<Prisma.$EvaluationSheetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EvaluationSheetDeleteManyArgs>(args?: Prisma.SelectSubset<T, EvaluationSheetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EvaluationSheetUpdateManyArgs>(args: Prisma.SelectSubset<T, EvaluationSheetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EvaluationSheetUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EvaluationSheetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvaluationSheetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EvaluationSheetUpsertArgs>(args: Prisma.SelectSubset<T, EvaluationSheetUpsertArgs<ExtArgs>>): Prisma.Prisma__EvaluationSheetClient<runtime.Types.Result.GetResult<Prisma.$EvaluationSheetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EvaluationSheetCountArgs>(args?: Prisma.Subset<T, EvaluationSheetCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EvaluationSheetCountAggregateOutputType> : number>;
    aggregate<T extends EvaluationSheetAggregateArgs>(args: Prisma.Subset<T, EvaluationSheetAggregateArgs>): Prisma.PrismaPromise<GetEvaluationSheetAggregateType<T>>;
    groupBy<T extends EvaluationSheetGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EvaluationSheetGroupByArgs['orderBy'];
    } : {
        orderBy?: EvaluationSheetGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EvaluationSheetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvaluationSheetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EvaluationSheetFieldRefs;
}
export interface Prisma__EvaluationSheetClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cycle<T extends Prisma.EvaluationCycleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EvaluationCycleDefaultArgs<ExtArgs>>): Prisma.Prisma__EvaluationCycleClient<runtime.Types.Result.GetResult<Prisma.$EvaluationCyclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    department<T extends Prisma.DepartmentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DepartmentDefaultArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    level<T extends Prisma.LevelDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LevelDefaultArgs<ExtArgs>>): Prisma.Prisma__LevelClient<runtime.Types.Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    questions<T extends Prisma.EvaluationSheet$questionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EvaluationSheet$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvaluationQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EvaluationSheetFieldRefs {
    readonly id: Prisma.FieldRef<"EvaluationSheet", 'String'>;
    readonly name: Prisma.FieldRef<"EvaluationSheet", 'String'>;
    readonly weight: Prisma.FieldRef<"EvaluationSheet", 'Int'>;
    readonly minScore: Prisma.FieldRef<"EvaluationSheet", 'Int'>;
    readonly maxScore: Prisma.FieldRef<"EvaluationSheet", 'Int'>;
    readonly sortOrder: Prisma.FieldRef<"EvaluationSheet", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"EvaluationSheet", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"EvaluationSheet", 'DateTime'>;
    readonly cycleId: Prisma.FieldRef<"EvaluationSheet", 'String'>;
    readonly departmentId: Prisma.FieldRef<"EvaluationSheet", 'String'>;
    readonly levelId: Prisma.FieldRef<"EvaluationSheet", 'String'>;
}
export type EvaluationSheetFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationSheetSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationSheetOmit<ExtArgs> | null;
    include?: Prisma.EvaluationSheetInclude<ExtArgs> | null;
    where: Prisma.EvaluationSheetWhereUniqueInput;
};
export type EvaluationSheetFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationSheetSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationSheetOmit<ExtArgs> | null;
    include?: Prisma.EvaluationSheetInclude<ExtArgs> | null;
    where: Prisma.EvaluationSheetWhereUniqueInput;
};
export type EvaluationSheetFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type EvaluationSheetFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type EvaluationSheetFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type EvaluationSheetCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationSheetSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationSheetOmit<ExtArgs> | null;
    include?: Prisma.EvaluationSheetInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EvaluationSheetCreateInput, Prisma.EvaluationSheetUncheckedCreateInput>;
};
export type EvaluationSheetCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EvaluationSheetCreateManyInput | Prisma.EvaluationSheetCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EvaluationSheetCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationSheetSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EvaluationSheetOmit<ExtArgs> | null;
    data: Prisma.EvaluationSheetCreateManyInput | Prisma.EvaluationSheetCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.EvaluationSheetIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EvaluationSheetUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationSheetSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationSheetOmit<ExtArgs> | null;
    include?: Prisma.EvaluationSheetInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EvaluationSheetUpdateInput, Prisma.EvaluationSheetUncheckedUpdateInput>;
    where: Prisma.EvaluationSheetWhereUniqueInput;
};
export type EvaluationSheetUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EvaluationSheetUpdateManyMutationInput, Prisma.EvaluationSheetUncheckedUpdateManyInput>;
    where?: Prisma.EvaluationSheetWhereInput;
    limit?: number;
};
export type EvaluationSheetUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationSheetSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EvaluationSheetOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EvaluationSheetUpdateManyMutationInput, Prisma.EvaluationSheetUncheckedUpdateManyInput>;
    where?: Prisma.EvaluationSheetWhereInput;
    limit?: number;
    include?: Prisma.EvaluationSheetIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EvaluationSheetUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationSheetSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationSheetOmit<ExtArgs> | null;
    include?: Prisma.EvaluationSheetInclude<ExtArgs> | null;
    where: Prisma.EvaluationSheetWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvaluationSheetCreateInput, Prisma.EvaluationSheetUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EvaluationSheetUpdateInput, Prisma.EvaluationSheetUncheckedUpdateInput>;
};
export type EvaluationSheetDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationSheetSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationSheetOmit<ExtArgs> | null;
    include?: Prisma.EvaluationSheetInclude<ExtArgs> | null;
    where: Prisma.EvaluationSheetWhereUniqueInput;
};
export type EvaluationSheetDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvaluationSheetWhereInput;
    limit?: number;
};
export type EvaluationSheet$questionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationQuestionSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationQuestionOmit<ExtArgs> | null;
    include?: Prisma.EvaluationQuestionInclude<ExtArgs> | null;
    where?: Prisma.EvaluationQuestionWhereInput;
    orderBy?: Prisma.EvaluationQuestionOrderByWithRelationInput | Prisma.EvaluationQuestionOrderByWithRelationInput[];
    cursor?: Prisma.EvaluationQuestionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EvaluationQuestionScalarFieldEnum | Prisma.EvaluationQuestionScalarFieldEnum[];
};
export type EvaluationSheetDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationSheetSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationSheetOmit<ExtArgs> | null;
    include?: Prisma.EvaluationSheetInclude<ExtArgs> | null;
};
export {};
