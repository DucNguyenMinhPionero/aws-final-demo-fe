/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
	__generatedSubscriptionInput: InputType;
	__generatedSubscriptionOutput: OutputType;
};

export const onCreateUsers =
	/* GraphQL */ `subscription OnCreateUsers($filter: ModelSubscriptionUsersFilterInput) {
  onCreateUsers(filter: $filter) {
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
` as GeneratedSubscription<
		APITypes.OnCreateUsersSubscriptionVariables,
		APITypes.OnCreateUsersSubscription
	>;
export const onUpdateUsers =
	/* GraphQL */ `subscription OnUpdateUsers($filter: ModelSubscriptionUsersFilterInput) {
  onUpdateUsers(filter: $filter) {
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
` as GeneratedSubscription<
		APITypes.OnUpdateUsersSubscriptionVariables,
		APITypes.OnUpdateUsersSubscription
	>;
export const onDeleteUsers =
	/* GraphQL */ `subscription OnDeleteUsers($filter: ModelSubscriptionUsersFilterInput) {
  onDeleteUsers(filter: $filter) {
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
` as GeneratedSubscription<
		APITypes.OnDeleteUsersSubscriptionVariables,
		APITypes.OnDeleteUsersSubscription
	>;
export const onCreateCandidates =
	/* GraphQL */ `subscription OnCreateCandidates(
  $filter: ModelSubscriptionCandidatesFilterInput
) {
  onCreateCandidates(filter: $filter) {
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
` as GeneratedSubscription<
		APITypes.OnCreateCandidatesSubscriptionVariables,
		APITypes.OnCreateCandidatesSubscription
	>;
export const onUpdateCandidates =
	/* GraphQL */ `subscription OnUpdateCandidates(
  $filter: ModelSubscriptionCandidatesFilterInput
) {
  onUpdateCandidates(filter: $filter) {
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
` as GeneratedSubscription<
		APITypes.OnUpdateCandidatesSubscriptionVariables,
		APITypes.OnUpdateCandidatesSubscription
	>;
export const onDeleteCandidates =
	/* GraphQL */ `subscription OnDeleteCandidates(
  $filter: ModelSubscriptionCandidatesFilterInput
) {
  onDeleteCandidates(filter: $filter) {
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
` as GeneratedSubscription<
		APITypes.OnDeleteCandidatesSubscriptionVariables,
		APITypes.OnDeleteCandidatesSubscription
	>;
export const onCreatePosts =
	/* GraphQL */ `subscription OnCreatePosts($filter: ModelSubscriptionPostsFilterInput) {
  onCreatePosts(filter: $filter) {
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
` as GeneratedSubscription<
		APITypes.OnCreatePostsSubscriptionVariables,
		APITypes.OnCreatePostsSubscription
	>;
export const onUpdatePosts =
	/* GraphQL */ `subscription OnUpdatePosts($filter: ModelSubscriptionPostsFilterInput) {
  onUpdatePosts(filter: $filter) {
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
` as GeneratedSubscription<
		APITypes.OnUpdatePostsSubscriptionVariables,
		APITypes.OnUpdatePostsSubscription
	>;
export const onDeletePosts =
	/* GraphQL */ `subscription OnDeletePosts($filter: ModelSubscriptionPostsFilterInput) {
  onDeletePosts(filter: $filter) {
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
` as GeneratedSubscription<
		APITypes.OnDeletePostsSubscriptionVariables,
		APITypes.OnDeletePostsSubscription
	>;
