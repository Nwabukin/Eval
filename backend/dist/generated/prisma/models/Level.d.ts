import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LevelModel = runtime.Types.Result.DefaultSelection<Prisma.$LevelPayload>;
export type AggregateLevel = {
    _count: LevelCountAggregateOutputType | null;
    _min: LevelMinAggregateOutputType | null;
    _max: LevelMaxAggregateOutputType | null;
};
export type LevelMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LevelMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LevelCountAggregateOutputType = {
    id: number;
    name: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type LevelMinAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LevelMaxAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LevelCountAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type LevelAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LevelWhereInput;
    orderBy?: Prisma.LevelOrderByWithRelationInput | Prisma.LevelOrderByWithRelationInput[];
    cursor?: Prisma.LevelWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LevelCountAggregateInputType;
    _min?: LevelMinAggregateInputType;
    _max?: LevelMaxAggregateInputType;
};
export type GetLevelAggregateType<T extends LevelAggregateArgs> = {
    [P in keyof T & keyof AggregateLevel]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLevel[P]> : Prisma.GetScalarType<T[P], AggregateLevel[P]>;
};
export type LevelGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LevelWhereInput;
    orderBy?: Prisma.LevelOrderByWithAggregationInput | Prisma.LevelOrderByWithAggregationInput[];
    by: Prisma.LevelScalarFieldEnum[] | Prisma.LevelScalarFieldEnum;
    having?: Prisma.LevelScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LevelCountAggregateInputType | true;
    _min?: LevelMinAggregateInputType;
    _max?: LevelMaxAggregateInputType;
};
export type LevelGroupByOutputType = {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    _count: LevelCountAggregateOutputType | null;
    _min: LevelMinAggregateOutputType | null;
    _max: LevelMaxAggregateOutputType | null;
};
type GetLevelGroupByPayload<T extends LevelGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LevelGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LevelGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LevelGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LevelGroupByOutputType[P]>;
}>>;
export type LevelWhereInput = {
    AND?: Prisma.LevelWhereInput | Prisma.LevelWhereInput[];
    OR?: Prisma.LevelWhereInput[];
    NOT?: Prisma.LevelWhereInput | Prisma.LevelWhereInput[];
    id?: Prisma.UuidFilter<"Level"> | string;
    name?: Prisma.StringFilter<"Level"> | string;
    createdAt?: Prisma.DateTimeFilter<"Level"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Level"> | Date | string;
    users?: Prisma.UserListRelationFilter;
    sheets?: Prisma.EvaluationSheetListRelationFilter;
};
export type LevelOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    users?: Prisma.UserOrderByRelationAggregateInput;
    sheets?: Prisma.EvaluationSheetOrderByRelationAggregateInput;
};
export type LevelWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    name?: string;
    AND?: Prisma.LevelWhereInput | Prisma.LevelWhereInput[];
    OR?: Prisma.LevelWhereInput[];
    NOT?: Prisma.LevelWhereInput | Prisma.LevelWhereInput[];
    createdAt?: Prisma.DateTimeFilter<"Level"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Level"> | Date | string;
    users?: Prisma.UserListRelationFilter;
    sheets?: Prisma.EvaluationSheetListRelationFilter;
}, "id" | "name">;
export type LevelOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.LevelCountOrderByAggregateInput;
    _max?: Prisma.LevelMaxOrderByAggregateInput;
    _min?: Prisma.LevelMinOrderByAggregateInput;
};
export type LevelScalarWhereWithAggregatesInput = {
    AND?: Prisma.LevelScalarWhereWithAggregatesInput | Prisma.LevelScalarWhereWithAggregatesInput[];
    OR?: Prisma.LevelScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LevelScalarWhereWithAggregatesInput | Prisma.LevelScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Level"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Level"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Level"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Level"> | Date | string;
};
export type LevelCreateInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutLevelInput;
    sheets?: Prisma.EvaluationSheetCreateNestedManyWithoutLevelInput;
};
export type LevelUncheckedCreateInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutLevelInput;
    sheets?: Prisma.EvaluationSheetUncheckedCreateNestedManyWithoutLevelInput;
};
export type LevelUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutLevelNestedInput;
    sheets?: Prisma.EvaluationSheetUpdateManyWithoutLevelNestedInput;
};
export type LevelUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutLevelNestedInput;
    sheets?: Prisma.EvaluationSheetUncheckedUpdateManyWithoutLevelNestedInput;
};
export type LevelCreateManyInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LevelUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LevelUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LevelCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LevelMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LevelMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LevelNullableScalarRelationFilter = {
    is?: Prisma.LevelWhereInput | null;
    isNot?: Prisma.LevelWhereInput | null;
};
export type LevelScalarRelationFilter = {
    is?: Prisma.LevelWhereInput;
    isNot?: Prisma.LevelWhereInput;
};
export type LevelCreateNestedOneWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.LevelCreateWithoutUsersInput, Prisma.LevelUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.LevelCreateOrConnectWithoutUsersInput;
    connect?: Prisma.LevelWhereUniqueInput;
};
export type LevelUpdateOneWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.LevelCreateWithoutUsersInput, Prisma.LevelUncheckedCreateWithoutUsersInput>;
    connectOrCreate?: Prisma.LevelCreateOrConnectWithoutUsersInput;
    upsert?: Prisma.LevelUpsertWithoutUsersInput;
    disconnect?: Prisma.LevelWhereInput | boolean;
    delete?: Prisma.LevelWhereInput | boolean;
    connect?: Prisma.LevelWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LevelUpdateToOneWithWhereWithoutUsersInput, Prisma.LevelUpdateWithoutUsersInput>, Prisma.LevelUncheckedUpdateWithoutUsersInput>;
};
export type LevelCreateNestedOneWithoutSheetsInput = {
    create?: Prisma.XOR<Prisma.LevelCreateWithoutSheetsInput, Prisma.LevelUncheckedCreateWithoutSheetsInput>;
    connectOrCreate?: Prisma.LevelCreateOrConnectWithoutSheetsInput;
    connect?: Prisma.LevelWhereUniqueInput;
};
export type LevelUpdateOneRequiredWithoutSheetsNestedInput = {
    create?: Prisma.XOR<Prisma.LevelCreateWithoutSheetsInput, Prisma.LevelUncheckedCreateWithoutSheetsInput>;
    connectOrCreate?: Prisma.LevelCreateOrConnectWithoutSheetsInput;
    upsert?: Prisma.LevelUpsertWithoutSheetsInput;
    connect?: Prisma.LevelWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LevelUpdateToOneWithWhereWithoutSheetsInput, Prisma.LevelUpdateWithoutSheetsInput>, Prisma.LevelUncheckedUpdateWithoutSheetsInput>;
};
export type LevelCreateWithoutUsersInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sheets?: Prisma.EvaluationSheetCreateNestedManyWithoutLevelInput;
};
export type LevelUncheckedCreateWithoutUsersInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sheets?: Prisma.EvaluationSheetUncheckedCreateNestedManyWithoutLevelInput;
};
export type LevelCreateOrConnectWithoutUsersInput = {
    where: Prisma.LevelWhereUniqueInput;
    create: Prisma.XOR<Prisma.LevelCreateWithoutUsersInput, Prisma.LevelUncheckedCreateWithoutUsersInput>;
};
export type LevelUpsertWithoutUsersInput = {
    update: Prisma.XOR<Prisma.LevelUpdateWithoutUsersInput, Prisma.LevelUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.LevelCreateWithoutUsersInput, Prisma.LevelUncheckedCreateWithoutUsersInput>;
    where?: Prisma.LevelWhereInput;
};
export type LevelUpdateToOneWithWhereWithoutUsersInput = {
    where?: Prisma.LevelWhereInput;
    data: Prisma.XOR<Prisma.LevelUpdateWithoutUsersInput, Prisma.LevelUncheckedUpdateWithoutUsersInput>;
};
export type LevelUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sheets?: Prisma.EvaluationSheetUpdateManyWithoutLevelNestedInput;
};
export type LevelUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sheets?: Prisma.EvaluationSheetUncheckedUpdateManyWithoutLevelNestedInput;
};
export type LevelCreateWithoutSheetsInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserCreateNestedManyWithoutLevelInput;
};
export type LevelUncheckedCreateWithoutSheetsInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: Prisma.UserUncheckedCreateNestedManyWithoutLevelInput;
};
export type LevelCreateOrConnectWithoutSheetsInput = {
    where: Prisma.LevelWhereUniqueInput;
    create: Prisma.XOR<Prisma.LevelCreateWithoutSheetsInput, Prisma.LevelUncheckedCreateWithoutSheetsInput>;
};
export type LevelUpsertWithoutSheetsInput = {
    update: Prisma.XOR<Prisma.LevelUpdateWithoutSheetsInput, Prisma.LevelUncheckedUpdateWithoutSheetsInput>;
    create: Prisma.XOR<Prisma.LevelCreateWithoutSheetsInput, Prisma.LevelUncheckedCreateWithoutSheetsInput>;
    where?: Prisma.LevelWhereInput;
};
export type LevelUpdateToOneWithWhereWithoutSheetsInput = {
    where?: Prisma.LevelWhereInput;
    data: Prisma.XOR<Prisma.LevelUpdateWithoutSheetsInput, Prisma.LevelUncheckedUpdateWithoutSheetsInput>;
};
export type LevelUpdateWithoutSheetsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUpdateManyWithoutLevelNestedInput;
};
export type LevelUncheckedUpdateWithoutSheetsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.UserUncheckedUpdateManyWithoutLevelNestedInput;
};
export type LevelCountOutputType = {
    users: number;
    sheets: number;
};
export type LevelCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | LevelCountOutputTypeCountUsersArgs;
    sheets?: boolean | LevelCountOutputTypeCountSheetsArgs;
};
export type LevelCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LevelCountOutputTypeSelect<ExtArgs> | null;
};
export type LevelCountOutputTypeCountUsersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
};
export type LevelCountOutputTypeCountSheetsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvaluationSheetWhereInput;
};
export type LevelSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    users?: boolean | Prisma.Level$usersArgs<ExtArgs>;
    sheets?: boolean | Prisma.Level$sheetsArgs<ExtArgs>;
    _count?: boolean | Prisma.LevelCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["level"]>;
