type Scalars = {
  readonly ID: string;
  readonly Boolean: boolean;
  readonly String: string;
  readonly Int: number;
  readonly Float: number;
  readonly JSON: import('@keystone-next/types').JSONValue;
};

export type ItemRelateToOneInput = {
  readonly create?: ItemCreateInput | null;
  readonly connect?: ItemWhereUniqueInput | null;
  readonly disconnect?: ItemWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type OrderRelateToOneInput = {
  readonly create?: OrderCreateInput | null;
  readonly connect?: OrderWhereUniqueInput | null;
  readonly disconnect?: OrderWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type UserWhereInput = {
  readonly AND?: ReadonlyArray<UserWhereInput | null> | null;
  readonly OR?: ReadonlyArray<UserWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email?: Scalars['String'] | null;
  readonly email_not?: Scalars['String'] | null;
  readonly email_contains?: Scalars['String'] | null;
  readonly email_not_contains?: Scalars['String'] | null;
  readonly email_starts_with?: Scalars['String'] | null;
  readonly email_not_starts_with?: Scalars['String'] | null;
  readonly email_ends_with?: Scalars['String'] | null;
  readonly email_not_ends_with?: Scalars['String'] | null;
  readonly email_i?: Scalars['String'] | null;
  readonly email_not_i?: Scalars['String'] | null;
  readonly email_contains_i?: Scalars['String'] | null;
  readonly email_not_contains_i?: Scalars['String'] | null;
  readonly email_starts_with_i?: Scalars['String'] | null;
  readonly email_not_starts_with_i?: Scalars['String'] | null;
  readonly email_ends_with_i?: Scalars['String'] | null;
  readonly email_not_ends_with_i?: Scalars['String'] | null;
  readonly email_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly password_is_set?: Scalars['Boolean'] | null;
  readonly itemsCreated?: ItemWhereInput | null;
  readonly itemsCreated_is_null?: Scalars['Boolean'] | null;
  readonly ordersCreated?: OrderWhereInput | null;
  readonly ordersCreated_is_null?: Scalars['Boolean'] | null;
  readonly passwordResetToken_is_set?: Scalars['Boolean'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_not?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_not?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthToken_is_set?: Scalars['Boolean'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_not?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_not?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
};

export type UserWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortUsersBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'itemsCreated_ASC'
  | 'itemsCreated_DESC'
  | 'ordersCreated_ASC'
  | 'ordersCreated_DESC'
  | 'passwordResetIssuedAt_ASC'
  | 'passwordResetIssuedAt_DESC'
  | 'passwordResetRedeemedAt_ASC'
  | 'passwordResetRedeemedAt_DESC'
  | 'magicAuthIssuedAt_ASC'
  | 'magicAuthIssuedAt_DESC'
  | 'magicAuthRedeemedAt_ASC'
  | 'magicAuthRedeemedAt_DESC';

export type UserUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly itemsCreated?: ItemRelateToOneInput | null;
  readonly ordersCreated?: OrderRelateToOneInput | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type UsersUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: UserUpdateInput | null;
};

export type UserCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly itemsCreated?: ItemRelateToOneInput | null;
  readonly ordersCreated?: OrderRelateToOneInput | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type UsersCreateInput = {
  readonly data?: UserCreateInput | null;
};

export type UserRelateToOneInput = {
  readonly create?: UserCreateInput | null;
  readonly connect?: UserWhereUniqueInput | null;
  readonly disconnect?: UserWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type ItemWhereInput = {
  readonly AND?: ReadonlyArray<ItemWhereInput | null> | null;
  readonly OR?: ReadonlyArray<ItemWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly author?: UserWhereInput | null;
  readonly author_is_null?: Scalars['Boolean'] | null;
  readonly order?: OrderWhereInput | null;
  readonly order_is_null?: Scalars['Boolean'] | null;
  readonly description?: Scalars['String'] | null;
  readonly description_not?: Scalars['String'] | null;
  readonly description_contains?: Scalars['String'] | null;
  readonly description_not_contains?: Scalars['String'] | null;
  readonly description_starts_with?: Scalars['String'] | null;
  readonly description_not_starts_with?: Scalars['String'] | null;
  readonly description_ends_with?: Scalars['String'] | null;
  readonly description_not_ends_with?: Scalars['String'] | null;
  readonly description_i?: Scalars['String'] | null;
  readonly description_not_i?: Scalars['String'] | null;
  readonly description_contains_i?: Scalars['String'] | null;
  readonly description_not_contains_i?: Scalars['String'] | null;
  readonly description_starts_with_i?: Scalars['String'] | null;
  readonly description_not_starts_with_i?: Scalars['String'] | null;
  readonly description_ends_with_i?: Scalars['String'] | null;
  readonly description_not_ends_with_i?: Scalars['String'] | null;
  readonly description_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly status?: Scalars['String'] | null;
  readonly status_not?: Scalars['String'] | null;
  readonly status_contains?: Scalars['String'] | null;
  readonly status_not_contains?: Scalars['String'] | null;
  readonly status_starts_with?: Scalars['String'] | null;
  readonly status_not_starts_with?: Scalars['String'] | null;
  readonly status_ends_with?: Scalars['String'] | null;
  readonly status_not_ends_with?: Scalars['String'] | null;
  readonly status_i?: Scalars['String'] | null;
  readonly status_not_i?: Scalars['String'] | null;
  readonly status_contains_i?: Scalars['String'] | null;
  readonly status_not_contains_i?: Scalars['String'] | null;
  readonly status_starts_with_i?: Scalars['String'] | null;
  readonly status_not_starts_with_i?: Scalars['String'] | null;
  readonly status_ends_with_i?: Scalars['String'] | null;
  readonly status_not_ends_with_i?: Scalars['String'] | null;
  readonly status_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly status_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly price?: Scalars['Int'] | null;
  readonly price_not?: Scalars['Int'] | null;
  readonly price_lt?: Scalars['Int'] | null;
  readonly price_lte?: Scalars['Int'] | null;
  readonly price_gt?: Scalars['Int'] | null;
  readonly price_gte?: Scalars['Int'] | null;
  readonly price_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly price_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly dateCreated?: Scalars['String'] | null;
  readonly dateCreated_not?: Scalars['String'] | null;
  readonly dateCreated_lt?: Scalars['String'] | null;
  readonly dateCreated_lte?: Scalars['String'] | null;
  readonly dateCreated_gt?: Scalars['String'] | null;
  readonly dateCreated_gte?: Scalars['String'] | null;
  readonly dateCreated_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly dateCreated_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
};

export type ItemWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortItemsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'author_ASC'
  | 'author_DESC'
  | 'order_ASC'
  | 'order_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'status_ASC'
  | 'status_DESC'
  | 'price_ASC'
  | 'price_DESC'
  | 'dateCreated_ASC'
  | 'dateCreated_DESC';

export type ItemUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly author?: UserRelateToOneInput | null;
  readonly order?: OrderRelateToOneInput | null;
  readonly description?: Scalars['String'] | null;
  readonly status?: Scalars['String'] | null;
  readonly price?: Scalars['Int'] | null;
  readonly dateCreated?: Scalars['String'] | null;
};

export type ItemsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: ItemUpdateInput | null;
};

export type ItemCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly author?: UserRelateToOneInput | null;
  readonly order?: OrderRelateToOneInput | null;
  readonly description?: Scalars['String'] | null;
  readonly status?: Scalars['String'] | null;
  readonly price?: Scalars['Int'] | null;
  readonly dateCreated?: Scalars['String'] | null;
};

export type ItemsCreateInput = {
  readonly data?: ItemCreateInput | null;
};

export type ItemRelateToManyInput = {
  readonly create?: ReadonlyArray<ItemCreateInput | null> | null;
  readonly connect?: ReadonlyArray<ItemWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<ItemWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type OrderWhereInput = {
  readonly AND?: ReadonlyArray<OrderWhereInput | null> | null;
  readonly OR?: ReadonlyArray<OrderWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly author?: UserWhereInput | null;
  readonly author_is_null?: Scalars['Boolean'] | null;
  readonly items_every?: ItemWhereInput | null;
  readonly items_some?: ItemWhereInput | null;
  readonly items_none?: ItemWhereInput | null;
  readonly description?: Scalars['String'] | null;
  readonly description_not?: Scalars['String'] | null;
  readonly description_contains?: Scalars['String'] | null;
  readonly description_not_contains?: Scalars['String'] | null;
  readonly description_starts_with?: Scalars['String'] | null;
  readonly description_not_starts_with?: Scalars['String'] | null;
  readonly description_ends_with?: Scalars['String'] | null;
  readonly description_not_ends_with?: Scalars['String'] | null;
  readonly description_i?: Scalars['String'] | null;
  readonly description_not_i?: Scalars['String'] | null;
  readonly description_contains_i?: Scalars['String'] | null;
  readonly description_not_contains_i?: Scalars['String'] | null;
  readonly description_starts_with_i?: Scalars['String'] | null;
  readonly description_not_starts_with_i?: Scalars['String'] | null;
  readonly description_ends_with_i?: Scalars['String'] | null;
  readonly description_not_ends_with_i?: Scalars['String'] | null;
  readonly description_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly dateCreated?: Scalars['String'] | null;
  readonly dateCreated_not?: Scalars['String'] | null;
  readonly dateCreated_lt?: Scalars['String'] | null;
  readonly dateCreated_lte?: Scalars['String'] | null;
  readonly dateCreated_gt?: Scalars['String'] | null;
  readonly dateCreated_gte?: Scalars['String'] | null;
  readonly dateCreated_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly dateCreated_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly status?: Scalars['String'] | null;
  readonly status_not?: Scalars['String'] | null;
  readonly status_contains?: Scalars['String'] | null;
  readonly status_not_contains?: Scalars['String'] | null;
  readonly status_starts_with?: Scalars['String'] | null;
  readonly status_not_starts_with?: Scalars['String'] | null;
  readonly status_ends_with?: Scalars['String'] | null;
  readonly status_not_ends_with?: Scalars['String'] | null;
  readonly status_i?: Scalars['String'] | null;
  readonly status_not_i?: Scalars['String'] | null;
  readonly status_contains_i?: Scalars['String'] | null;
  readonly status_not_contains_i?: Scalars['String'] | null;
  readonly status_starts_with_i?: Scalars['String'] | null;
  readonly status_not_starts_with_i?: Scalars['String'] | null;
  readonly status_ends_with_i?: Scalars['String'] | null;
  readonly status_not_ends_with_i?: Scalars['String'] | null;
  readonly status_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly status_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly clientPrice?: Scalars['Int'] | null;
  readonly clientPrice_not?: Scalars['Int'] | null;
  readonly clientPrice_lt?: Scalars['Int'] | null;
  readonly clientPrice_lte?: Scalars['Int'] | null;
  readonly clientPrice_gt?: Scalars['Int'] | null;
  readonly clientPrice_gte?: Scalars['Int'] | null;
  readonly clientPrice_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly clientPrice_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly clientPrepay?: Scalars['Int'] | null;
  readonly clientPrepay_not?: Scalars['Int'] | null;
  readonly clientPrepay_lt?: Scalars['Int'] | null;
  readonly clientPrepay_lte?: Scalars['Int'] | null;
  readonly clientPrepay_gt?: Scalars['Int'] | null;
  readonly clientPrepay_gte?: Scalars['Int'] | null;
  readonly clientPrepay_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly clientPrepay_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly clientDept?: Scalars['Int'] | null;
  readonly clientDept_not?: Scalars['Int'] | null;
  readonly clientDept_lt?: Scalars['Int'] | null;
  readonly clientDept_lte?: Scalars['Int'] | null;
  readonly clientDept_gt?: Scalars['Int'] | null;
  readonly clientDept_gte?: Scalars['Int'] | null;
  readonly clientDept_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly clientDept_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly expence?: Scalars['Int'] | null;
  readonly expence_not?: Scalars['Int'] | null;
  readonly expence_lt?: Scalars['Int'] | null;
  readonly expence_lte?: Scalars['Int'] | null;
  readonly expence_gt?: Scalars['Int'] | null;
  readonly expence_gte?: Scalars['Int'] | null;
  readonly expence_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly expence_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly interest?: Scalars['Int'] | null;
  readonly interest_not?: Scalars['Int'] | null;
  readonly interest_lt?: Scalars['Int'] | null;
  readonly interest_lte?: Scalars['Int'] | null;
  readonly interest_gt?: Scalars['Int'] | null;
  readonly interest_gte?: Scalars['Int'] | null;
  readonly interest_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly interest_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly personalExpence?: Scalars['Int'] | null;
  readonly personalExpence_not?: Scalars['Int'] | null;
  readonly personalExpence_lt?: Scalars['Int'] | null;
  readonly personalExpence_lte?: Scalars['Int'] | null;
  readonly personalExpence_gt?: Scalars['Int'] | null;
  readonly personalExpence_gte?: Scalars['Int'] | null;
  readonly personalExpence_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly personalExpence_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
};

export type OrderWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortOrdersBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'author_ASC'
  | 'author_DESC'
  | 'items_ASC'
  | 'items_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'dateCreated_ASC'
  | 'dateCreated_DESC'
  | 'status_ASC'
  | 'status_DESC'
  | 'clientPrice_ASC'
  | 'clientPrice_DESC'
  | 'clientPrepay_ASC'
  | 'clientPrepay_DESC'
  | 'clientDept_ASC'
  | 'clientDept_DESC'
  | 'expence_ASC'
  | 'expence_DESC'
  | 'interest_ASC'
  | 'interest_DESC'
  | 'personalExpence_ASC'
  | 'personalExpence_DESC';

export type OrderUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly author?: UserRelateToOneInput | null;
  readonly items?: ItemRelateToManyInput | null;
  readonly description?: Scalars['String'] | null;
  readonly dateCreated?: Scalars['String'] | null;
  readonly status?: Scalars['String'] | null;
  readonly clientPrice?: Scalars['Int'] | null;
  readonly clientPrepay?: Scalars['Int'] | null;
  readonly clientDept?: Scalars['Int'] | null;
  readonly expence?: Scalars['Int'] | null;
  readonly interest?: Scalars['Int'] | null;
  readonly personalExpence?: Scalars['Int'] | null;
};

export type OrdersUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: OrderUpdateInput | null;
};

