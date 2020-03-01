import * as ApolloReactCommon from "@apollo/react-common";
import * as ApolloReactHooks from "@apollo/react-hooks";
import gql from "graphql-tag";
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	timestamptz: any;
	uuid: any;
};

export type Boolean_Comparison_Exp = {
	_eq?: Maybe<Scalars["Boolean"]>;
	_gt?: Maybe<Scalars["Boolean"]>;
	_gte?: Maybe<Scalars["Boolean"]>;
	_in?: Maybe<Array<Scalars["Boolean"]>>;
	_is_null?: Maybe<Scalars["Boolean"]>;
	_lt?: Maybe<Scalars["Boolean"]>;
	_lte?: Maybe<Scalars["Boolean"]>;
	_neq?: Maybe<Scalars["Boolean"]>;
	_nin?: Maybe<Array<Scalars["Boolean"]>>;
};

export type Int_Comparison_Exp = {
	_eq?: Maybe<Scalars["Int"]>;
	_gt?: Maybe<Scalars["Int"]>;
	_gte?: Maybe<Scalars["Int"]>;
	_in?: Maybe<Array<Scalars["Int"]>>;
	_is_null?: Maybe<Scalars["Boolean"]>;
	_lt?: Maybe<Scalars["Int"]>;
	_lte?: Maybe<Scalars["Int"]>;
	_neq?: Maybe<Scalars["Int"]>;
	_nin?: Maybe<Array<Scalars["Int"]>>;
};

export type Mutation_Root = {
	__typename?: "mutation_root";
	delete_user?: Maybe<User_Mutation_Response>;
	insert_user?: Maybe<User_Mutation_Response>;
	update_user?: Maybe<User_Mutation_Response>;
};

export type Mutation_RootDelete_UserArgs = {
	where: User_Bool_Exp;
};

export type Mutation_RootInsert_UserArgs = {
	objects: Array<User_Insert_Input>;
	on_conflict?: Maybe<User_On_Conflict>;
};

export type Mutation_RootUpdate_UserArgs = {
	_inc?: Maybe<User_Inc_Input>;
	_set?: Maybe<User_Set_Input>;
	where: User_Bool_Exp;
};

export enum Order_By {
	Asc = "asc",
	AscNullsFirst = "asc_nulls_first",
	AscNullsLast = "asc_nulls_last",
	Desc = "desc",
	DescNullsFirst = "desc_nulls_first",
	DescNullsLast = "desc_nulls_last",
}

export type Query_Root = {
	__typename?: "query_root";
	user: Array<User>;
	user_aggregate: User_Aggregate;
	user_by_pk?: Maybe<User>;
};

export type Query_RootUserArgs = {
	distinct_on?: Maybe<Array<User_Select_Column>>;
	limit?: Maybe<Scalars["Int"]>;
	offset?: Maybe<Scalars["Int"]>;
	order_by?: Maybe<Array<User_Order_By>>;
	where?: Maybe<User_Bool_Exp>;
};

export type Query_RootUser_AggregateArgs = {
	distinct_on?: Maybe<Array<User_Select_Column>>;
	limit?: Maybe<Scalars["Int"]>;
	offset?: Maybe<Scalars["Int"]>;
	order_by?: Maybe<Array<User_Order_By>>;
	where?: Maybe<User_Bool_Exp>;
};

export type Query_RootUser_By_PkArgs = {
	id: Scalars["uuid"];
};

export type String_Comparison_Exp = {
	_eq?: Maybe<Scalars["String"]>;
	_gt?: Maybe<Scalars["String"]>;
	_gte?: Maybe<Scalars["String"]>;
	_ilike?: Maybe<Scalars["String"]>;
	_in?: Maybe<Array<Scalars["String"]>>;
	_is_null?: Maybe<Scalars["Boolean"]>;
	_like?: Maybe<Scalars["String"]>;
	_lt?: Maybe<Scalars["String"]>;
	_lte?: Maybe<Scalars["String"]>;
	_neq?: Maybe<Scalars["String"]>;
	_nilike?: Maybe<Scalars["String"]>;
	_nin?: Maybe<Array<Scalars["String"]>>;
	_nlike?: Maybe<Scalars["String"]>;
	_nsimilar?: Maybe<Scalars["String"]>;
	_similar?: Maybe<Scalars["String"]>;
};

