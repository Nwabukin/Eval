import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EvaluationAnswerModel = runtime.Types.Result.DefaultSelection<Prisma.$EvaluationAnswerPayload>;
export type AggregateEvaluationAnswer = {
    _count: EvaluationAnswerCountAggregateOutputType | null;
    _avg: EvaluationAnswerAvgAggregateOutputType | null;
    _sum: EvaluationAnswerSumAggregateOutputType | null;
    _min: EvaluationAnswerMinAggregateOutputType | null;
    _max: EvaluationAnswerMaxAggregateOutputType | null;
};
export type EvaluationAnswerAvgAggregateOutputType = {
    selfScore: number | null;
    managerScore: number | null;
    finalScore: number | null;
};
export type EvaluationAnswerSumAggregateOutputType = {
    selfScore: number | null;
    managerScore: number | null;
    finalScore: number | null;
};
export type EvaluationAnswerMinAggregateOutputType = {
    id: string | null;
    selfScore: number | null;
    selfRemarks: string | null;
    managerScore: number | null;
    managerRemarks: string | null;
    finalScore: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    evaluationId: string | null;
    questionId: string | null;
};
export type EvaluationAnswerMaxAggregateOutputType = {
    id: string | null;
    selfScore: number | null;
    selfRemarks: string | null;
    managerScore: number | null;
    managerRemarks: string | null;
    finalScore: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    evaluationId: string | null;
    questionId: string | null;
};
export type EvaluationAnswerCountAggregateOutputType = {
    id: number;
    selfScore: number;
    selfRemarks: number;
    managerScore: number;
    managerRemarks: number;
    finalScore: number;
    createdAt: number;
    updatedAt: number;
    evaluationId: number;
    questionId: number;
    _all: number;
};
export type EvaluationAnswerAvgAggregateInputType = {
    selfScore?: true;
    managerScore?: true;
    finalScore?: true;
};
export type EvaluationAnswerSumAggregateInputType = {
    selfScore?: true;
    managerScore?: true;
    finalScore?: true;
};
export type EvaluationAnswerMinAggregateInputType = {
    id?: true;
    selfScore?: true;
    selfRemarks?: true;
    managerScore?: true;
    managerRemarks?: true;
    finalScore?: true;
    createdAt?: true;
    updatedAt?: true;
    evaluationId?: true;
    questionId?: true;
};
export type EvaluationAnswerMaxAggregateInputType = {
    id?: true;
    selfScore?: true;
    selfRemarks?: true;
    managerScore?: true;
    managerRemarks?: true;
    finalScore?: true;
    createdAt?: true;
    updatedAt?: true;
    evaluationId?: true;
    questionId?: true;
};
export type EvaluationAnswerCountAggregateInputType = {
    id?: true;
    selfScore?: true;
    selfRemarks?: true;
    managerScore?: true;
    managerRemarks?: true;
    finalScore?: true;
    createdAt?: true;
    updatedAt?: true;
    evaluationId?: true;
    questionId?: true;
    _all?: true;
};
export type EvaluationAnswerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvaluationAnswerWhereInput;
    orderBy?: Prisma.EvaluationAnswerOrderByWithRelationInput | Prisma.EvaluationAnswerOrderByWithRelationInput[];
    cursor?: Prisma.EvaluationAnswerWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EvaluationAnswerCountAggregateInputType;
    _avg?: EvaluationAnswerAvgAggregateInputType;
    _sum?: EvaluationAnswerSumAggregateInputType;
    _min?: EvaluationAnswerMinAggregateInputType;
    _max?: EvaluationAnswerMaxAggregateInputType;
};
export type GetEvaluationAnswerAggregateType<T extends EvaluationAnswerAggregateArgs> = {
    [P in keyof T & keyof AggregateEvaluationAnswer]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEvaluationAnswer[P]> : Prisma.GetScalarType<T[P], AggregateEvaluationAnswer[P]>;
};
export type EvaluationAnswerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvaluationAnswerWhereInput;
    orderBy?: Prisma.EvaluationAnswerOrderByWithAggregationInput | Prisma.EvaluationAnswerOrderByWithAggregationInput[];
    by: Prisma.EvaluationAnswerScalarFieldEnum[] | Prisma.EvaluationAnswerScalarFieldEnum;
    having?: Prisma.EvaluationAnswerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EvaluationAnswerCountAggregateInputType | true;
    _avg?: EvaluationAnswerAvgAggregateInputType;
    _sum?: EvaluationAnswerSumAggregateInputType;
    _min?: EvaluationAnswerMinAggregateInputType;
    _max?: EvaluationAnswerMaxAggregateInputType;
};
export type EvaluationAnswerGroupByOutputType = {
    id: string;
    selfScore: number | null;
    selfRemarks: string | null;
    managerScore: number | null;
    managerRemarks: string | null;
    finalScore: number | null;
    createdAt: Date;
    updatedAt: Date;
    evaluationId: string;
    questionId: string;
    _count: EvaluationAnswerCountAggregateOutputType | null;
    _avg: EvaluationAnswerAvgAggregateOutputType | null;
    _sum: EvaluationAnswerSumAggregateOutputType | null;
    _min: EvaluationAnswerMinAggregateOutputType | null;
    _max: EvaluationAnswerMaxAggregateOutputType | null;
};
type GetEvaluationAnswerGroupByPayload<T extends EvaluationAnswerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EvaluationAnswerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EvaluationAnswerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EvaluationAnswerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EvaluationAnswerGroupByOutputType[P]>;
}>>;
export type EvaluationAnswerWhereInput = {
    AND?: Prisma.EvaluationAnswerWhereInput | Prisma.EvaluationAnswerWhereInput[];
    OR?: Prisma.EvaluationAnswerWhereInput[];
    NOT?: Prisma.EvaluationAnswerWhereInput | Prisma.EvaluationAnswerWhereInput[];
    id?: Prisma.UuidFilter<"EvaluationAnswer"> | string;
    selfScore?: Prisma.IntNullableFilter<"EvaluationAnswer"> | number | null;
    selfRemarks?: Prisma.StringNullableFilter<"EvaluationAnswer"> | string | null;
    managerScore?: Prisma.IntNullableFilter<"EvaluationAnswer"> | number | null;
    managerRemarks?: Prisma.StringNullableFilter<"EvaluationAnswer"> | string | null;
    finalScore?: Prisma.IntNullableFilter<"EvaluationAnswer"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"EvaluationAnswer"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EvaluationAnswer"> | Date | string;
    evaluationId?: Prisma.UuidFilter<"EvaluationAnswer"> | string;
    questionId?: Prisma.UuidFilter<"EvaluationAnswer"> | string;
    evaluation?: Prisma.XOR<Prisma.EvaluationScalarRelationFilter, Prisma.EvaluationWhereInput>;
    question?: Prisma.XOR<Prisma.EvaluationQuestionScalarRelationFilter, Prisma.EvaluationQuestionWhereInput>;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreListRelationFilter;
};
export type EvaluationAnswerOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    selfScore?: Prisma.SortOrderInput | Prisma.SortOrder;
    selfRemarks?: Prisma.SortOrderInput | Prisma.SortOrder;
    managerScore?: Prisma.SortOrderInput | Prisma.SortOrder;
    managerRemarks?: Prisma.SortOrderInput | Prisma.SortOrder;
    finalScore?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    evaluationId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    evaluation?: Prisma.EvaluationOrderByWithRelationInput;
    question?: Prisma.EvaluationQuestionOrderByWithRelationInput;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreOrderByRelationAggregateInput;
};
export type EvaluationAnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    evaluationId_questionId?: Prisma.EvaluationAnswerEvaluationIdQuestionIdCompoundUniqueInput;
    AND?: Prisma.EvaluationAnswerWhereInput | Prisma.EvaluationAnswerWhereInput[];
    OR?: Prisma.EvaluationAnswerWhereInput[];
    NOT?: Prisma.EvaluationAnswerWhereInput | Prisma.EvaluationAnswerWhereInput[];
    selfScore?: Prisma.IntNullableFilter<"EvaluationAnswer"> | number | null;
    selfRemarks?: Prisma.StringNullableFilter<"EvaluationAnswer"> | string | null;
    managerScore?: Prisma.IntNullableFilter<"EvaluationAnswer"> | number | null;
    managerRemarks?: Prisma.StringNullableFilter<"EvaluationAnswer"> | string | null;
    finalScore?: Prisma.IntNullableFilter<"EvaluationAnswer"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"EvaluationAnswer"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EvaluationAnswer"> | Date | string;
    evaluationId?: Prisma.UuidFilter<"EvaluationAnswer"> | string;
    questionId?: Prisma.UuidFilter<"EvaluationAnswer"> | string;
    evaluation?: Prisma.XOR<Prisma.EvaluationScalarRelationFilter, Prisma.EvaluationWhereInput>;
    question?: Prisma.XOR<Prisma.EvaluationQuestionScalarRelationFilter, Prisma.EvaluationQuestionWhereInput>;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreListRelationFilter;
}, "id" | "evaluationId_questionId">;
export type EvaluationAnswerOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    selfScore?: Prisma.SortOrderInput | Prisma.SortOrder;
    selfRemarks?: Prisma.SortOrderInput | Prisma.SortOrder;
    managerScore?: Prisma.SortOrderInput | Prisma.SortOrder;
    managerRemarks?: Prisma.SortOrderInput | Prisma.SortOrder;
    finalScore?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    evaluationId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
    _count?: Prisma.EvaluationAnswerCountOrderByAggregateInput;
    _avg?: Prisma.EvaluationAnswerAvgOrderByAggregateInput;
    _max?: Prisma.EvaluationAnswerMaxOrderByAggregateInput;
    _min?: Prisma.EvaluationAnswerMinOrderByAggregateInput;
    _sum?: Prisma.EvaluationAnswerSumOrderByAggregateInput;
};
export type EvaluationAnswerScalarWhereWithAggregatesInput = {
    AND?: Prisma.EvaluationAnswerScalarWhereWithAggregatesInput | Prisma.EvaluationAnswerScalarWhereWithAggregatesInput[];
    OR?: Prisma.EvaluationAnswerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EvaluationAnswerScalarWhereWithAggregatesInput | Prisma.EvaluationAnswerScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"EvaluationAnswer"> | string;
    selfScore?: Prisma.IntNullableWithAggregatesFilter<"EvaluationAnswer"> | number | null;
    selfRemarks?: Prisma.StringNullableWithAggregatesFilter<"EvaluationAnswer"> | string | null;
    managerScore?: Prisma.IntNullableWithAggregatesFilter<"EvaluationAnswer"> | number | null;
    managerRemarks?: Prisma.StringNullableWithAggregatesFilter<"EvaluationAnswer"> | string | null;
    finalScore?: Prisma.IntNullableWithAggregatesFilter<"EvaluationAnswer"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"EvaluationAnswer"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"EvaluationAnswer"> | Date | string;
    evaluationId?: Prisma.UuidWithAggregatesFilter<"EvaluationAnswer"> | string;
    questionId?: Prisma.UuidWithAggregatesFilter<"EvaluationAnswer"> | string;
};
export type EvaluationAnswerCreateInput = {
    id?: string;
    selfScore?: number | null;
    selfRemarks?: string | null;
    managerScore?: number | null;
    managerRemarks?: string | null;
    finalScore?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    evaluation: Prisma.EvaluationCreateNestedOneWithoutAnswersInput;
    question: Prisma.EvaluationQuestionCreateNestedOneWithoutAnswersInput;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreCreateNestedManyWithoutAnswerInput;
};
export type EvaluationAnswerUncheckedCreateInput = {
    id?: string;
    selfScore?: number | null;
    selfRemarks?: string | null;
    managerScore?: number | null;
    managerRemarks?: string | null;
    finalScore?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    evaluationId: string;
    questionId: string;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreUncheckedCreateNestedManyWithoutAnswerInput;
};
export type EvaluationAnswerUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    selfScore?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    selfRemarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    managerScore?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    managerRemarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    finalScore?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    evaluation?: Prisma.EvaluationUpdateOneRequiredWithoutAnswersNestedInput;
    question?: Prisma.EvaluationQuestionUpdateOneRequiredWithoutAnswersNestedInput;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreUpdateManyWithoutAnswerNestedInput;
};
export type EvaluationAnswerUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    selfScore?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    selfRemarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    managerScore?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    managerRemarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    finalScore?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    evaluationId?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreUncheckedUpdateManyWithoutAnswerNestedInput;
};
export type EvaluationAnswerCreateManyInput = {
    id?: string;
    selfScore?: number | null;
    selfRemarks?: string | null;
    managerScore?: number | null;
    managerRemarks?: string | null;
    finalScore?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    evaluationId: string;
    questionId: string;
};
export type EvaluationAnswerUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    selfScore?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    selfRemarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    managerScore?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    managerRemarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    finalScore?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvaluationAnswerUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    selfScore?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    selfRemarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    managerScore?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    managerRemarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    finalScore?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    evaluationId?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EvaluationAnswerListRelationFilter = {
    every?: Prisma.EvaluationAnswerWhereInput;
    some?: Prisma.EvaluationAnswerWhereInput;
    none?: Prisma.EvaluationAnswerWhereInput;
};
export type EvaluationAnswerOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EvaluationAnswerEvaluationIdQuestionIdCompoundUniqueInput = {
    evaluationId: string;
    questionId: string;
};
export type EvaluationAnswerCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    selfScore?: Prisma.SortOrder;
    selfRemarks?: Prisma.SortOrder;
    managerScore?: Prisma.SortOrder;
    managerRemarks?: Prisma.SortOrder;
    finalScore?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    evaluationId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
};
export type EvaluationAnswerAvgOrderByAggregateInput = {
    selfScore?: Prisma.SortOrder;
    managerScore?: Prisma.SortOrder;
    finalScore?: Prisma.SortOrder;
};
export type EvaluationAnswerMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    selfScore?: Prisma.SortOrder;
    selfRemarks?: Prisma.SortOrder;
    managerScore?: Prisma.SortOrder;
    managerRemarks?: Prisma.SortOrder;
    finalScore?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    evaluationId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
};
export type EvaluationAnswerMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    selfScore?: Prisma.SortOrder;
    selfRemarks?: Prisma.SortOrder;
    managerScore?: Prisma.SortOrder;
    managerRemarks?: Prisma.SortOrder;
    finalScore?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    evaluationId?: Prisma.SortOrder;
    questionId?: Prisma.SortOrder;
};
export type EvaluationAnswerSumOrderByAggregateInput = {
    selfScore?: Prisma.SortOrder;
    managerScore?: Prisma.SortOrder;
    finalScore?: Prisma.SortOrder;
};
export type EvaluationAnswerScalarRelationFilter = {
    is?: Prisma.EvaluationAnswerWhereInput;
    isNot?: Prisma.EvaluationAnswerWhereInput;
};
export type EvaluationAnswerCreateNestedManyWithoutQuestionInput = {
    create?: Prisma.XOR<Prisma.EvaluationAnswerCreateWithoutQuestionInput, Prisma.EvaluationAnswerUncheckedCreateWithoutQuestionInput> | Prisma.EvaluationAnswerCreateWithoutQuestionInput[] | Prisma.EvaluationAnswerUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.EvaluationAnswerCreateOrConnectWithoutQuestionInput | Prisma.EvaluationAnswerCreateOrConnectWithoutQuestionInput[];
    createMany?: Prisma.EvaluationAnswerCreateManyQuestionInputEnvelope;
    connect?: Prisma.EvaluationAnswerWhereUniqueInput | Prisma.EvaluationAnswerWhereUniqueInput[];
};
export type EvaluationAnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: Prisma.XOR<Prisma.EvaluationAnswerCreateWithoutQuestionInput, Prisma.EvaluationAnswerUncheckedCreateWithoutQuestionInput> | Prisma.EvaluationAnswerCreateWithoutQuestionInput[] | Prisma.EvaluationAnswerUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.EvaluationAnswerCreateOrConnectWithoutQuestionInput | Prisma.EvaluationAnswerCreateOrConnectWithoutQuestionInput[];
    createMany?: Prisma.EvaluationAnswerCreateManyQuestionInputEnvelope;
    connect?: Prisma.EvaluationAnswerWhereUniqueInput | Prisma.EvaluationAnswerWhereUniqueInput[];
};
export type EvaluationAnswerUpdateManyWithoutQuestionNestedInput = {
    create?: Prisma.XOR<Prisma.EvaluationAnswerCreateWithoutQuestionInput, Prisma.EvaluationAnswerUncheckedCreateWithoutQuestionInput> | Prisma.EvaluationAnswerCreateWithoutQuestionInput[] | Prisma.EvaluationAnswerUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.EvaluationAnswerCreateOrConnectWithoutQuestionInput | Prisma.EvaluationAnswerCreateOrConnectWithoutQuestionInput[];
    upsert?: Prisma.EvaluationAnswerUpsertWithWhereUniqueWithoutQuestionInput | Prisma.EvaluationAnswerUpsertWithWhereUniqueWithoutQuestionInput[];
    createMany?: Prisma.EvaluationAnswerCreateManyQuestionInputEnvelope;
    set?: Prisma.EvaluationAnswerWhereUniqueInput | Prisma.EvaluationAnswerWhereUniqueInput[];
    disconnect?: Prisma.EvaluationAnswerWhereUniqueInput | Prisma.EvaluationAnswerWhereUniqueInput[];
    delete?: Prisma.EvaluationAnswerWhereUniqueInput | Prisma.EvaluationAnswerWhereUniqueInput[];
    connect?: Prisma.EvaluationAnswerWhereUniqueInput | Prisma.EvaluationAnswerWhereUniqueInput[];
    update?: Prisma.EvaluationAnswerUpdateWithWhereUniqueWithoutQuestionInput | Prisma.EvaluationAnswerUpdateWithWhereUniqueWithoutQuestionInput[];
    updateMany?: Prisma.EvaluationAnswerUpdateManyWithWhereWithoutQuestionInput | Prisma.EvaluationAnswerUpdateManyWithWhereWithoutQuestionInput[];
    deleteMany?: Prisma.EvaluationAnswerScalarWhereInput | Prisma.EvaluationAnswerScalarWhereInput[];
};
export type EvaluationAnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: Prisma.XOR<Prisma.EvaluationAnswerCreateWithoutQuestionInput, Prisma.EvaluationAnswerUncheckedCreateWithoutQuestionInput> | Prisma.EvaluationAnswerCreateWithoutQuestionInput[] | Prisma.EvaluationAnswerUncheckedCreateWithoutQuestionInput[];
    connectOrCreate?: Prisma.EvaluationAnswerCreateOrConnectWithoutQuestionInput | Prisma.EvaluationAnswerCreateOrConnectWithoutQuestionInput[];
    upsert?: Prisma.EvaluationAnswerUpsertWithWhereUniqueWithoutQuestionInput | Prisma.EvaluationAnswerUpsertWithWhereUniqueWithoutQuestionInput[];
    createMany?: Prisma.EvaluationAnswerCreateManyQuestionInputEnvelope;
    set?: Prisma.EvaluationAnswerWhereUniqueInput | Prisma.EvaluationAnswerWhereUniqueInput[];
    disconnect?: Prisma.EvaluationAnswerWhereUniqueInput | Prisma.EvaluationAnswerWhereUniqueInput[];
    delete?: Prisma.EvaluationAnswerWhereUniqueInput | Prisma.EvaluationAnswerWhereUniqueInput[];
    connect?: Prisma.EvaluationAnswerWhereUniqueInput | Prisma.EvaluationAnswerWhereUniqueInput[];
    update?: Prisma.EvaluationAnswerUpdateWithWhereUniqueWithoutQuestionInput | Prisma.EvaluationAnswerUpdateWithWhereUniqueWithoutQuestionInput[];
    updateMany?: Prisma.EvaluationAnswerUpdateManyWithWhereWithoutQuestionInput | Prisma.EvaluationAnswerUpdateManyWithWhereWithoutQuestionInput[];
    deleteMany?: Prisma.EvaluationAnswerScalarWhereInput | Prisma.EvaluationAnswerScalarWhereInput[];
};
export type EvaluationAnswerCreateNestedManyWithoutEvaluationInput = {
    create?: Prisma.XOR<Prisma.EvaluationAnswerCreateWithoutEvaluationInput, Prisma.EvaluationAnswerUncheckedCreateWithoutEvaluationInput> | Prisma.EvaluationAnswerCreateWithoutEvaluationInput[] | Prisma.EvaluationAnswerUncheckedCreateWithoutEvaluationInput[];
    connectOrCreate?: Prisma.EvaluationAnswerCreateOrConnectWithoutEvaluationInput | Prisma.EvaluationAnswerCreateOrConnectWithoutEvaluationInput[];
    createMany?: Prisma.EvaluationAnswerCreateManyEvaluationInputEnvelope;
    connect?: Prisma.EvaluationAnswerWhereUniqueInput | Prisma.EvaluationAnswerWhereUniqueInput[];
};
export type EvaluationAnswerUncheckedCreateNestedManyWithoutEvaluationInput = {
    create?: Prisma.XOR<Prisma.EvaluationAnswerCreateWithoutEvaluationInput, Prisma.EvaluationAnswerUncheckedCreateWithoutEvaluationInput> | Prisma.EvaluationAnswerCreateWithoutEvaluationInput[] | Prisma.EvaluationAnswerUncheckedCreateWithoutEvaluationInput[];
    connectOrCreate?: Prisma.EvaluationAnswerCreateOrConnectWithoutEvaluationInput | Prisma.EvaluationAnswerCreateOrConnectWithoutEvaluationInput[];
    createMany?: Prisma.EvaluationAnswerCreateManyEvaluationInputEnvelope;
    connect?: Prisma.EvaluationAnswerWhereUniqueInput | Prisma.EvaluationAnswerWhereUniqueInput[];
};
export type EvaluationAnswerUpdateManyWithoutEvaluationNestedInput = {
    create?: Prisma.XOR<Prisma.EvaluationAnswerCreateWithoutEvaluationInput, Prisma.EvaluationAnswerUncheckedCreateWithoutEvaluationInput> | Prisma.EvaluationAnswerCreateWithoutEvaluationInput[] | Prisma.EvaluationAnswerUncheckedCreateWithoutEvaluationInput[];
    connectOrCreate?: Prisma.EvaluationAnswerCreateOrConnectWithoutEvaluationInput | Prisma.EvaluationAnswerCreateOrConnectWithoutEvaluationInput[];
    upsert?: Prisma.EvaluationAnswerUpsertWithWhereUniqueWithoutEvaluationInput | Prisma.EvaluationAnswerUpsertWithWhereUniqueWithoutEvaluationInput[];
    createMany?: Prisma.EvaluationAnswerCreateManyEvaluationInputEnvelope;
    set?: Prisma.EvaluationAnswerWhereUniqueInput | Prisma.EvaluationAnswerWhereUniqueInput[];
    disconnect?: Prisma.EvaluationAnswerWhereUniqueInput | Prisma.EvaluationAnswerWhereUniqueInput[];
    delete?: Prisma.EvaluationAnswerWhereUniqueInput | Prisma.EvaluationAnswerWhereUniqueInput[];
    connect?: Prisma.EvaluationAnswerWhereUniqueInput | Prisma.EvaluationAnswerWhereUniqueInput[];
    update?: Prisma.EvaluationAnswerUpdateWithWhereUniqueWithoutEvaluationInput | Prisma.EvaluationAnswerUpdateWithWhereUniqueWithoutEvaluationInput[];
    updateMany?: Prisma.EvaluationAnswerUpdateManyWithWhereWithoutEvaluationInput | Prisma.EvaluationAnswerUpdateManyWithWhereWithoutEvaluationInput[];
    deleteMany?: Prisma.EvaluationAnswerScalarWhereInput | Prisma.EvaluationAnswerScalarWhereInput[];
};
export type EvaluationAnswerUncheckedUpdateManyWithoutEvaluationNestedInput = {
    create?: Prisma.XOR<Prisma.EvaluationAnswerCreateWithoutEvaluationInput, Prisma.EvaluationAnswerUncheckedCreateWithoutEvaluationInput> | Prisma.EvaluationAnswerCreateWithoutEvaluationInput[] | Prisma.EvaluationAnswerUncheckedCreateWithoutEvaluationInput[];
    connectOrCreate?: Prisma.EvaluationAnswerCreateOrConnectWithoutEvaluationInput | Prisma.EvaluationAnswerCreateOrConnectWithoutEvaluationInput[];
    upsert?: Prisma.EvaluationAnswerUpsertWithWhereUniqueWithoutEvaluationInput | Prisma.EvaluationAnswerUpsertWithWhereUniqueWithoutEvaluationInput[];
    createMany?: Prisma.EvaluationAnswerCreateManyEvaluationInputEnvelope;
    set?: Prisma.EvaluationAnswerWhereUniqueInput | Prisma.EvaluationAnswerWhereUniqueInput[];
    disconnect?: Prisma.EvaluationAnswerWhereUniqueInput | Prisma.EvaluationAnswerWhereUniqueInput[];
    delete?: Prisma.EvaluationAnswerWhereUniqueInput | Prisma.EvaluationAnswerWhereUniqueInput[];
    connect?: Prisma.EvaluationAnswerWhereUniqueInput | Prisma.EvaluationAnswerWhereUniqueInput[];
    update?: Prisma.EvaluationAnswerUpdateWithWhereUniqueWithoutEvaluationInput | Prisma.EvaluationAnswerUpdateWithWhereUniqueWithoutEvaluationInput[];
    updateMany?: Prisma.EvaluationAnswerUpdateManyWithWhereWithoutEvaluationInput | Prisma.EvaluationAnswerUpdateManyWithWhereWithoutEvaluationInput[];
    deleteMany?: Prisma.EvaluationAnswerScalarWhereInput | Prisma.EvaluationAnswerScalarWhereInput[];
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EvaluationAnswerCreateNestedOneWithoutCalibrationIndividualScoresInput = {
    create?: Prisma.XOR<Prisma.EvaluationAnswerCreateWithoutCalibrationIndividualScoresInput, Prisma.EvaluationAnswerUncheckedCreateWithoutCalibrationIndividualScoresInput>;
    connectOrCreate?: Prisma.EvaluationAnswerCreateOrConnectWithoutCalibrationIndividualScoresInput;
    connect?: Prisma.EvaluationAnswerWhereUniqueInput;
};
export type EvaluationAnswerUpdateOneRequiredWithoutCalibrationIndividualScoresNestedInput = {
    create?: Prisma.XOR<Prisma.EvaluationAnswerCreateWithoutCalibrationIndividualScoresInput, Prisma.EvaluationAnswerUncheckedCreateWithoutCalibrationIndividualScoresInput>;
    connectOrCreate?: Prisma.EvaluationAnswerCreateOrConnectWithoutCalibrationIndividualScoresInput;
    upsert?: Prisma.EvaluationAnswerUpsertWithoutCalibrationIndividualScoresInput;
    connect?: Prisma.EvaluationAnswerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EvaluationAnswerUpdateToOneWithWhereWithoutCalibrationIndividualScoresInput, Prisma.EvaluationAnswerUpdateWithoutCalibrationIndividualScoresInput>, Prisma.EvaluationAnswerUncheckedUpdateWithoutCalibrationIndividualScoresInput>;
};
export type EvaluationAnswerCreateWithoutQuestionInput = {
    id?: string;
    selfScore?: number | null;
    selfRemarks?: string | null;
    managerScore?: number | null;
    managerRemarks?: string | null;
    finalScore?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    evaluation: Prisma.EvaluationCreateNestedOneWithoutAnswersInput;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreCreateNestedManyWithoutAnswerInput;
};
export type EvaluationAnswerUncheckedCreateWithoutQuestionInput = {
    id?: string;
    selfScore?: number | null;
    selfRemarks?: string | null;
    managerScore?: number | null;
    managerRemarks?: string | null;
    finalScore?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    evaluationId: string;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreUncheckedCreateNestedManyWithoutAnswerInput;
};
export type EvaluationAnswerCreateOrConnectWithoutQuestionInput = {
    where: Prisma.EvaluationAnswerWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvaluationAnswerCreateWithoutQuestionInput, Prisma.EvaluationAnswerUncheckedCreateWithoutQuestionInput>;
};
export type EvaluationAnswerCreateManyQuestionInputEnvelope = {
    data: Prisma.EvaluationAnswerCreateManyQuestionInput | Prisma.EvaluationAnswerCreateManyQuestionInput[];
    skipDuplicates?: boolean;
};
export type EvaluationAnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: Prisma.EvaluationAnswerWhereUniqueInput;
    update: Prisma.XOR<Prisma.EvaluationAnswerUpdateWithoutQuestionInput, Prisma.EvaluationAnswerUncheckedUpdateWithoutQuestionInput>;
    create: Prisma.XOR<Prisma.EvaluationAnswerCreateWithoutQuestionInput, Prisma.EvaluationAnswerUncheckedCreateWithoutQuestionInput>;
};
export type EvaluationAnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: Prisma.EvaluationAnswerWhereUniqueInput;
    data: Prisma.XOR<Prisma.EvaluationAnswerUpdateWithoutQuestionInput, Prisma.EvaluationAnswerUncheckedUpdateWithoutQuestionInput>;
};
export type EvaluationAnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: Prisma.EvaluationAnswerScalarWhereInput;
    data: Prisma.XOR<Prisma.EvaluationAnswerUpdateManyMutationInput, Prisma.EvaluationAnswerUncheckedUpdateManyWithoutQuestionInput>;
};
export type EvaluationAnswerScalarWhereInput = {
    AND?: Prisma.EvaluationAnswerScalarWhereInput | Prisma.EvaluationAnswerScalarWhereInput[];
    OR?: Prisma.EvaluationAnswerScalarWhereInput[];
    NOT?: Prisma.EvaluationAnswerScalarWhereInput | Prisma.EvaluationAnswerScalarWhereInput[];
    id?: Prisma.UuidFilter<"EvaluationAnswer"> | string;
    selfScore?: Prisma.IntNullableFilter<"EvaluationAnswer"> | number | null;
    selfRemarks?: Prisma.StringNullableFilter<"EvaluationAnswer"> | string | null;
    managerScore?: Prisma.IntNullableFilter<"EvaluationAnswer"> | number | null;
    managerRemarks?: Prisma.StringNullableFilter<"EvaluationAnswer"> | string | null;
    finalScore?: Prisma.IntNullableFilter<"EvaluationAnswer"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"EvaluationAnswer"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EvaluationAnswer"> | Date | string;
    evaluationId?: Prisma.UuidFilter<"EvaluationAnswer"> | string;
    questionId?: Prisma.UuidFilter<"EvaluationAnswer"> | string;
};
export type EvaluationAnswerCreateWithoutEvaluationInput = {
    id?: string;
    selfScore?: number | null;
    selfRemarks?: string | null;
    managerScore?: number | null;
    managerRemarks?: string | null;
    finalScore?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    question: Prisma.EvaluationQuestionCreateNestedOneWithoutAnswersInput;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreCreateNestedManyWithoutAnswerInput;
};
export type EvaluationAnswerUncheckedCreateWithoutEvaluationInput = {
    id?: string;
    selfScore?: number | null;
    selfRemarks?: string | null;
    managerScore?: number | null;
    managerRemarks?: string | null;
    finalScore?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    questionId: string;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreUncheckedCreateNestedManyWithoutAnswerInput;
};
export type EvaluationAnswerCreateOrConnectWithoutEvaluationInput = {
    where: Prisma.EvaluationAnswerWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvaluationAnswerCreateWithoutEvaluationInput, Prisma.EvaluationAnswerUncheckedCreateWithoutEvaluationInput>;
};
export type EvaluationAnswerCreateManyEvaluationInputEnvelope = {
    data: Prisma.EvaluationAnswerCreateManyEvaluationInput | Prisma.EvaluationAnswerCreateManyEvaluationInput[];
    skipDuplicates?: boolean;
};
export type EvaluationAnswerUpsertWithWhereUniqueWithoutEvaluationInput = {
    where: Prisma.EvaluationAnswerWhereUniqueInput;
    update: Prisma.XOR<Prisma.EvaluationAnswerUpdateWithoutEvaluationInput, Prisma.EvaluationAnswerUncheckedUpdateWithoutEvaluationInput>;
    create: Prisma.XOR<Prisma.EvaluationAnswerCreateWithoutEvaluationInput, Prisma.EvaluationAnswerUncheckedCreateWithoutEvaluationInput>;
};
export type EvaluationAnswerUpdateWithWhereUniqueWithoutEvaluationInput = {
    where: Prisma.EvaluationAnswerWhereUniqueInput;
    data: Prisma.XOR<Prisma.EvaluationAnswerUpdateWithoutEvaluationInput, Prisma.EvaluationAnswerUncheckedUpdateWithoutEvaluationInput>;
};
export type EvaluationAnswerUpdateManyWithWhereWithoutEvaluationInput = {
    where: Prisma.EvaluationAnswerScalarWhereInput;
    data: Prisma.XOR<Prisma.EvaluationAnswerUpdateManyMutationInput, Prisma.EvaluationAnswerUncheckedUpdateManyWithoutEvaluationInput>;
};
export type EvaluationAnswerCreateWithoutCalibrationIndividualScoresInput = {
    id?: string;
    selfScore?: number | null;
    selfRemarks?: string | null;
    managerScore?: number | null;
    managerRemarks?: string | null;
    finalScore?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    evaluation: Prisma.EvaluationCreateNestedOneWithoutAnswersInput;
    question: Prisma.EvaluationQuestionCreateNestedOneWithoutAnswersInput;
};
export type EvaluationAnswerUncheckedCreateWithoutCalibrationIndividualScoresInput = {
    id?: string;
    selfScore?: number | null;
    selfRemarks?: string | null;
    managerScore?: number | null;
    managerRemarks?: string | null;
    finalScore?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    evaluationId: string;
    questionId: string;
};
export type EvaluationAnswerCreateOrConnectWithoutCalibrationIndividualScoresInput = {
    where: Prisma.EvaluationAnswerWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvaluationAnswerCreateWithoutCalibrationIndividualScoresInput, Prisma.EvaluationAnswerUncheckedCreateWithoutCalibrationIndividualScoresInput>;
};
export type EvaluationAnswerUpsertWithoutCalibrationIndividualScoresInput = {
    update: Prisma.XOR<Prisma.EvaluationAnswerUpdateWithoutCalibrationIndividualScoresInput, Prisma.EvaluationAnswerUncheckedUpdateWithoutCalibrationIndividualScoresInput>;
    create: Prisma.XOR<Prisma.EvaluationAnswerCreateWithoutCalibrationIndividualScoresInput, Prisma.EvaluationAnswerUncheckedCreateWithoutCalibrationIndividualScoresInput>;
    where?: Prisma.EvaluationAnswerWhereInput;
};
export type EvaluationAnswerUpdateToOneWithWhereWithoutCalibrationIndividualScoresInput = {
    where?: Prisma.EvaluationAnswerWhereInput;
    data: Prisma.XOR<Prisma.EvaluationAnswerUpdateWithoutCalibrationIndividualScoresInput, Prisma.EvaluationAnswerUncheckedUpdateWithoutCalibrationIndividualScoresInput>;
};
export type EvaluationAnswerUpdateWithoutCalibrationIndividualScoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    selfScore?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    selfRemarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    managerScore?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    managerRemarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    finalScore?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    evaluation?: Prisma.EvaluationUpdateOneRequiredWithoutAnswersNestedInput;
    question?: Prisma.EvaluationQuestionUpdateOneRequiredWithoutAnswersNestedInput;
};
export type EvaluationAnswerUncheckedUpdateWithoutCalibrationIndividualScoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    selfScore?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    selfRemarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    managerScore?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    managerRemarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    finalScore?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    evaluationId?: Prisma.StringFieldUpdateOperationsInput | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EvaluationAnswerCreateManyQuestionInput = {
    id?: string;
    selfScore?: number | null;
    selfRemarks?: string | null;
    managerScore?: number | null;
    managerRemarks?: string | null;
    finalScore?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    evaluationId: string;
};
export type EvaluationAnswerUpdateWithoutQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    selfScore?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    selfRemarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    managerScore?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    managerRemarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    finalScore?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    evaluation?: Prisma.EvaluationUpdateOneRequiredWithoutAnswersNestedInput;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreUpdateManyWithoutAnswerNestedInput;
};
export type EvaluationAnswerUncheckedUpdateWithoutQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    selfScore?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    selfRemarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    managerScore?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    managerRemarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    finalScore?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    evaluationId?: Prisma.StringFieldUpdateOperationsInput | string;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreUncheckedUpdateManyWithoutAnswerNestedInput;
};
export type EvaluationAnswerUncheckedUpdateManyWithoutQuestionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    selfScore?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    selfRemarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    managerScore?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    managerRemarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    finalScore?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    evaluationId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EvaluationAnswerCreateManyEvaluationInput = {
    id?: string;
    selfScore?: number | null;
    selfRemarks?: string | null;
    managerScore?: number | null;
    managerRemarks?: string | null;
    finalScore?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    questionId: string;
};
export type EvaluationAnswerUpdateWithoutEvaluationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    selfScore?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    selfRemarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    managerScore?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    managerRemarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    finalScore?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    question?: Prisma.EvaluationQuestionUpdateOneRequiredWithoutAnswersNestedInput;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreUpdateManyWithoutAnswerNestedInput;
};
export type EvaluationAnswerUncheckedUpdateWithoutEvaluationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    selfScore?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    selfRemarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    managerScore?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    managerRemarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    finalScore?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreUncheckedUpdateManyWithoutAnswerNestedInput;
};
export type EvaluationAnswerUncheckedUpdateManyWithoutEvaluationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    selfScore?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    selfRemarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    managerScore?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    managerRemarks?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    finalScore?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    questionId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EvaluationAnswerCountOutputType = {
    calibrationIndividualScores: number;
};
export type EvaluationAnswerCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    calibrationIndividualScores?: boolean | EvaluationAnswerCountOutputTypeCountCalibrationIndividualScoresArgs;
};
export type EvaluationAnswerCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationAnswerCountOutputTypeSelect<ExtArgs> | null;
};
export type EvaluationAnswerCountOutputTypeCountCalibrationIndividualScoresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CalibrationIndividualScoreWhereInput;
};
export type EvaluationAnswerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    selfScore?: boolean;
    selfRemarks?: boolean;
    managerScore?: boolean;
    managerRemarks?: boolean;
    finalScore?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    evaluationId?: boolean;
    questionId?: boolean;
    evaluation?: boolean | Prisma.EvaluationDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.EvaluationQuestionDefaultArgs<ExtArgs>;
    calibrationIndividualScores?: boolean | Prisma.EvaluationAnswer$calibrationIndividualScoresArgs<ExtArgs>;
    _count?: boolean | Prisma.EvaluationAnswerCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["evaluationAnswer"]>;
