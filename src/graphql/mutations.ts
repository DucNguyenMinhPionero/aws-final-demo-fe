/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
	__generatedMutationInput: InputType;
	__generatedMutationOutput: OutputType;
};

export const createUsers = /* GraphQL */ `mutation CreateUsers(
  $input: CreateUsersInput!
  $condition: ModelUsersConditionInput
) {
  createUsers(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.CreateUsersMutationVariables,
	APITypes.CreateUsersMutation
>;
export const updateUsers = /* GraphQL */ `mutation UpdateUsers(
  $input: UpdateUsersInput!
  $condition: ModelUsersConditionInput
) {
  updateUsers(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.UpdateUsersMutationVariables,
	APITypes.UpdateUsersMutation
>;
export const deleteUsers = /* GraphQL */ `mutation DeleteUsers(
  $input: DeleteUsersInput!
  $condition: ModelUsersConditionInput
) {
  deleteUsers(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.DeleteUsersMutationVariables,
	APITypes.DeleteUsersMutation
>;
export const createCandidates = /* GraphQL */ `mutation CreateCandidates(
  $input: CreateCandidatesInput!
  $condition: ModelCandidatesConditionInput
) {
  createCandidates(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.CreateCandidatesMutationVariables,
	APITypes.CreateCandidatesMutation
>;
export const updateCandidates = /* GraphQL */ `mutation UpdateCandidates(
  $input: UpdateCandidatesInput!
  $condition: ModelCandidatesConditionInput
) {
  updateCandidates(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.UpdateCandidatesMutationVariables,
	APITypes.UpdateCandidatesMutation
>;
export const deleteCandidates = /* GraphQL */ `mutation DeleteCandidates(
  $input: DeleteCandidatesInput!
  $condition: ModelCandidatesConditionInput
) {
  deleteCandidates(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.DeleteCandidatesMutationVariables,
	APITypes.DeleteCandidatesMutation
>;
export const createPosts = /* GraphQL */ `mutation CreatePosts(
  $input: CreatePostsInput!
  $condition: ModelPostsConditionInput
) {
  createPosts(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.CreatePostsMutationVariables,
	APITypes.CreatePostsMutation
>;
export const updatePosts = /* GraphQL */ `mutation UpdatePosts(
  $input: UpdatePostsInput!
  $condition: ModelPostsConditionInput
) {
  updatePosts(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.UpdatePostsMutationVariables,
	APITypes.UpdatePostsMutation
>;
export const deletePosts = /* GraphQL */ `mutation DeletePosts(
  $input: DeletePostsInput!
  $condition: ModelPostsConditionInput
) {
  deletePosts(input: $input, condition: $condition) {
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
` as GeneratedMutation<
	APITypes.DeletePostsMutationVariables,
	APITypes.DeletePostsMutation
>;