export type Subscription_Root = {
	__typename?: "subscription_root";
	user: Array<User>;
	user_aggregate: User_Aggregate;
	user_by_pk?: Maybe<User>;
};

export type Subscription_RootUserArgs = {
	distinct_on?: Maybe<Array<User_Select_Column>>;
	limit?: Maybe<Scalars["Int"]>;
	offset?: Maybe<Scalars["Int"]>;
	order_by?: Maybe<Array<User_Order_By>>;
	where?: Maybe<User_Bool_Exp>;
};

export type Subscription_RootUser_AggregateArgs = {
	distinct_on?: Maybe<Array<User_Select_Column>>;
	limit?: Maybe<Scalars["Int"]>;
	offset?: Maybe<Scalars["Int"]>;
	order_by?: Maybe<Array<User_Order_By>>;
	where?: Maybe<User_Bool_Exp>;
};

export type Subscription_RootUser_By_PkArgs = {
	id: Scalars["uuid"];
};

export type Timestamptz_Comparison_Exp = {
	_eq?: Maybe<Scalars["timestamptz"]>;
	_gt?: Maybe<Scalars["timestamptz"]>;
	_gte?: Maybe<Scalars["timestamptz"]>;
	_in?: Maybe<Array<Scalars["timestamptz"]>>;
	_is_null?: Maybe<Scalars["Boolean"]>;
	_lt?: Maybe<Scalars["timestamptz"]>;
	_lte?: Maybe<Scalars["timestamptz"]>;
	_neq?: Maybe<Scalars["timestamptz"]>;
	_nin?: Maybe<Array<Scalars["timestamptz"]>>;
};

export type User = {
	__typename?: "user";
	active: Scalars["Boolean"];
	created_at: Scalars["timestamptz"];
	device_id?: Maybe<Scalars["String"]>;
	email: Scalars["String"];
	id: Scalars["uuid"];
	oauth_subject?: Maybe<Scalars["String"]>;
	points: Scalars["Int"];
	updated_at: Scalars["timestamptz"];
	username: Scalars["String"];
};

export type User_Aggregate = {
	__typename?: "user_aggregate";
	aggregate?: Maybe<User_Aggregate_Fields>;
	nodes: Array<User>;
};

export type User_Aggregate_Fields = {
	__typename?: "user_aggregate_fields";
	avg?: Maybe<User_Avg_Fields>;
	count?: Maybe<Scalars["Int"]>;
	max?: Maybe<User_Max_Fields>;
	min?: Maybe<User_Min_Fields>;
	stddev?: Maybe<User_Stddev_Fields>;
	stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
	stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
	sum?: Maybe<User_Sum_Fields>;
	var_pop?: Maybe<User_Var_Pop_Fields>;
	var_samp?: Maybe<User_Var_Samp_Fields>;
	variance?: Maybe<User_Variance_Fields>;
};

export type User_Aggregate_FieldsCountArgs = {
	columns?: Maybe<Array<User_Select_Column>>;
	distinct?: Maybe<Scalars["Boolean"]>;
};

export type User_Aggregate_Order_By = {
	avg?: Maybe<User_Avg_Order_By>;
	count?: Maybe<Order_By>;
	max?: Maybe<User_Max_Order_By>;
	min?: Maybe<User_Min_Order_By>;
	stddev?: Maybe<User_Stddev_Order_By>;
	stddev_pop?: Maybe<User_Stddev_Pop_Order_By>;
	stddev_samp?: Maybe<User_Stddev_Samp_Order_By>;
	sum?: Maybe<User_Sum_Order_By>;
	var_pop?: Maybe<User_Var_Pop_Order_By>;
	var_samp?: Maybe<User_Var_Samp_Order_By>;
	variance?: Maybe<User_Variance_Order_By>;
};

