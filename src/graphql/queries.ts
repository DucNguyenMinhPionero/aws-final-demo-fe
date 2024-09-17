/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
	__generatedQueryInput: InputType;
	__generatedQueryOutput: OutputType;
};

export const searchCandidates = /* GraphQL */ `query SearchCandidates(
  $filter: SearchableCandidatesFilterInput
  $sort: [SearchableCandidatesSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableCandidatesAggregationInput]
) {
  searchCandidates(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      email
      name
      profileUrl
      metadata
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
	APITypes.SearchCandidatesQueryVariables,
	APITypes.SearchCandidatesQuery
>;
export const getUsers = /* GraphQL */ `query GetUsers($id: ID!) {
  getUsers(id: $id) {
    id
    email
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUsersQueryVariables, APITypes.GetUsersQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUsersFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const syncUsers = /* GraphQL */ `query SyncUsers(
  $filter: ModelUsersFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncUsers(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncUsersQueryVariables, APITypes.SyncUsersQuery>;
export const getCandidates = /* GraphQL */ `query GetCandidates($id: ID!) {
  getCandidates(id: $id) {
    id
    post {
      nextToken
      startedAt
      __typename
    }
    email
    name
    profileUrl
    metadata
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
	APITypes.GetCandidatesQueryVariables,
	APITypes.GetCandidatesQuery
>;
export const listCandidates = /* GraphQL */ `query ListCandidates(
  $filter: ModelCandidatesFilterInput
  $limit: Int
  $nextToken: String
) {
  listCandidates(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      email
      name
      profileUrl
      metadata
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
	APITypes.ListCandidatesQueryVariables,
	APITypes.ListCandidatesQuery
>;
export const syncCandidates = /* GraphQL */ `query SyncCandidates(
  $filter: ModelCandidatesFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncCandidates(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      email
      name
      profileUrl
      metadata
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
	APITypes.SyncCandidatesQueryVariables,
	APITypes.SyncCandidatesQuery
>;
export const getPosts = /* GraphQL */ `query GetPosts($id: ID!) {
  getPosts(id: $id) {
    id
    postUrl
    content
    candidate {
      id
      email
      name
      profileUrl
      metadata
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    candidatesPostId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPostsQueryVariables, APITypes.GetPostsQuery>;
export const listPosts = /* GraphQL */ `query ListPosts(
  $filter: ModelPostsFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      postUrl
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      candidatesPostId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListPostsQueryVariables, APITypes.ListPostsQuery>;
export const syncPosts = /* GraphQL */ `query SyncPosts(
  $filter: ModelPostsFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncPosts(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      postUrl
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      candidatesPostId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncPostsQueryVariables, APITypes.SyncPostsQuery>;
