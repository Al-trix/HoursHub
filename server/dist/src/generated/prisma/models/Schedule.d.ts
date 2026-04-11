import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ScheduleModel = runtime.Types.Result.DefaultSelection<Prisma.$SchedulePayload>;
export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null;
    _min: ScheduleMinAggregateOutputType | null;
    _max: ScheduleMaxAggregateOutputType | null;
};
export type ScheduleMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    startDate: Date | null;
    endDate: Date | null;
    status: $Enums.ScheduleStatus | null;
    idCreator: string | null;
    idAsigned: string | null;
};
export type ScheduleMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    startDate: Date | null;
    endDate: Date | null;
    status: $Enums.ScheduleStatus | null;
    idCreator: string | null;
    idAsigned: string | null;
};
export type ScheduleCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    startDate: number;
    endDate: number;
    status: number;
    idCreator: number;
    idAsigned: number;
    _all: number;
};
export type ScheduleMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    startDate?: true;
    endDate?: true;
    status?: true;
    idCreator?: true;
    idAsigned?: true;
};
export type ScheduleMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    startDate?: true;
    endDate?: true;
    status?: true;
    idCreator?: true;
    idAsigned?: true;
};
export type ScheduleCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    startDate?: true;
    endDate?: true;
    status?: true;
    idCreator?: true;
    idAsigned?: true;
    _all?: true;
};
export type ScheduleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScheduleWhereInput;
    orderBy?: Prisma.ScheduleOrderByWithRelationInput | Prisma.ScheduleOrderByWithRelationInput[];
    cursor?: Prisma.ScheduleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ScheduleCountAggregateInputType;
    _min?: ScheduleMinAggregateInputType;
    _max?: ScheduleMaxAggregateInputType;
};
export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
    [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSchedule[P]> : Prisma.GetScalarType<T[P], AggregateSchedule[P]>;
};
export type ScheduleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScheduleWhereInput;
    orderBy?: Prisma.ScheduleOrderByWithAggregationInput | Prisma.ScheduleOrderByWithAggregationInput[];
    by: Prisma.ScheduleScalarFieldEnum[] | Prisma.ScheduleScalarFieldEnum;
    having?: Prisma.ScheduleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ScheduleCountAggregateInputType | true;
    _min?: ScheduleMinAggregateInputType;
    _max?: ScheduleMaxAggregateInputType;
};
export type ScheduleGroupByOutputType = {
    id: string;
    name: string | null;
    description: string | null;
    startDate: Date | null;
    endDate: Date | null;
    status: $Enums.ScheduleStatus | null;
    idCreator: string;
    idAsigned: string;
    _count: ScheduleCountAggregateOutputType | null;
    _min: ScheduleMinAggregateOutputType | null;
    _max: ScheduleMaxAggregateOutputType | null;
};
export type GetScheduleGroupByPayload<T extends ScheduleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ScheduleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ScheduleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ScheduleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ScheduleGroupByOutputType[P]>;
}>>;
export type ScheduleWhereInput = {
    AND?: Prisma.ScheduleWhereInput | Prisma.ScheduleWhereInput[];
    OR?: Prisma.ScheduleWhereInput[];
    NOT?: Prisma.ScheduleWhereInput | Prisma.ScheduleWhereInput[];
    id?: Prisma.StringFilter<"Schedule"> | string;
    name?: Prisma.StringNullableFilter<"Schedule"> | string | null;
    description?: Prisma.StringNullableFilter<"Schedule"> | string | null;
    startDate?: Prisma.DateTimeNullableFilter<"Schedule"> | Date | string | null;
    endDate?: Prisma.DateTimeNullableFilter<"Schedule"> | Date | string | null;
    status?: Prisma.EnumScheduleStatusNullableFilter<"Schedule"> | $Enums.ScheduleStatus | null;
    idCreator?: Prisma.StringFilter<"Schedule"> | string;
    idAsigned?: Prisma.StringFilter<"Schedule"> | string;
    creator?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    assigned?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type ScheduleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    startDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    endDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    idCreator?: Prisma.SortOrder;
    idAsigned?: Prisma.SortOrder;
    creator?: Prisma.UserOrderByWithRelationInput;
    assigned?: Prisma.UserOrderByWithRelationInput;
};
export type ScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ScheduleWhereInput | Prisma.ScheduleWhereInput[];
    OR?: Prisma.ScheduleWhereInput[];
    NOT?: Prisma.ScheduleWhereInput | Prisma.ScheduleWhereInput[];
    name?: Prisma.StringNullableFilter<"Schedule"> | string | null;
    description?: Prisma.StringNullableFilter<"Schedule"> | string | null;
    startDate?: Prisma.DateTimeNullableFilter<"Schedule"> | Date | string | null;
    endDate?: Prisma.DateTimeNullableFilter<"Schedule"> | Date | string | null;
    status?: Prisma.EnumScheduleStatusNullableFilter<"Schedule"> | $Enums.ScheduleStatus | null;
    idCreator?: Prisma.StringFilter<"Schedule"> | string;
    idAsigned?: Prisma.StringFilter<"Schedule"> | string;
    creator?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    assigned?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type ScheduleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    startDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    endDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrderInput | Prisma.SortOrder;
    idCreator?: Prisma.SortOrder;
    idAsigned?: Prisma.SortOrder;
    _count?: Prisma.ScheduleCountOrderByAggregateInput;
    _max?: Prisma.ScheduleMaxOrderByAggregateInput;
    _min?: Prisma.ScheduleMinOrderByAggregateInput;
};
export type ScheduleScalarWhereWithAggregatesInput = {
    AND?: Prisma.ScheduleScalarWhereWithAggregatesInput | Prisma.ScheduleScalarWhereWithAggregatesInput[];
    OR?: Prisma.ScheduleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ScheduleScalarWhereWithAggregatesInput | Prisma.ScheduleScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Schedule"> | string;
    name?: Prisma.StringNullableWithAggregatesFilter<"Schedule"> | string | null;
    description?: Prisma.StringNullableWithAggregatesFilter<"Schedule"> | string | null;
    startDate?: Prisma.DateTimeNullableWithAggregatesFilter<"Schedule"> | Date | string | null;
    endDate?: Prisma.DateTimeNullableWithAggregatesFilter<"Schedule"> | Date | string | null;
    status?: Prisma.EnumScheduleStatusNullableWithAggregatesFilter<"Schedule"> | $Enums.ScheduleStatus | null;
    idCreator?: Prisma.StringWithAggregatesFilter<"Schedule"> | string;
    idAsigned?: Prisma.StringWithAggregatesFilter<"Schedule"> | string;
};
export type ScheduleCreateInput = {
    id?: string;
    name?: string | null;
    description?: string | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    status?: $Enums.ScheduleStatus | null;
    creator: Prisma.UserCreateNestedOneWithoutCreatedSchedulesInput;
    assigned: Prisma.UserCreateNestedOneWithoutAssignedSchedulesInput;
};
export type ScheduleUncheckedCreateInput = {
    id?: string;
    name?: string | null;
    description?: string | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    status?: $Enums.ScheduleStatus | null;
    idCreator: string;
    idAsigned: string;
};
export type ScheduleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableEnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus | null;
    creator?: Prisma.UserUpdateOneRequiredWithoutCreatedSchedulesNestedInput;
    assigned?: Prisma.UserUpdateOneRequiredWithoutAssignedSchedulesNestedInput;
};
export type ScheduleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableEnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus | null;
    idCreator?: Prisma.StringFieldUpdateOperationsInput | string;
    idAsigned?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ScheduleCreateManyInput = {
    id?: string;
    name?: string | null;
    description?: string | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    status?: $Enums.ScheduleStatus | null;
    idCreator: string;
    idAsigned: string;
};
export type ScheduleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableEnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus | null;
};
export type ScheduleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableEnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus | null;
    idCreator?: Prisma.StringFieldUpdateOperationsInput | string;
    idAsigned?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ScheduleListRelationFilter = {
    every?: Prisma.ScheduleWhereInput;
    some?: Prisma.ScheduleWhereInput;
    none?: Prisma.ScheduleWhereInput;
};
export type ScheduleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ScheduleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    idCreator?: Prisma.SortOrder;
    idAsigned?: Prisma.SortOrder;
};
export type ScheduleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    idCreator?: Prisma.SortOrder;
    idAsigned?: Prisma.SortOrder;
};
export type ScheduleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    idCreator?: Prisma.SortOrder;
    idAsigned?: Prisma.SortOrder;
};
export type ScheduleCreateNestedManyWithoutCreatorInput = {
    create?: Prisma.XOR<Prisma.ScheduleCreateWithoutCreatorInput, Prisma.ScheduleUncheckedCreateWithoutCreatorInput> | Prisma.ScheduleCreateWithoutCreatorInput[] | Prisma.ScheduleUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.ScheduleCreateOrConnectWithoutCreatorInput | Prisma.ScheduleCreateOrConnectWithoutCreatorInput[];
    createMany?: Prisma.ScheduleCreateManyCreatorInputEnvelope;
    connect?: Prisma.ScheduleWhereUniqueInput | Prisma.ScheduleWhereUniqueInput[];
};
export type ScheduleCreateNestedManyWithoutAssignedInput = {
    create?: Prisma.XOR<Prisma.ScheduleCreateWithoutAssignedInput, Prisma.ScheduleUncheckedCreateWithoutAssignedInput> | Prisma.ScheduleCreateWithoutAssignedInput[] | Prisma.ScheduleUncheckedCreateWithoutAssignedInput[];
    connectOrCreate?: Prisma.ScheduleCreateOrConnectWithoutAssignedInput | Prisma.ScheduleCreateOrConnectWithoutAssignedInput[];
    createMany?: Prisma.ScheduleCreateManyAssignedInputEnvelope;
    connect?: Prisma.ScheduleWhereUniqueInput | Prisma.ScheduleWhereUniqueInput[];
};
export type ScheduleUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: Prisma.XOR<Prisma.ScheduleCreateWithoutCreatorInput, Prisma.ScheduleUncheckedCreateWithoutCreatorInput> | Prisma.ScheduleCreateWithoutCreatorInput[] | Prisma.ScheduleUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.ScheduleCreateOrConnectWithoutCreatorInput | Prisma.ScheduleCreateOrConnectWithoutCreatorInput[];
    createMany?: Prisma.ScheduleCreateManyCreatorInputEnvelope;
    connect?: Prisma.ScheduleWhereUniqueInput | Prisma.ScheduleWhereUniqueInput[];
};
export type ScheduleUncheckedCreateNestedManyWithoutAssignedInput = {
    create?: Prisma.XOR<Prisma.ScheduleCreateWithoutAssignedInput, Prisma.ScheduleUncheckedCreateWithoutAssignedInput> | Prisma.ScheduleCreateWithoutAssignedInput[] | Prisma.ScheduleUncheckedCreateWithoutAssignedInput[];
    connectOrCreate?: Prisma.ScheduleCreateOrConnectWithoutAssignedInput | Prisma.ScheduleCreateOrConnectWithoutAssignedInput[];
    createMany?: Prisma.ScheduleCreateManyAssignedInputEnvelope;
    connect?: Prisma.ScheduleWhereUniqueInput | Prisma.ScheduleWhereUniqueInput[];
};
export type ScheduleUpdateManyWithoutCreatorNestedInput = {
    create?: Prisma.XOR<Prisma.ScheduleCreateWithoutCreatorInput, Prisma.ScheduleUncheckedCreateWithoutCreatorInput> | Prisma.ScheduleCreateWithoutCreatorInput[] | Prisma.ScheduleUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.ScheduleCreateOrConnectWithoutCreatorInput | Prisma.ScheduleCreateOrConnectWithoutCreatorInput[];
    upsert?: Prisma.ScheduleUpsertWithWhereUniqueWithoutCreatorInput | Prisma.ScheduleUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: Prisma.ScheduleCreateManyCreatorInputEnvelope;
    set?: Prisma.ScheduleWhereUniqueInput | Prisma.ScheduleWhereUniqueInput[];
    disconnect?: Prisma.ScheduleWhereUniqueInput | Prisma.ScheduleWhereUniqueInput[];
    delete?: Prisma.ScheduleWhereUniqueInput | Prisma.ScheduleWhereUniqueInput[];
    connect?: Prisma.ScheduleWhereUniqueInput | Prisma.ScheduleWhereUniqueInput[];
    update?: Prisma.ScheduleUpdateWithWhereUniqueWithoutCreatorInput | Prisma.ScheduleUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?: Prisma.ScheduleUpdateManyWithWhereWithoutCreatorInput | Prisma.ScheduleUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: Prisma.ScheduleScalarWhereInput | Prisma.ScheduleScalarWhereInput[];
};
export type ScheduleUpdateManyWithoutAssignedNestedInput = {
    create?: Prisma.XOR<Prisma.ScheduleCreateWithoutAssignedInput, Prisma.ScheduleUncheckedCreateWithoutAssignedInput> | Prisma.ScheduleCreateWithoutAssignedInput[] | Prisma.ScheduleUncheckedCreateWithoutAssignedInput[];
    connectOrCreate?: Prisma.ScheduleCreateOrConnectWithoutAssignedInput | Prisma.ScheduleCreateOrConnectWithoutAssignedInput[];
    upsert?: Prisma.ScheduleUpsertWithWhereUniqueWithoutAssignedInput | Prisma.ScheduleUpsertWithWhereUniqueWithoutAssignedInput[];
    createMany?: Prisma.ScheduleCreateManyAssignedInputEnvelope;
    set?: Prisma.ScheduleWhereUniqueInput | Prisma.ScheduleWhereUniqueInput[];
    disconnect?: Prisma.ScheduleWhereUniqueInput | Prisma.ScheduleWhereUniqueInput[];
    delete?: Prisma.ScheduleWhereUniqueInput | Prisma.ScheduleWhereUniqueInput[];
    connect?: Prisma.ScheduleWhereUniqueInput | Prisma.ScheduleWhereUniqueInput[];
    update?: Prisma.ScheduleUpdateWithWhereUniqueWithoutAssignedInput | Prisma.ScheduleUpdateWithWhereUniqueWithoutAssignedInput[];
    updateMany?: Prisma.ScheduleUpdateManyWithWhereWithoutAssignedInput | Prisma.ScheduleUpdateManyWithWhereWithoutAssignedInput[];
    deleteMany?: Prisma.ScheduleScalarWhereInput | Prisma.ScheduleScalarWhereInput[];
};
export type ScheduleUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: Prisma.XOR<Prisma.ScheduleCreateWithoutCreatorInput, Prisma.ScheduleUncheckedCreateWithoutCreatorInput> | Prisma.ScheduleCreateWithoutCreatorInput[] | Prisma.ScheduleUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.ScheduleCreateOrConnectWithoutCreatorInput | Prisma.ScheduleCreateOrConnectWithoutCreatorInput[];
    upsert?: Prisma.ScheduleUpsertWithWhereUniqueWithoutCreatorInput | Prisma.ScheduleUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: Prisma.ScheduleCreateManyCreatorInputEnvelope;
    set?: Prisma.ScheduleWhereUniqueInput | Prisma.ScheduleWhereUniqueInput[];
    disconnect?: Prisma.ScheduleWhereUniqueInput | Prisma.ScheduleWhereUniqueInput[];
    delete?: Prisma.ScheduleWhereUniqueInput | Prisma.ScheduleWhereUniqueInput[];
    connect?: Prisma.ScheduleWhereUniqueInput | Prisma.ScheduleWhereUniqueInput[];
    update?: Prisma.ScheduleUpdateWithWhereUniqueWithoutCreatorInput | Prisma.ScheduleUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?: Prisma.ScheduleUpdateManyWithWhereWithoutCreatorInput | Prisma.ScheduleUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: Prisma.ScheduleScalarWhereInput | Prisma.ScheduleScalarWhereInput[];
};
export type ScheduleUncheckedUpdateManyWithoutAssignedNestedInput = {
    create?: Prisma.XOR<Prisma.ScheduleCreateWithoutAssignedInput, Prisma.ScheduleUncheckedCreateWithoutAssignedInput> | Prisma.ScheduleCreateWithoutAssignedInput[] | Prisma.ScheduleUncheckedCreateWithoutAssignedInput[];
    connectOrCreate?: Prisma.ScheduleCreateOrConnectWithoutAssignedInput | Prisma.ScheduleCreateOrConnectWithoutAssignedInput[];
    upsert?: Prisma.ScheduleUpsertWithWhereUniqueWithoutAssignedInput | Prisma.ScheduleUpsertWithWhereUniqueWithoutAssignedInput[];
    createMany?: Prisma.ScheduleCreateManyAssignedInputEnvelope;
    set?: Prisma.ScheduleWhereUniqueInput | Prisma.ScheduleWhereUniqueInput[];
    disconnect?: Prisma.ScheduleWhereUniqueInput | Prisma.ScheduleWhereUniqueInput[];
    delete?: Prisma.ScheduleWhereUniqueInput | Prisma.ScheduleWhereUniqueInput[];
    connect?: Prisma.ScheduleWhereUniqueInput | Prisma.ScheduleWhereUniqueInput[];
    update?: Prisma.ScheduleUpdateWithWhereUniqueWithoutAssignedInput | Prisma.ScheduleUpdateWithWhereUniqueWithoutAssignedInput[];
    updateMany?: Prisma.ScheduleUpdateManyWithWhereWithoutAssignedInput | Prisma.ScheduleUpdateManyWithWhereWithoutAssignedInput[];
    deleteMany?: Prisma.ScheduleScalarWhereInput | Prisma.ScheduleScalarWhereInput[];
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type NullableEnumScheduleStatusFieldUpdateOperationsInput = {
    set?: $Enums.ScheduleStatus | null;
};
export type ScheduleCreateWithoutCreatorInput = {
    id?: string;
    name?: string | null;
    description?: string | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    status?: $Enums.ScheduleStatus | null;
    assigned: Prisma.UserCreateNestedOneWithoutAssignedSchedulesInput;
};
export type ScheduleUncheckedCreateWithoutCreatorInput = {
    id?: string;
    name?: string | null;
    description?: string | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    status?: $Enums.ScheduleStatus | null;
    idAsigned: string;
};
export type ScheduleCreateOrConnectWithoutCreatorInput = {
    where: Prisma.ScheduleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScheduleCreateWithoutCreatorInput, Prisma.ScheduleUncheckedCreateWithoutCreatorInput>;
};
export type ScheduleCreateManyCreatorInputEnvelope = {
    data: Prisma.ScheduleCreateManyCreatorInput | Prisma.ScheduleCreateManyCreatorInput[];
    skipDuplicates?: boolean;
};
export type ScheduleCreateWithoutAssignedInput = {
    id?: string;
    name?: string | null;
    description?: string | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    status?: $Enums.ScheduleStatus | null;
    creator: Prisma.UserCreateNestedOneWithoutCreatedSchedulesInput;
};
export type ScheduleUncheckedCreateWithoutAssignedInput = {
    id?: string;
    name?: string | null;
    description?: string | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    status?: $Enums.ScheduleStatus | null;
    idCreator: string;
};
export type ScheduleCreateOrConnectWithoutAssignedInput = {
    where: Prisma.ScheduleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScheduleCreateWithoutAssignedInput, Prisma.ScheduleUncheckedCreateWithoutAssignedInput>;
};
export type ScheduleCreateManyAssignedInputEnvelope = {
    data: Prisma.ScheduleCreateManyAssignedInput | Prisma.ScheduleCreateManyAssignedInput[];
    skipDuplicates?: boolean;
};
export type ScheduleUpsertWithWhereUniqueWithoutCreatorInput = {
    where: Prisma.ScheduleWhereUniqueInput;
    update: Prisma.XOR<Prisma.ScheduleUpdateWithoutCreatorInput, Prisma.ScheduleUncheckedUpdateWithoutCreatorInput>;
    create: Prisma.XOR<Prisma.ScheduleCreateWithoutCreatorInput, Prisma.ScheduleUncheckedCreateWithoutCreatorInput>;
};
export type ScheduleUpdateWithWhereUniqueWithoutCreatorInput = {
    where: Prisma.ScheduleWhereUniqueInput;
    data: Prisma.XOR<Prisma.ScheduleUpdateWithoutCreatorInput, Prisma.ScheduleUncheckedUpdateWithoutCreatorInput>;
};
export type ScheduleUpdateManyWithWhereWithoutCreatorInput = {
    where: Prisma.ScheduleScalarWhereInput;
    data: Prisma.XOR<Prisma.ScheduleUpdateManyMutationInput, Prisma.ScheduleUncheckedUpdateManyWithoutCreatorInput>;
};
export type ScheduleScalarWhereInput = {
    AND?: Prisma.ScheduleScalarWhereInput | Prisma.ScheduleScalarWhereInput[];
    OR?: Prisma.ScheduleScalarWhereInput[];
    NOT?: Prisma.ScheduleScalarWhereInput | Prisma.ScheduleScalarWhereInput[];
    id?: Prisma.StringFilter<"Schedule"> | string;
    name?: Prisma.StringNullableFilter<"Schedule"> | string | null;
    description?: Prisma.StringNullableFilter<"Schedule"> | string | null;
    startDate?: Prisma.DateTimeNullableFilter<"Schedule"> | Date | string | null;
    endDate?: Prisma.DateTimeNullableFilter<"Schedule"> | Date | string | null;
    status?: Prisma.EnumScheduleStatusNullableFilter<"Schedule"> | $Enums.ScheduleStatus | null;
    idCreator?: Prisma.StringFilter<"Schedule"> | string;
    idAsigned?: Prisma.StringFilter<"Schedule"> | string;
};
export type ScheduleUpsertWithWhereUniqueWithoutAssignedInput = {
    where: Prisma.ScheduleWhereUniqueInput;
    update: Prisma.XOR<Prisma.ScheduleUpdateWithoutAssignedInput, Prisma.ScheduleUncheckedUpdateWithoutAssignedInput>;
    create: Prisma.XOR<Prisma.ScheduleCreateWithoutAssignedInput, Prisma.ScheduleUncheckedCreateWithoutAssignedInput>;
};
export type ScheduleUpdateWithWhereUniqueWithoutAssignedInput = {
    where: Prisma.ScheduleWhereUniqueInput;
    data: Prisma.XOR<Prisma.ScheduleUpdateWithoutAssignedInput, Prisma.ScheduleUncheckedUpdateWithoutAssignedInput>;
};
export type ScheduleUpdateManyWithWhereWithoutAssignedInput = {
    where: Prisma.ScheduleScalarWhereInput;
    data: Prisma.XOR<Prisma.ScheduleUpdateManyMutationInput, Prisma.ScheduleUncheckedUpdateManyWithoutAssignedInput>;
};
export type ScheduleCreateManyCreatorInput = {
    id?: string;
    name?: string | null;
    description?: string | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    status?: $Enums.ScheduleStatus | null;
    idAsigned: string;
};
export type ScheduleCreateManyAssignedInput = {
    id?: string;
    name?: string | null;
    description?: string | null;
    startDate?: Date | string | null;
    endDate?: Date | string | null;
    status?: $Enums.ScheduleStatus | null;
    idCreator: string;
};
export type ScheduleUpdateWithoutCreatorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableEnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus | null;
    assigned?: Prisma.UserUpdateOneRequiredWithoutAssignedSchedulesNestedInput;
};
export type ScheduleUncheckedUpdateWithoutCreatorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableEnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus | null;
    idAsigned?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ScheduleUncheckedUpdateManyWithoutCreatorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableEnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus | null;
    idAsigned?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ScheduleUpdateWithoutAssignedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableEnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus | null;
    creator?: Prisma.UserUpdateOneRequiredWithoutCreatedSchedulesNestedInput;
};
export type ScheduleUncheckedUpdateWithoutAssignedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableEnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus | null;
    idCreator?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ScheduleUncheckedUpdateManyWithoutAssignedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.NullableEnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus | null;
    idCreator?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ScheduleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    status?: boolean;
    idCreator?: boolean;
    idAsigned?: boolean;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    assigned?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["schedule"]>;
