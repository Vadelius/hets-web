import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
};

export type Activity = {
   __typename?: 'Activity',
  id: Scalars['ID'],
  created: Scalars['DateTime'],
  createdBy: Scalars['String'],
  description: Scalars['String'],
  points: Scalars['Float'],
  duration: Scalars['Float'],
  exerciseId: Scalars['String'],
  verified?: Maybe<Scalars['Boolean']>,
};

export type CreateActivityInput = {
  createdBy: Scalars['String'],
  description: Scalars['String'],
  points: Scalars['Float'],
  duration: Scalars['Float'],
  exerciseId: Scalars['String'],
};

export type CreateExerciseInput = {
  createdBy: Scalars['String'],
  description: Scalars['String'],
  multiplier: Scalars['Float'],
};


export type Exercise = {
   __typename?: 'Exercise',
  id: Scalars['ID'],
  created: Scalars['DateTime'],
  createdBy: Scalars['String'],
  description: Scalars['String'],
  multiplier: Scalars['Float'],
  verified: Scalars['Boolean'],
};

export type Mutation = {
   __typename?: 'Mutation',
  addActivity: Activity,
  addExercise: Exercise,
};


export type MutationAddActivityArgs = {
  newActivityData: CreateActivityInput
};


export type MutationAddExerciseArgs = {
  newExerciseData: CreateExerciseInput
};

export type Query = {
   __typename?: 'Query',
  activities: Array<Activity>,
  exercises: Array<Exercise>,
  users: Array<User>,
  user: User,
};


export type QueryUserArgs = {
  id: Scalars['String']
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  username: Scalars['String'],
  points?: Maybe<Scalars['Float']>,
  email: Scalars['String'],
  activated: Scalars['Boolean'],
  created: Scalars['DateTime'],
  updated: Scalars['DateTime'],
  deviceId: Scalars['String'],
  authSubject: Scalars['String'],
};

export type ActivitiesQueryVariables = {};


export type ActivitiesQuery = (
  { __typename?: 'Query' }
  & { activities: Array<(
    { __typename?: 'Activity' }
    & Pick<Activity, 'id' | 'created' | 'createdBy' | 'description' | 'points' | 'duration' | 'exerciseId'>
  )> }
);

export type ExercisesQueryVariables = {};


export type ExercisesQuery = (
  { __typename?: 'Query' }
  & { exercises: Array<(
    { __typename?: 'Exercise' }
    & Pick<Exercise, 'id' | 'created' | 'createdBy' | 'description' | 'multiplier' | 'verified'>
  )> }
);

export type GetUsersWithPointsQueryVariables = {};


export type GetUsersWithPointsQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'points'>
  )> }
);

export type OneUserQueryVariables = {
  id: Scalars['String']
};


export type OneUserQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'points' | 'email' | 'created'>
  ) }
);


export const ActivitiesDocument = gql`
    query activities {
  activities {
    id
    created
    createdBy
    description
    points
    duration
    exerciseId
  }
}
    `;

/**
 * __useActivitiesQuery__
 *
 * To run a query within a React component, call `useActivitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useActivitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActivitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useActivitiesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ActivitiesQuery, ActivitiesQueryVariables>) {
        return ApolloReactHooks.useQuery<ActivitiesQuery, ActivitiesQueryVariables>(ActivitiesDocument, baseOptions);
      }
export function useActivitiesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ActivitiesQuery, ActivitiesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ActivitiesQuery, ActivitiesQueryVariables>(ActivitiesDocument, baseOptions);
        }
export type ActivitiesQueryHookResult = ReturnType<typeof useActivitiesQuery>;
export type ActivitiesLazyQueryHookResult = ReturnType<typeof useActivitiesLazyQuery>;
export type ActivitiesQueryResult = ApolloReactCommon.QueryResult<ActivitiesQuery, ActivitiesQueryVariables>;
export const ExercisesDocument = gql`
    query exercises {
  exercises {
    id
    created
    createdBy
    description
    multiplier
    verified
  }
}
    `;

/**
 * __useExercisesQuery__
 *
 * To run a query within a React component, call `useExercisesQuery` and pass it any options that fit your needs.
 * When your component renders, `useExercisesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExercisesQuery({
 *   variables: {
 *   },
 * });
 */
export function useExercisesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ExercisesQuery, ExercisesQueryVariables>) {
        return ApolloReactHooks.useQuery<ExercisesQuery, ExercisesQueryVariables>(ExercisesDocument, baseOptions);
      }
export function useExercisesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ExercisesQuery, ExercisesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ExercisesQuery, ExercisesQueryVariables>(ExercisesDocument, baseOptions);
        }
export type ExercisesQueryHookResult = ReturnType<typeof useExercisesQuery>;
export type ExercisesLazyQueryHookResult = ReturnType<typeof useExercisesLazyQuery>;
export type ExercisesQueryResult = ApolloReactCommon.QueryResult<ExercisesQuery, ExercisesQueryVariables>;
export const GetUsersWithPointsDocument = gql`
    query GetUsersWithPoints {
  users {
    id
    username
    points
  }
}
    `;

/**
 * __useGetUsersWithPointsQuery__
 *
 * To run a query within a React component, call `useGetUsersWithPointsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersWithPointsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersWithPointsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersWithPointsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUsersWithPointsQuery, GetUsersWithPointsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetUsersWithPointsQuery, GetUsersWithPointsQueryVariables>(GetUsersWithPointsDocument, baseOptions);
      }
export function useGetUsersWithPointsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUsersWithPointsQuery, GetUsersWithPointsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetUsersWithPointsQuery, GetUsersWithPointsQueryVariables>(GetUsersWithPointsDocument, baseOptions);
        }
export type GetUsersWithPointsQueryHookResult = ReturnType<typeof useGetUsersWithPointsQuery>;
export type GetUsersWithPointsLazyQueryHookResult = ReturnType<typeof useGetUsersWithPointsLazyQuery>;
export type GetUsersWithPointsQueryResult = ApolloReactCommon.QueryResult<GetUsersWithPointsQuery, GetUsersWithPointsQueryVariables>;
export const OneUserDocument = gql`
    query oneUser($id: String!) {
  user(id: $id) {
    id
    username
    points
    email
    created
  }
}
    `;

/**
 * __useOneUserQuery__
 *
 * To run a query within a React component, call `useOneUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useOneUserQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOneUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOneUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<OneUserQuery, OneUserQueryVariables>) {
        return ApolloReactHooks.useQuery<OneUserQuery, OneUserQueryVariables>(OneUserDocument, baseOptions);
      }
export function useOneUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<OneUserQuery, OneUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<OneUserQuery, OneUserQueryVariables>(OneUserDocument, baseOptions);
        }
export type OneUserQueryHookResult = ReturnType<typeof useOneUserQuery>;
export type OneUserLazyQueryHookResult = ReturnType<typeof useOneUserLazyQuery>;
export type OneUserQueryResult = ApolloReactCommon.QueryResult<OneUserQuery, OneUserQueryVariables>;