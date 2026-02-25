import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CalibrationIndividualScoreModel = runtime.Types.Result.DefaultSelection<Prisma.$CalibrationIndividualScorePayload>;
export type AggregateCalibrationIndividualScore = {
    _count: CalibrationIndividualScoreCountAggregateOutputType | null;
    _avg: CalibrationIndividualScoreAvgAggregateOutputType | null;
    _sum: CalibrationIndividualScoreSumAggregateOutputType | null;
    _min: CalibrationIndividualScoreMinAggregateOutputType | null;
    _max: CalibrationIndividualScoreMaxAggregateOutputType | null;
};
export type CalibrationIndividualScoreAvgAggregateOutputType = {
    score: number | null;
};
export type CalibrationIndividualScoreSumAggregateOutputType = {
    score: number | null;
};
export type CalibrationIndividualScoreMinAggregateOutputType = {
    id: string | null;
    score: number | null;
    scoredAt: Date | null;
    answerId: string | null;
    calibratorId: string | null;
};
export type CalibrationIndividualScoreMaxAggregateOutputType = {
    id: string | null;
    score: number | null;
    scoredAt: Date | null;
    answerId: string | null;
    calibratorId: string | null;
};
export type CalibrationIndividualScoreCountAggregateOutputType = {
    id: number;
    score: number;
    scoredAt: number;
    answerId: number;
    calibratorId: number;
    _all: number;
};
export type CalibrationIndividualScoreAvgAggregateInputType = {
    score?: true;
};
export type CalibrationIndividualScoreSumAggregateInputType = {
    score?: true;
};
export type CalibrationIndividualScoreMinAggregateInputType = {
    id?: true;
    score?: true;
    scoredAt?: true;
    answerId?: true;
    calibratorId?: true;
};
export type CalibrationIndividualScoreMaxAggregateInputType = {
    id?: true;
    score?: true;
    scoredAt?: true;
    answerId?: true;
    calibratorId?: true;
};
export type CalibrationIndividualScoreCountAggregateInputType = {
    id?: true;
    score?: true;
    scoredAt?: true;
    answerId?: true;
    calibratorId?: true;
    _all?: true;
};
export type CalibrationIndividualScoreAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CalibrationIndividualScoreWhereInput;
    orderBy?: Prisma.CalibrationIndividualScoreOrderByWithRelationInput | Prisma.CalibrationIndividualScoreOrderByWithRelationInput[];
    cursor?: Prisma.CalibrationIndividualScoreWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CalibrationIndividualScoreCountAggregateInputType;
    _avg?: CalibrationIndividualScoreAvgAggregateInputType;
    _sum?: CalibrationIndividualScoreSumAggregateInputType;
    _min?: CalibrationIndividualScoreMinAggregateInputType;
    _max?: CalibrationIndividualScoreMaxAggregateInputType;
};
export type GetCalibrationIndividualScoreAggregateType<T extends CalibrationIndividualScoreAggregateArgs> = {
    [P in keyof T & keyof AggregateCalibrationIndividualScore]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCalibrationIndividualScore[P]> : Prisma.GetScalarType<T[P], AggregateCalibrationIndividualScore[P]>;
};
export type CalibrationIndividualScoreGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CalibrationIndividualScoreWhereInput;
    orderBy?: Prisma.CalibrationIndividualScoreOrderByWithAggregationInput | Prisma.CalibrationIndividualScoreOrderByWithAggregationInput[];
    by: Prisma.CalibrationIndividualScoreScalarFieldEnum[] | Prisma.CalibrationIndividualScoreScalarFieldEnum;
    having?: Prisma.CalibrationIndividualScoreScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CalibrationIndividualScoreCountAggregateInputType | true;
    _avg?: CalibrationIndividualScoreAvgAggregateInputType;
    _sum?: CalibrationIndividualScoreSumAggregateInputType;
    _min?: CalibrationIndividualScoreMinAggregateInputType;
    _max?: CalibrationIndividualScoreMaxAggregateInputType;
};
export type CalibrationIndividualScoreGroupByOutputType = {
    id: string;
    score: number;
    scoredAt: Date;
    answerId: string;
    calibratorId: string;
    _count: CalibrationIndividualScoreCountAggregateOutputType | null;
    _avg: CalibrationIndividualScoreAvgAggregateOutputType | null;
    _sum: CalibrationIndividualScoreSumAggregateOutputType | null;
    _min: CalibrationIndividualScoreMinAggregateOutputType | null;
    _max: CalibrationIndividualScoreMaxAggregateOutputType | null;
};
type GetCalibrationIndividualScoreGroupByPayload<T extends CalibrationIndividualScoreGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CalibrationIndividualScoreGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CalibrationIndividualScoreGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CalibrationIndividualScoreGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CalibrationIndividualScoreGroupByOutputType[P]>;
}>>;
export type CalibrationIndividualScoreWhereInput = {
    AND?: Prisma.CalibrationIndividualScoreWhereInput | Prisma.CalibrationIndividualScoreWhereInput[];
    OR?: Prisma.CalibrationIndividualScoreWhereInput[];
    NOT?: Prisma.CalibrationIndividualScoreWhereInput | Prisma.CalibrationIndividualScoreWhereInput[];
    id?: Prisma.UuidFilter<"CalibrationIndividualScore"> | string;
    score?: Prisma.IntFilter<"CalibrationIndividualScore"> | number;
    scoredAt?: Prisma.DateTimeFilter<"CalibrationIndividualScore"> | Date | string;
    answerId?: Prisma.UuidFilter<"CalibrationIndividualScore"> | string;
    calibratorId?: Prisma.UuidFilter<"CalibrationIndividualScore"> | string;
    answer?: Prisma.XOR<Prisma.EvaluationAnswerScalarRelationFilter, Prisma.EvaluationAnswerWhereInput>;
    calibrator?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type CalibrationIndividualScoreOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    scoredAt?: Prisma.SortOrder;
    answerId?: Prisma.SortOrder;
    calibratorId?: Prisma.SortOrder;
    answer?: Prisma.EvaluationAnswerOrderByWithRelationInput;
    calibrator?: Prisma.UserOrderByWithRelationInput;
};
export type CalibrationIndividualScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    answerId_calibratorId?: Prisma.CalibrationIndividualScoreAnswerIdCalibratorIdCompoundUniqueInput;
    AND?: Prisma.CalibrationIndividualScoreWhereInput | Prisma.CalibrationIndividualScoreWhereInput[];
    OR?: Prisma.CalibrationIndividualScoreWhereInput[];
    NOT?: Prisma.CalibrationIndividualScoreWhereInput | Prisma.CalibrationIndividualScoreWhereInput[];
    score?: Prisma.IntFilter<"CalibrationIndividualScore"> | number;
    scoredAt?: Prisma.DateTimeFilter<"CalibrationIndividualScore"> | Date | string;
    answerId?: Prisma.UuidFilter<"CalibrationIndividualScore"> | string;
    calibratorId?: Prisma.UuidFilter<"CalibrationIndividualScore"> | string;
    answer?: Prisma.XOR<Prisma.EvaluationAnswerScalarRelationFilter, Prisma.EvaluationAnswerWhereInput>;
    calibrator?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "answerId_calibratorId">;
export type CalibrationIndividualScoreOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    scoredAt?: Prisma.SortOrder;
    answerId?: Prisma.SortOrder;
    calibratorId?: Prisma.SortOrder;
    _count?: Prisma.CalibrationIndividualScoreCountOrderByAggregateInput;
    _avg?: Prisma.CalibrationIndividualScoreAvgOrderByAggregateInput;
    _max?: Prisma.CalibrationIndividualScoreMaxOrderByAggregateInput;
    _min?: Prisma.CalibrationIndividualScoreMinOrderByAggregateInput;
    _sum?: Prisma.CalibrationIndividualScoreSumOrderByAggregateInput;
};
export type CalibrationIndividualScoreScalarWhereWithAggregatesInput = {
    AND?: Prisma.CalibrationIndividualScoreScalarWhereWithAggregatesInput | Prisma.CalibrationIndividualScoreScalarWhereWithAggregatesInput[];
    OR?: Prisma.CalibrationIndividualScoreScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CalibrationIndividualScoreScalarWhereWithAggregatesInput | Prisma.CalibrationIndividualScoreScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"CalibrationIndividualScore"> | string;
    score?: Prisma.IntWithAggregatesFilter<"CalibrationIndividualScore"> | number;
    scoredAt?: Prisma.DateTimeWithAggregatesFilter<"CalibrationIndividualScore"> | Date | string;
    answerId?: Prisma.UuidWithAggregatesFilter<"CalibrationIndividualScore"> | string;
    calibratorId?: Prisma.UuidWithAggregatesFilter<"CalibrationIndividualScore"> | string;
};
export type CalibrationIndividualScoreCreateInput = {
    id?: string;
    score: number;
    scoredAt?: Date | string;
    answer: Prisma.EvaluationAnswerCreateNestedOneWithoutCalibrationIndividualScoresInput;
    calibrator: Prisma.UserCreateNestedOneWithoutCalibrationIndividualScoresInput;
};
export type CalibrationIndividualScoreUncheckedCreateInput = {
    id?: string;
    score: number;
    scoredAt?: Date | string;
    answerId: string;
    calibratorId: string;
};
export type CalibrationIndividualScoreUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    scoredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    answer?: Prisma.EvaluationAnswerUpdateOneRequiredWithoutCalibrationIndividualScoresNestedInput;
    calibrator?: Prisma.UserUpdateOneRequiredWithoutCalibrationIndividualScoresNestedInput;
};
export type CalibrationIndividualScoreUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    scoredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    answerId?: Prisma.StringFieldUpdateOperationsInput | string;
    calibratorId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CalibrationIndividualScoreCreateManyInput = {
    id?: string;
    score: number;
    scoredAt?: Date | string;
    answerId: string;
    calibratorId: string;
};
export type CalibrationIndividualScoreUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    scoredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CalibrationIndividualScoreUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    scoredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    answerId?: Prisma.StringFieldUpdateOperationsInput | string;
    calibratorId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CalibrationIndividualScoreListRelationFilter = {
    every?: Prisma.CalibrationIndividualScoreWhereInput;
    some?: Prisma.CalibrationIndividualScoreWhereInput;
    none?: Prisma.CalibrationIndividualScoreWhereInput;
};
export type CalibrationIndividualScoreOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CalibrationIndividualScoreAnswerIdCalibratorIdCompoundUniqueInput = {
    answerId: string;
    calibratorId: string;
};
export type CalibrationIndividualScoreCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    scoredAt?: Prisma.SortOrder;
    answerId?: Prisma.SortOrder;
    calibratorId?: Prisma.SortOrder;
};
export type CalibrationIndividualScoreAvgOrderByAggregateInput = {
    score?: Prisma.SortOrder;
};
export type CalibrationIndividualScoreMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    scoredAt?: Prisma.SortOrder;
    answerId?: Prisma.SortOrder;
    calibratorId?: Prisma.SortOrder;
};
export type CalibrationIndividualScoreMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    scoredAt?: Prisma.SortOrder;
    answerId?: Prisma.SortOrder;
    calibratorId?: Prisma.SortOrder;
};
export type CalibrationIndividualScoreSumOrderByAggregateInput = {
    score?: Prisma.SortOrder;
};
export type CalibrationIndividualScoreCreateNestedManyWithoutCalibratorInput = {
    create?: Prisma.XOR<Prisma.CalibrationIndividualScoreCreateWithoutCalibratorInput, Prisma.CalibrationIndividualScoreUncheckedCreateWithoutCalibratorInput> | Prisma.CalibrationIndividualScoreCreateWithoutCalibratorInput[] | Prisma.CalibrationIndividualScoreUncheckedCreateWithoutCalibratorInput[];
    connectOrCreate?: Prisma.CalibrationIndividualScoreCreateOrConnectWithoutCalibratorInput | Prisma.CalibrationIndividualScoreCreateOrConnectWithoutCalibratorInput[];
    createMany?: Prisma.CalibrationIndividualScoreCreateManyCalibratorInputEnvelope;
    connect?: Prisma.CalibrationIndividualScoreWhereUniqueInput | Prisma.CalibrationIndividualScoreWhereUniqueInput[];
};
export type CalibrationIndividualScoreUncheckedCreateNestedManyWithoutCalibratorInput = {
    create?: Prisma.XOR<Prisma.CalibrationIndividualScoreCreateWithoutCalibratorInput, Prisma.CalibrationIndividualScoreUncheckedCreateWithoutCalibratorInput> | Prisma.CalibrationIndividualScoreCreateWithoutCalibratorInput[] | Prisma.CalibrationIndividualScoreUncheckedCreateWithoutCalibratorInput[];
    connectOrCreate?: Prisma.CalibrationIndividualScoreCreateOrConnectWithoutCalibratorInput | Prisma.CalibrationIndividualScoreCreateOrConnectWithoutCalibratorInput[];
    createMany?: Prisma.CalibrationIndividualScoreCreateManyCalibratorInputEnvelope;
    connect?: Prisma.CalibrationIndividualScoreWhereUniqueInput | Prisma.CalibrationIndividualScoreWhereUniqueInput[];
};
export type CalibrationIndividualScoreUpdateManyWithoutCalibratorNestedInput = {
    create?: Prisma.XOR<Prisma.CalibrationIndividualScoreCreateWithoutCalibratorInput, Prisma.CalibrationIndividualScoreUncheckedCreateWithoutCalibratorInput> | Prisma.CalibrationIndividualScoreCreateWithoutCalibratorInput[] | Prisma.CalibrationIndividualScoreUncheckedCreateWithoutCalibratorInput[];
    connectOrCreate?: Prisma.CalibrationIndividualScoreCreateOrConnectWithoutCalibratorInput | Prisma.CalibrationIndividualScoreCreateOrConnectWithoutCalibratorInput[];
    upsert?: Prisma.CalibrationIndividualScoreUpsertWithWhereUniqueWithoutCalibratorInput | Prisma.CalibrationIndividualScoreUpsertWithWhereUniqueWithoutCalibratorInput[];
    createMany?: Prisma.CalibrationIndividualScoreCreateManyCalibratorInputEnvelope;
    set?: Prisma.CalibrationIndividualScoreWhereUniqueInput | Prisma.CalibrationIndividualScoreWhereUniqueInput[];
    disconnect?: Prisma.CalibrationIndividualScoreWhereUniqueInput | Prisma.CalibrationIndividualScoreWhereUniqueInput[];
    delete?: Prisma.CalibrationIndividualScoreWhereUniqueInput | Prisma.CalibrationIndividualScoreWhereUniqueInput[];
    connect?: Prisma.CalibrationIndividualScoreWhereUniqueInput | Prisma.CalibrationIndividualScoreWhereUniqueInput[];
    update?: Prisma.CalibrationIndividualScoreUpdateWithWhereUniqueWithoutCalibratorInput | Prisma.CalibrationIndividualScoreUpdateWithWhereUniqueWithoutCalibratorInput[];
    updateMany?: Prisma.CalibrationIndividualScoreUpdateManyWithWhereWithoutCalibratorInput | Prisma.CalibrationIndividualScoreUpdateManyWithWhereWithoutCalibratorInput[];
    deleteMany?: Prisma.CalibrationIndividualScoreScalarWhereInput | Prisma.CalibrationIndividualScoreScalarWhereInput[];
};
export type CalibrationIndividualScoreUncheckedUpdateManyWithoutCalibratorNestedInput = {
    create?: Prisma.XOR<Prisma.CalibrationIndividualScoreCreateWithoutCalibratorInput, Prisma.CalibrationIndividualScoreUncheckedCreateWithoutCalibratorInput> | Prisma.CalibrationIndividualScoreCreateWithoutCalibratorInput[] | Prisma.CalibrationIndividualScoreUncheckedCreateWithoutCalibratorInput[];
    connectOrCreate?: Prisma.CalibrationIndividualScoreCreateOrConnectWithoutCalibratorInput | Prisma.CalibrationIndividualScoreCreateOrConnectWithoutCalibratorInput[];
    upsert?: Prisma.CalibrationIndividualScoreUpsertWithWhereUniqueWithoutCalibratorInput | Prisma.CalibrationIndividualScoreUpsertWithWhereUniqueWithoutCalibratorInput[];
    createMany?: Prisma.CalibrationIndividualScoreCreateManyCalibratorInputEnvelope;
    set?: Prisma.CalibrationIndividualScoreWhereUniqueInput | Prisma.CalibrationIndividualScoreWhereUniqueInput[];
    disconnect?: Prisma.CalibrationIndividualScoreWhereUniqueInput | Prisma.CalibrationIndividualScoreWhereUniqueInput[];
    delete?: Prisma.CalibrationIndividualScoreWhereUniqueInput | Prisma.CalibrationIndividualScoreWhereUniqueInput[];
    connect?: Prisma.CalibrationIndividualScoreWhereUniqueInput | Prisma.CalibrationIndividualScoreWhereUniqueInput[];
    update?: Prisma.CalibrationIndividualScoreUpdateWithWhereUniqueWithoutCalibratorInput | Prisma.CalibrationIndividualScoreUpdateWithWhereUniqueWithoutCalibratorInput[];
    updateMany?: Prisma.CalibrationIndividualScoreUpdateManyWithWhereWithoutCalibratorInput | Prisma.CalibrationIndividualScoreUpdateManyWithWhereWithoutCalibratorInput[];
    deleteMany?: Prisma.CalibrationIndividualScoreScalarWhereInput | Prisma.CalibrationIndividualScoreScalarWhereInput[];
};
export type CalibrationIndividualScoreCreateNestedManyWithoutAnswerInput = {
    create?: Prisma.XOR<Prisma.CalibrationIndividualScoreCreateWithoutAnswerInput, Prisma.CalibrationIndividualScoreUncheckedCreateWithoutAnswerInput> | Prisma.CalibrationIndividualScoreCreateWithoutAnswerInput[] | Prisma.CalibrationIndividualScoreUncheckedCreateWithoutAnswerInput[];
    connectOrCreate?: Prisma.CalibrationIndividualScoreCreateOrConnectWithoutAnswerInput | Prisma.CalibrationIndividualScoreCreateOrConnectWithoutAnswerInput[];
    createMany?: Prisma.CalibrationIndividualScoreCreateManyAnswerInputEnvelope;
    connect?: Prisma.CalibrationIndividualScoreWhereUniqueInput | Prisma.CalibrationIndividualScoreWhereUniqueInput[];
};
export type CalibrationIndividualScoreUncheckedCreateNestedManyWithoutAnswerInput = {
    create?: Prisma.XOR<Prisma.CalibrationIndividualScoreCreateWithoutAnswerInput, Prisma.CalibrationIndividualScoreUncheckedCreateWithoutAnswerInput> | Prisma.CalibrationIndividualScoreCreateWithoutAnswerInput[] | Prisma.CalibrationIndividualScoreUncheckedCreateWithoutAnswerInput[];
    connectOrCreate?: Prisma.CalibrationIndividualScoreCreateOrConnectWithoutAnswerInput | Prisma.CalibrationIndividualScoreCreateOrConnectWithoutAnswerInput[];
    createMany?: Prisma.CalibrationIndividualScoreCreateManyAnswerInputEnvelope;
    connect?: Prisma.CalibrationIndividualScoreWhereUniqueInput | Prisma.CalibrationIndividualScoreWhereUniqueInput[];
};
export type CalibrationIndividualScoreUpdateManyWithoutAnswerNestedInput = {
    create?: Prisma.XOR<Prisma.CalibrationIndividualScoreCreateWithoutAnswerInput, Prisma.CalibrationIndividualScoreUncheckedCreateWithoutAnswerInput> | Prisma.CalibrationIndividualScoreCreateWithoutAnswerInput[] | Prisma.CalibrationIndividualScoreUncheckedCreateWithoutAnswerInput[];
    connectOrCreate?: Prisma.CalibrationIndividualScoreCreateOrConnectWithoutAnswerInput | Prisma.CalibrationIndividualScoreCreateOrConnectWithoutAnswerInput[];
    upsert?: Prisma.CalibrationIndividualScoreUpsertWithWhereUniqueWithoutAnswerInput | Prisma.CalibrationIndividualScoreUpsertWithWhereUniqueWithoutAnswerInput[];
    createMany?: Prisma.CalibrationIndividualScoreCreateManyAnswerInputEnvelope;
    set?: Prisma.CalibrationIndividualScoreWhereUniqueInput | Prisma.CalibrationIndividualScoreWhereUniqueInput[];
    disconnect?: Prisma.CalibrationIndividualScoreWhereUniqueInput | Prisma.CalibrationIndividualScoreWhereUniqueInput[];
    delete?: Prisma.CalibrationIndividualScoreWhereUniqueInput | Prisma.CalibrationIndividualScoreWhereUniqueInput[];
    connect?: Prisma.CalibrationIndividualScoreWhereUniqueInput | Prisma.CalibrationIndividualScoreWhereUniqueInput[];
    update?: Prisma.CalibrationIndividualScoreUpdateWithWhereUniqueWithoutAnswerInput | Prisma.CalibrationIndividualScoreUpdateWithWhereUniqueWithoutAnswerInput[];
    updateMany?: Prisma.CalibrationIndividualScoreUpdateManyWithWhereWithoutAnswerInput | Prisma.CalibrationIndividualScoreUpdateManyWithWhereWithoutAnswerInput[];
    deleteMany?: Prisma.CalibrationIndividualScoreScalarWhereInput | Prisma.CalibrationIndividualScoreScalarWhereInput[];
};
export type CalibrationIndividualScoreUncheckedUpdateManyWithoutAnswerNestedInput = {
    create?: Prisma.XOR<Prisma.CalibrationIndividualScoreCreateWithoutAnswerInput, Prisma.CalibrationIndividualScoreUncheckedCreateWithoutAnswerInput> | Prisma.CalibrationIndividualScoreCreateWithoutAnswerInput[] | Prisma.CalibrationIndividualScoreUncheckedCreateWithoutAnswerInput[];
    connectOrCreate?: Prisma.CalibrationIndividualScoreCreateOrConnectWithoutAnswerInput | Prisma.CalibrationIndividualScoreCreateOrConnectWithoutAnswerInput[];
    upsert?: Prisma.CalibrationIndividualScoreUpsertWithWhereUniqueWithoutAnswerInput | Prisma.CalibrationIndividualScoreUpsertWithWhereUniqueWithoutAnswerInput[];
    createMany?: Prisma.CalibrationIndividualScoreCreateManyAnswerInputEnvelope;
    set?: Prisma.CalibrationIndividualScoreWhereUniqueInput | Prisma.CalibrationIndividualScoreWhereUniqueInput[];
    disconnect?: Prisma.CalibrationIndividualScoreWhereUniqueInput | Prisma.CalibrationIndividualScoreWhereUniqueInput[];
    delete?: Prisma.CalibrationIndividualScoreWhereUniqueInput | Prisma.CalibrationIndividualScoreWhereUniqueInput[];
    connect?: Prisma.CalibrationIndividualScoreWhereUniqueInput | Prisma.CalibrationIndividualScoreWhereUniqueInput[];
    update?: Prisma.CalibrationIndividualScoreUpdateWithWhereUniqueWithoutAnswerInput | Prisma.CalibrationIndividualScoreUpdateWithWhereUniqueWithoutAnswerInput[];
    updateMany?: Prisma.CalibrationIndividualScoreUpdateManyWithWhereWithoutAnswerInput | Prisma.CalibrationIndividualScoreUpdateManyWithWhereWithoutAnswerInput[];
    deleteMany?: Prisma.CalibrationIndividualScoreScalarWhereInput | Prisma.CalibrationIndividualScoreScalarWhereInput[];
};
export type CalibrationIndividualScoreCreateWithoutCalibratorInput = {
    id?: string;
    score: number;
    scoredAt?: Date | string;
    answer: Prisma.EvaluationAnswerCreateNestedOneWithoutCalibrationIndividualScoresInput;
};
export type CalibrationIndividualScoreUncheckedCreateWithoutCalibratorInput = {
    id?: string;
    score: number;
    scoredAt?: Date | string;
    answerId: string;
};
export type CalibrationIndividualScoreCreateOrConnectWithoutCalibratorInput = {
    where: Prisma.CalibrationIndividualScoreWhereUniqueInput;
    create: Prisma.XOR<Prisma.CalibrationIndividualScoreCreateWithoutCalibratorInput, Prisma.CalibrationIndividualScoreUncheckedCreateWithoutCalibratorInput>;
};
export type CalibrationIndividualScoreCreateManyCalibratorInputEnvelope = {
    data: Prisma.CalibrationIndividualScoreCreateManyCalibratorInput | Prisma.CalibrationIndividualScoreCreateManyCalibratorInput[];
    skipDuplicates?: boolean;
};
export type CalibrationIndividualScoreUpsertWithWhereUniqueWithoutCalibratorInput = {
    where: Prisma.CalibrationIndividualScoreWhereUniqueInput;
    update: Prisma.XOR<Prisma.CalibrationIndividualScoreUpdateWithoutCalibratorInput, Prisma.CalibrationIndividualScoreUncheckedUpdateWithoutCalibratorInput>;
    create: Prisma.XOR<Prisma.CalibrationIndividualScoreCreateWithoutCalibratorInput, Prisma.CalibrationIndividualScoreUncheckedCreateWithoutCalibratorInput>;
};
export type CalibrationIndividualScoreUpdateWithWhereUniqueWithoutCalibratorInput = {
    where: Prisma.CalibrationIndividualScoreWhereUniqueInput;
    data: Prisma.XOR<Prisma.CalibrationIndividualScoreUpdateWithoutCalibratorInput, Prisma.CalibrationIndividualScoreUncheckedUpdateWithoutCalibratorInput>;
};
export type CalibrationIndividualScoreUpdateManyWithWhereWithoutCalibratorInput = {
    where: Prisma.CalibrationIndividualScoreScalarWhereInput;
    data: Prisma.XOR<Prisma.CalibrationIndividualScoreUpdateManyMutationInput, Prisma.CalibrationIndividualScoreUncheckedUpdateManyWithoutCalibratorInput>;
};
export type CalibrationIndividualScoreScalarWhereInput = {
    AND?: Prisma.CalibrationIndividualScoreScalarWhereInput | Prisma.CalibrationIndividualScoreScalarWhereInput[];
    OR?: Prisma.CalibrationIndividualScoreScalarWhereInput[];
    NOT?: Prisma.CalibrationIndividualScoreScalarWhereInput | Prisma.CalibrationIndividualScoreScalarWhereInput[];
    id?: Prisma.UuidFilter<"CalibrationIndividualScore"> | string;
    score?: Prisma.IntFilter<"CalibrationIndividualScore"> | number;
    scoredAt?: Prisma.DateTimeFilter<"CalibrationIndividualScore"> | Date | string;
    answerId?: Prisma.UuidFilter<"CalibrationIndividualScore"> | string;
    calibratorId?: Prisma.UuidFilter<"CalibrationIndividualScore"> | string;
};
export type CalibrationIndividualScoreCreateWithoutAnswerInput = {
    id?: string;
    score: number;
    scoredAt?: Date | string;
    calibrator: Prisma.UserCreateNestedOneWithoutCalibrationIndividualScoresInput;
};
export type CalibrationIndividualScoreUncheckedCreateWithoutAnswerInput = {
    id?: string;
    score: number;
    scoredAt?: Date | string;
    calibratorId: string;
};
export type CalibrationIndividualScoreCreateOrConnectWithoutAnswerInput = {
    where: Prisma.CalibrationIndividualScoreWhereUniqueInput;
    create: Prisma.XOR<Prisma.CalibrationIndividualScoreCreateWithoutAnswerInput, Prisma.CalibrationIndividualScoreUncheckedCreateWithoutAnswerInput>;
};
export type CalibrationIndividualScoreCreateManyAnswerInputEnvelope = {
    data: Prisma.CalibrationIndividualScoreCreateManyAnswerInput | Prisma.CalibrationIndividualScoreCreateManyAnswerInput[];
    skipDuplicates?: boolean;
};
export type CalibrationIndividualScoreUpsertWithWhereUniqueWithoutAnswerInput = {
    where: Prisma.CalibrationIndividualScoreWhereUniqueInput;
    update: Prisma.XOR<Prisma.CalibrationIndividualScoreUpdateWithoutAnswerInput, Prisma.CalibrationIndividualScoreUncheckedUpdateWithoutAnswerInput>;
    create: Prisma.XOR<Prisma.CalibrationIndividualScoreCreateWithoutAnswerInput, Prisma.CalibrationIndividualScoreUncheckedCreateWithoutAnswerInput>;
};
export type CalibrationIndividualScoreUpdateWithWhereUniqueWithoutAnswerInput = {
    where: Prisma.CalibrationIndividualScoreWhereUniqueInput;
    data: Prisma.XOR<Prisma.CalibrationIndividualScoreUpdateWithoutAnswerInput, Prisma.CalibrationIndividualScoreUncheckedUpdateWithoutAnswerInput>;
};
export type CalibrationIndividualScoreUpdateManyWithWhereWithoutAnswerInput = {
    where: Prisma.CalibrationIndividualScoreScalarWhereInput;
    data: Prisma.XOR<Prisma.CalibrationIndividualScoreUpdateManyMutationInput, Prisma.CalibrationIndividualScoreUncheckedUpdateManyWithoutAnswerInput>;
};
export type CalibrationIndividualScoreCreateManyCalibratorInput = {
    id?: string;
    score: number;
    scoredAt?: Date | string;
    answerId: string;
};
export type CalibrationIndividualScoreUpdateWithoutCalibratorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    scoredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    answer?: Prisma.EvaluationAnswerUpdateOneRequiredWithoutCalibrationIndividualScoresNestedInput;
};
export type CalibrationIndividualScoreUncheckedUpdateWithoutCalibratorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    scoredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    answerId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CalibrationIndividualScoreUncheckedUpdateManyWithoutCalibratorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    scoredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    answerId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CalibrationIndividualScoreCreateManyAnswerInput = {
    id?: string;
    score: number;
    scoredAt?: Date | string;
    calibratorId: string;
};
export type CalibrationIndividualScoreUpdateWithoutAnswerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    scoredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    calibrator?: Prisma.UserUpdateOneRequiredWithoutCalibrationIndividualScoresNestedInput;
};
export type CalibrationIndividualScoreUncheckedUpdateWithoutAnswerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    scoredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    calibratorId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CalibrationIndividualScoreUncheckedUpdateManyWithoutAnswerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.IntFieldUpdateOperationsInput | number;
    scoredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    calibratorId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CalibrationIndividualScoreSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    score?: boolean;
    scoredAt?: boolean;
    answerId?: boolean;
    calibratorId?: boolean;
    answer?: boolean | Prisma.EvaluationAnswerDefaultArgs<ExtArgs>;
    calibrator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["calibrationIndividualScore"]>;
export type CalibrationIndividualScoreSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    score?: boolean;
    scoredAt?: boolean;
    answerId?: boolean;
    calibratorId?: boolean;
    answer?: boolean | Prisma.EvaluationAnswerDefaultArgs<ExtArgs>;
    calibrator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["calibrationIndividualScore"]>;
export type CalibrationIndividualScoreSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    score?: boolean;
    scoredAt?: boolean;
    answerId?: boolean;
    calibratorId?: boolean;
    answer?: boolean | Prisma.EvaluationAnswerDefaultArgs<ExtArgs>;
    calibrator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["calibrationIndividualScore"]>;
export type CalibrationIndividualScoreSelectScalar = {
    id?: boolean;
    score?: boolean;
    scoredAt?: boolean;
    answerId?: boolean;
    calibratorId?: boolean;
};
export type CalibrationIndividualScoreOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "score" | "scoredAt" | "answerId" | "calibratorId", ExtArgs["result"]["calibrationIndividualScore"]>;
export type CalibrationIndividualScoreInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    answer?: boolean | Prisma.EvaluationAnswerDefaultArgs<ExtArgs>;
    calibrator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type CalibrationIndividualScoreIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    answer?: boolean | Prisma.EvaluationAnswerDefaultArgs<ExtArgs>;
    calibrator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type CalibrationIndividualScoreIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    answer?: boolean | Prisma.EvaluationAnswerDefaultArgs<ExtArgs>;
    calibrator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $CalibrationIndividualScorePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CalibrationIndividualScore";
    objects: {
        answer: Prisma.$EvaluationAnswerPayload<ExtArgs>;
        calibrator: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        score: number;
        scoredAt: Date;
        answerId: string;
        calibratorId: string;
    }, ExtArgs["result"]["calibrationIndividualScore"]>;
    composites: {};
};
export type CalibrationIndividualScoreGetPayload<S extends boolean | null | undefined | CalibrationIndividualScoreDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CalibrationIndividualScorePayload, S>;
export type CalibrationIndividualScoreCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CalibrationIndividualScoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CalibrationIndividualScoreCountAggregateInputType | true;
};
export interface CalibrationIndividualScoreDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CalibrationIndividualScore'];
        meta: {
            name: 'CalibrationIndividualScore';
        };
    };
    findUnique<T extends CalibrationIndividualScoreFindUniqueArgs>(args: Prisma.SelectSubset<T, CalibrationIndividualScoreFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CalibrationIndividualScoreClient<runtime.Types.Result.GetResult<Prisma.$CalibrationIndividualScorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CalibrationIndividualScoreFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CalibrationIndividualScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CalibrationIndividualScoreClient<runtime.Types.Result.GetResult<Prisma.$CalibrationIndividualScorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CalibrationIndividualScoreFindFirstArgs>(args?: Prisma.SelectSubset<T, CalibrationIndividualScoreFindFirstArgs<ExtArgs>>): Prisma.Prisma__CalibrationIndividualScoreClient<runtime.Types.Result.GetResult<Prisma.$CalibrationIndividualScorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CalibrationIndividualScoreFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CalibrationIndividualScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CalibrationIndividualScoreClient<runtime.Types.Result.GetResult<Prisma.$CalibrationIndividualScorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CalibrationIndividualScoreFindManyArgs>(args?: Prisma.SelectSubset<T, CalibrationIndividualScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CalibrationIndividualScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CalibrationIndividualScoreCreateArgs>(args: Prisma.SelectSubset<T, CalibrationIndividualScoreCreateArgs<ExtArgs>>): Prisma.Prisma__CalibrationIndividualScoreClient<runtime.Types.Result.GetResult<Prisma.$CalibrationIndividualScorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CalibrationIndividualScoreCreateManyArgs>(args?: Prisma.SelectSubset<T, CalibrationIndividualScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CalibrationIndividualScoreCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CalibrationIndividualScoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CalibrationIndividualScorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CalibrationIndividualScoreDeleteArgs>(args: Prisma.SelectSubset<T, CalibrationIndividualScoreDeleteArgs<ExtArgs>>): Prisma.Prisma__CalibrationIndividualScoreClient<runtime.Types.Result.GetResult<Prisma.$CalibrationIndividualScorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CalibrationIndividualScoreUpdateArgs>(args: Prisma.SelectSubset<T, CalibrationIndividualScoreUpdateArgs<ExtArgs>>): Prisma.Prisma__CalibrationIndividualScoreClient<runtime.Types.Result.GetResult<Prisma.$CalibrationIndividualScorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CalibrationIndividualScoreDeleteManyArgs>(args?: Prisma.SelectSubset<T, CalibrationIndividualScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CalibrationIndividualScoreUpdateManyArgs>(args: Prisma.SelectSubset<T, CalibrationIndividualScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CalibrationIndividualScoreUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CalibrationIndividualScoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CalibrationIndividualScorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CalibrationIndividualScoreUpsertArgs>(args: Prisma.SelectSubset<T, CalibrationIndividualScoreUpsertArgs<ExtArgs>>): Prisma.Prisma__CalibrationIndividualScoreClient<runtime.Types.Result.GetResult<Prisma.$CalibrationIndividualScorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CalibrationIndividualScoreCountArgs>(args?: Prisma.Subset<T, CalibrationIndividualScoreCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CalibrationIndividualScoreCountAggregateOutputType> : number>;
    aggregate<T extends CalibrationIndividualScoreAggregateArgs>(args: Prisma.Subset<T, CalibrationIndividualScoreAggregateArgs>): Prisma.PrismaPromise<GetCalibrationIndividualScoreAggregateType<T>>;
    groupBy<T extends CalibrationIndividualScoreGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CalibrationIndividualScoreGroupByArgs['orderBy'];
    } : {
        orderBy?: CalibrationIndividualScoreGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CalibrationIndividualScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCalibrationIndividualScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CalibrationIndividualScoreFieldRefs;
}
export interface Prisma__CalibrationIndividualScoreClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    answer<T extends Prisma.EvaluationAnswerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EvaluationAnswerDefaultArgs<ExtArgs>>): Prisma.Prisma__EvaluationAnswerClient<runtime.Types.Result.GetResult<Prisma.$EvaluationAnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    calibrator<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CalibrationIndividualScoreFieldRefs {
    readonly id: Prisma.FieldRef<"CalibrationIndividualScore", 'String'>;
    readonly score: Prisma.FieldRef<"CalibrationIndividualScore", 'Int'>;
    readonly scoredAt: Prisma.FieldRef<"CalibrationIndividualScore", 'DateTime'>;
    readonly answerId: Prisma.FieldRef<"CalibrationIndividualScore", 'String'>;
    readonly calibratorId: Prisma.FieldRef<"CalibrationIndividualScore", 'String'>;
}
export type CalibrationIndividualScoreFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalibrationIndividualScoreSelect<ExtArgs> | null;
    omit?: Prisma.CalibrationIndividualScoreOmit<ExtArgs> | null;
    include?: Prisma.CalibrationIndividualScoreInclude<ExtArgs> | null;
    where: Prisma.CalibrationIndividualScoreWhereUniqueInput;
};
export type CalibrationIndividualScoreFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalibrationIndividualScoreSelect<ExtArgs> | null;
    omit?: Prisma.CalibrationIndividualScoreOmit<ExtArgs> | null;
    include?: Prisma.CalibrationIndividualScoreInclude<ExtArgs> | null;
    where: Prisma.CalibrationIndividualScoreWhereUniqueInput;
};
export type CalibrationIndividualScoreFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CalibrationIndividualScoreFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CalibrationIndividualScoreFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CalibrationIndividualScoreCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalibrationIndividualScoreSelect<ExtArgs> | null;
    omit?: Prisma.CalibrationIndividualScoreOmit<ExtArgs> | null;
    include?: Prisma.CalibrationIndividualScoreInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CalibrationIndividualScoreCreateInput, Prisma.CalibrationIndividualScoreUncheckedCreateInput>;
};
export type CalibrationIndividualScoreCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CalibrationIndividualScoreCreateManyInput | Prisma.CalibrationIndividualScoreCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CalibrationIndividualScoreCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalibrationIndividualScoreSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CalibrationIndividualScoreOmit<ExtArgs> | null;
    data: Prisma.CalibrationIndividualScoreCreateManyInput | Prisma.CalibrationIndividualScoreCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CalibrationIndividualScoreIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CalibrationIndividualScoreUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalibrationIndividualScoreSelect<ExtArgs> | null;
    omit?: Prisma.CalibrationIndividualScoreOmit<ExtArgs> | null;
    include?: Prisma.CalibrationIndividualScoreInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CalibrationIndividualScoreUpdateInput, Prisma.CalibrationIndividualScoreUncheckedUpdateInput>;
    where: Prisma.CalibrationIndividualScoreWhereUniqueInput;
};
export type CalibrationIndividualScoreUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CalibrationIndividualScoreUpdateManyMutationInput, Prisma.CalibrationIndividualScoreUncheckedUpdateManyInput>;
    where?: Prisma.CalibrationIndividualScoreWhereInput;
    limit?: number;
};
export type CalibrationIndividualScoreUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalibrationIndividualScoreSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CalibrationIndividualScoreOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CalibrationIndividualScoreUpdateManyMutationInput, Prisma.CalibrationIndividualScoreUncheckedUpdateManyInput>;
    where?: Prisma.CalibrationIndividualScoreWhereInput;
    limit?: number;
    include?: Prisma.CalibrationIndividualScoreIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CalibrationIndividualScoreUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalibrationIndividualScoreSelect<ExtArgs> | null;
    omit?: Prisma.CalibrationIndividualScoreOmit<ExtArgs> | null;
    include?: Prisma.CalibrationIndividualScoreInclude<ExtArgs> | null;
    where: Prisma.CalibrationIndividualScoreWhereUniqueInput;
    create: Prisma.XOR<Prisma.CalibrationIndividualScoreCreateInput, Prisma.CalibrationIndividualScoreUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CalibrationIndividualScoreUpdateInput, Prisma.CalibrationIndividualScoreUncheckedUpdateInput>;
};
export type CalibrationIndividualScoreDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalibrationIndividualScoreSelect<ExtArgs> | null;
    omit?: Prisma.CalibrationIndividualScoreOmit<ExtArgs> | null;
    include?: Prisma.CalibrationIndividualScoreInclude<ExtArgs> | null;
    where: Prisma.CalibrationIndividualScoreWhereUniqueInput;
};
export type CalibrationIndividualScoreDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CalibrationIndividualScoreWhereInput;
    limit?: number;
};
export type CalibrationIndividualScoreDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CalibrationIndividualScoreSelect<ExtArgs> | null;
    omit?: Prisma.CalibrationIndividualScoreOmit<ExtArgs> | null;
    include?: Prisma.CalibrationIndividualScoreInclude<ExtArgs> | null;
};
export {};
