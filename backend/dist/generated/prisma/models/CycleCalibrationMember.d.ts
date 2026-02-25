import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CycleCalibrationMemberModel = runtime.Types.Result.DefaultSelection<Prisma.$CycleCalibrationMemberPayload>;
export type AggregateCycleCalibrationMember = {
    _count: CycleCalibrationMemberCountAggregateOutputType | null;
    _min: CycleCalibrationMemberMinAggregateOutputType | null;
    _max: CycleCalibrationMemberMaxAggregateOutputType | null;
};
export type CycleCalibrationMemberMinAggregateOutputType = {
    id: string | null;
    createdAt: Date | null;
    cycleId: string | null;
    userId: string | null;
};
export type CycleCalibrationMemberMaxAggregateOutputType = {
    id: string | null;
    createdAt: Date | null;
    cycleId: string | null;
    userId: string | null;
};
export type CycleCalibrationMemberCountAggregateOutputType = {
    id: number;
    createdAt: number;
    cycleId: number;
    userId: number;
    _all: number;
};
export type CycleCalibrationMemberMinAggregateInputType = {
    id?: true;
    createdAt?: true;
    cycleId?: true;
    userId?: true;
};
export type CycleCalibrationMemberMaxAggregateInputType = {
    id?: true;
    createdAt?: true;
    cycleId?: true;
    userId?: true;
};
export type CycleCalibrationMemberCountAggregateInputType = {
    id?: true;
    createdAt?: true;
    cycleId?: true;
    userId?: true;
    _all?: true;
};
export type CycleCalibrationMemberAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CycleCalibrationMemberWhereInput;
    orderBy?: Prisma.CycleCalibrationMemberOrderByWithRelationInput | Prisma.CycleCalibrationMemberOrderByWithRelationInput[];
    cursor?: Prisma.CycleCalibrationMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CycleCalibrationMemberCountAggregateInputType;
    _min?: CycleCalibrationMemberMinAggregateInputType;
    _max?: CycleCalibrationMemberMaxAggregateInputType;
};
export type GetCycleCalibrationMemberAggregateType<T extends CycleCalibrationMemberAggregateArgs> = {
    [P in keyof T & keyof AggregateCycleCalibrationMember]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCycleCalibrationMember[P]> : Prisma.GetScalarType<T[P], AggregateCycleCalibrationMember[P]>;
};
export type CycleCalibrationMemberGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CycleCalibrationMemberWhereInput;
    orderBy?: Prisma.CycleCalibrationMemberOrderByWithAggregationInput | Prisma.CycleCalibrationMemberOrderByWithAggregationInput[];
    by: Prisma.CycleCalibrationMemberScalarFieldEnum[] | Prisma.CycleCalibrationMemberScalarFieldEnum;
    having?: Prisma.CycleCalibrationMemberScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CycleCalibrationMemberCountAggregateInputType | true;
    _min?: CycleCalibrationMemberMinAggregateInputType;
    _max?: CycleCalibrationMemberMaxAggregateInputType;
};
export type CycleCalibrationMemberGroupByOutputType = {
    id: string;
    createdAt: Date;
    cycleId: string;
    userId: string;
    _count: CycleCalibrationMemberCountAggregateOutputType | null;
    _min: CycleCalibrationMemberMinAggregateOutputType | null;
    _max: CycleCalibrationMemberMaxAggregateOutputType | null;
};
type GetCycleCalibrationMemberGroupByPayload<T extends CycleCalibrationMemberGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CycleCalibrationMemberGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CycleCalibrationMemberGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CycleCalibrationMemberGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CycleCalibrationMemberGroupByOutputType[P]>;
}>>;
export type CycleCalibrationMemberWhereInput = {
    AND?: Prisma.CycleCalibrationMemberWhereInput | Prisma.CycleCalibrationMemberWhereInput[];
    OR?: Prisma.CycleCalibrationMemberWhereInput[];
    NOT?: Prisma.CycleCalibrationMemberWhereInput | Prisma.CycleCalibrationMemberWhereInput[];
    id?: Prisma.UuidFilter<"CycleCalibrationMember"> | string;
    createdAt?: Prisma.DateTimeFilter<"CycleCalibrationMember"> | Date | string;
    cycleId?: Prisma.UuidFilter<"CycleCalibrationMember"> | string;
    userId?: Prisma.UuidFilter<"CycleCalibrationMember"> | string;
    cycle?: Prisma.XOR<Prisma.EvaluationCycleScalarRelationFilter, Prisma.EvaluationCycleWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type CycleCalibrationMemberOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    cycleId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    cycle?: Prisma.EvaluationCycleOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type CycleCalibrationMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    cycleId_userId?: Prisma.CycleCalibrationMemberCycleIdUserIdCompoundUniqueInput;
    AND?: Prisma.CycleCalibrationMemberWhereInput | Prisma.CycleCalibrationMemberWhereInput[];
    OR?: Prisma.CycleCalibrationMemberWhereInput[];
    NOT?: Prisma.CycleCalibrationMemberWhereInput | Prisma.CycleCalibrationMemberWhereInput[];
    createdAt?: Prisma.DateTimeFilter<"CycleCalibrationMember"> | Date | string;
    cycleId?: Prisma.UuidFilter<"CycleCalibrationMember"> | string;
    userId?: Prisma.UuidFilter<"CycleCalibrationMember"> | string;
    cycle?: Prisma.XOR<Prisma.EvaluationCycleScalarRelationFilter, Prisma.EvaluationCycleWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "cycleId_userId">;
export type CycleCalibrationMemberOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    cycleId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    _count?: Prisma.CycleCalibrationMemberCountOrderByAggregateInput;
    _max?: Prisma.CycleCalibrationMemberMaxOrderByAggregateInput;
    _min?: Prisma.CycleCalibrationMemberMinOrderByAggregateInput;
};
export type CycleCalibrationMemberScalarWhereWithAggregatesInput = {
    AND?: Prisma.CycleCalibrationMemberScalarWhereWithAggregatesInput | Prisma.CycleCalibrationMemberScalarWhereWithAggregatesInput[];
    OR?: Prisma.CycleCalibrationMemberScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CycleCalibrationMemberScalarWhereWithAggregatesInput | Prisma.CycleCalibrationMemberScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"CycleCalibrationMember"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CycleCalibrationMember"> | Date | string;
    cycleId?: Prisma.UuidWithAggregatesFilter<"CycleCalibrationMember"> | string;
    userId?: Prisma.UuidWithAggregatesFilter<"CycleCalibrationMember"> | string;
};
export type CycleCalibrationMemberCreateInput = {
    id?: string;
    createdAt?: Date | string;
    cycle: Prisma.EvaluationCycleCreateNestedOneWithoutCalibrationMembersInput;
    user: Prisma.UserCreateNestedOneWithoutCycleCalibrationMembershipsInput;
};
export type CycleCalibrationMemberUncheckedCreateInput = {
    id?: string;
    createdAt?: Date | string;
    cycleId: string;
    userId: string;
};
export type CycleCalibrationMemberUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cycle?: Prisma.EvaluationCycleUpdateOneRequiredWithoutCalibrationMembersNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutCycleCalibrationMembershipsNestedInput;
};
export type CycleCalibrationMemberUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cycleId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CycleCalibrationMemberCreateManyInput = {
    id?: string;
    createdAt?: Date | string;
    cycleId: string;
    userId: string;
};
export type CycleCalibrationMemberUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CycleCalibrationMemberUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cycleId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CycleCalibrationMemberListRelationFilter = {
    every?: Prisma.CycleCalibrationMemberWhereInput;
    some?: Prisma.CycleCalibrationMemberWhereInput;
    none?: Prisma.CycleCalibrationMemberWhereInput;
};
export type CycleCalibrationMemberOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CycleCalibrationMemberCycleIdUserIdCompoundUniqueInput = {
    cycleId: string;
    userId: string;
};
export type CycleCalibrationMemberCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    cycleId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type CycleCalibrationMemberMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    cycleId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type CycleCalibrationMemberMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    cycleId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type CycleCalibrationMemberCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CycleCalibrationMemberCreateWithoutUserInput, Prisma.CycleCalibrationMemberUncheckedCreateWithoutUserInput> | Prisma.CycleCalibrationMemberCreateWithoutUserInput[] | Prisma.CycleCalibrationMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CycleCalibrationMemberCreateOrConnectWithoutUserInput | Prisma.CycleCalibrationMemberCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CycleCalibrationMemberCreateManyUserInputEnvelope;
    connect?: Prisma.CycleCalibrationMemberWhereUniqueInput | Prisma.CycleCalibrationMemberWhereUniqueInput[];
};
export type CycleCalibrationMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CycleCalibrationMemberCreateWithoutUserInput, Prisma.CycleCalibrationMemberUncheckedCreateWithoutUserInput> | Prisma.CycleCalibrationMemberCreateWithoutUserInput[] | Prisma.CycleCalibrationMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CycleCalibrationMemberCreateOrConnectWithoutUserInput | Prisma.CycleCalibrationMemberCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.CycleCalibrationMemberCreateManyUserInputEnvelope;
    connect?: Prisma.CycleCalibrationMemberWhereUniqueInput | Prisma.CycleCalibrationMemberWhereUniqueInput[];
};
export type CycleCalibrationMemberUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CycleCalibrationMemberCreateWithoutUserInput, Prisma.CycleCalibrationMemberUncheckedCreateWithoutUserInput> | Prisma.CycleCalibrationMemberCreateWithoutUserInput[] | Prisma.CycleCalibrationMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CycleCalibrationMemberCreateOrConnectWithoutUserInput | Prisma.CycleCalibrationMemberCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CycleCalibrationMemberUpsertWithWhereUniqueWithoutUserInput | Prisma.CycleCalibrationMemberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CycleCalibrationMemberCreateManyUserInputEnvelope;
    set?: Prisma.CycleCalibrationMemberWhereUniqueInput | Prisma.CycleCalibrationMemberWhereUniqueInput[];
    disconnect?: Prisma.CycleCalibrationMemberWhereUniqueInput | Prisma.CycleCalibrationMemberWhereUniqueInput[];
    delete?: Prisma.CycleCalibrationMemberWhereUniqueInput | Prisma.CycleCalibrationMemberWhereUniqueInput[];
    connect?: Prisma.CycleCalibrationMemberWhereUniqueInput | Prisma.CycleCalibrationMemberWhereUniqueInput[];
    update?: Prisma.CycleCalibrationMemberUpdateWithWhereUniqueWithoutUserInput | Prisma.CycleCalibrationMemberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CycleCalibrationMemberUpdateManyWithWhereWithoutUserInput | Prisma.CycleCalibrationMemberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CycleCalibrationMemberScalarWhereInput | Prisma.CycleCalibrationMemberScalarWhereInput[];
};
export type CycleCalibrationMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CycleCalibrationMemberCreateWithoutUserInput, Prisma.CycleCalibrationMemberUncheckedCreateWithoutUserInput> | Prisma.CycleCalibrationMemberCreateWithoutUserInput[] | Prisma.CycleCalibrationMemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.CycleCalibrationMemberCreateOrConnectWithoutUserInput | Prisma.CycleCalibrationMemberCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.CycleCalibrationMemberUpsertWithWhereUniqueWithoutUserInput | Prisma.CycleCalibrationMemberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.CycleCalibrationMemberCreateManyUserInputEnvelope;
    set?: Prisma.CycleCalibrationMemberWhereUniqueInput | Prisma.CycleCalibrationMemberWhereUniqueInput[];
    disconnect?: Prisma.CycleCalibrationMemberWhereUniqueInput | Prisma.CycleCalibrationMemberWhereUniqueInput[];
    delete?: Prisma.CycleCalibrationMemberWhereUniqueInput | Prisma.CycleCalibrationMemberWhereUniqueInput[];
    connect?: Prisma.CycleCalibrationMemberWhereUniqueInput | Prisma.CycleCalibrationMemberWhereUniqueInput[];
    update?: Prisma.CycleCalibrationMemberUpdateWithWhereUniqueWithoutUserInput | Prisma.CycleCalibrationMemberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.CycleCalibrationMemberUpdateManyWithWhereWithoutUserInput | Prisma.CycleCalibrationMemberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.CycleCalibrationMemberScalarWhereInput | Prisma.CycleCalibrationMemberScalarWhereInput[];
};
export type CycleCalibrationMemberCreateNestedManyWithoutCycleInput = {
    create?: Prisma.XOR<Prisma.CycleCalibrationMemberCreateWithoutCycleInput, Prisma.CycleCalibrationMemberUncheckedCreateWithoutCycleInput> | Prisma.CycleCalibrationMemberCreateWithoutCycleInput[] | Prisma.CycleCalibrationMemberUncheckedCreateWithoutCycleInput[];
    connectOrCreate?: Prisma.CycleCalibrationMemberCreateOrConnectWithoutCycleInput | Prisma.CycleCalibrationMemberCreateOrConnectWithoutCycleInput[];
    createMany?: Prisma.CycleCalibrationMemberCreateManyCycleInputEnvelope;
    connect?: Prisma.CycleCalibrationMemberWhereUniqueInput | Prisma.CycleCalibrationMemberWhereUniqueInput[];
};
export type CycleCalibrationMemberUncheckedCreateNestedManyWithoutCycleInput = {
    create?: Prisma.XOR<Prisma.CycleCalibrationMemberCreateWithoutCycleInput, Prisma.CycleCalibrationMemberUncheckedCreateWithoutCycleInput> | Prisma.CycleCalibrationMemberCreateWithoutCycleInput[] | Prisma.CycleCalibrationMemberUncheckedCreateWithoutCycleInput[];
    connectOrCreate?: Prisma.CycleCalibrationMemberCreateOrConnectWithoutCycleInput | Prisma.CycleCalibrationMemberCreateOrConnectWithoutCycleInput[];
    createMany?: Prisma.CycleCalibrationMemberCreateManyCycleInputEnvelope;
    connect?: Prisma.CycleCalibrationMemberWhereUniqueInput | Prisma.CycleCalibrationMemberWhereUniqueInput[];
};
export type CycleCalibrationMemberUpdateManyWithoutCycleNestedInput = {
    create?: Prisma.XOR<Prisma.CycleCalibrationMemberCreateWithoutCycleInput, Prisma.CycleCalibrationMemberUncheckedCreateWithoutCycleInput> | Prisma.CycleCalibrationMemberCreateWithoutCycleInput[] | Prisma.CycleCalibrationMemberUncheckedCreateWithoutCycleInput[];
    connectOrCreate?: Prisma.CycleCalibrationMemberCreateOrConnectWithoutCycleInput | Prisma.CycleCalibrationMemberCreateOrConnectWithoutCycleInput[];
    upsert?: Prisma.CycleCalibrationMemberUpsertWithWhereUniqueWithoutCycleInput | Prisma.CycleCalibrationMemberUpsertWithWhereUniqueWithoutCycleInput[];
    createMany?: Prisma.CycleCalibrationMemberCreateManyCycleInputEnvelope;
    set?: Prisma.CycleCalibrationMemberWhereUniqueInput | Prisma.CycleCalibrationMemberWhereUniqueInput[];
    disconnect?: Prisma.CycleCalibrationMemberWhereUniqueInput | Prisma.CycleCalibrationMemberWhereUniqueInput[];
    delete?: Prisma.CycleCalibrationMemberWhereUniqueInput | Prisma.CycleCalibrationMemberWhereUniqueInput[];
    connect?: Prisma.CycleCalibrationMemberWhereUniqueInput | Prisma.CycleCalibrationMemberWhereUniqueInput[];
    update?: Prisma.CycleCalibrationMemberUpdateWithWhereUniqueWithoutCycleInput | Prisma.CycleCalibrationMemberUpdateWithWhereUniqueWithoutCycleInput[];
    updateMany?: Prisma.CycleCalibrationMemberUpdateManyWithWhereWithoutCycleInput | Prisma.CycleCalibrationMemberUpdateManyWithWhereWithoutCycleInput[];
    deleteMany?: Prisma.CycleCalibrationMemberScalarWhereInput | Prisma.CycleCalibrationMemberScalarWhereInput[];
};
export type CycleCalibrationMemberUncheckedUpdateManyWithoutCycleNestedInput = {
    create?: Prisma.XOR<Prisma.CycleCalibrationMemberCreateWithoutCycleInput, Prisma.CycleCalibrationMemberUncheckedCreateWithoutCycleInput> | Prisma.CycleCalibrationMemberCreateWithoutCycleInput[] | Prisma.CycleCalibrationMemberUncheckedCreateWithoutCycleInput[];
    connectOrCreate?: Prisma.CycleCalibrationMemberCreateOrConnectWithoutCycleInput | Prisma.CycleCalibrationMemberCreateOrConnectWithoutCycleInput[];
    upsert?: Prisma.CycleCalibrationMemberUpsertWithWhereUniqueWithoutCycleInput | Prisma.CycleCalibrationMemberUpsertWithWhereUniqueWithoutCycleInput[];
    createMany?: Prisma.CycleCalibrationMemberCreateManyCycleInputEnvelope;
    set?: Prisma.CycleCalibrationMemberWhereUniqueInput | Prisma.CycleCalibrationMemberWhereUniqueInput[];
    disconnect?: Prisma.CycleCalibrationMemberWhereUniqueInput | Prisma.CycleCalibrationMemberWhereUniqueInput[];
    delete?: Prisma.CycleCalibrationMemberWhereUniqueInput | Prisma.CycleCalibrationMemberWhereUniqueInput[];
    connect?: Prisma.CycleCalibrationMemberWhereUniqueInput | Prisma.CycleCalibrationMemberWhereUniqueInput[];
    update?: Prisma.CycleCalibrationMemberUpdateWithWhereUniqueWithoutCycleInput | Prisma.CycleCalibrationMemberUpdateWithWhereUniqueWithoutCycleInput[];
    updateMany?: Prisma.CycleCalibrationMemberUpdateManyWithWhereWithoutCycleInput | Prisma.CycleCalibrationMemberUpdateManyWithWhereWithoutCycleInput[];
    deleteMany?: Prisma.CycleCalibrationMemberScalarWhereInput | Prisma.CycleCalibrationMemberScalarWhereInput[];
};
export type CycleCalibrationMemberCreateWithoutUserInput = {
    id?: string;
    createdAt?: Date | string;
    cycle: Prisma.EvaluationCycleCreateNestedOneWithoutCalibrationMembersInput;
};
export type CycleCalibrationMemberUncheckedCreateWithoutUserInput = {
    id?: string;
    createdAt?: Date | string;
    cycleId: string;
};
export type CycleCalibrationMemberCreateOrConnectWithoutUserInput = {
    where: Prisma.CycleCalibrationMemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.CycleCalibrationMemberCreateWithoutUserInput, Prisma.CycleCalibrationMemberUncheckedCreateWithoutUserInput>;
};
export type CycleCalibrationMemberCreateManyUserInputEnvelope = {
    data: Prisma.CycleCalibrationMemberCreateManyUserInput | Prisma.CycleCalibrationMemberCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type CycleCalibrationMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.CycleCalibrationMemberWhereUniqueInput;
    update: Prisma.XOR<Prisma.CycleCalibrationMemberUpdateWithoutUserInput, Prisma.CycleCalibrationMemberUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.CycleCalibrationMemberCreateWithoutUserInput, Prisma.CycleCalibrationMemberUncheckedCreateWithoutUserInput>;
};
export type CycleCalibrationMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.CycleCalibrationMemberWhereUniqueInput;
    data: Prisma.XOR<Prisma.CycleCalibrationMemberUpdateWithoutUserInput, Prisma.CycleCalibrationMemberUncheckedUpdateWithoutUserInput>;
};
export type CycleCalibrationMemberUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.CycleCalibrationMemberScalarWhereInput;
    data: Prisma.XOR<Prisma.CycleCalibrationMemberUpdateManyMutationInput, Prisma.CycleCalibrationMemberUncheckedUpdateManyWithoutUserInput>;
};
export type CycleCalibrationMemberScalarWhereInput = {
    AND?: Prisma.CycleCalibrationMemberScalarWhereInput | Prisma.CycleCalibrationMemberScalarWhereInput[];
    OR?: Prisma.CycleCalibrationMemberScalarWhereInput[];
    NOT?: Prisma.CycleCalibrationMemberScalarWhereInput | Prisma.CycleCalibrationMemberScalarWhereInput[];
    id?: Prisma.UuidFilter<"CycleCalibrationMember"> | string;
    createdAt?: Prisma.DateTimeFilter<"CycleCalibrationMember"> | Date | string;
    cycleId?: Prisma.UuidFilter<"CycleCalibrationMember"> | string;
    userId?: Prisma.UuidFilter<"CycleCalibrationMember"> | string;
};
export type CycleCalibrationMemberCreateWithoutCycleInput = {
    id?: string;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutCycleCalibrationMembershipsInput;
};
export type CycleCalibrationMemberUncheckedCreateWithoutCycleInput = {
    id?: string;
    createdAt?: Date | string;
    userId: string;
};
export type CycleCalibrationMemberCreateOrConnectWithoutCycleInput = {
    where: Prisma.CycleCalibrationMemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.CycleCalibrationMemberCreateWithoutCycleInput, Prisma.CycleCalibrationMemberUncheckedCreateWithoutCycleInput>;
};
export type CycleCalibrationMemberCreateManyCycleInputEnvelope = {
    data: Prisma.CycleCalibrationMemberCreateManyCycleInput | Prisma.CycleCalibrationMemberCreateManyCycleInput[];
    skipDuplicates?: boolean;
};
export type CycleCalibrationMemberUpsertWithWhereUniqueWithoutCycleInput = {
    where: Prisma.CycleCalibrationMemberWhereUniqueInput;
    update: Prisma.XOR<Prisma.CycleCalibrationMemberUpdateWithoutCycleInput, Prisma.CycleCalibrationMemberUncheckedUpdateWithoutCycleInput>;
    create: Prisma.XOR<Prisma.CycleCalibrationMemberCreateWithoutCycleInput, Prisma.CycleCalibrationMemberUncheckedCreateWithoutCycleInput>;
};
export type CycleCalibrationMemberUpdateWithWhereUniqueWithoutCycleInput = {
    where: Prisma.CycleCalibrationMemberWhereUniqueInput;
    data: Prisma.XOR<Prisma.CycleCalibrationMemberUpdateWithoutCycleInput, Prisma.CycleCalibrationMemberUncheckedUpdateWithoutCycleInput>;
};
export type CycleCalibrationMemberUpdateManyWithWhereWithoutCycleInput = {
    where: Prisma.CycleCalibrationMemberScalarWhereInput;
    data: Prisma.XOR<Prisma.CycleCalibrationMemberUpdateManyMutationInput, Prisma.CycleCalibrationMemberUncheckedUpdateManyWithoutCycleInput>;
};
export type CycleCalibrationMemberCreateManyUserInput = {
    id?: string;
    createdAt?: Date | string;
    cycleId: string;
};
export type CycleCalibrationMemberUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cycle?: Prisma.EvaluationCycleUpdateOneRequiredWithoutCalibrationMembersNestedInput;
};
export type CycleCalibrationMemberUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cycleId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CycleCalibrationMemberUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cycleId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CycleCalibrationMemberCreateManyCycleInput = {
    id?: string;
    createdAt?: Date | string;
    userId: string;
};
export type CycleCalibrationMemberUpdateWithoutCycleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutCycleCalibrationMembershipsNestedInput;
};
export type CycleCalibrationMemberUncheckedUpdateWithoutCycleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CycleCalibrationMemberUncheckedUpdateManyWithoutCycleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CycleCalibrationMemberSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    createdAt?: boolean;
    cycleId?: boolean;
    userId?: boolean;
    cycle?: boolean | Prisma.EvaluationCycleDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cycleCalibrationMember"]>;