export type LevelSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["level"]>;
export type LevelSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["level"]>;
export type LevelSelectScalar = {
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type LevelOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["level"]>;
export type LevelInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.Level$usersArgs<ExtArgs>;
    sheets?: boolean | Prisma.Level$sheetsArgs<ExtArgs>;
    _count?: boolean | Prisma.LevelCountOutputTypeDefaultArgs<ExtArgs>;
};
export type LevelIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type LevelIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $LevelPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Level";
    objects: {
        users: Prisma.$UserPayload<ExtArgs>[];
        sheets: Prisma.$EvaluationSheetPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["level"]>;
    composites: {};
};
export type LevelGetPayload<S extends boolean | null | undefined | LevelDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LevelPayload, S>;
export type LevelCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LevelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LevelCountAggregateInputType | true;
};
export interface LevelDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Level'];
        meta: {
            name: 'Level';
        };
    };
    findUnique<T extends LevelFindUniqueArgs>(args: Prisma.SelectSubset<T, LevelFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LevelClient<runtime.Types.Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LevelFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LevelFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LevelClient<runtime.Types.Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LevelFindFirstArgs>(args?: Prisma.SelectSubset<T, LevelFindFirstArgs<ExtArgs>>): Prisma.Prisma__LevelClient<runtime.Types.Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LevelFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LevelFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LevelClient<runtime.Types.Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LevelFindManyArgs>(args?: Prisma.SelectSubset<T, LevelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LevelCreateArgs>(args: Prisma.SelectSubset<T, LevelCreateArgs<ExtArgs>>): Prisma.Prisma__LevelClient<runtime.Types.Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LevelCreateManyArgs>(args?: Prisma.SelectSubset<T, LevelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LevelCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LevelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LevelDeleteArgs>(args: Prisma.SelectSubset<T, LevelDeleteArgs<ExtArgs>>): Prisma.Prisma__LevelClient<runtime.Types.Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LevelUpdateArgs>(args: Prisma.SelectSubset<T, LevelUpdateArgs<ExtArgs>>): Prisma.Prisma__LevelClient<runtime.Types.Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LevelDeleteManyArgs>(args?: Prisma.SelectSubset<T, LevelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LevelUpdateManyArgs>(args: Prisma.SelectSubset<T, LevelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LevelUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LevelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LevelUpsertArgs>(args: Prisma.SelectSubset<T, LevelUpsertArgs<ExtArgs>>): Prisma.Prisma__LevelClient<runtime.Types.Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LevelCountArgs>(args?: Prisma.Subset<T, LevelCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LevelCountAggregateOutputType> : number>;
    aggregate<T extends LevelAggregateArgs>(args: Prisma.Subset<T, LevelAggregateArgs>): Prisma.PrismaPromise<GetLevelAggregateType<T>>;
    groupBy<T extends LevelGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LevelGroupByArgs['orderBy'];
    } : {
        orderBy?: LevelGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LevelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLevelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LevelFieldRefs;
}
export interface Prisma__LevelClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.Level$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Level$usersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    sheets<T extends Prisma.Level$sheetsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Level$sheetsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvaluationSheetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LevelFieldRefs {
    readonly id: Prisma.FieldRef<"Level", 'String'>;
    readonly name: Prisma.FieldRef<"Level", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Level", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Level", 'DateTime'>;
}
export type LevelFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LevelSelect<ExtArgs> | null;
    omit?: Prisma.LevelOmit<ExtArgs> | null;
    include?: Prisma.LevelInclude<ExtArgs> | null;
    where: Prisma.LevelWhereUniqueInput;
};
export type LevelFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LevelSelect<ExtArgs> | null;
    omit?: Prisma.LevelOmit<ExtArgs> | null;
    include?: Prisma.LevelInclude<ExtArgs> | null;
    where: Prisma.LevelWhereUniqueInput;
};
export type LevelFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LevelSelect<ExtArgs> | null;
    omit?: Prisma.LevelOmit<ExtArgs> | null;
    include?: Prisma.LevelInclude<ExtArgs> | null;
    where?: Prisma.LevelWhereInput;
    orderBy?: Prisma.LevelOrderByWithRelationInput | Prisma.LevelOrderByWithRelationInput[];
    cursor?: Prisma.LevelWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LevelScalarFieldEnum | Prisma.LevelScalarFieldEnum[];
};
export type LevelFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LevelSelect<ExtArgs> | null;
    omit?: Prisma.LevelOmit<ExtArgs> | null;
    include?: Prisma.LevelInclude<ExtArgs> | null;
    where?: Prisma.LevelWhereInput;
    orderBy?: Prisma.LevelOrderByWithRelationInput | Prisma.LevelOrderByWithRelationInput[];
    cursor?: Prisma.LevelWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LevelScalarFieldEnum | Prisma.LevelScalarFieldEnum[];
};
export type LevelFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LevelSelect<ExtArgs> | null;
    omit?: Prisma.LevelOmit<ExtArgs> | null;
    include?: Prisma.LevelInclude<ExtArgs> | null;
    where?: Prisma.LevelWhereInput;
    orderBy?: Prisma.LevelOrderByWithRelationInput | Prisma.LevelOrderByWithRelationInput[];
    cursor?: Prisma.LevelWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LevelScalarFieldEnum | Prisma.LevelScalarFieldEnum[];
};
export type LevelCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LevelSelect<ExtArgs> | null;
    omit?: Prisma.LevelOmit<ExtArgs> | null;
    include?: Prisma.LevelInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LevelCreateInput, Prisma.LevelUncheckedCreateInput>;
};
export type LevelCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LevelCreateManyInput | Prisma.LevelCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LevelCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LevelSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LevelOmit<ExtArgs> | null;
    data: Prisma.LevelCreateManyInput | Prisma.LevelCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LevelUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LevelSelect<ExtArgs> | null;
    omit?: Prisma.LevelOmit<ExtArgs> | null;
    include?: Prisma.LevelInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LevelUpdateInput, Prisma.LevelUncheckedUpdateInput>;
    where: Prisma.LevelWhereUniqueInput;
};
export type LevelUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LevelUpdateManyMutationInput, Prisma.LevelUncheckedUpdateManyInput>;
    where?: Prisma.LevelWhereInput;
    limit?: number;
};
export type LevelUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LevelSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LevelOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LevelUpdateManyMutationInput, Prisma.LevelUncheckedUpdateManyInput>;
    where?: Prisma.LevelWhereInput;
    limit?: number;
};
export type LevelUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LevelSelect<ExtArgs> | null;
    omit?: Prisma.LevelOmit<ExtArgs> | null;
    include?: Prisma.LevelInclude<ExtArgs> | null;
    where: Prisma.LevelWhereUniqueInput;
    create: Prisma.XOR<Prisma.LevelCreateInput, Prisma.LevelUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LevelUpdateInput, Prisma.LevelUncheckedUpdateInput>;
};
export type LevelDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LevelSelect<ExtArgs> | null;
    omit?: Prisma.LevelOmit<ExtArgs> | null;
    include?: Prisma.LevelInclude<ExtArgs> | null;
    where: Prisma.LevelWhereUniqueInput;
};
export type LevelDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LevelWhereInput;
    limit?: number;
};
export type Level$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type Level$sheetsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LevelDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LevelSelect<ExtArgs> | null;
    omit?: Prisma.LevelOmit<ExtArgs> | null;
    include?: Prisma.LevelInclude<ExtArgs> | null;
};
export {};
