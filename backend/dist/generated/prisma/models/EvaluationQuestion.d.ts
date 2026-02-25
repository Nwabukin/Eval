import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EvaluationQuestionModel = runtime.Types.Result.DefaultSelection<Prisma.$EvaluationQuestionPayload>;
export type AggregateEvaluationQuestion = {
    _count: EvaluationQuestionCountAggregateOutputType | null;
    _avg: EvaluationQuestionAvgAggregateOutputType | null;
    _sum: EvaluationQuestionSumAggregateOutputType | null;
    _min: EvaluationQuestionMinAggregateOutputType | null;
    _max: EvaluationQuestionMaxAggregateOutputType | null;
};
export type EvaluationQuestionAvgAggregateOutputType = {
    weight: number | null;
    sortOrder: number | null;
};
export type EvaluationQuestionSumAggregateOutputType = {
    weight: number | null;
    sortOrder: number | null;
};
export type EvaluationQuestionMinAggregateOutputType = {
    id: string | null;
    text: string | null;
    category: string | null;
    weight: number | null;
    sortOrder: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    sheetId: string | null;
};
export type EvaluationQuestionMaxAggregateOutputType = {
    id: string | null;
    text: string | null;
    category: string | null;
    weight: number | null;
    sortOrder: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    sheetId: string | null;
};
export type EvaluationQuestionCountAggregateOutputType = {
    id: number;
    text: number;
    category: number;
    weight: number;
    sortOrder: number;
    createdAt: number;
    updatedAt: number;
    sheetId: number;
    _all: number;
};
export type EvaluationQuestionAvgAggregateInputType = {
    weight?: true;
    sortOrder?: true;
};
export type EvaluationQuestionSumAggregateInputType = {
    weight?: true;
    sortOrder?: true;
};
export type EvaluationQuestionMinAggregateInputType = {
    id?: true;
    text?: true;
    category?: true;
    weight?: true;
    sortOrder?: true;
    createdAt?: true;
    updatedAt?: true;
    sheetId?: true;
};
export type EvaluationQuestionMaxAggregateInputType = {
    id?: true;
    text?: true;
    category?: true;
    weight?: true;
    sortOrder?: true;
    createdAt?: true;
    updatedAt?: true;
    sheetId?: true;
};
export type EvaluationQuestionCountAggregateInputType = {
    id?: true;
    text?: true;
    category?: true;
    weight?: true;
    sortOrder?: true;
    createdAt?: true;
    updatedAt?: true;
    sheetId?: true;
    _all?: true;
};
export type EvaluationQuestionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvaluationQuestionWhereInput;
    orderBy?: Prisma.EvaluationQuestionOrderByWithRelationInput | Prisma.EvaluationQuestionOrderByWithRelationInput[];
    cursor?: Prisma.EvaluationQuestionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EvaluationQuestionCountAggregateInputType;
    _avg?: EvaluationQuestionAvgAggregateInputType;
    _sum?: EvaluationQuestionSumAggregateInputType;
    _min?: EvaluationQuestionMinAggregateInputType;
    _max?: EvaluationQuestionMaxAggregateInputType;
};
export type GetEvaluationQuestionAggregateType<T extends EvaluationQuestionAggregateArgs> = {
    [P in keyof T & keyof AggregateEvaluationQuestion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEvaluationQuestion[P]> : Prisma.GetScalarType<T[P], AggregateEvaluationQuestion[P]>;
};
export type EvaluationQuestionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvaluationQuestionWhereInput;
    orderBy?: Prisma.EvaluationQuestionOrderByWithAggregationInput | Prisma.EvaluationQuestionOrderByWithAggregationInput[];
    by: Prisma.EvaluationQuestionScalarFieldEnum[] | Prisma.EvaluationQuestionScalarFieldEnum;
    having?: Prisma.EvaluationQuestionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EvaluationQuestionCountAggregateInputType | true;
    _avg?: EvaluationQuestionAvgAggregateInputType;
    _sum?: EvaluationQuestionSumAggregateInputType;
    _min?: EvaluationQuestionMinAggregateInputType;
    _max?: EvaluationQuestionMaxAggregateInputType;
};
export type EvaluationQuestionGroupByOutputType = {
    id: string;
    text: string;
    category: string | null;
    weight: number;
    sortOrder: number;
    createdAt: Date;
    updatedAt: Date;
    sheetId: string;
    _count: EvaluationQuestionCountAggregateOutputType | null;
    _avg: EvaluationQuestionAvgAggregateOutputType | null;
    _sum: EvaluationQuestionSumAggregateOutputType | null;
    _min: EvaluationQuestionMinAggregateOutputType | null;
    _max: EvaluationQuestionMaxAggregateOutputType | null;
};
type GetEvaluationQuestionGroupByPayload<T extends EvaluationQuestionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EvaluationQuestionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EvaluationQuestionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EvaluationQuestionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EvaluationQuestionGroupByOutputType[P]>;
}>>;
export type EvaluationQuestionWhereInput = {
    AND?: Prisma.EvaluationQuestionWhereInput | Prisma.EvaluationQuestionWhereInput[];
    OR?: Prisma.EvaluationQuestionWhereInput[];
    NOT?: Prisma.EvaluationQuestionWhereInput | Prisma.EvaluationQuestionWhereInput[];
    id?: Prisma.UuidFilter<"EvaluationQuestion"> | string;
    text?: Prisma.StringFilter<"EvaluationQuestion"> | string;
    category?: Prisma.StringNullableFilter<"EvaluationQuestion"> | string | null;
    weight?: Prisma.IntFilter<"EvaluationQuestion"> | number;
    sortOrder?: Prisma.IntFilter<"EvaluationQuestion"> | number;
    createdAt?: Prisma.DateTimeFilter<"EvaluationQuestion"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EvaluationQuestion"> | Date | string;
    sheetId?: Prisma.UuidFilter<"EvaluationQuestion"> | string;
    sheet?: Prisma.XOR<Prisma.EvaluationSheetScalarRelationFilter, Prisma.EvaluationSheetWhereInput>;
    answers?: Prisma.EvaluationAnswerListRelationFilter;
};
export type EvaluationQuestionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    category?: Prisma.SortOrderInput | Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    sheetId?: Prisma.SortOrder;
    sheet?: Prisma.EvaluationSheetOrderByWithRelationInput;
    answers?: Prisma.EvaluationAnswerOrderByRelationAggregateInput;
};
export type EvaluationQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.EvaluationQuestionWhereInput | Prisma.EvaluationQuestionWhereInput[];
    OR?: Prisma.EvaluationQuestionWhereInput[];
    NOT?: Prisma.EvaluationQuestionWhereInput | Prisma.EvaluationQuestionWhereInput[];
    text?: Prisma.StringFilter<"EvaluationQuestion"> | string;
    category?: Prisma.StringNullableFilter<"EvaluationQuestion"> | string | null;
    weight?: Prisma.IntFilter<"EvaluationQuestion"> | number;
    sortOrder?: Prisma.IntFilter<"EvaluationQuestion"> | number;
    createdAt?: Prisma.DateTimeFilter<"EvaluationQuestion"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EvaluationQuestion"> | Date | string;
    sheetId?: Prisma.UuidFilter<"EvaluationQuestion"> | string;
    sheet?: Prisma.XOR<Prisma.EvaluationSheetScalarRelationFilter, Prisma.EvaluationSheetWhereInput>;
    answers?: Prisma.EvaluationAnswerListRelationFilter;
}, "id">;
export type EvaluationQuestionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    category?: Prisma.SortOrderInput | Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    sheetId?: Prisma.SortOrder;
    _count?: Prisma.EvaluationQuestionCountOrderByAggregateInput;
    _avg?: Prisma.EvaluationQuestionAvgOrderByAggregateInput;
    _max?: Prisma.EvaluationQuestionMaxOrderByAggregateInput;
    _min?: Prisma.EvaluationQuestionMinOrderByAggregateInput;
    _sum?: Prisma.EvaluationQuestionSumOrderByAggregateInput;
};
export type EvaluationQuestionScalarWhereWithAggregatesInput = {
    AND?: Prisma.EvaluationQuestionScalarWhereWithAggregatesInput | Prisma.EvaluationQuestionScalarWhereWithAggregatesInput[];
    OR?: Prisma.EvaluationQuestionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EvaluationQuestionScalarWhereWithAggregatesInput | Prisma.EvaluationQuestionScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"EvaluationQuestion"> | string;
    text?: Prisma.StringWithAggregatesFilter<"EvaluationQuestion"> | string;
    category?: Prisma.StringNullableWithAggregatesFilter<"EvaluationQuestion"> | string | null;
    weight?: Prisma.IntWithAggregatesFilter<"EvaluationQuestion"> | number;
    sortOrder?: Prisma.IntWithAggregatesFilter<"EvaluationQuestion"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"EvaluationQuestion"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"EvaluationQuestion"> | Date | string;
    sheetId?: Prisma.UuidWithAggregatesFilter<"EvaluationQuestion"> | string;
};
export type EvaluationQuestionCreateInput = {
    id?: string;
    text: string;
    category?: string | null;
    weight?: number;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sheet: Prisma.EvaluationSheetCreateNestedOneWithoutQuestionsInput;
    answers?: Prisma.EvaluationAnswerCreateNestedManyWithoutQuestionInput;
};
export type EvaluationQuestionUncheckedCreateInput = {
    id?: string;
    text: string;
    category?: string | null;
    weight?: number;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sheetId: string;
    answers?: Prisma.EvaluationAnswerUncheckedCreateNestedManyWithoutQuestionInput;
};
export type EvaluationQuestionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sheet?: Prisma.EvaluationSheetUpdateOneRequiredWithoutQuestionsNestedInput;
    answers?: Prisma.EvaluationAnswerUpdateManyWithoutQuestionNestedInput;
};
export type EvaluationQuestionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sheetId?: Prisma.StringFieldUpdateOperationsInput | string;
    answers?: Prisma.EvaluationAnswerUncheckedUpdateManyWithoutQuestionNestedInput;
};
export type EvaluationQuestionCreateManyInput = {
    id?: string;
    text: string;
    category?: string | null;
    weight?: number;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sheetId: string;
};
export type EvaluationQuestionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvaluationQuestionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sheetId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EvaluationQuestionListRelationFilter = {
    every?: Prisma.EvaluationQuestionWhereInput;
    some?: Prisma.EvaluationQuestionWhereInput;
    none?: Prisma.EvaluationQuestionWhereInput;
};
export type EvaluationQuestionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EvaluationQuestionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    sheetId?: Prisma.SortOrder;
};
export type EvaluationQuestionAvgOrderByAggregateInput = {
    weight?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type EvaluationQuestionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    sheetId?: Prisma.SortOrder;
};
export type EvaluationQuestionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    text?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    weight?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    sheetId?: Prisma.SortOrder;
};
export type EvaluationQuestionSumOrderByAggregateInput = {
    weight?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type EvaluationQuestionScalarRelationFilter = {
    is?: Prisma.EvaluationQuestionWhereInput;
    isNot?: Prisma.EvaluationQuestionWhereInput;
};
export type EvaluationQuestionCreateNestedManyWithoutSheetInput = {
    create?: Prisma.XOR<Prisma.EvaluationQuestionCreateWithoutSheetInput, Prisma.EvaluationQuestionUncheckedCreateWithoutSheetInput> | Prisma.EvaluationQuestionCreateWithoutSheetInput[] | Prisma.EvaluationQuestionUncheckedCreateWithoutSheetInput[];
    connectOrCreate?: Prisma.EvaluationQuestionCreateOrConnectWithoutSheetInput | Prisma.EvaluationQuestionCreateOrConnectWithoutSheetInput[];
    createMany?: Prisma.EvaluationQuestionCreateManySheetInputEnvelope;
    connect?: Prisma.EvaluationQuestionWhereUniqueInput | Prisma.EvaluationQuestionWhereUniqueInput[];
};
export type EvaluationQuestionUncheckedCreateNestedManyWithoutSheetInput = {
    create?: Prisma.XOR<Prisma.EvaluationQuestionCreateWithoutSheetInput, Prisma.EvaluationQuestionUncheckedCreateWithoutSheetInput> | Prisma.EvaluationQuestionCreateWithoutSheetInput[] | Prisma.EvaluationQuestionUncheckedCreateWithoutSheetInput[];
    connectOrCreate?: Prisma.EvaluationQuestionCreateOrConnectWithoutSheetInput | Prisma.EvaluationQuestionCreateOrConnectWithoutSheetInput[];
    createMany?: Prisma.EvaluationQuestionCreateManySheetInputEnvelope;
    connect?: Prisma.EvaluationQuestionWhereUniqueInput | Prisma.EvaluationQuestionWhereUniqueInput[];
};
export type EvaluationQuestionUpdateManyWithoutSheetNestedInput = {
    create?: Prisma.XOR<Prisma.EvaluationQuestionCreateWithoutSheetInput, Prisma.EvaluationQuestionUncheckedCreateWithoutSheetInput> | Prisma.EvaluationQuestionCreateWithoutSheetInput[] | Prisma.EvaluationQuestionUncheckedCreateWithoutSheetInput[];
    connectOrCreate?: Prisma.EvaluationQuestionCreateOrConnectWithoutSheetInput | Prisma.EvaluationQuestionCreateOrConnectWithoutSheetInput[];
    upsert?: Prisma.EvaluationQuestionUpsertWithWhereUniqueWithoutSheetInput | Prisma.EvaluationQuestionUpsertWithWhereUniqueWithoutSheetInput[];
    createMany?: Prisma.EvaluationQuestionCreateManySheetInputEnvelope;
    set?: Prisma.EvaluationQuestionWhereUniqueInput | Prisma.EvaluationQuestionWhereUniqueInput[];
    disconnect?: Prisma.EvaluationQuestionWhereUniqueInput | Prisma.EvaluationQuestionWhereUniqueInput[];
    delete?: Prisma.EvaluationQuestionWhereUniqueInput | Prisma.EvaluationQuestionWhereUniqueInput[];
    connect?: Prisma.EvaluationQuestionWhereUniqueInput | Prisma.EvaluationQuestionWhereUniqueInput[];
    update?: Prisma.EvaluationQuestionUpdateWithWhereUniqueWithoutSheetInput | Prisma.EvaluationQuestionUpdateWithWhereUniqueWithoutSheetInput[];
    updateMany?: Prisma.EvaluationQuestionUpdateManyWithWhereWithoutSheetInput | Prisma.EvaluationQuestionUpdateManyWithWhereWithoutSheetInput[];
    deleteMany?: Prisma.EvaluationQuestionScalarWhereInput | Prisma.EvaluationQuestionScalarWhereInput[];
};
export type EvaluationQuestionUncheckedUpdateManyWithoutSheetNestedInput = {
    create?: Prisma.XOR<Prisma.EvaluationQuestionCreateWithoutSheetInput, Prisma.EvaluationQuestionUncheckedCreateWithoutSheetInput> | Prisma.EvaluationQuestionCreateWithoutSheetInput[] | Prisma.EvaluationQuestionUncheckedCreateWithoutSheetInput[];
    connectOrCreate?: Prisma.EvaluationQuestionCreateOrConnectWithoutSheetInput | Prisma.EvaluationQuestionCreateOrConnectWithoutSheetInput[];
    upsert?: Prisma.EvaluationQuestionUpsertWithWhereUniqueWithoutSheetInput | Prisma.EvaluationQuestionUpsertWithWhereUniqueWithoutSheetInput[];
    createMany?: Prisma.EvaluationQuestionCreateManySheetInputEnvelope;
    set?: Prisma.EvaluationQuestionWhereUniqueInput | Prisma.EvaluationQuestionWhereUniqueInput[];
    disconnect?: Prisma.EvaluationQuestionWhereUniqueInput | Prisma.EvaluationQuestionWhereUniqueInput[];
    delete?: Prisma.EvaluationQuestionWhereUniqueInput | Prisma.EvaluationQuestionWhereUniqueInput[];
    connect?: Prisma.EvaluationQuestionWhereUniqueInput | Prisma.EvaluationQuestionWhereUniqueInput[];
    update?: Prisma.EvaluationQuestionUpdateWithWhereUniqueWithoutSheetInput | Prisma.EvaluationQuestionUpdateWithWhereUniqueWithoutSheetInput[];
    updateMany?: Prisma.EvaluationQuestionUpdateManyWithWhereWithoutSheetInput | Prisma.EvaluationQuestionUpdateManyWithWhereWithoutSheetInput[];
    deleteMany?: Prisma.EvaluationQuestionScalarWhereInput | Prisma.EvaluationQuestionScalarWhereInput[];
};
export type EvaluationQuestionCreateNestedOneWithoutAnswersInput = {
    create?: Prisma.XOR<Prisma.EvaluationQuestionCreateWithoutAnswersInput, Prisma.EvaluationQuestionUncheckedCreateWithoutAnswersInput>;
    connectOrCreate?: Prisma.EvaluationQuestionCreateOrConnectWithoutAnswersInput;
    connect?: Prisma.EvaluationQuestionWhereUniqueInput;
};
export type EvaluationQuestionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: Prisma.XOR<Prisma.EvaluationQuestionCreateWithoutAnswersInput, Prisma.EvaluationQuestionUncheckedCreateWithoutAnswersInput>;
    connectOrCreate?: Prisma.EvaluationQuestionCreateOrConnectWithoutAnswersInput;
    upsert?: Prisma.EvaluationQuestionUpsertWithoutAnswersInput;
    connect?: Prisma.EvaluationQuestionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EvaluationQuestionUpdateToOneWithWhereWithoutAnswersInput, Prisma.EvaluationQuestionUpdateWithoutAnswersInput>, Prisma.EvaluationQuestionUncheckedUpdateWithoutAnswersInput>;
};
export type EvaluationQuestionCreateWithoutSheetInput = {
    id?: string;
    text: string;
    category?: string | null;
    weight?: number;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    answers?: Prisma.EvaluationAnswerCreateNestedManyWithoutQuestionInput;
};
export type EvaluationQuestionUncheckedCreateWithoutSheetInput = {
    id?: string;
    text: string;
    category?: string | null;
    weight?: number;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    answers?: Prisma.EvaluationAnswerUncheckedCreateNestedManyWithoutQuestionInput;
};
export type EvaluationQuestionCreateOrConnectWithoutSheetInput = {
    where: Prisma.EvaluationQuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvaluationQuestionCreateWithoutSheetInput, Prisma.EvaluationQuestionUncheckedCreateWithoutSheetInput>;
};
export type EvaluationQuestionCreateManySheetInputEnvelope = {
    data: Prisma.EvaluationQuestionCreateManySheetInput | Prisma.EvaluationQuestionCreateManySheetInput[];
    skipDuplicates?: boolean;
};
export type EvaluationQuestionUpsertWithWhereUniqueWithoutSheetInput = {
    where: Prisma.EvaluationQuestionWhereUniqueInput;
    update: Prisma.XOR<Prisma.EvaluationQuestionUpdateWithoutSheetInput, Prisma.EvaluationQuestionUncheckedUpdateWithoutSheetInput>;
    create: Prisma.XOR<Prisma.EvaluationQuestionCreateWithoutSheetInput, Prisma.EvaluationQuestionUncheckedCreateWithoutSheetInput>;
};
export type EvaluationQuestionUpdateWithWhereUniqueWithoutSheetInput = {
    where: Prisma.EvaluationQuestionWhereUniqueInput;
    data: Prisma.XOR<Prisma.EvaluationQuestionUpdateWithoutSheetInput, Prisma.EvaluationQuestionUncheckedUpdateWithoutSheetInput>;
};
export type EvaluationQuestionUpdateManyWithWhereWithoutSheetInput = {
    where: Prisma.EvaluationQuestionScalarWhereInput;
    data: Prisma.XOR<Prisma.EvaluationQuestionUpdateManyMutationInput, Prisma.EvaluationQuestionUncheckedUpdateManyWithoutSheetInput>;
};
export type EvaluationQuestionScalarWhereInput = {
    AND?: Prisma.EvaluationQuestionScalarWhereInput | Prisma.EvaluationQuestionScalarWhereInput[];
    OR?: Prisma.EvaluationQuestionScalarWhereInput[];
    NOT?: Prisma.EvaluationQuestionScalarWhereInput | Prisma.EvaluationQuestionScalarWhereInput[];
    id?: Prisma.UuidFilter<"EvaluationQuestion"> | string;
    text?: Prisma.StringFilter<"EvaluationQuestion"> | string;
    category?: Prisma.StringNullableFilter<"EvaluationQuestion"> | string | null;
    weight?: Prisma.IntFilter<"EvaluationQuestion"> | number;
    sortOrder?: Prisma.IntFilter<"EvaluationQuestion"> | number;
    createdAt?: Prisma.DateTimeFilter<"EvaluationQuestion"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EvaluationQuestion"> | Date | string;
    sheetId?: Prisma.UuidFilter<"EvaluationQuestion"> | string;
};
export type EvaluationQuestionCreateWithoutAnswersInput = {
    id?: string;
    text: string;
    category?: string | null;
    weight?: number;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sheet: Prisma.EvaluationSheetCreateNestedOneWithoutQuestionsInput;
};
export type EvaluationQuestionUncheckedCreateWithoutAnswersInput = {
    id?: string;
    text: string;
    category?: string | null;
    weight?: number;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sheetId: string;
};
export type EvaluationQuestionCreateOrConnectWithoutAnswersInput = {
    where: Prisma.EvaluationQuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvaluationQuestionCreateWithoutAnswersInput, Prisma.EvaluationQuestionUncheckedCreateWithoutAnswersInput>;
};
export type EvaluationQuestionUpsertWithoutAnswersInput = {
    update: Prisma.XOR<Prisma.EvaluationQuestionUpdateWithoutAnswersInput, Prisma.EvaluationQuestionUncheckedUpdateWithoutAnswersInput>;
    create: Prisma.XOR<Prisma.EvaluationQuestionCreateWithoutAnswersInput, Prisma.EvaluationQuestionUncheckedCreateWithoutAnswersInput>;
    where?: Prisma.EvaluationQuestionWhereInput;
};
export type EvaluationQuestionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: Prisma.EvaluationQuestionWhereInput;
    data: Prisma.XOR<Prisma.EvaluationQuestionUpdateWithoutAnswersInput, Prisma.EvaluationQuestionUncheckedUpdateWithoutAnswersInput>;
};
export type EvaluationQuestionUpdateWithoutAnswersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sheet?: Prisma.EvaluationSheetUpdateOneRequiredWithoutQuestionsNestedInput;
};
export type EvaluationQuestionUncheckedUpdateWithoutAnswersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sheetId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EvaluationQuestionCreateManySheetInput = {
    id?: string;
    text: string;
    category?: string | null;
    weight?: number;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type EvaluationQuestionUpdateWithoutSheetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    answers?: Prisma.EvaluationAnswerUpdateManyWithoutQuestionNestedInput;
};
export type EvaluationQuestionUncheckedUpdateWithoutSheetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    answers?: Prisma.EvaluationAnswerUncheckedUpdateManyWithoutQuestionNestedInput;
};
export type EvaluationQuestionUncheckedUpdateManyWithoutSheetInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    text?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    weight?: Prisma.IntFieldUpdateOperationsInput | number;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EvaluationQuestionCountOutputType = {
    answers: number;
};
export type EvaluationQuestionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    answers?: boolean | EvaluationQuestionCountOutputTypeCountAnswersArgs;
};
export type EvaluationQuestionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationQuestionCountOutputTypeSelect<ExtArgs> | null;
};
export type EvaluationQuestionCountOutputTypeCountAnswersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvaluationAnswerWhereInput;
};
export type EvaluationQuestionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    text?: boolean;
    category?: boolean;
    weight?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    sheetId?: boolean;
    sheet?: boolean | Prisma.EvaluationSheetDefaultArgs<ExtArgs>;
    answers?: boolean | Prisma.EvaluationQuestion$answersArgs<ExtArgs>;
    _count?: boolean | Prisma.EvaluationQuestionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["evaluationQuestion"]>;
