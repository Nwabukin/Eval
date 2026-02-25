import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    password: string | null;
    firstName: string | null;
    lastName: string | null;
    role: $Enums.UserRole | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    departmentId: string | null;
    levelId: string | null;
    lineManagerId: string | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    password: string | null;
    firstName: string | null;
    lastName: string | null;
    role: $Enums.UserRole | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    departmentId: string | null;
    levelId: string | null;
    lineManagerId: string | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    password: number;
    firstName: number;
    lastName: number;
    role: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    departmentId: number;
    levelId: number;
    lineManagerId: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    firstName?: true;
    lastName?: true;
    role?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    departmentId?: true;
    levelId?: true;
    lineManagerId?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    firstName?: true;
    lastName?: true;
    role?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    departmentId?: true;
    levelId?: true;
    lineManagerId?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    firstName?: true;
    lastName?: true;
    role?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    departmentId?: true;
    levelId?: true;
    lineManagerId?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: $Enums.UserRole;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    departmentId: string | null;
    levelId: string | null;
    lineManagerId: string | null;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.UuidFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    password?: Prisma.StringFilter<"User"> | string;
    firstName?: Prisma.StringFilter<"User"> | string;
    lastName?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumUserRoleFilter<"User"> | $Enums.UserRole;
    isActive?: Prisma.BoolFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    departmentId?: Prisma.UuidNullableFilter<"User"> | string | null;
    levelId?: Prisma.UuidNullableFilter<"User"> | string | null;
    lineManagerId?: Prisma.UuidNullableFilter<"User"> | string | null;
    department?: Prisma.XOR<Prisma.DepartmentNullableScalarRelationFilter, Prisma.DepartmentWhereInput> | null;
    level?: Prisma.XOR<Prisma.LevelNullableScalarRelationFilter, Prisma.LevelWhereInput> | null;
    lineManager?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    managedEmployees?: Prisma.UserListRelationFilter;
    evaluationsAsEmployee?: Prisma.EvaluationListRelationFilter;
    cycleCalibrationMemberships?: Prisma.CycleCalibrationMemberListRelationFilter;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    levelId?: Prisma.SortOrderInput | Prisma.SortOrder;
    lineManagerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    department?: Prisma.DepartmentOrderByWithRelationInput;
    level?: Prisma.LevelOrderByWithRelationInput;
    lineManager?: Prisma.UserOrderByWithRelationInput;
    managedEmployees?: Prisma.UserOrderByRelationAggregateInput;
    evaluationsAsEmployee?: Prisma.EvaluationOrderByRelationAggregateInput;
    cycleCalibrationMemberships?: Prisma.CycleCalibrationMemberOrderByRelationAggregateInput;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    password?: Prisma.StringFilter<"User"> | string;
    firstName?: Prisma.StringFilter<"User"> | string;
    lastName?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumUserRoleFilter<"User"> | $Enums.UserRole;
    isActive?: Prisma.BoolFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    departmentId?: Prisma.UuidNullableFilter<"User"> | string | null;
    levelId?: Prisma.UuidNullableFilter<"User"> | string | null;
    lineManagerId?: Prisma.UuidNullableFilter<"User"> | string | null;
    department?: Prisma.XOR<Prisma.DepartmentNullableScalarRelationFilter, Prisma.DepartmentWhereInput> | null;
    level?: Prisma.XOR<Prisma.LevelNullableScalarRelationFilter, Prisma.LevelWhereInput> | null;
    lineManager?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    managedEmployees?: Prisma.UserListRelationFilter;
    evaluationsAsEmployee?: Prisma.EvaluationListRelationFilter;
    cycleCalibrationMemberships?: Prisma.CycleCalibrationMemberListRelationFilter;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreListRelationFilter;
}, "id" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    levelId?: Prisma.SortOrderInput | Prisma.SortOrder;
    lineManagerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    password?: Prisma.StringWithAggregatesFilter<"User"> | string;
    firstName?: Prisma.StringWithAggregatesFilter<"User"> | string;
    lastName?: Prisma.StringWithAggregatesFilter<"User"> | string;
    role?: Prisma.EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole;
    isActive?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    departmentId?: Prisma.UuidNullableWithAggregatesFilter<"User"> | string | null;
    levelId?: Prisma.UuidNullableWithAggregatesFilter<"User"> | string | null;
    lineManagerId?: Prisma.UuidNullableWithAggregatesFilter<"User"> | string | null;
};
export type UserCreateInput = {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: $Enums.UserRole;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    department?: Prisma.DepartmentCreateNestedOneWithoutUsersInput;
    level?: Prisma.LevelCreateNestedOneWithoutUsersInput;
    lineManager?: Prisma.UserCreateNestedOneWithoutManagedEmployeesInput;
    managedEmployees?: Prisma.UserCreateNestedManyWithoutLineManagerInput;
    evaluationsAsEmployee?: Prisma.EvaluationCreateNestedManyWithoutEmployeeInput;
    cycleCalibrationMemberships?: Prisma.CycleCalibrationMemberCreateNestedManyWithoutUserInput;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreCreateNestedManyWithoutCalibratorInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: $Enums.UserRole;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    departmentId?: string | null;
    levelId?: string | null;
    lineManagerId?: string | null;
    managedEmployees?: Prisma.UserUncheckedCreateNestedManyWithoutLineManagerInput;
    evaluationsAsEmployee?: Prisma.EvaluationUncheckedCreateNestedManyWithoutEmployeeInput;
    cycleCalibrationMemberships?: Prisma.CycleCalibrationMemberUncheckedCreateNestedManyWithoutUserInput;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreUncheckedCreateNestedManyWithoutCalibratorInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    department?: Prisma.DepartmentUpdateOneWithoutUsersNestedInput;
    level?: Prisma.LevelUpdateOneWithoutUsersNestedInput;
    lineManager?: Prisma.UserUpdateOneWithoutManagedEmployeesNestedInput;
    managedEmployees?: Prisma.UserUpdateManyWithoutLineManagerNestedInput;
    evaluationsAsEmployee?: Prisma.EvaluationUpdateManyWithoutEmployeeNestedInput;
    cycleCalibrationMemberships?: Prisma.CycleCalibrationMemberUpdateManyWithoutUserNestedInput;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreUpdateManyWithoutCalibratorNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    departmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    levelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lineManagerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    managedEmployees?: Prisma.UserUncheckedUpdateManyWithoutLineManagerNestedInput;
    evaluationsAsEmployee?: Prisma.EvaluationUncheckedUpdateManyWithoutEmployeeNestedInput;
    cycleCalibrationMemberships?: Prisma.CycleCalibrationMemberUncheckedUpdateManyWithoutUserNestedInput;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreUncheckedUpdateManyWithoutCalibratorNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: $Enums.UserRole;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    departmentId?: string | null;
    levelId?: string | null;
    lineManagerId?: string | null;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    departmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    levelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lineManagerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type UserListRelationFilter = {
    every?: Prisma.UserWhereInput;
    some?: Prisma.UserWhereInput;
    none?: Prisma.UserWhereInput;
};
export type UserOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UserNullableScalarRelationFilter = {
    is?: Prisma.UserWhereInput | null;
    isNot?: Prisma.UserWhereInput | null;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
    levelId?: Prisma.SortOrder;
    lineManagerId?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
    levelId?: Prisma.SortOrder;
    lineManagerId?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    departmentId?: Prisma.SortOrder;
    levelId?: Prisma.SortOrder;
    lineManagerId?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type UserCreateNestedManyWithoutDepartmentInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutDepartmentInput, Prisma.UserUncheckedCreateWithoutDepartmentInput> | Prisma.UserCreateWithoutDepartmentInput[] | Prisma.UserUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutDepartmentInput | Prisma.UserCreateOrConnectWithoutDepartmentInput[];
    createMany?: Prisma.UserCreateManyDepartmentInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutDepartmentInput, Prisma.UserUncheckedCreateWithoutDepartmentInput> | Prisma.UserCreateWithoutDepartmentInput[] | Prisma.UserUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutDepartmentInput | Prisma.UserCreateOrConnectWithoutDepartmentInput[];
    createMany?: Prisma.UserCreateManyDepartmentInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUpdateManyWithoutDepartmentNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutDepartmentInput, Prisma.UserUncheckedCreateWithoutDepartmentInput> | Prisma.UserCreateWithoutDepartmentInput[] | Prisma.UserUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutDepartmentInput | Prisma.UserCreateOrConnectWithoutDepartmentInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutDepartmentInput | Prisma.UserUpsertWithWhereUniqueWithoutDepartmentInput[];
    createMany?: Prisma.UserCreateManyDepartmentInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutDepartmentInput | Prisma.UserUpdateWithWhereUniqueWithoutDepartmentInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutDepartmentInput | Prisma.UserUpdateManyWithWhereWithoutDepartmentInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutDepartmentInput, Prisma.UserUncheckedCreateWithoutDepartmentInput> | Prisma.UserCreateWithoutDepartmentInput[] | Prisma.UserUncheckedCreateWithoutDepartmentInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutDepartmentInput | Prisma.UserCreateOrConnectWithoutDepartmentInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutDepartmentInput | Prisma.UserUpsertWithWhereUniqueWithoutDepartmentInput[];
    createMany?: Prisma.UserCreateManyDepartmentInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutDepartmentInput | Prisma.UserUpdateWithWhereUniqueWithoutDepartmentInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutDepartmentInput | Prisma.UserUpdateManyWithWhereWithoutDepartmentInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserCreateNestedManyWithoutLevelInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLevelInput, Prisma.UserUncheckedCreateWithoutLevelInput> | Prisma.UserCreateWithoutLevelInput[] | Prisma.UserUncheckedCreateWithoutLevelInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLevelInput | Prisma.UserCreateOrConnectWithoutLevelInput[];
    createMany?: Prisma.UserCreateManyLevelInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUncheckedCreateNestedManyWithoutLevelInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLevelInput, Prisma.UserUncheckedCreateWithoutLevelInput> | Prisma.UserCreateWithoutLevelInput[] | Prisma.UserUncheckedCreateWithoutLevelInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLevelInput | Prisma.UserCreateOrConnectWithoutLevelInput[];
    createMany?: Prisma.UserCreateManyLevelInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUpdateManyWithoutLevelNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLevelInput, Prisma.UserUncheckedCreateWithoutLevelInput> | Prisma.UserCreateWithoutLevelInput[] | Prisma.UserUncheckedCreateWithoutLevelInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLevelInput | Prisma.UserCreateOrConnectWithoutLevelInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutLevelInput | Prisma.UserUpsertWithWhereUniqueWithoutLevelInput[];
    createMany?: Prisma.UserCreateManyLevelInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutLevelInput | Prisma.UserUpdateWithWhereUniqueWithoutLevelInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutLevelInput | Prisma.UserUpdateManyWithWhereWithoutLevelInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserUncheckedUpdateManyWithoutLevelNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLevelInput, Prisma.UserUncheckedCreateWithoutLevelInput> | Prisma.UserCreateWithoutLevelInput[] | Prisma.UserUncheckedCreateWithoutLevelInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLevelInput | Prisma.UserCreateOrConnectWithoutLevelInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutLevelInput | Prisma.UserUpsertWithWhereUniqueWithoutLevelInput[];
    createMany?: Prisma.UserCreateManyLevelInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutLevelInput | Prisma.UserUpdateWithWhereUniqueWithoutLevelInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutLevelInput | Prisma.UserUpdateManyWithWhereWithoutLevelInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserCreateNestedOneWithoutManagedEmployeesInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutManagedEmployeesInput, Prisma.UserUncheckedCreateWithoutManagedEmployeesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutManagedEmployeesInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedManyWithoutLineManagerInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLineManagerInput, Prisma.UserUncheckedCreateWithoutLineManagerInput> | Prisma.UserCreateWithoutLineManagerInput[] | Prisma.UserUncheckedCreateWithoutLineManagerInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLineManagerInput | Prisma.UserCreateOrConnectWithoutLineManagerInput[];
    createMany?: Prisma.UserCreateManyLineManagerInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type UserUncheckedCreateNestedManyWithoutLineManagerInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLineManagerInput, Prisma.UserUncheckedCreateWithoutLineManagerInput> | Prisma.UserCreateWithoutLineManagerInput[] | Prisma.UserUncheckedCreateWithoutLineManagerInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLineManagerInput | Prisma.UserCreateOrConnectWithoutLineManagerInput[];
    createMany?: Prisma.UserCreateManyLineManagerInputEnvelope;
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
};
export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type UserUpdateOneWithoutManagedEmployeesNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutManagedEmployeesInput, Prisma.UserUncheckedCreateWithoutManagedEmployeesInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutManagedEmployeesInput;
    upsert?: Prisma.UserUpsertWithoutManagedEmployeesInput;
    disconnect?: Prisma.UserWhereInput | boolean;
    delete?: Prisma.UserWhereInput | boolean;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutManagedEmployeesInput, Prisma.UserUpdateWithoutManagedEmployeesInput>, Prisma.UserUncheckedUpdateWithoutManagedEmployeesInput>;
};
export type UserUpdateManyWithoutLineManagerNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLineManagerInput, Prisma.UserUncheckedCreateWithoutLineManagerInput> | Prisma.UserCreateWithoutLineManagerInput[] | Prisma.UserUncheckedCreateWithoutLineManagerInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLineManagerInput | Prisma.UserCreateOrConnectWithoutLineManagerInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutLineManagerInput | Prisma.UserUpsertWithWhereUniqueWithoutLineManagerInput[];
    createMany?: Prisma.UserCreateManyLineManagerInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutLineManagerInput | Prisma.UserUpdateWithWhereUniqueWithoutLineManagerInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutLineManagerInput | Prisma.UserUpdateManyWithWhereWithoutLineManagerInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type UserUncheckedUpdateManyWithoutLineManagerNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutLineManagerInput, Prisma.UserUncheckedCreateWithoutLineManagerInput> | Prisma.UserCreateWithoutLineManagerInput[] | Prisma.UserUncheckedCreateWithoutLineManagerInput[];
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutLineManagerInput | Prisma.UserCreateOrConnectWithoutLineManagerInput[];
    upsert?: Prisma.UserUpsertWithWhereUniqueWithoutLineManagerInput | Prisma.UserUpsertWithWhereUniqueWithoutLineManagerInput[];
    createMany?: Prisma.UserCreateManyLineManagerInputEnvelope;
    set?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    disconnect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    delete?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    connect?: Prisma.UserWhereUniqueInput | Prisma.UserWhereUniqueInput[];
    update?: Prisma.UserUpdateWithWhereUniqueWithoutLineManagerInput | Prisma.UserUpdateWithWhereUniqueWithoutLineManagerInput[];
    updateMany?: Prisma.UserUpdateManyWithWhereWithoutLineManagerInput | Prisma.UserUpdateManyWithWhereWithoutLineManagerInput[];
    deleteMany?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
};
export type UserCreateNestedOneWithoutCycleCalibrationMembershipsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCycleCalibrationMembershipsInput, Prisma.UserUncheckedCreateWithoutCycleCalibrationMembershipsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCycleCalibrationMembershipsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutCycleCalibrationMembershipsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCycleCalibrationMembershipsInput, Prisma.UserUncheckedCreateWithoutCycleCalibrationMembershipsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCycleCalibrationMembershipsInput;
    upsert?: Prisma.UserUpsertWithoutCycleCalibrationMembershipsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCycleCalibrationMembershipsInput, Prisma.UserUpdateWithoutCycleCalibrationMembershipsInput>, Prisma.UserUncheckedUpdateWithoutCycleCalibrationMembershipsInput>;
};
export type UserCreateNestedOneWithoutEvaluationsAsEmployeeInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutEvaluationsAsEmployeeInput, Prisma.UserUncheckedCreateWithoutEvaluationsAsEmployeeInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutEvaluationsAsEmployeeInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutEvaluationsAsEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutEvaluationsAsEmployeeInput, Prisma.UserUncheckedCreateWithoutEvaluationsAsEmployeeInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutEvaluationsAsEmployeeInput;
    upsert?: Prisma.UserUpsertWithoutEvaluationsAsEmployeeInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutEvaluationsAsEmployeeInput, Prisma.UserUpdateWithoutEvaluationsAsEmployeeInput>, Prisma.UserUncheckedUpdateWithoutEvaluationsAsEmployeeInput>;
};
export type UserCreateNestedOneWithoutCalibrationIndividualScoresInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCalibrationIndividualScoresInput, Prisma.UserUncheckedCreateWithoutCalibrationIndividualScoresInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCalibrationIndividualScoresInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutCalibrationIndividualScoresNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCalibrationIndividualScoresInput, Prisma.UserUncheckedCreateWithoutCalibrationIndividualScoresInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCalibrationIndividualScoresInput;
    upsert?: Prisma.UserUpsertWithoutCalibrationIndividualScoresInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCalibrationIndividualScoresInput, Prisma.UserUpdateWithoutCalibrationIndividualScoresInput>, Prisma.UserUncheckedUpdateWithoutCalibrationIndividualScoresInput>;
};
export type UserCreateWithoutDepartmentInput = {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: $Enums.UserRole;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    level?: Prisma.LevelCreateNestedOneWithoutUsersInput;
    lineManager?: Prisma.UserCreateNestedOneWithoutManagedEmployeesInput;
    managedEmployees?: Prisma.UserCreateNestedManyWithoutLineManagerInput;
    evaluationsAsEmployee?: Prisma.EvaluationCreateNestedManyWithoutEmployeeInput;
    cycleCalibrationMemberships?: Prisma.CycleCalibrationMemberCreateNestedManyWithoutUserInput;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreCreateNestedManyWithoutCalibratorInput;
};
export type UserUncheckedCreateWithoutDepartmentInput = {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: $Enums.UserRole;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    levelId?: string | null;
    lineManagerId?: string | null;
    managedEmployees?: Prisma.UserUncheckedCreateNestedManyWithoutLineManagerInput;
    evaluationsAsEmployee?: Prisma.EvaluationUncheckedCreateNestedManyWithoutEmployeeInput;
    cycleCalibrationMemberships?: Prisma.CycleCalibrationMemberUncheckedCreateNestedManyWithoutUserInput;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreUncheckedCreateNestedManyWithoutCalibratorInput;
};
export type UserCreateOrConnectWithoutDepartmentInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutDepartmentInput, Prisma.UserUncheckedCreateWithoutDepartmentInput>;
};
export type UserCreateManyDepartmentInputEnvelope = {
    data: Prisma.UserCreateManyDepartmentInput | Prisma.UserCreateManyDepartmentInput[];
    skipDuplicates?: boolean;
};
export type UserUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: Prisma.UserWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserUpdateWithoutDepartmentInput, Prisma.UserUncheckedUpdateWithoutDepartmentInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutDepartmentInput, Prisma.UserUncheckedCreateWithoutDepartmentInput>;
};
export type UserUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutDepartmentInput, Prisma.UserUncheckedUpdateWithoutDepartmentInput>;
};
export type UserUpdateManyWithWhereWithoutDepartmentInput = {
    where: Prisma.UserScalarWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyWithoutDepartmentInput>;
};
export type UserScalarWhereInput = {
    AND?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
    OR?: Prisma.UserScalarWhereInput[];
    NOT?: Prisma.UserScalarWhereInput | Prisma.UserScalarWhereInput[];
    id?: Prisma.UuidFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    password?: Prisma.StringFilter<"User"> | string;
    firstName?: Prisma.StringFilter<"User"> | string;
    lastName?: Prisma.StringFilter<"User"> | string;
    role?: Prisma.EnumUserRoleFilter<"User"> | $Enums.UserRole;
    isActive?: Prisma.BoolFilter<"User"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    departmentId?: Prisma.UuidNullableFilter<"User"> | string | null;
    levelId?: Prisma.UuidNullableFilter<"User"> | string | null;
    lineManagerId?: Prisma.UuidNullableFilter<"User"> | string | null;
};
export type UserCreateWithoutLevelInput = {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: $Enums.UserRole;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    department?: Prisma.DepartmentCreateNestedOneWithoutUsersInput;
    lineManager?: Prisma.UserCreateNestedOneWithoutManagedEmployeesInput;
    managedEmployees?: Prisma.UserCreateNestedManyWithoutLineManagerInput;
    evaluationsAsEmployee?: Prisma.EvaluationCreateNestedManyWithoutEmployeeInput;
    cycleCalibrationMemberships?: Prisma.CycleCalibrationMemberCreateNestedManyWithoutUserInput;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreCreateNestedManyWithoutCalibratorInput;
};
export type UserUncheckedCreateWithoutLevelInput = {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: $Enums.UserRole;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    departmentId?: string | null;
    lineManagerId?: string | null;
    managedEmployees?: Prisma.UserUncheckedCreateNestedManyWithoutLineManagerInput;
    evaluationsAsEmployee?: Prisma.EvaluationUncheckedCreateNestedManyWithoutEmployeeInput;
    cycleCalibrationMemberships?: Prisma.CycleCalibrationMemberUncheckedCreateNestedManyWithoutUserInput;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreUncheckedCreateNestedManyWithoutCalibratorInput;
};
export type UserCreateOrConnectWithoutLevelInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutLevelInput, Prisma.UserUncheckedCreateWithoutLevelInput>;
};
export type UserCreateManyLevelInputEnvelope = {
    data: Prisma.UserCreateManyLevelInput | Prisma.UserCreateManyLevelInput[];
    skipDuplicates?: boolean;
};
export type UserUpsertWithWhereUniqueWithoutLevelInput = {
    where: Prisma.UserWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserUpdateWithoutLevelInput, Prisma.UserUncheckedUpdateWithoutLevelInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutLevelInput, Prisma.UserUncheckedCreateWithoutLevelInput>;
};
export type UserUpdateWithWhereUniqueWithoutLevelInput = {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutLevelInput, Prisma.UserUncheckedUpdateWithoutLevelInput>;
};
export type UserUpdateManyWithWhereWithoutLevelInput = {
    where: Prisma.UserScalarWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyWithoutLevelInput>;
};
export type UserCreateWithoutManagedEmployeesInput = {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: $Enums.UserRole;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    department?: Prisma.DepartmentCreateNestedOneWithoutUsersInput;
    level?: Prisma.LevelCreateNestedOneWithoutUsersInput;
    lineManager?: Prisma.UserCreateNestedOneWithoutManagedEmployeesInput;
    evaluationsAsEmployee?: Prisma.EvaluationCreateNestedManyWithoutEmployeeInput;
    cycleCalibrationMemberships?: Prisma.CycleCalibrationMemberCreateNestedManyWithoutUserInput;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreCreateNestedManyWithoutCalibratorInput;
};
export type UserUncheckedCreateWithoutManagedEmployeesInput = {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: $Enums.UserRole;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    departmentId?: string | null;
    levelId?: string | null;
    lineManagerId?: string | null;
    evaluationsAsEmployee?: Prisma.EvaluationUncheckedCreateNestedManyWithoutEmployeeInput;
    cycleCalibrationMemberships?: Prisma.CycleCalibrationMemberUncheckedCreateNestedManyWithoutUserInput;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreUncheckedCreateNestedManyWithoutCalibratorInput;
};
export type UserCreateOrConnectWithoutManagedEmployeesInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutManagedEmployeesInput, Prisma.UserUncheckedCreateWithoutManagedEmployeesInput>;
};
export type UserCreateWithoutLineManagerInput = {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: $Enums.UserRole;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    department?: Prisma.DepartmentCreateNestedOneWithoutUsersInput;
    level?: Prisma.LevelCreateNestedOneWithoutUsersInput;
    managedEmployees?: Prisma.UserCreateNestedManyWithoutLineManagerInput;
    evaluationsAsEmployee?: Prisma.EvaluationCreateNestedManyWithoutEmployeeInput;
    cycleCalibrationMemberships?: Prisma.CycleCalibrationMemberCreateNestedManyWithoutUserInput;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreCreateNestedManyWithoutCalibratorInput;
};
export type UserUncheckedCreateWithoutLineManagerInput = {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: $Enums.UserRole;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    departmentId?: string | null;
    levelId?: string | null;
    managedEmployees?: Prisma.UserUncheckedCreateNestedManyWithoutLineManagerInput;
    evaluationsAsEmployee?: Prisma.EvaluationUncheckedCreateNestedManyWithoutEmployeeInput;
    cycleCalibrationMemberships?: Prisma.CycleCalibrationMemberUncheckedCreateNestedManyWithoutUserInput;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreUncheckedCreateNestedManyWithoutCalibratorInput;
};
export type UserCreateOrConnectWithoutLineManagerInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutLineManagerInput, Prisma.UserUncheckedCreateWithoutLineManagerInput>;
};
export type UserCreateManyLineManagerInputEnvelope = {
    data: Prisma.UserCreateManyLineManagerInput | Prisma.UserCreateManyLineManagerInput[];
    skipDuplicates?: boolean;
};
export type UserUpsertWithoutManagedEmployeesInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutManagedEmployeesInput, Prisma.UserUncheckedUpdateWithoutManagedEmployeesInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutManagedEmployeesInput, Prisma.UserUncheckedCreateWithoutManagedEmployeesInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutManagedEmployeesInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutManagedEmployeesInput, Prisma.UserUncheckedUpdateWithoutManagedEmployeesInput>;
};
export type UserUpdateWithoutManagedEmployeesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    department?: Prisma.DepartmentUpdateOneWithoutUsersNestedInput;
    level?: Prisma.LevelUpdateOneWithoutUsersNestedInput;
    lineManager?: Prisma.UserUpdateOneWithoutManagedEmployeesNestedInput;
    evaluationsAsEmployee?: Prisma.EvaluationUpdateManyWithoutEmployeeNestedInput;
    cycleCalibrationMemberships?: Prisma.CycleCalibrationMemberUpdateManyWithoutUserNestedInput;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreUpdateManyWithoutCalibratorNestedInput;
};
export type UserUncheckedUpdateWithoutManagedEmployeesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    departmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    levelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lineManagerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    evaluationsAsEmployee?: Prisma.EvaluationUncheckedUpdateManyWithoutEmployeeNestedInput;
    cycleCalibrationMemberships?: Prisma.CycleCalibrationMemberUncheckedUpdateManyWithoutUserNestedInput;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreUncheckedUpdateManyWithoutCalibratorNestedInput;
};
export type UserUpsertWithWhereUniqueWithoutLineManagerInput = {
    where: Prisma.UserWhereUniqueInput;
    update: Prisma.XOR<Prisma.UserUpdateWithoutLineManagerInput, Prisma.UserUncheckedUpdateWithoutLineManagerInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutLineManagerInput, Prisma.UserUncheckedCreateWithoutLineManagerInput>;
};
export type UserUpdateWithWhereUniqueWithoutLineManagerInput = {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutLineManagerInput, Prisma.UserUncheckedUpdateWithoutLineManagerInput>;
};
export type UserUpdateManyWithWhereWithoutLineManagerInput = {
    where: Prisma.UserScalarWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyWithoutLineManagerInput>;
};
export type UserCreateWithoutCycleCalibrationMembershipsInput = {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: $Enums.UserRole;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    department?: Prisma.DepartmentCreateNestedOneWithoutUsersInput;
    level?: Prisma.LevelCreateNestedOneWithoutUsersInput;
    lineManager?: Prisma.UserCreateNestedOneWithoutManagedEmployeesInput;
    managedEmployees?: Prisma.UserCreateNestedManyWithoutLineManagerInput;
    evaluationsAsEmployee?: Prisma.EvaluationCreateNestedManyWithoutEmployeeInput;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreCreateNestedManyWithoutCalibratorInput;
};
export type UserUncheckedCreateWithoutCycleCalibrationMembershipsInput = {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: $Enums.UserRole;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    departmentId?: string | null;
    levelId?: string | null;
    lineManagerId?: string | null;
    managedEmployees?: Prisma.UserUncheckedCreateNestedManyWithoutLineManagerInput;
    evaluationsAsEmployee?: Prisma.EvaluationUncheckedCreateNestedManyWithoutEmployeeInput;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreUncheckedCreateNestedManyWithoutCalibratorInput;
};
export type UserCreateOrConnectWithoutCycleCalibrationMembershipsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCycleCalibrationMembershipsInput, Prisma.UserUncheckedCreateWithoutCycleCalibrationMembershipsInput>;
};
export type UserUpsertWithoutCycleCalibrationMembershipsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCycleCalibrationMembershipsInput, Prisma.UserUncheckedUpdateWithoutCycleCalibrationMembershipsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCycleCalibrationMembershipsInput, Prisma.UserUncheckedCreateWithoutCycleCalibrationMembershipsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCycleCalibrationMembershipsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCycleCalibrationMembershipsInput, Prisma.UserUncheckedUpdateWithoutCycleCalibrationMembershipsInput>;
};
export type UserUpdateWithoutCycleCalibrationMembershipsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    department?: Prisma.DepartmentUpdateOneWithoutUsersNestedInput;
    level?: Prisma.LevelUpdateOneWithoutUsersNestedInput;
    lineManager?: Prisma.UserUpdateOneWithoutManagedEmployeesNestedInput;
    managedEmployees?: Prisma.UserUpdateManyWithoutLineManagerNestedInput;
    evaluationsAsEmployee?: Prisma.EvaluationUpdateManyWithoutEmployeeNestedInput;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreUpdateManyWithoutCalibratorNestedInput;
};
export type UserUncheckedUpdateWithoutCycleCalibrationMembershipsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    departmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    levelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lineManagerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    managedEmployees?: Prisma.UserUncheckedUpdateManyWithoutLineManagerNestedInput;
    evaluationsAsEmployee?: Prisma.EvaluationUncheckedUpdateManyWithoutEmployeeNestedInput;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreUncheckedUpdateManyWithoutCalibratorNestedInput;
};
export type UserCreateWithoutEvaluationsAsEmployeeInput = {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: $Enums.UserRole;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    department?: Prisma.DepartmentCreateNestedOneWithoutUsersInput;
    level?: Prisma.LevelCreateNestedOneWithoutUsersInput;
    lineManager?: Prisma.UserCreateNestedOneWithoutManagedEmployeesInput;
    managedEmployees?: Prisma.UserCreateNestedManyWithoutLineManagerInput;
    cycleCalibrationMemberships?: Prisma.CycleCalibrationMemberCreateNestedManyWithoutUserInput;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreCreateNestedManyWithoutCalibratorInput;
};
export type UserUncheckedCreateWithoutEvaluationsAsEmployeeInput = {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: $Enums.UserRole;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    departmentId?: string | null;
    levelId?: string | null;
    lineManagerId?: string | null;
    managedEmployees?: Prisma.UserUncheckedCreateNestedManyWithoutLineManagerInput;
    cycleCalibrationMemberships?: Prisma.CycleCalibrationMemberUncheckedCreateNestedManyWithoutUserInput;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreUncheckedCreateNestedManyWithoutCalibratorInput;
};
export type UserCreateOrConnectWithoutEvaluationsAsEmployeeInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutEvaluationsAsEmployeeInput, Prisma.UserUncheckedCreateWithoutEvaluationsAsEmployeeInput>;
};
export type UserUpsertWithoutEvaluationsAsEmployeeInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutEvaluationsAsEmployeeInput, Prisma.UserUncheckedUpdateWithoutEvaluationsAsEmployeeInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutEvaluationsAsEmployeeInput, Prisma.UserUncheckedCreateWithoutEvaluationsAsEmployeeInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutEvaluationsAsEmployeeInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutEvaluationsAsEmployeeInput, Prisma.UserUncheckedUpdateWithoutEvaluationsAsEmployeeInput>;
};
export type UserUpdateWithoutEvaluationsAsEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    department?: Prisma.DepartmentUpdateOneWithoutUsersNestedInput;
    level?: Prisma.LevelUpdateOneWithoutUsersNestedInput;
    lineManager?: Prisma.UserUpdateOneWithoutManagedEmployeesNestedInput;
    managedEmployees?: Prisma.UserUpdateManyWithoutLineManagerNestedInput;
    cycleCalibrationMemberships?: Prisma.CycleCalibrationMemberUpdateManyWithoutUserNestedInput;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreUpdateManyWithoutCalibratorNestedInput;
};
export type UserUncheckedUpdateWithoutEvaluationsAsEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    departmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    levelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lineManagerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    managedEmployees?: Prisma.UserUncheckedUpdateManyWithoutLineManagerNestedInput;
    cycleCalibrationMemberships?: Prisma.CycleCalibrationMemberUncheckedUpdateManyWithoutUserNestedInput;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreUncheckedUpdateManyWithoutCalibratorNestedInput;
};
export type UserCreateWithoutCalibrationIndividualScoresInput = {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: $Enums.UserRole;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    department?: Prisma.DepartmentCreateNestedOneWithoutUsersInput;
    level?: Prisma.LevelCreateNestedOneWithoutUsersInput;
    lineManager?: Prisma.UserCreateNestedOneWithoutManagedEmployeesInput;
    managedEmployees?: Prisma.UserCreateNestedManyWithoutLineManagerInput;
    evaluationsAsEmployee?: Prisma.EvaluationCreateNestedManyWithoutEmployeeInput;
    cycleCalibrationMemberships?: Prisma.CycleCalibrationMemberCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutCalibrationIndividualScoresInput = {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: $Enums.UserRole;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    departmentId?: string | null;
    levelId?: string | null;
    lineManagerId?: string | null;
    managedEmployees?: Prisma.UserUncheckedCreateNestedManyWithoutLineManagerInput;
    evaluationsAsEmployee?: Prisma.EvaluationUncheckedCreateNestedManyWithoutEmployeeInput;
    cycleCalibrationMemberships?: Prisma.CycleCalibrationMemberUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutCalibrationIndividualScoresInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCalibrationIndividualScoresInput, Prisma.UserUncheckedCreateWithoutCalibrationIndividualScoresInput>;
};
export type UserUpsertWithoutCalibrationIndividualScoresInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCalibrationIndividualScoresInput, Prisma.UserUncheckedUpdateWithoutCalibrationIndividualScoresInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCalibrationIndividualScoresInput, Prisma.UserUncheckedCreateWithoutCalibrationIndividualScoresInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCalibrationIndividualScoresInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCalibrationIndividualScoresInput, Prisma.UserUncheckedUpdateWithoutCalibrationIndividualScoresInput>;
};
export type UserUpdateWithoutCalibrationIndividualScoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    department?: Prisma.DepartmentUpdateOneWithoutUsersNestedInput;
    level?: Prisma.LevelUpdateOneWithoutUsersNestedInput;
    lineManager?: Prisma.UserUpdateOneWithoutManagedEmployeesNestedInput;
    managedEmployees?: Prisma.UserUpdateManyWithoutLineManagerNestedInput;
    evaluationsAsEmployee?: Prisma.EvaluationUpdateManyWithoutEmployeeNestedInput;
    cycleCalibrationMemberships?: Prisma.CycleCalibrationMemberUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutCalibrationIndividualScoresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    departmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    levelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lineManagerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    managedEmployees?: Prisma.UserUncheckedUpdateManyWithoutLineManagerNestedInput;
    evaluationsAsEmployee?: Prisma.EvaluationUncheckedUpdateManyWithoutEmployeeNestedInput;
    cycleCalibrationMemberships?: Prisma.CycleCalibrationMemberUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyDepartmentInput = {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: $Enums.UserRole;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    levelId?: string | null;
    lineManagerId?: string | null;
};
export type UserUpdateWithoutDepartmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    level?: Prisma.LevelUpdateOneWithoutUsersNestedInput;
    lineManager?: Prisma.UserUpdateOneWithoutManagedEmployeesNestedInput;
    managedEmployees?: Prisma.UserUpdateManyWithoutLineManagerNestedInput;
    evaluationsAsEmployee?: Prisma.EvaluationUpdateManyWithoutEmployeeNestedInput;
    cycleCalibrationMemberships?: Prisma.CycleCalibrationMemberUpdateManyWithoutUserNestedInput;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreUpdateManyWithoutCalibratorNestedInput;
};
export type UserUncheckedUpdateWithoutDepartmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    levelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lineManagerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    managedEmployees?: Prisma.UserUncheckedUpdateManyWithoutLineManagerNestedInput;
    evaluationsAsEmployee?: Prisma.EvaluationUncheckedUpdateManyWithoutEmployeeNestedInput;
    cycleCalibrationMemberships?: Prisma.CycleCalibrationMemberUncheckedUpdateManyWithoutUserNestedInput;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreUncheckedUpdateManyWithoutCalibratorNestedInput;
};
export type UserUncheckedUpdateManyWithoutDepartmentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    levelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lineManagerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type UserCreateManyLevelInput = {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: $Enums.UserRole;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    departmentId?: string | null;
    lineManagerId?: string | null;
};
export type UserUpdateWithoutLevelInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    department?: Prisma.DepartmentUpdateOneWithoutUsersNestedInput;
    lineManager?: Prisma.UserUpdateOneWithoutManagedEmployeesNestedInput;
    managedEmployees?: Prisma.UserUpdateManyWithoutLineManagerNestedInput;
    evaluationsAsEmployee?: Prisma.EvaluationUpdateManyWithoutEmployeeNestedInput;
    cycleCalibrationMemberships?: Prisma.CycleCalibrationMemberUpdateManyWithoutUserNestedInput;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreUpdateManyWithoutCalibratorNestedInput;
};
export type UserUncheckedUpdateWithoutLevelInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    departmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lineManagerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    managedEmployees?: Prisma.UserUncheckedUpdateManyWithoutLineManagerNestedInput;
    evaluationsAsEmployee?: Prisma.EvaluationUncheckedUpdateManyWithoutEmployeeNestedInput;
    cycleCalibrationMemberships?: Prisma.CycleCalibrationMemberUncheckedUpdateManyWithoutUserNestedInput;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreUncheckedUpdateManyWithoutCalibratorNestedInput;
};
export type UserUncheckedUpdateManyWithoutLevelInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    departmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lineManagerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type UserCreateManyLineManagerInput = {
    id?: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: $Enums.UserRole;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    departmentId?: string | null;
    levelId?: string | null;
};
export type UserUpdateWithoutLineManagerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    department?: Prisma.DepartmentUpdateOneWithoutUsersNestedInput;
    level?: Prisma.LevelUpdateOneWithoutUsersNestedInput;
    managedEmployees?: Prisma.UserUpdateManyWithoutLineManagerNestedInput;
    evaluationsAsEmployee?: Prisma.EvaluationUpdateManyWithoutEmployeeNestedInput;
    cycleCalibrationMemberships?: Prisma.CycleCalibrationMemberUpdateManyWithoutUserNestedInput;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreUpdateManyWithoutCalibratorNestedInput;
};
export type UserUncheckedUpdateWithoutLineManagerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    departmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    levelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    managedEmployees?: Prisma.UserUncheckedUpdateManyWithoutLineManagerNestedInput;
    evaluationsAsEmployee?: Prisma.EvaluationUncheckedUpdateManyWithoutEmployeeNestedInput;
    cycleCalibrationMemberships?: Prisma.CycleCalibrationMemberUncheckedUpdateManyWithoutUserNestedInput;
    calibrationIndividualScores?: Prisma.CalibrationIndividualScoreUncheckedUpdateManyWithoutCalibratorNestedInput;
};
export type UserUncheckedUpdateManyWithoutLineManagerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    departmentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    levelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type UserCountOutputType = {
    managedEmployees: number;
    evaluationsAsEmployee: number;
    cycleCalibrationMemberships: number;
    calibrationIndividualScores: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    managedEmployees?: boolean | UserCountOutputTypeCountManagedEmployeesArgs;
    evaluationsAsEmployee?: boolean | UserCountOutputTypeCountEvaluationsAsEmployeeArgs;
    cycleCalibrationMemberships?: boolean | UserCountOutputTypeCountCycleCalibrationMembershipsArgs;
    calibrationIndividualScores?: boolean | UserCountOutputTypeCountCalibrationIndividualScoresArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountManagedEmployeesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
};
export type UserCountOutputTypeCountEvaluationsAsEmployeeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EvaluationWhereInput;
};
export type UserCountOutputTypeCountCycleCalibrationMembershipsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CycleCalibrationMemberWhereInput;
};
export type UserCountOutputTypeCountCalibrationIndividualScoresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CalibrationIndividualScoreWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    role?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    departmentId?: boolean;
    levelId?: boolean;
    lineManagerId?: boolean;
    department?: boolean | Prisma.User$departmentArgs<ExtArgs>;
    level?: boolean | Prisma.User$levelArgs<ExtArgs>;
    lineManager?: boolean | Prisma.User$lineManagerArgs<ExtArgs>;
    managedEmployees?: boolean | Prisma.User$managedEmployeesArgs<ExtArgs>;
    evaluationsAsEmployee?: boolean | Prisma.User$evaluationsAsEmployeeArgs<ExtArgs>;
    cycleCalibrationMemberships?: boolean | Prisma.User$cycleCalibrationMembershipsArgs<ExtArgs>;
    calibrationIndividualScores?: boolean | Prisma.User$calibrationIndividualScoresArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    role?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    departmentId?: boolean;
    levelId?: boolean;
    lineManagerId?: boolean;
    department?: boolean | Prisma.User$departmentArgs<ExtArgs>;
    level?: boolean | Prisma.User$levelArgs<ExtArgs>;
    lineManager?: boolean | Prisma.User$lineManagerArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    role?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    departmentId?: boolean;
    levelId?: boolean;
    lineManagerId?: boolean;
    department?: boolean | Prisma.User$departmentArgs<ExtArgs>;
    level?: boolean | Prisma.User$levelArgs<ExtArgs>;
    lineManager?: boolean | Prisma.User$lineManagerArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    password?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    role?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    departmentId?: boolean;
    levelId?: boolean;
    lineManagerId?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "password" | "firstName" | "lastName" | "role" | "isActive" | "createdAt" | "updatedAt" | "departmentId" | "levelId" | "lineManagerId", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    department?: boolean | Prisma.User$departmentArgs<ExtArgs>;
    level?: boolean | Prisma.User$levelArgs<ExtArgs>;
    lineManager?: boolean | Prisma.User$lineManagerArgs<ExtArgs>;
    managedEmployees?: boolean | Prisma.User$managedEmployeesArgs<ExtArgs>;
    evaluationsAsEmployee?: boolean | Prisma.User$evaluationsAsEmployeeArgs<ExtArgs>;
    cycleCalibrationMemberships?: boolean | Prisma.User$cycleCalibrationMembershipsArgs<ExtArgs>;
    calibrationIndividualScores?: boolean | Prisma.User$calibrationIndividualScoresArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    department?: boolean | Prisma.User$departmentArgs<ExtArgs>;
    level?: boolean | Prisma.User$levelArgs<ExtArgs>;
    lineManager?: boolean | Prisma.User$lineManagerArgs<ExtArgs>;
};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    department?: boolean | Prisma.User$departmentArgs<ExtArgs>;
    level?: boolean | Prisma.User$levelArgs<ExtArgs>;
    lineManager?: boolean | Prisma.User$lineManagerArgs<ExtArgs>;
};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        department: Prisma.$DepartmentPayload<ExtArgs> | null;
        level: Prisma.$LevelPayload<ExtArgs> | null;
        lineManager: Prisma.$UserPayload<ExtArgs> | null;
        managedEmployees: Prisma.$UserPayload<ExtArgs>[];
        evaluationsAsEmployee: Prisma.$EvaluationPayload<ExtArgs>[];
        cycleCalibrationMemberships: Prisma.$CycleCalibrationMemberPayload<ExtArgs>[];
        calibrationIndividualScores: Prisma.$CalibrationIndividualScorePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        email: string;
        password: string;
        firstName: string;
        lastName: string;
        role: $Enums.UserRole;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        departmentId: string | null;
        levelId: string | null;
        lineManagerId: string | null;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    department<T extends Prisma.User$departmentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$departmentArgs<ExtArgs>>): Prisma.Prisma__DepartmentClient<runtime.Types.Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    level<T extends Prisma.User$levelArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$levelArgs<ExtArgs>>): Prisma.Prisma__LevelClient<runtime.Types.Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    lineManager<T extends Prisma.User$lineManagerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$lineManagerArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    managedEmployees<T extends Prisma.User$managedEmployeesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$managedEmployeesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    evaluationsAsEmployee<T extends Prisma.User$evaluationsAsEmployeeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$evaluationsAsEmployeeArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    cycleCalibrationMemberships<T extends Prisma.User$cycleCalibrationMembershipsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$cycleCalibrationMembershipsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CycleCalibrationMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    calibrationIndividualScores<T extends Prisma.User$calibrationIndividualScoresArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$calibrationIndividualScoresArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CalibrationIndividualScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly password: Prisma.FieldRef<"User", 'String'>;
    readonly firstName: Prisma.FieldRef<"User", 'String'>;
    readonly lastName: Prisma.FieldRef<"User", 'String'>;
    readonly role: Prisma.FieldRef<"User", 'UserRole'>;
    readonly isActive: Prisma.FieldRef<"User", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly departmentId: Prisma.FieldRef<"User", 'String'>;
    readonly levelId: Prisma.FieldRef<"User", 'String'>;
    readonly lineManagerId: Prisma.FieldRef<"User", 'String'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.UserIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
    include?: Prisma.UserIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$departmentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DepartmentSelect<ExtArgs> | null;
    omit?: Prisma.DepartmentOmit<ExtArgs> | null;
    include?: Prisma.DepartmentInclude<ExtArgs> | null;
    where?: Prisma.DepartmentWhereInput;
};
export type User$levelArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LevelSelect<ExtArgs> | null;
    omit?: Prisma.LevelOmit<ExtArgs> | null;
    include?: Prisma.LevelInclude<ExtArgs> | null;
    where?: Prisma.LevelWhereInput;
};
export type User$lineManagerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type User$managedEmployeesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$evaluationsAsEmployeeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$cycleCalibrationMembershipsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$calibrationIndividualScoresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
export {};
