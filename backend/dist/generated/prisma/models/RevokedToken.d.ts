import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RevokedTokenModel = runtime.Types.Result.DefaultSelection<Prisma.$RevokedTokenPayload>;
export type AggregateRevokedToken = {
    _count: RevokedTokenCountAggregateOutputType | null;
    _min: RevokedTokenMinAggregateOutputType | null;
    _max: RevokedTokenMaxAggregateOutputType | null;
};
export type RevokedTokenMinAggregateOutputType = {
    id: string | null;
    token: string | null;
    userId: string | null;
    expiresAt: Date | null;
    revokedAt: Date | null;
};
export type RevokedTokenMaxAggregateOutputType = {
    id: string | null;
    token: string | null;
    userId: string | null;
    expiresAt: Date | null;
    revokedAt: Date | null;
};
export type RevokedTokenCountAggregateOutputType = {
    id: number;
    token: number;
    userId: number;
    expiresAt: number;
    revokedAt: number;
    _all: number;
};
export type RevokedTokenMinAggregateInputType = {
    id?: true;
    token?: true;
    userId?: true;
    expiresAt?: true;
    revokedAt?: true;
};
export type RevokedTokenMaxAggregateInputType = {
    id?: true;
    token?: true;
    userId?: true;
    expiresAt?: true;
    revokedAt?: true;
};
export type RevokedTokenCountAggregateInputType = {
    id?: true;
    token?: true;
    userId?: true;
    expiresAt?: true;
    revokedAt?: true;
    _all?: true;
};
export type RevokedTokenAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RevokedTokenWhereInput;
    orderBy?: Prisma.RevokedTokenOrderByWithRelationInput | Prisma.RevokedTokenOrderByWithRelationInput[];
    cursor?: Prisma.RevokedTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RevokedTokenCountAggregateInputType;
    _min?: RevokedTokenMinAggregateInputType;
    _max?: RevokedTokenMaxAggregateInputType;
};
export type GetRevokedTokenAggregateType<T extends RevokedTokenAggregateArgs> = {
    [P in keyof T & keyof AggregateRevokedToken]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRevokedToken[P]> : Prisma.GetScalarType<T[P], AggregateRevokedToken[P]>;
};
export type RevokedTokenGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RevokedTokenWhereInput;
    orderBy?: Prisma.RevokedTokenOrderByWithAggregationInput | Prisma.RevokedTokenOrderByWithAggregationInput[];
    by: Prisma.RevokedTokenScalarFieldEnum[] | Prisma.RevokedTokenScalarFieldEnum;
    having?: Prisma.RevokedTokenScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RevokedTokenCountAggregateInputType | true;
    _min?: RevokedTokenMinAggregateInputType;
    _max?: RevokedTokenMaxAggregateInputType;
};
export type RevokedTokenGroupByOutputType = {
    id: string;
    token: string;
    userId: string;
    expiresAt: Date;
    revokedAt: Date;
    _count: RevokedTokenCountAggregateOutputType | null;
    _min: RevokedTokenMinAggregateOutputType | null;
    _max: RevokedTokenMaxAggregateOutputType | null;
};
type GetRevokedTokenGroupByPayload<T extends RevokedTokenGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RevokedTokenGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RevokedTokenGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RevokedTokenGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RevokedTokenGroupByOutputType[P]>;
}>>;
export type RevokedTokenWhereInput = {
    AND?: Prisma.RevokedTokenWhereInput | Prisma.RevokedTokenWhereInput[];
    OR?: Prisma.RevokedTokenWhereInput[];
    NOT?: Prisma.RevokedTokenWhereInput | Prisma.RevokedTokenWhereInput[];
    id?: Prisma.UuidFilter<"RevokedToken"> | string;
    token?: Prisma.StringFilter<"RevokedToken"> | string;
    userId?: Prisma.UuidFilter<"RevokedToken"> | string;
    expiresAt?: Prisma.DateTimeFilter<"RevokedToken"> | Date | string;
    revokedAt?: Prisma.DateTimeFilter<"RevokedToken"> | Date | string;
};
export type RevokedTokenOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
};
export type RevokedTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    token?: string;
    AND?: Prisma.RevokedTokenWhereInput | Prisma.RevokedTokenWhereInput[];
    OR?: Prisma.RevokedTokenWhereInput[];
    NOT?: Prisma.RevokedTokenWhereInput | Prisma.RevokedTokenWhereInput[];
    userId?: Prisma.UuidFilter<"RevokedToken"> | string;
    expiresAt?: Prisma.DateTimeFilter<"RevokedToken"> | Date | string;
    revokedAt?: Prisma.DateTimeFilter<"RevokedToken"> | Date | string;
}, "id" | "token">;
export type RevokedTokenOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    _count?: Prisma.RevokedTokenCountOrderByAggregateInput;
    _max?: Prisma.RevokedTokenMaxOrderByAggregateInput;
    _min?: Prisma.RevokedTokenMinOrderByAggregateInput;
};
export type RevokedTokenScalarWhereWithAggregatesInput = {
    AND?: Prisma.RevokedTokenScalarWhereWithAggregatesInput | Prisma.RevokedTokenScalarWhereWithAggregatesInput[];
    OR?: Prisma.RevokedTokenScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RevokedTokenScalarWhereWithAggregatesInput | Prisma.RevokedTokenScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"RevokedToken"> | string;
    token?: Prisma.StringWithAggregatesFilter<"RevokedToken"> | string;
    userId?: Prisma.UuidWithAggregatesFilter<"RevokedToken"> | string;
    expiresAt?: Prisma.DateTimeWithAggregatesFilter<"RevokedToken"> | Date | string;
    revokedAt?: Prisma.DateTimeWithAggregatesFilter<"RevokedToken"> | Date | string;
};
export type RevokedTokenCreateInput = {
    id?: string;
    token: string;
    userId: string;
    expiresAt: Date | string;
    revokedAt?: Date | string;
};
export type RevokedTokenUncheckedCreateInput = {
    id?: string;
    token: string;
    userId: string;
    expiresAt: Date | string;
    revokedAt?: Date | string;
};
export type RevokedTokenUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RevokedTokenUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RevokedTokenCreateManyInput = {
    id?: string;
    token: string;
    userId: string;
    expiresAt: Date | string;
    revokedAt?: Date | string;
};
export type RevokedTokenUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RevokedTokenUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    revokedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RevokedTokenCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
};
export type RevokedTokenMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
};
export type RevokedTokenMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
};
export type RevokedTokenSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    token?: boolean;
    userId?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
}, ExtArgs["result"]["revokedToken"]>;
export type RevokedTokenSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    token?: boolean;
    userId?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
}, ExtArgs["result"]["revokedToken"]>;
export type RevokedTokenSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    token?: boolean;
    userId?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
}, ExtArgs["result"]["revokedToken"]>;
export type RevokedTokenSelectScalar = {
    id?: boolean;
    token?: boolean;
    userId?: boolean;
    expiresAt?: boolean;
    revokedAt?: boolean;
};
export type RevokedTokenOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "token" | "userId" | "expiresAt" | "revokedAt", ExtArgs["result"]["revokedToken"]>;
export type $RevokedTokenPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RevokedToken";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        token: string;
        userId: string;
        expiresAt: Date;
        revokedAt: Date;
    }, ExtArgs["result"]["revokedToken"]>;
    composites: {};
};
export type RevokedTokenGetPayload<S extends boolean | null | undefined | RevokedTokenDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RevokedTokenPayload, S>;
export type RevokedTokenCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RevokedTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RevokedTokenCountAggregateInputType | true;
};
export interface RevokedTokenDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RevokedToken'];
        meta: {
            name: 'RevokedToken';
        };
    };
    findUnique<T extends RevokedTokenFindUniqueArgs>(args: Prisma.SelectSubset<T, RevokedTokenFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RevokedTokenClient<runtime.Types.Result.GetResult<Prisma.$RevokedTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RevokedTokenFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RevokedTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RevokedTokenClient<runtime.Types.Result.GetResult<Prisma.$RevokedTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RevokedTokenFindFirstArgs>(args?: Prisma.SelectSubset<T, RevokedTokenFindFirstArgs<ExtArgs>>): Prisma.Prisma__RevokedTokenClient<runtime.Types.Result.GetResult<Prisma.$RevokedTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RevokedTokenFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RevokedTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RevokedTokenClient<runtime.Types.Result.GetResult<Prisma.$RevokedTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RevokedTokenFindManyArgs>(args?: Prisma.SelectSubset<T, RevokedTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RevokedTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RevokedTokenCreateArgs>(args: Prisma.SelectSubset<T, RevokedTokenCreateArgs<ExtArgs>>): Prisma.Prisma__RevokedTokenClient<runtime.Types.Result.GetResult<Prisma.$RevokedTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RevokedTokenCreateManyArgs>(args?: Prisma.SelectSubset<T, RevokedTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RevokedTokenCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RevokedTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RevokedTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RevokedTokenDeleteArgs>(args: Prisma.SelectSubset<T, RevokedTokenDeleteArgs<ExtArgs>>): Prisma.Prisma__RevokedTokenClient<runtime.Types.Result.GetResult<Prisma.$RevokedTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RevokedTokenUpdateArgs>(args: Prisma.SelectSubset<T, RevokedTokenUpdateArgs<ExtArgs>>): Prisma.Prisma__RevokedTokenClient<runtime.Types.Result.GetResult<Prisma.$RevokedTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RevokedTokenDeleteManyArgs>(args?: Prisma.SelectSubset<T, RevokedTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RevokedTokenUpdateManyArgs>(args: Prisma.SelectSubset<T, RevokedTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RevokedTokenUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RevokedTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RevokedTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RevokedTokenUpsertArgs>(args: Prisma.SelectSubset<T, RevokedTokenUpsertArgs<ExtArgs>>): Prisma.Prisma__RevokedTokenClient<runtime.Types.Result.GetResult<Prisma.$RevokedTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RevokedTokenCountArgs>(args?: Prisma.Subset<T, RevokedTokenCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RevokedTokenCountAggregateOutputType> : number>;
    aggregate<T extends RevokedTokenAggregateArgs>(args: Prisma.Subset<T, RevokedTokenAggregateArgs>): Prisma.PrismaPromise<GetRevokedTokenAggregateType<T>>;
    groupBy<T extends RevokedTokenGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RevokedTokenGroupByArgs['orderBy'];
    } : {
        orderBy?: RevokedTokenGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RevokedTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRevokedTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RevokedTokenFieldRefs;
}
export interface Prisma__RevokedTokenClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RevokedTokenFieldRefs {
    readonly id: Prisma.FieldRef<"RevokedToken", 'String'>;
    readonly token: Prisma.FieldRef<"RevokedToken", 'String'>;
    readonly userId: Prisma.FieldRef<"RevokedToken", 'String'>;
    readonly expiresAt: Prisma.FieldRef<"RevokedToken", 'DateTime'>;
    readonly revokedAt: Prisma.FieldRef<"RevokedToken", 'DateTime'>;
}
export type RevokedTokenFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevokedTokenSelect<ExtArgs> | null;
    omit?: Prisma.RevokedTokenOmit<ExtArgs> | null;
    where: Prisma.RevokedTokenWhereUniqueInput;
};
export type RevokedTokenFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevokedTokenSelect<ExtArgs> | null;
    omit?: Prisma.RevokedTokenOmit<ExtArgs> | null;
    where: Prisma.RevokedTokenWhereUniqueInput;
};
export type RevokedTokenFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevokedTokenSelect<ExtArgs> | null;
    omit?: Prisma.RevokedTokenOmit<ExtArgs> | null;
    where?: Prisma.RevokedTokenWhereInput;
    orderBy?: Prisma.RevokedTokenOrderByWithRelationInput | Prisma.RevokedTokenOrderByWithRelationInput[];
    cursor?: Prisma.RevokedTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RevokedTokenScalarFieldEnum | Prisma.RevokedTokenScalarFieldEnum[];
};
export type RevokedTokenFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevokedTokenSelect<ExtArgs> | null;
    omit?: Prisma.RevokedTokenOmit<ExtArgs> | null;
    where?: Prisma.RevokedTokenWhereInput;
    orderBy?: Prisma.RevokedTokenOrderByWithRelationInput | Prisma.RevokedTokenOrderByWithRelationInput[];
    cursor?: Prisma.RevokedTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RevokedTokenScalarFieldEnum | Prisma.RevokedTokenScalarFieldEnum[];
};
export type RevokedTokenFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevokedTokenSelect<ExtArgs> | null;
    omit?: Prisma.RevokedTokenOmit<ExtArgs> | null;
    where?: Prisma.RevokedTokenWhereInput;
    orderBy?: Prisma.RevokedTokenOrderByWithRelationInput | Prisma.RevokedTokenOrderByWithRelationInput[];
    cursor?: Prisma.RevokedTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RevokedTokenScalarFieldEnum | Prisma.RevokedTokenScalarFieldEnum[];
};
export type RevokedTokenCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevokedTokenSelect<ExtArgs> | null;
    omit?: Prisma.RevokedTokenOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RevokedTokenCreateInput, Prisma.RevokedTokenUncheckedCreateInput>;
};
export type RevokedTokenCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RevokedTokenCreateManyInput | Prisma.RevokedTokenCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RevokedTokenCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevokedTokenSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RevokedTokenOmit<ExtArgs> | null;
    data: Prisma.RevokedTokenCreateManyInput | Prisma.RevokedTokenCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RevokedTokenUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevokedTokenSelect<ExtArgs> | null;
    omit?: Prisma.RevokedTokenOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RevokedTokenUpdateInput, Prisma.RevokedTokenUncheckedUpdateInput>;
    where: Prisma.RevokedTokenWhereUniqueInput;
};
export type RevokedTokenUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RevokedTokenUpdateManyMutationInput, Prisma.RevokedTokenUncheckedUpdateManyInput>;
    where?: Prisma.RevokedTokenWhereInput;
    limit?: number;
};
export type RevokedTokenUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevokedTokenSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RevokedTokenOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RevokedTokenUpdateManyMutationInput, Prisma.RevokedTokenUncheckedUpdateManyInput>;
    where?: Prisma.RevokedTokenWhereInput;
    limit?: number;
};
export type RevokedTokenUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevokedTokenSelect<ExtArgs> | null;
    omit?: Prisma.RevokedTokenOmit<ExtArgs> | null;
    where: Prisma.RevokedTokenWhereUniqueInput;
    create: Prisma.XOR<Prisma.RevokedTokenCreateInput, Prisma.RevokedTokenUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RevokedTokenUpdateInput, Prisma.RevokedTokenUncheckedUpdateInput>;
};
export type RevokedTokenDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevokedTokenSelect<ExtArgs> | null;
    omit?: Prisma.RevokedTokenOmit<ExtArgs> | null;
    where: Prisma.RevokedTokenWhereUniqueInput;
};
export type RevokedTokenDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RevokedTokenWhereInput;
    limit?: number;
};
export type RevokedTokenDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RevokedTokenSelect<ExtArgs> | null;
    omit?: Prisma.RevokedTokenOmit<ExtArgs> | null;
};
export {};