export type EvaluationQuestionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    text?: boolean;
    category?: boolean;
    weight?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    sheetId?: boolean;
    sheet?: boolean | Prisma.EvaluationSheetDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["evaluationQuestion"]>;
export type EvaluationQuestionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    text?: boolean;
    category?: boolean;
    weight?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    sheetId?: boolean;
    sheet?: boolean | Prisma.EvaluationSheetDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["evaluationQuestion"]>;
export type EvaluationQuestionSelectScalar = {
    id?: boolean;
    text?: boolean;
    category?: boolean;
    weight?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    sheetId?: boolean;
};
export type EvaluationQuestionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "text" | "category" | "weight" | "sortOrder" | "createdAt" | "updatedAt" | "sheetId", ExtArgs["result"]["evaluationQuestion"]>;
export type EvaluationQuestionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sheet?: boolean | Prisma.EvaluationSheetDefaultArgs<ExtArgs>;
    answers?: boolean | Prisma.EvaluationQuestion$answersArgs<ExtArgs>;
    _count?: boolean | Prisma.EvaluationQuestionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type EvaluationQuestionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sheet?: boolean | Prisma.EvaluationSheetDefaultArgs<ExtArgs>;
};
export type EvaluationQuestionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sheet?: boolean | Prisma.EvaluationSheetDefaultArgs<ExtArgs>;
};
export type $EvaluationQuestionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EvaluationQuestion";
    objects: {
        sheet: Prisma.$EvaluationSheetPayload<ExtArgs>;
        answers: Prisma.$EvaluationAnswerPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        text: string;
        category: string | null;
        weight: number;
        sortOrder: number;
        createdAt: Date;
        updatedAt: Date;
        sheetId: string;
    }, ExtArgs["result"]["evaluationQuestion"]>;
    composites: {};
};
export type EvaluationQuestionGetPayload<S extends boolean | null | undefined | EvaluationQuestionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EvaluationQuestionPayload, S>;
export type EvaluationQuestionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EvaluationQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EvaluationQuestionCountAggregateInputType | true;
};
export interface EvaluationQuestionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EvaluationQuestion'];
        meta: {
            name: 'EvaluationQuestion';
        };
    };
    findUnique<T extends EvaluationQuestionFindUniqueArgs>(args: Prisma.SelectSubset<T, EvaluationQuestionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EvaluationQuestionClient<runtime.Types.Result.GetResult<Prisma.$EvaluationQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EvaluationQuestionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EvaluationQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EvaluationQuestionClient<runtime.Types.Result.GetResult<Prisma.$EvaluationQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EvaluationQuestionFindFirstArgs>(args?: Prisma.SelectSubset<T, EvaluationQuestionFindFirstArgs<ExtArgs>>): Prisma.Prisma__EvaluationQuestionClient<runtime.Types.Result.GetResult<Prisma.$EvaluationQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EvaluationQuestionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EvaluationQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EvaluationQuestionClient<runtime.Types.Result.GetResult<Prisma.$EvaluationQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EvaluationQuestionFindManyArgs>(args?: Prisma.SelectSubset<T, EvaluationQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvaluationQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EvaluationQuestionCreateArgs>(args: Prisma.SelectSubset<T, EvaluationQuestionCreateArgs<ExtArgs>>): Prisma.Prisma__EvaluationQuestionClient<runtime.Types.Result.GetResult<Prisma.$EvaluationQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EvaluationQuestionCreateManyArgs>(args?: Prisma.SelectSubset<T, EvaluationQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EvaluationQuestionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EvaluationQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvaluationQuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EvaluationQuestionDeleteArgs>(args: Prisma.SelectSubset<T, EvaluationQuestionDeleteArgs<ExtArgs>>): Prisma.Prisma__EvaluationQuestionClient<runtime.Types.Result.GetResult<Prisma.$EvaluationQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EvaluationQuestionUpdateArgs>(args: Prisma.SelectSubset<T, EvaluationQuestionUpdateArgs<ExtArgs>>): Prisma.Prisma__EvaluationQuestionClient<runtime.Types.Result.GetResult<Prisma.$EvaluationQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EvaluationQuestionDeleteManyArgs>(args?: Prisma.SelectSubset<T, EvaluationQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EvaluationQuestionUpdateManyArgs>(args: Prisma.SelectSubset<T, EvaluationQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EvaluationQuestionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EvaluationQuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvaluationQuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EvaluationQuestionUpsertArgs>(args: Prisma.SelectSubset<T, EvaluationQuestionUpsertArgs<ExtArgs>>): Prisma.Prisma__EvaluationQuestionClient<runtime.Types.Result.GetResult<Prisma.$EvaluationQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EvaluationQuestionCountArgs>(args?: Prisma.Subset<T, EvaluationQuestionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EvaluationQuestionCountAggregateOutputType> : number>;
    aggregate<T extends EvaluationQuestionAggregateArgs>(args: Prisma.Subset<T, EvaluationQuestionAggregateArgs>): Prisma.PrismaPromise<GetEvaluationQuestionAggregateType<T>>;
    groupBy<T extends EvaluationQuestionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EvaluationQuestionGroupByArgs['orderBy'];
    } : {
        orderBy?: EvaluationQuestionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EvaluationQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvaluationQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EvaluationQuestionFieldRefs;
}
export interface Prisma__EvaluationQuestionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    sheet<T extends Prisma.EvaluationSheetDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EvaluationSheetDefaultArgs<ExtArgs>>): Prisma.Prisma__EvaluationSheetClient<runtime.Types.Result.GetResult<Prisma.$EvaluationSheetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    answers<T extends Prisma.EvaluationQuestion$answersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EvaluationQuestion$answersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvaluationAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EvaluationQuestionFieldRefs {
    readonly id: Prisma.FieldRef<"EvaluationQuestion", 'String'>;
    readonly text: Prisma.FieldRef<"EvaluationQuestion", 'String'>;
    readonly category: Prisma.FieldRef<"EvaluationQuestion", 'String'>;
    readonly weight: Prisma.FieldRef<"EvaluationQuestion", 'Int'>;
    readonly sortOrder: Prisma.FieldRef<"EvaluationQuestion", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"EvaluationQuestion", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"EvaluationQuestion", 'DateTime'>;
    readonly sheetId: Prisma.FieldRef<"EvaluationQuestion", 'String'>;
}
export type EvaluationQuestionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationQuestionSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationQuestionOmit<ExtArgs> | null;
    include?: Prisma.EvaluationQuestionInclude<ExtArgs> | null;
    where: Prisma.EvaluationQuestionWhereUniqueInput;
};
export type EvaluationQuestionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationQuestionSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationQuestionOmit<ExtArgs> | null;
    include?: Prisma.EvaluationQuestionInclude<ExtArgs> | null;
    where: Prisma.EvaluationQuestionWhereUniqueInput;
};
export type EvaluationQuestionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type EvaluationQuestionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type EvaluationQuestionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type EvaluationQuestionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationQuestionSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationQuestionOmit<ExtArgs> | null;
    include?: Prisma.EvaluationQuestionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EvaluationQuestionCreateInput, Prisma.EvaluationQuestionUncheckedCreateInput>;
};
export type EvaluationQuestionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EvaluationQuestionCreateManyInput | Prisma.EvaluationQuestionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EvaluationQuestionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationQuestionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EvaluationQuestionOmit<ExtArgs> | null;
    data: Prisma.EvaluationQuestionCreateManyInput | Prisma.EvaluationQuestionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.EvaluationQuestionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EvaluationQuestionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationQuestionSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationQuestionOmit<ExtArgs> | null;
    include?: Prisma.EvaluationQuestionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EvaluationQuestionUpdateInput, Prisma.EvaluationQuestionUncheckedUpdateInput>;
    where: Prisma.EvaluationQuestionWhereUniqueInput;
};
export type EvaluationQuestionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EvaluationQuestionUpdateManyMutationInput, Prisma.EvaluationQuestionUncheckedUpdateManyInput>;
    where?: Prisma.EvaluationQuestionWhereInput;
    limit?: number;
};
export type EvaluationQuestionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationQuestionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EvaluationQuestionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EvaluationQuestionUpdateManyMutationInput, Prisma.EvaluationQuestionUncheckedUpdateManyInput>;
    where?: Prisma.EvaluationQuestionWhereInput;
    limit?: number;
    include?: Prisma.EvaluationQuestionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EvaluationQuestionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationQuestionSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationQuestionOmit<ExtArgs> | null;
    include?: Prisma.EvaluationQuestionInclude<ExtArgs> | null;
    where: Prisma.EvaluationQuestionWhereUniqueInput;
    create: Prisma.XOR<Prisma.EvaluationQuestionCreateInput, Prisma.EvaluationQuestionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EvaluationQuestionUpdateInput, Prisma.EvaluationQuestionUncheckedUpdateInput>;
};
export type EvaluationQuestionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationQuestionSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationQuestionOmit<ExtArgs> | null;
    include?: Prisma.EvaluationQuestionInclude<ExtArgs> | null;
    where: Prisma.EvaluationQuestionWhereUniqueInput;
};
export type EvaluationQuestionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvaluationQuestionWhereInput;
    limit?: number;
};
export type EvaluationQuestion$answersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type EvaluationQuestionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EvaluationQuestionSelect<ExtArgs> | null;
    omit?: Prisma.EvaluationQuestionOmit<ExtArgs> | null;
    include?: Prisma.EvaluationQuestionInclude<ExtArgs> | null;
};
export {};