export type User_Arr_Rel_Insert_Input = {
	data: Array<User_Insert_Input>;
	on_conflict?: Maybe<User_On_Conflict>;
};

export type User_Avg_Fields = {
	__typename?: "user_avg_fields";
	points?: Maybe<Scalars["Float"]>;
};

export type User_Avg_Order_By = {
	points?: Maybe<Order_By>;
};

export type User_Bool_Exp = {
	_and?: Maybe<Array<Maybe<User_Bool_Exp>>>;
	_not?: Maybe<User_Bool_Exp>;
	_or?: Maybe<Array<Maybe<User_Bool_Exp>>>;
	active?: Maybe<Boolean_Comparison_Exp>;
	created_at?: Maybe<Timestamptz_Comparison_Exp>;
	device_id?: Maybe<String_Comparison_Exp>;
	email?: Maybe<String_Comparison_Exp>;
	id?: Maybe<Uuid_Comparison_Exp>;
	oauth_subject?: Maybe<String_Comparison_Exp>;
	points?: Maybe<Int_Comparison_Exp>;
	updated_at?: Maybe<Timestamptz_Comparison_Exp>;
	username?: Maybe<String_Comparison_Exp>;
};

export enum User_Constraint {
	UserEmailKey = "user_email_key",
	UserPkey = "user_pkey",
	UserUsernameKey = "user_username_key",
}

export type User_Inc_Input = {
	points?: Maybe<Scalars["Int"]>;
};

export type User_Insert_Input = {
	active?: Maybe<Scalars["Boolean"]>;
	created_at?: Maybe<Scalars["timestamptz"]>;
	device_id?: Maybe<Scalars["String"]>;
	email?: Maybe<Scalars["String"]>;
	id?: Maybe<Scalars["uuid"]>;
	oauth_subject?: Maybe<Scalars["String"]>;
	points?: Maybe<Scalars["Int"]>;
	updated_at?: Maybe<Scalars["timestamptz"]>;
	username?: Maybe<Scalars["String"]>;
};

export type User_Max_Fields = {
	__typename?: "user_max_fields";
	created_at?: Maybe<Scalars["timestamptz"]>;
	device_id?: Maybe<Scalars["String"]>;
	email?: Maybe<Scalars["String"]>;
	oauth_subject?: Maybe<Scalars["String"]>;
	points?: Maybe<Scalars["Int"]>;
	updated_at?: Maybe<Scalars["timestamptz"]>;
	username?: Maybe<Scalars["String"]>;
};

export type User_Max_Order_By = {
	created_at?: Maybe<Order_By>;
	device_id?: Maybe<Order_By>;
	email?: Maybe<Order_By>;
	oauth_subject?: Maybe<Order_By>;
	points?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
	username?: Maybe<Order_By>;
};

export type User_Min_Fields = {
	__typename?: "user_min_fields";
	created_at?: Maybe<Scalars["timestamptz"]>;
	device_id?: Maybe<Scalars["String"]>;
	email?: Maybe<Scalars["String"]>;
	oauth_subject?: Maybe<Scalars["String"]>;
	points?: Maybe<Scalars["Int"]>;
	updated_at?: Maybe<Scalars["timestamptz"]>;
	username?: Maybe<Scalars["String"]>;
};

export type User_Min_Order_By = {
	created_at?: Maybe<Order_By>;
	device_id?: Maybe<Order_By>;
	email?: Maybe<Order_By>;
	oauth_subject?: Maybe<Order_By>;
	points?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
	username?: Maybe<Order_By>;
};

export type User_Mutation_Response = {
	__typename?: "user_mutation_response";
	affected_rows: Scalars["Int"];
	returning: Array<User>;
};