export type ScheduleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    status?: boolean;
    idCreator?: boolean;
    idAsigned?: boolean;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    assigned?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["schedule"]>;
export type ScheduleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    status?: boolean;
    idCreator?: boolean;
    idAsigned?: boolean;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    assigned?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["schedule"]>;
export type ScheduleSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    status?: boolean;
    idCreator?: boolean;
    idAsigned?: boolean;
};
export type ScheduleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "description" | "startDate" | "endDate" | "status" | "idCreator" | "idAsigned", ExtArgs["result"]["schedule"]>;
export type ScheduleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    assigned?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ScheduleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    assigned?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ScheduleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    assigned?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $SchedulePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Schedule";
    objects: {
        creator: Prisma.$UserPayload<ExtArgs>;
        assigned: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string | null;
        description: string | null;
        startDate: Date | null;
        endDate: Date | null;
        status: $Enums.ScheduleStatus | null;
        idCreator: string;
        idAsigned: string;
    }, ExtArgs["result"]["schedule"]>;
    composites: {};
};
export type ScheduleGetPayload<S extends boolean | null | undefined | ScheduleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SchedulePayload, S>;
export type ScheduleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ScheduleCountAggregateInputType | true;
};
export interface ScheduleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Schedule'];
        meta: {
            name: 'Schedule';
        };
    };
    findUnique<T extends ScheduleFindUniqueArgs>(args: Prisma.SelectSubset<T, ScheduleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ScheduleClient<runtime.Types.Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ScheduleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ScheduleClient<runtime.Types.Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ScheduleFindFirstArgs>(args?: Prisma.SelectSubset<T, ScheduleFindFirstArgs<ExtArgs>>): Prisma.Prisma__ScheduleClient<runtime.Types.Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ScheduleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ScheduleClient<runtime.Types.Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ScheduleFindManyArgs>(args?: Prisma.SelectSubset<T, ScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ScheduleCreateArgs>(args: Prisma.SelectSubset<T, ScheduleCreateArgs<ExtArgs>>): Prisma.Prisma__ScheduleClient<runtime.Types.Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ScheduleCreateManyArgs>(args?: Prisma.SelectSubset<T, ScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ScheduleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ScheduleDeleteArgs>(args: Prisma.SelectSubset<T, ScheduleDeleteArgs<ExtArgs>>): Prisma.Prisma__ScheduleClient<runtime.Types.Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ScheduleUpdateArgs>(args: Prisma.SelectSubset<T, ScheduleUpdateArgs<ExtArgs>>): Prisma.Prisma__ScheduleClient<runtime.Types.Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ScheduleDeleteManyArgs>(args?: Prisma.SelectSubset<T, ScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ScheduleUpdateManyArgs>(args: Prisma.SelectSubset<T, ScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ScheduleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ScheduleUpsertArgs>(args: Prisma.SelectSubset<T, ScheduleUpsertArgs<ExtArgs>>): Prisma.Prisma__ScheduleClient<runtime.Types.Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ScheduleCountArgs>(args?: Prisma.Subset<T, ScheduleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ScheduleCountAggregateOutputType> : number>;
    aggregate<T extends ScheduleAggregateArgs>(args: Prisma.Subset<T, ScheduleAggregateArgs>): Prisma.PrismaPromise<GetScheduleAggregateType<T>>;
    groupBy<T extends ScheduleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ScheduleGroupByArgs['orderBy'];
    } : {
        orderBy?: ScheduleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ScheduleFieldRefs;
}
export interface Prisma__ScheduleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    creator<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    assigned<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ScheduleFieldRefs {
    readonly id: Prisma.FieldRef<"Schedule", 'String'>;
    readonly name: Prisma.FieldRef<"Schedule", 'String'>;
    readonly description: Prisma.FieldRef<"Schedule", 'String'>;
    readonly startDate: Prisma.FieldRef<"Schedule", 'DateTime'>;
    readonly endDate: Prisma.FieldRef<"Schedule", 'DateTime'>;
    readonly status: Prisma.FieldRef<"Schedule", 'ScheduleStatus'>;
    readonly idCreator: Prisma.FieldRef<"Schedule", 'String'>;
    readonly idAsigned: Prisma.FieldRef<"Schedule", 'String'>;
}
export type ScheduleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ScheduleOmit<ExtArgs> | null;
    include?: Prisma.ScheduleInclude<ExtArgs> | null;
    where: Prisma.ScheduleWhereUniqueInput;
};
export type ScheduleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ScheduleOmit<ExtArgs> | null;
    include?: Prisma.ScheduleInclude<ExtArgs> | null;
    where: Prisma.ScheduleWhereUniqueInput;
};
export type ScheduleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ScheduleOmit<ExtArgs> | null;
    include?: Prisma.ScheduleInclude<ExtArgs> | null;
    where?: Prisma.ScheduleWhereInput;
    orderBy?: Prisma.ScheduleOrderByWithRelationInput | Prisma.ScheduleOrderByWithRelationInput[];
    cursor?: Prisma.ScheduleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScheduleScalarFieldEnum | Prisma.ScheduleScalarFieldEnum[];
};
export type ScheduleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ScheduleOmit<ExtArgs> | null;
    include?: Prisma.ScheduleInclude<ExtArgs> | null;
    where?: Prisma.ScheduleWhereInput;
    orderBy?: Prisma.ScheduleOrderByWithRelationInput | Prisma.ScheduleOrderByWithRelationInput[];
    cursor?: Prisma.ScheduleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScheduleScalarFieldEnum | Prisma.ScheduleScalarFieldEnum[];
};
export type ScheduleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ScheduleOmit<ExtArgs> | null;
    include?: Prisma.ScheduleInclude<ExtArgs> | null;
    where?: Prisma.ScheduleWhereInput;
    orderBy?: Prisma.ScheduleOrderByWithRelationInput | Prisma.ScheduleOrderByWithRelationInput[];
    cursor?: Prisma.ScheduleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScheduleScalarFieldEnum | Prisma.ScheduleScalarFieldEnum[];
};
export type ScheduleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ScheduleOmit<ExtArgs> | null;
    include?: Prisma.ScheduleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScheduleCreateInput, Prisma.ScheduleUncheckedCreateInput>;
};
export type ScheduleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ScheduleCreateManyInput | Prisma.ScheduleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ScheduleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ScheduleOmit<ExtArgs> | null;
    data: Prisma.ScheduleCreateManyInput | Prisma.ScheduleCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ScheduleIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ScheduleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ScheduleOmit<ExtArgs> | null;
    include?: Prisma.ScheduleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScheduleUpdateInput, Prisma.ScheduleUncheckedUpdateInput>;
    where: Prisma.ScheduleWhereUniqueInput;
};
export type ScheduleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ScheduleUpdateManyMutationInput, Prisma.ScheduleUncheckedUpdateManyInput>;
    where?: Prisma.ScheduleWhereInput;
    limit?: number;
};
export type ScheduleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ScheduleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScheduleUpdateManyMutationInput, Prisma.ScheduleUncheckedUpdateManyInput>;
    where?: Prisma.ScheduleWhereInput;
    limit?: number;
    include?: Prisma.ScheduleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ScheduleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ScheduleOmit<ExtArgs> | null;
    include?: Prisma.ScheduleInclude<ExtArgs> | null;
    where: Prisma.ScheduleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScheduleCreateInput, Prisma.ScheduleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ScheduleUpdateInput, Prisma.ScheduleUncheckedUpdateInput>;
};
export type ScheduleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ScheduleOmit<ExtArgs> | null;
    include?: Prisma.ScheduleInclude<ExtArgs> | null;
    where: Prisma.ScheduleWhereUniqueInput;
};
export type ScheduleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScheduleWhereInput;
    limit?: number;
};
export type ScheduleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScheduleSelect<ExtArgs> | null;
    omit?: Prisma.ScheduleOmit<ExtArgs> | null;
    include?: Prisma.ScheduleInclude<ExtArgs> | null;
};