export type CycleCalibrationMemberSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    createdAt?: boolean;
    cycleId?: boolean;
    userId?: boolean;
    cycle?: boolean | Prisma.EvaluationCycleDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cycleCalibrationMember"]>;
export type CycleCalibrationMemberSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    createdAt?: boolean;
    cycleId?: boolean;
    userId?: boolean;
    cycle?: boolean | Prisma.EvaluationCycleDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cycleCalibrationMember"]>;
export type CycleCalibrationMemberSelectScalar = {
    id?: boolean;
    createdAt?: boolean;
    cycleId?: boolean;
    userId?: boolean;
};
export type CycleCalibrationMemberOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "createdAt" | "cycleId" | "userId", ExtArgs["result"]["cycleCalibrationMember"]>;
export type CycleCalibrationMemberInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cycle?: boolean | Prisma.EvaluationCycleDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type CycleCalibrationMemberIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cycle?: boolean | Prisma.EvaluationCycleDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type CycleCalibrationMemberIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cycle?: boolean | Prisma.EvaluationCycleDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $CycleCalibrationMemberPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CycleCalibrationMember";
    objects: {
        cycle: Prisma.$EvaluationCyclePayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        createdAt: Date;
        cycleId: string;
        userId: string;
    }, ExtArgs["result"]["cycleCalibrationMember"]>;
    composites: {};
};
export type CycleCalibrationMemberGetPayload<S extends boolean | null | undefined | CycleCalibrationMemberDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CycleCalibrationMemberPayload, S>;
export type CycleCalibrationMemberCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CycleCalibrationMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CycleCalibrationMemberCountAggregateInputType | true;
};
export interface CycleCalibrationMemberDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CycleCalibrationMember'];
        meta: {
            name: 'CycleCalibrationMember';
        };
    };
    findUnique<T extends CycleCalibrationMemberFindUniqueArgs>(args: Prisma.SelectSubset<T, CycleCalibrationMemberFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CycleCalibrationMemberClient<runtime.Types.Result.GetResult<Prisma.$CycleCalibrationMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CycleCalibrationMemberFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CycleCalibrationMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CycleCalibrationMemberClient<runtime.Types.Result.GetResult<Prisma.$CycleCalibrationMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CycleCalibrationMemberFindFirstArgs>(args?: Prisma.SelectSubset<T, CycleCalibrationMemberFindFirstArgs<ExtArgs>>): Prisma.Prisma__CycleCalibrationMemberClient<runtime.Types.Result.GetResult<Prisma.$CycleCalibrationMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CycleCalibrationMemberFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CycleCalibrationMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CycleCalibrationMemberClient<runtime.Types.Result.GetResult<Prisma.$CycleCalibrationMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CycleCalibrationMemberFindManyArgs>(args?: Prisma.SelectSubset<T, CycleCalibrationMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CycleCalibrationMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CycleCalibrationMemberCreateArgs>(args: Prisma.SelectSubset<T, CycleCalibrationMemberCreateArgs<ExtArgs>>): Prisma.Prisma__CycleCalibrationMemberClient<runtime.Types.Result.GetResult<Prisma.$CycleCalibrationMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CycleCalibrationMemberCreateManyArgs>(args?: Prisma.SelectSubset<T, CycleCalibrationMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CycleCalibrationMemberCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CycleCalibrationMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CycleCalibrationMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CycleCalibrationMemberDeleteArgs>(args: Prisma.SelectSubset<T, CycleCalibrationMemberDeleteArgs<ExtArgs>>): Prisma.Prisma__CycleCalibrationMemberClient<runtime.Types.Result.GetResult<Prisma.$CycleCalibrationMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CycleCalibrationMemberUpdateArgs>(args: Prisma.SelectSubset<T, CycleCalibrationMemberUpdateArgs<ExtArgs>>): Prisma.Prisma__CycleCalibrationMemberClient<runtime.Types.Result.GetResult<Prisma.$CycleCalibrationMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CycleCalibrationMemberDeleteManyArgs>(args?: Prisma.SelectSubset<T, CycleCalibrationMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CycleCalibrationMemberUpdateManyArgs>(args: Prisma.SelectSubset<T, CycleCalibrationMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CycleCalibrationMemberUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CycleCalibrationMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CycleCalibrationMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CycleCalibrationMemberUpsertArgs>(args: Prisma.SelectSubset<T, CycleCalibrationMemberUpsertArgs<ExtArgs>>): Prisma.Prisma__CycleCalibrationMemberClient<runtime.Types.Result.GetResult<Prisma.$CycleCalibrationMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CycleCalibrationMemberCountArgs>(args?: Prisma.Subset<T, CycleCalibrationMemberCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CycleCalibrationMemberCountAggregateOutputType> : number>;
    aggregate<T extends CycleCalibrationMemberAggregateArgs>(args: Prisma.Subset<T, CycleCalibrationMemberAggregateArgs>): Prisma.PrismaPromise<GetCycleCalibrationMemberAggregateType<T>>;
    groupBy<T extends CycleCalibrationMemberGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CycleCalibrationMemberGroupByArgs['orderBy'];
    } : {
        orderBy?: CycleCalibrationMemberGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CycleCalibrationMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCycleCalibrationMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CycleCalibrationMemberFieldRefs;
}
export interface Prisma__CycleCalibrationMemberClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cycle<T extends Prisma.EvaluationCycleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EvaluationCycleDefaultArgs<ExtArgs>>): Prisma.Prisma__EvaluationCycleClient<runtime.Types.Result.GetResult<Prisma.$EvaluationCyclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CycleCalibrationMemberFieldRefs {
    readonly id: Prisma.FieldRef<"CycleCalibrationMember", 'String'>;
    readonly createdAt: Prisma.FieldRef<"CycleCalibrationMember", 'DateTime'>;
    readonly cycleId: Prisma.FieldRef<"CycleCalibrationMember", 'String'>;
    readonly userId: Prisma.FieldRef<"CycleCalibrationMember", 'String'>;
}
export type CycleCalibrationMemberFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CycleCalibrationMemberSelect<ExtArgs> | null;
    omit?: Prisma.CycleCalibrationMemberOmit<ExtArgs> | null;
    include?: Prisma.CycleCalibrationMemberInclude<ExtArgs> | null;
    where: Prisma.CycleCalibrationMemberWhereUniqueInput;
};
export type CycleCalibrationMemberFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CycleCalibrationMemberSelect<ExtArgs> | null;
    omit?: Prisma.CycleCalibrationMemberOmit<ExtArgs> | null;
    include?: Prisma.CycleCalibrationMemberInclude<ExtArgs> | null;
    where: Prisma.CycleCalibrationMemberWhereUniqueInput;
};
export type CycleCalibrationMemberFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CycleCalibrationMemberFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CycleCalibrationMemberFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CycleCalibrationMemberCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CycleCalibrationMemberSelect<ExtArgs> | null;
    omit?: Prisma.CycleCalibrationMemberOmit<ExtArgs> | null;
    include?: Prisma.CycleCalibrationMemberInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CycleCalibrationMemberCreateInput, Prisma.CycleCalibrationMemberUncheckedCreateInput>;
};
export type CycleCalibrationMemberCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CycleCalibrationMemberCreateManyInput | Prisma.CycleCalibrationMemberCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CycleCalibrationMemberCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CycleCalibrationMemberSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CycleCalibrationMemberOmit<ExtArgs> | null;
    data: Prisma.CycleCalibrationMemberCreateManyInput | Prisma.CycleCalibrationMemberCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CycleCalibrationMemberIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CycleCalibrationMemberUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CycleCalibrationMemberSelect<ExtArgs> | null;
    omit?: Prisma.CycleCalibrationMemberOmit<ExtArgs> | null;
    include?: Prisma.CycleCalibrationMemberInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CycleCalibrationMemberUpdateInput, Prisma.CycleCalibrationMemberUncheckedUpdateInput>;
    where: Prisma.CycleCalibrationMemberWhereUniqueInput;
};
export type CycleCalibrationMemberUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CycleCalibrationMemberUpdateManyMutationInput, Prisma.CycleCalibrationMemberUncheckedUpdateManyInput>;
    where?: Prisma.CycleCalibrationMemberWhereInput;
    limit?: number;
};
export type CycleCalibrationMemberUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CycleCalibrationMemberSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CycleCalibrationMemberOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CycleCalibrationMemberUpdateManyMutationInput, Prisma.CycleCalibrationMemberUncheckedUpdateManyInput>;
    where?: Prisma.CycleCalibrationMemberWhereInput;
    limit?: number;
    include?: Prisma.CycleCalibrationMemberIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CycleCalibrationMemberUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CycleCalibrationMemberSelect<ExtArgs> | null;
    omit?: Prisma.CycleCalibrationMemberOmit<ExtArgs> | null;
    include?: Prisma.CycleCalibrationMemberInclude<ExtArgs> | null;
    where: Prisma.CycleCalibrationMemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.CycleCalibrationMemberCreateInput, Prisma.CycleCalibrationMemberUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CycleCalibrationMemberUpdateInput, Prisma.CycleCalibrationMemberUncheckedUpdateInput>;
};
export type CycleCalibrationMemberDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CycleCalibrationMemberSelect<ExtArgs> | null;
    omit?: Prisma.CycleCalibrationMemberOmit<ExtArgs> | null;
    include?: Prisma.CycleCalibrationMemberInclude<ExtArgs> | null;
    where: Prisma.CycleCalibrationMemberWhereUniqueInput;
};
export type CycleCalibrationMemberDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CycleCalibrationMemberWhereInput;
    limit?: number;
};
export type CycleCalibrationMemberDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CycleCalibrationMemberSelect<ExtArgs> | null;
    omit?: Prisma.CycleCalibrationMemberOmit<ExtArgs> | null;
    include?: Prisma.CycleCalibrationMemberInclude<ExtArgs> | null;
};
export {};