export type User_Obj_Rel_Insert_Input = {
	data: User_Insert_Input;
	on_conflict?: Maybe<User_On_Conflict>;
};

export type User_On_Conflict = {
	constraint: User_Constraint;
	update_columns: Array<User_Update_Column>;
	where?: Maybe<User_Bool_Exp>;
};

export type User_Order_By = {
	active?: Maybe<Order_By>;
	created_at?: Maybe<Order_By>;
	device_id?: Maybe<Order_By>;
	email?: Maybe<Order_By>;
	id?: Maybe<Order_By>;
	oauth_subject?: Maybe<Order_By>;
	points?: Maybe<Order_By>;
	updated_at?: Maybe<Order_By>;
	username?: Maybe<Order_By>;
};

export enum User_Select_Column {
	Active = "active",
	CreatedAt = "created_at",
	DeviceId = "device_id",
	Email = "email",
	Id = "id",
	OauthSubject = "oauth_subject",
	Points = "points",
	UpdatedAt = "updated_at",
	Username = "username",
}

export type User_Set_Input = {
	active?: Maybe<Scalars["Boolean"]>;
	created_at?: Maybe<Scalars["timestamptz"]>;
	device_id?: Maybe<Scalars["String"]>;
	email?: Maybe<Scalars["String"]>;
	id?: Maybe<Scalars["uuid"]>;
	oauth_subject?: Maybe<Scalars["String"]>;
	points?: Maybe<Scalars["Int"]>;
	updated_at?: Maybe<Scalars["timestamptz"]>;
	username?: Maybe<Scalars["String"]>;
};

export type User_Stddev_Fields = {
	__typename?: "user_stddev_fields";
	points?: Maybe<Scalars["Float"]>;
};

export type User_Stddev_Order_By = {
	points?: Maybe<Order_By>;
};

export type User_Stddev_Pop_Fields = {
	__typename?: "user_stddev_pop_fields";
	points?: Maybe<Scalars["Float"]>;
};

export type User_Stddev_Pop_Order_By = {
	points?: Maybe<Order_By>;
};

export type User_Stddev_Samp_Fields = {
	__typename?: "user_stddev_samp_fields";
	points?: Maybe<Scalars["Float"]>;
};

export type User_Stddev_Samp_Order_By = {
	points?: Maybe<Order_By>;
};

export type User_Sum_Fields = {
	__typename?: "user_sum_fields";
	points?: Maybe<Scalars["Int"]>;
};

export type User_Sum_Order_By = {
	points?: Maybe<Order_By>;
};

export enum User_Update_Column {
	Active = "active",
	CreatedAt = "created_at",
	DeviceId = "device_id",
	Email = "email",
	Id = "id",
	OauthSubject = "oauth_subject",
	Points = "points",
	UpdatedAt = "updated_at",
	Username = "username",
}

export type User_Var_Pop_Fields = {
	__typename?: "user_var_pop_fields";
	points?: Maybe<Scalars["Float"]>;
};

export type User_Var_Pop_Order_By = {
	points?: Maybe<Order_By>;
};

export type User_Var_Samp_Fields = {
	__typename?: "user_var_samp_fields";
	points?: Maybe<Scalars["Float"]>;
};

export type User_Var_Samp_Order_By = {
	points?: Maybe<Order_By>;
};

export type User_Variance_Fields = {
	__typename?: "user_variance_fields";
	points?: Maybe<Scalars["Float"]>;
};

export type User_Variance_Order_By = {
	points?: Maybe<Order_By>;
};

export type Uuid_Comparison_Exp = {
	_eq?: Maybe<Scalars["uuid"]>;
	_gt?: Maybe<Scalars["uuid"]>;
	_gte?: Maybe<Scalars["uuid"]>;
	_in?: Maybe<Array<Scalars["uuid"]>>;
	_is_null?: Maybe<Scalars["Boolean"]>;
	_lt?: Maybe<Scalars["uuid"]>;
	_lte?: Maybe<Scalars["uuid"]>;
	_neq?: Maybe<Scalars["uuid"]>;
	_nin?: Maybe<Array<Scalars["uuid"]>>;
};