export type EvaluationAnswerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    selfScore?: boolean;
    selfRemarks?: boolean;
    managerScore?: boolean;
    managerRemarks?: boolean;
    finalScore?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    evaluationId?: boolean;
    questionId?: boolean;
    evaluation?: boolean | Prisma.EvaluationDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.EvaluationQuestionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["evaluationAnswer"]>;
export type EvaluationAnswerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    selfScore?: boolean;
    selfRemarks?: boolean;
    managerScore?: boolean;
    managerRemarks?: boolean;
    finalScore?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    evaluationId?: boolean;
    questionId?: boolean;
    evaluation?: boolean | Prisma.EvaluationDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.EvaluationQuestionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["evaluationAnswer"]>;
export type EvaluationAnswerSelectScalar = {
    id?: boolean;
    selfScore?: boolean;
    selfRemarks?: boolean;
    managerScore?: boolean;
    managerRemarks?: boolean;
    finalScore?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    evaluationId?: boolean;
    questionId?: boolean;
};
export type EvaluationAnswerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "selfScore" | "selfRemarks" | "managerScore" | "managerRemarks" | "finalScore" | "createdAt" | "updatedAt" | "evaluationId" | "questionId", ExtArgs["result"]["evaluationAnswer"]>;
export type EvaluationAnswerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    evaluation?: boolean | Prisma.EvaluationDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.EvaluationQuestionDefaultArgs<ExtArgs>;
    calibrationIndividualScores?: boolean | Prisma.EvaluationAnswer$calibrationIndividualScoresArgs<ExtArgs>;
    _count?: boolean | Prisma.EvaluationAnswerCountOutputTypeDefaultArgs<ExtArgs>;
};
export type EvaluationAnswerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    evaluation?: boolean | Prisma.EvaluationDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.EvaluationQuestionDefaultArgs<ExtArgs>;
};
export type EvaluationAnswerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    evaluation?: boolean | Prisma.EvaluationDefaultArgs<ExtArgs>;
    question?: boolean | Prisma.EvaluationQuestionDefaultArgs<ExtArgs>;
};
export type $EvaluationAnswerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EvaluationAnswer";
    objects: {
        evaluation: Prisma.$EvaluationPayload<ExtArgs>;
        question: Prisma.$EvaluationQuestionPayload<ExtArgs>;
        calibrationIndividualScores: Prisma.$CalibrationIndividualScorePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        selfScore: number | null;
        selfRemarks: string | null;
        managerScore: number | null;
        managerRemarks: string | null;
        finalScore: number | null;
        createdAt: Date;
        updatedAt: Date;
        evaluationId: string;
        questionId: string;
    }, ExtArgs["result"]["evaluationAnswer"]>;
    composites: {};
};
export type EvaluationAnswerGetPayload<S extends boolean | null | undefined | EvaluationAnswerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EvaluationAnswerPayload, S>;
export type EvaluationAnswerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EvaluationAnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EvaluationAnswerCountAggregateInputType | true;
};
export interface EvaluationAnswerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EvaluationAnswer'];
        meta: {
            name: 'EvaluationAnswer';
        };
    };
    findUnique<T extends EvaluationAnswerFindUniqueArgs>(args: Prisma.SelectSubset<T, EvaluationAnswerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EvaluationAnswerClient<runtime.Types.Result.GetResult<Prisma.$EvaluationAnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EvaluationAnswerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EvaluationAnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EvaluationAnswerClient<runtime.Types.Result.GetResult<Prisma.$EvaluationAnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EvaluationAnswerFindFirstArgs>(args?: Prisma.SelectSubset<T, EvaluationAnswerFindFirstArgs<ExtArgs>>): Prisma.Prisma__EvaluationAnswerClient<runtime.Types.Result.GetResult<Prisma.$EvaluationAnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EvaluationAnswerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EvaluationAnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EvaluationAnswerClient<runtime.Types.Result.GetResult<Prisma.$EvaluationAnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EvaluationAnswerFindManyArgs>(args?: Prisma.SelectSubset<T, EvaluationAnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvaluationAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EvaluationAnswerCreateArgs>(args: Prisma.SelectSubset<T, EvaluationAnswerCreateArgs<ExtArgs>>): Prisma.Prisma__EvaluationAnswerClient<runtime.Types.Result.GetResult<Prisma.$EvaluationAnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EvaluationAnswerCreateManyArgs>(args?: Prisma.SelectSubset<T, EvaluationAnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EvaluationAnswerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EvaluationAnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvaluationAnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EvaluationAnswerDeleteArgs>(args: Prisma.SelectSubset<T, EvaluationAnswerDeleteArgs<ExtArgs>>): Prisma.Prisma__EvaluationAnswerClient<runtime.Types.Result.GetResult<Prisma.$EvaluationAnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EvaluationAnswerUpdateArgs>(args: Prisma.SelectSubset<T, EvaluationAnswerUpdateArgs<ExtArgs>>): Prisma.Prisma__EvaluationAnswerClient<runtime.Types.Result.GetResult<Prisma.$EvaluationAnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EvaluationAnswerDeleteManyArgs>(args?: Prisma.SelectSubset<T, EvaluationAnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EvaluationAnswerUpdateManyArgs>(args: Prisma.SelectSubset<T, EvaluationAnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EvaluationAnswerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EvaluationAnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvaluationAnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EvaluationAnswerUpsertArgs>(args: Prisma.SelectSubset<T, EvaluationAnswerUpsertArgs<ExtArgs>>): Prisma.Prisma__EvaluationAnswerClient<runtime.Types.Result.GetResult<Prisma.$EvaluationAnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EvaluationAnswerCountArgs>(args?: Prisma.Subset<T, EvaluationAnswerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EvaluationAnswerCountAggregateOutputType> : number>;
    aggregate<T extends EvaluationAnswerAggregateArgs>(args: Prisma.Subset<T, EvaluationAnswerAggregateArgs>): Prisma.PrismaPromise<GetEvaluationAnswerAggregateType<T>>;
    groupBy<T extends EvaluationAnswerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EvaluationAnswerGroupByArgs['orderBy'];
    } : {
        orderBy?: EvaluationAnswerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EvaluationAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvaluationAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EvaluationAnswerFieldRefs;
}
export interface Prisma__EvaluationAnswerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    evaluation<T extends Prisma.EvaluationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EvaluationDefaultArgs<ExtArgs>>): Prisma.Prisma__EvaluationClient<runtime.Types.Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    question<T extends Prisma.EvaluationQuestionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EvaluationQuestionDefaultArgs<ExtArgs>>): Prisma.Prisma__EvaluationQuestionClient<runtime.Types.Result.GetResult<Prisma.$EvaluationQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    calibrationIndividualScores<T extends Prisma.EvaluationAnswer$calibrationIndividualScoresArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EvaluationAnswer$calibrationIndividualScoresArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CalibrationIndividualScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EvaluationAnswerFieldRefs {
    readonly id: Prisma.FieldRef<"EvaluationAnswer", 'String'>;
    readonly selfScore: Prisma.FieldRef<"EvaluationAnswer", 'Int'>;
    readonly selfRemarks: Prisma.FieldRef<"EvaluationAnswer", 'String'>;
    readonly managerScore: Prisma.FieldRef<"EvaluationAnswer", 'Int'>;
    readonly managerRemarks: Prisma.FieldRef<"EvaluationAnswer", 'String'>;
    readonly finalScore: Prisma.FieldRef<"EvaluationAnswer", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"EvaluationAnswer", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"EvaluationAnswer", 'DateTime'>;
    readonly evaluationId: Prisma.FieldRef<"EvaluationAnswer", 'String'>;
    readonly questionId: Prisma.FieldRef<"EvaluationAnswer", 'String'>;
}
export type EvaluationAnswerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationAnswerSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationAnswerOmit<ExtArgs> | null;
    include?: Prisma.EvaluationAnswerInclude<ExtArgs> | null;
    where: Prisma.EvaluationAnswerWhereUniqueInput;
};
export type EvaluationAnswerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationAnswerSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationAnswerOmit<ExtArgs> | null;
    include?: Prisma.EvaluationAnswerInclude<ExtArgs> | null;
    where: Prisma.EvaluationAnswerWhereUniqueInput;
};
export type EvaluationAnswerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type EvaluationAnswerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type EvaluationAnswerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type EvaluationAnswerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationAnswerSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationAnswerOmit<ExtArgs> | null;
    include?: Prisma.EvaluationAnswerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EvaluationAnswerCreateInput, Prisma.EvaluationAnswerUncheckedCreateInput>;
};
export type EvaluationAnswerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EvaluationAnswerCreateManyInput | Prisma.EvaluationAnswerCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EvaluationAnswerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationAnswerSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EvaluationAnswerOmit<ExtArgs> | null;
    data: Prisma.EvaluationAnswerCreateManyInput | Prisma.EvaluationAnswerCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.EvaluationAnswerIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EvaluationAnswerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationAnswerSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationAnswerOmit<ExtArgs> | null;
    include?: Prisma.EvaluationAnswerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EvaluationAnswerUpdateInput, Prisma.EvaluationAnswerUncheckedUpdateInput>;
    where: Prisma.EvaluationAnswerWhereUniqueInput;
};
export type EvaluationAnswerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EvaluationAnswerUpdateManyMutationInput, Prisma.EvaluationAnswerUncheckedUpdateManyInput>;
    where?: Prisma.EvaluationAnswerWhereInput;
    limit?: number;
};
export type EvaluationAnswerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationAnswerSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EvaluationAnswerOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EvaluationAnswerUpdateManyMutationInput, Prisma.EvaluationAnswerUncheckedUpdateManyInput>;
    where?: Prisma.EvaluationAnswerWhereInput;
    limit?: number;
    include?: Prisma.EvaluationAnswerIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EvaluationAnswerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationAnswerSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationAnswerOmit<ExtArgs> | null;
    include?: Prisma.EvaluationAnswerInclude<ExtArgs> | null;
    where: Prisma.EvaluationAnswerWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvaluationAnswerCreateInput, Prisma.EvaluationAnswerUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EvaluationAnswerUpdateInput, Prisma.EvaluationAnswerUncheckedUpdateInput>;
};
export type EvaluationAnswerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationAnswerSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationAnswerOmit<ExtArgs> | null;
    include?: Prisma.EvaluationAnswerInclude<ExtArgs> | null;
    where: Prisma.EvaluationAnswerWhereUniqueInput;
};
export type EvaluationAnswerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvaluationAnswerWhereInput;
    limit?: number;
};
export type EvaluationAnswer$calibrationIndividualScoresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalibrationIndividualScoreSelect<ExtArgs> | null;
    omit?: Prisma.CalibrationIndividualScoreOmit<ExtArgs> | null;
    include?: Prisma.CalibrationIndividualScoreInclude<ExtArgs> | null;
    where?: Prisma.CalibrationIndividualScoreWhereInput;
    orderBy?: Prisma.CalibrationIndividualScoreOrderByWithRelationInput | Prisma.CalibrationIndividualScoreOrderByWithRelationInput[];
    cursor?: Prisma.CalibrationIndividualScoreWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CalibrationIndividualScoreScalarFieldEnum | Prisma.CalibrationIndividualScoreScalarFieldEnum[];
};
export type EvaluationAnswerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationAnswerSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationAnswerOmit<ExtArgs> | null;
    include?: Prisma.EvaluationAnswerInclude<ExtArgs> | null;
};
export {};