export type OrderCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly author?: UserRelateToOneInput | null;
  readonly items?: ItemRelateToManyInput | null;
  readonly description?: Scalars['String'] | null;
  readonly dateCreated?: Scalars['String'] | null;
  readonly status?: Scalars['String'] | null;
  readonly clientPrice?: Scalars['Int'] | null;
  readonly clientPrepay?: Scalars['Int'] | null;
  readonly clientDept?: Scalars['Int'] | null;
  readonly expence?: Scalars['Int'] | null;
  readonly interest?: Scalars['Int'] | null;
  readonly personalExpence?: Scalars['Int'] | null;
};

export type OrdersCreateInput = {
  readonly data?: OrderCreateInput | null;
};

export type _ksListsMetaInput = {
  readonly key?: Scalars['String'] | null;
  readonly auxiliary?: Scalars['Boolean'] | null;
};

export type _ListSchemaFieldsInput = {
  readonly type?: Scalars['String'] | null;
};

export type PasswordAuthErrorCode =
  | 'FAILURE'
  | 'IDENTITY_NOT_FOUND'
  | 'SECRET_NOT_SET'
  | 'MULTIPLE_IDENTITY_MATCHES'
  | 'SECRET_MISMATCH';

export type CreateInitialUserInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
};

export type KeystoneAdminUIFieldMetaCreateViewFieldMode = 'edit' | 'hidden';