export type CreateUserMutationVariables = {
	id?: Maybe<Scalars["uuid"]>;
	username?: Maybe<Scalars["String"]>;
	email?: Maybe<Scalars["String"]>;
	oauth_subject?: Maybe<Scalars["String"]>;
};

export type CreateUserMutation = { __typename?: "mutation_root" } & {
	insert_user: Maybe<
		{ __typename?: "user_mutation_response" } & {
			returning: Array<
				{ __typename?: "user" } & Pick<
					User,
					"active" | "created_at" | "device_id" | "email" | "id" | "oauth_subject" | "points" | "updated_at" | "username"
				>
			>;
		}
	>;
};

export type GetOneUserQueryVariables = {
	id: Scalars["uuid"];
};

export type GetOneUserQuery = { __typename?: "query_root" } & {
	user_by_pk: Maybe<
		{ __typename: "user" } & Pick<
			User,
			"id" | "username" | "active" | "created_at" | "device_id" | "email" | "oauth_subject" | "points" | "updated_at"
		>
	>;
};

export type UsersQueryVariables = {};

export type UsersQuery = { __typename?: "query_root" } & {
	user: Array<
		{ __typename?: "user" } & Pick<
			User,
			"active" | "created_at" | "device_id" | "email" | "id" | "oauth_subject" | "points" | "updated_at" | "username"
		>
	>;
};

export const CreateUserDocument = gql`
	mutation createUser($id: uuid, $username: String, $email: String, $oauth_subject: String) {
		insert_user(objects: { id: $id, username: $username, email: $email, oauth_subject: $oauth_subject }) {
			returning {
				active
				created_at
				device_id
				email
				id
				oauth_subject
				points
				updated_at
				username
			}
		}
	}
`;
export type CreateUserMutationFn = ApolloReactCommon.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      oauth_subject: // value for 'oauth_subject'
 *   },
 * });
 */
export function useCreateUserMutation(
	baseOptions?: ApolloReactHooks.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>,
) {
	return ApolloReactHooks.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, baseOptions);
}
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = ApolloReactCommon.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const GetOneUserDocument = gql`
	query getOneUser($id: uuid!) {
		user_by_pk(id: $id) {
			__typename
			id
			username
			active
			created_at
			device_id
			email
			oauth_subject
			points
			updated_at
		}
	}
`;

/**
 * __useGetOneUserQuery__
 *
 * To run a query within a React component, call `useGetOneUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOneUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetOneUserQuery, GetOneUserQueryVariables>) {
	return ApolloReactHooks.useQuery<GetOneUserQuery, GetOneUserQueryVariables>(GetOneUserDocument, baseOptions);
}
export function useGetOneUserLazyQuery(
	baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetOneUserQuery, GetOneUserQueryVariables>,
) {
	return ApolloReactHooks.useLazyQuery<GetOneUserQuery, GetOneUserQueryVariables>(GetOneUserDocument, baseOptions);
}
export type GetOneUserQueryHookResult = ReturnType<typeof useGetOneUserQuery>;
export type GetOneUserLazyQueryHookResult = ReturnType<typeof useGetOneUserLazyQuery>;
export type GetOneUserQueryResult = ApolloReactCommon.QueryResult<GetOneUserQuery, GetOneUserQueryVariables>;
export const UsersDocument = gql`
	query Users {
		user {
			active
			created_at
			device_id
			email
			id
			oauth_subject
			points
			updated_at
			username
		}
	}
`;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
	return ApolloReactHooks.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
}
export function useUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
	return ApolloReactHooks.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
}
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = ApolloReactCommon.QueryResult<UsersQuery, UsersQueryVariables>;