export type KeystoneAdminUIFieldMetaListViewFieldMode = 'read' | 'hidden';

export type KeystoneAdminUIFieldMetaItemViewFieldMode =
  | 'edit'
  | 'read'
  | 'hidden';

export type KeystoneAdminUISortDirection = 'ASC' | 'DESC';

export type UserListTypeInfo = {
  key: 'User';
  fields:
    | 'id'
    | 'name'
    | 'email'
    | 'password'
    | 'itemsCreated'
    | 'ordersCreated'
    | 'passwordResetToken'
    | 'passwordResetIssuedAt'
    | 'passwordResetRedeemedAt'
    | 'magicAuthToken'
    | 'magicAuthIssuedAt'
    | 'magicAuthRedeemedAt';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly email?: string | null;
    readonly password?: string | null;
    readonly itemsCreated?: string | null;
    readonly ordersCreated?: string | null;
    readonly passwordResetToken?: string | null;
    readonly passwordResetIssuedAt?: Date | null;
    readonly passwordResetRedeemedAt?: Date | null;
    readonly magicAuthToken?: string | null;
    readonly magicAuthIssuedAt?: Date | null;
    readonly magicAuthRedeemedAt?: Date | null;
  };
  inputs: {
    where: UserWhereInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: UserWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortUsersBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type UserListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    UserListTypeInfo,
    UserListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  UserListTypeInfo,
  UserListTypeInfo['fields']
>;

export type ItemListTypeInfo = {
  key: 'Item';
  fields:
    | 'id'
    | 'name'
    | 'author'
    | 'order'
    | 'description'
    | 'status'
    | 'price'
    | 'dateCreated';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly author?: string | null;
    readonly order?: string | null;
    readonly description?: string | null;
    readonly status?: string | null;
    readonly price?: number | null;
    readonly dateCreated?: Date | null;
  };
  inputs: {
    where: ItemWhereInput;
    create: ItemCreateInput;
    update: ItemUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: ItemWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortItemsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type ItemListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    ItemListTypeInfo,
    ItemListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  ItemListTypeInfo,
  ItemListTypeInfo['fields']
>;

export type OrderListTypeInfo = {
  key: 'Order';
  fields:
    | 'id'
    | 'name'
    | 'author'
    | 'items'
    | 'description'
    | 'dateCreated'
    | 'status'
    | 'clientPrice'
    | 'clientPrepay'
    | 'clientDept'
    | 'expence'
    | 'interest'
    | 'personalExpence';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly author?: string | null;
    readonly items?: string | null;
    readonly description?: string | null;
    readonly dateCreated?: Date | null;
    readonly status?: string | null;
    readonly clientPrice?: number | null;
    readonly clientPrepay?: number | null;
    readonly clientDept?: number | null;
    readonly expence?: number | null;
    readonly interest?: number | null;
    readonly personalExpence?: number | null;
  };
  inputs: {
    where: OrderWhereInput;
    create: OrderCreateInput;
    update: OrderUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: OrderWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortOrdersBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type OrderListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    OrderListTypeInfo,
    OrderListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  OrderListTypeInfo,
  OrderListTypeInfo['fields']
>;

export type KeystoneListsTypeInfo = {
  readonly User: UserListTypeInfo;
  readonly Item: ItemListTypeInfo;
  readonly Order: OrderListTypeInfo;
};
