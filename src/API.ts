/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUsersInput = {
	id?: string | null;
	userName: string;
	email: string;
	createdAt?: string | null;
	updatedAt?: string | null;
	_version?: number | null;
};

export type ModelUsersConditionInput = {
	userName?: ModelStringInput | null;
	email?: ModelStringInput | null;
	createdAt?: ModelStringInput | null;
	updatedAt?: ModelStringInput | null;
	and?: Array<ModelUsersConditionInput | null> | null;
	or?: Array<ModelUsersConditionInput | null> | null;
	not?: ModelUsersConditionInput | null;
	_deleted?: ModelBooleanInput | null;
};

export type ModelStringInput = {
	ne?: string | null;
	eq?: string | null;
	le?: string | null;
	lt?: string | null;
	ge?: string | null;
	gt?: string | null;
	contains?: string | null;
	notContains?: string | null;
	between?: Array<string | null> | null;
	beginsWith?: string | null;
	attributeExists?: boolean | null;
	attributeType?: ModelAttributeTypes | null;
	size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
	binary = "binary",
	binarySet = "binarySet",
	bool = "bool",
	list = "list",
	map = "map",
	number = "number",
	numberSet = "numberSet",
	string = "string",
	stringSet = "stringSet",
	_null = "_null",
}

export type ModelSizeInput = {
	ne?: number | null;
	eq?: number | null;
	le?: number | null;
	lt?: number | null;
	ge?: number | null;
	gt?: number | null;
	between?: Array<number | null> | null;
};

export type ModelBooleanInput = {
	ne?: boolean | null;
	eq?: boolean | null;
	attributeExists?: boolean | null;
	attributeType?: ModelAttributeTypes | null;
};

export type Users = {
	__typename: "Users";
	id: string;
	userName: string;
	email: string;
	createdAt?: string | null;
	updatedAt?: string | null;
	_version: number;
	_deleted?: boolean | null;
	_lastChangedAt: number;
};

export type UpdateUsersInput = {
	id: string;
	userName?: string | null;
	email?: string | null;
	createdAt?: string | null;
	updatedAt?: string | null;
	_version?: number | null;
};

export type DeleteUsersInput = {
	id: string;
	_version?: number | null;
};

export type CreateCandidatesInput = {
	id?: string | null;
	email?: string | null;
	name?: string | null;
	profileUrl?: string | null;
	metadata?: string | null;
	createdAt?: string | null;
	updatedAt?: string | null;
	_version?: number | null;
};

export type ModelCandidatesConditionInput = {
	email?: ModelStringInput | null;
	name?: ModelStringInput | null;
	profileUrl?: ModelStringInput | null;
	metadata?: ModelStringInput | null;
	createdAt?: ModelStringInput | null;
	updatedAt?: ModelStringInput | null;
	and?: Array<ModelCandidatesConditionInput | null> | null;
	or?: Array<ModelCandidatesConditionInput | null> | null;
	not?: ModelCandidatesConditionInput | null;
	_deleted?: ModelBooleanInput | null;
};

export type Candidates = {
	__typename: "Candidates";
	id: string;
	post?: ModelPostsConnection | null;
	email?: string | null;
	name?: string | null;
	profileUrl?: string | null;
	metadata?: string | null;
	createdAt?: string | null;
	updatedAt?: string | null;
	_version: number;
	_deleted?: boolean | null;
	_lastChangedAt: number;
};

export type ModelPostsConnection = {
	__typename: "ModelPostsConnection";
	items: Array<Posts | null>;
	nextToken?: string | null;
	startedAt?: number | null;
};

export type Posts = {
	__typename: "Posts";
	id: string;
	postUrl?: string | null;
	content?: string | null;
	candidate?: Candidates | null;
	createdAt?: string | null;
	updatedAt?: string | null;
	_version: number;
	_deleted?: boolean | null;
	_lastChangedAt: number;
	candidatesPostId?: string | null;
};

export type UpdateCandidatesInput = {
	id: string;
	email?: string | null;
	name?: string | null;
	profileUrl?: string | null;
	metadata?: string | null;
	createdAt?: string | null;
	updatedAt?: string | null;
	_version?: number | null;
};

export type DeleteCandidatesInput = {
	id: string;
	_version?: number | null;
};

export type CreatePostsInput = {
	id?: string | null;
	postUrl?: string | null;
	content?: string | null;
	createdAt?: string | null;
	updatedAt?: string | null;
	_version?: number | null;
	candidatesPostId?: string | null;
};

export type ModelPostsConditionInput = {
	postUrl?: ModelStringInput | null;
	content?: ModelStringInput | null;
	createdAt?: ModelStringInput | null;
	updatedAt?: ModelStringInput | null;
	and?: Array<ModelPostsConditionInput | null> | null;
	or?: Array<ModelPostsConditionInput | null> | null;
	not?: ModelPostsConditionInput | null;
	_deleted?: ModelBooleanInput | null;
	candidatesPostId?: ModelIDInput | null;
};

export type ModelIDInput = {
	ne?: string | null;
	eq?: string | null;
	le?: string | null;
	lt?: string | null;
	ge?: string | null;
	gt?: string | null;
	contains?: string | null;
	notContains?: string | null;
	between?: Array<string | null> | null;
	beginsWith?: string | null;
	attributeExists?: boolean | null;
	attributeType?: ModelAttributeTypes | null;
	size?: ModelSizeInput | null;
};

export type UpdatePostsInput = {
	id: string;
	postUrl?: string | null;
	content?: string | null;
	createdAt?: string | null;
	updatedAt?: string | null;
	_version?: number | null;
	candidatesPostId?: string | null;
};

export type DeletePostsInput = {
	id: string;
	_version?: number | null;
};

export type SearchableCandidatesFilterInput = {
	id?: SearchableIDFilterInput | null;
	email?: SearchableStringFilterInput | null;
	name?: SearchableStringFilterInput | null;
	profileUrl?: SearchableStringFilterInput | null;
	metadata?: SearchableStringFilterInput | null;
	createdAt?: SearchableStringFilterInput | null;
	updatedAt?: SearchableStringFilterInput | null;
	_version?: SearchableIntFilterInput | null;
	_deleted?: SearchableBooleanFilterInput | null;
	_lastChangedAt?: SearchableIntFilterInput | null;
	and?: Array<SearchableCandidatesFilterInput | null> | null;
	or?: Array<SearchableCandidatesFilterInput | null> | null;
	not?: SearchableCandidatesFilterInput | null;
};

export type SearchableIDFilterInput = {
	ne?: string | null;
	gt?: string | null;
	lt?: string | null;
	gte?: string | null;
	lte?: string | null;
	eq?: string | null;
	match?: string | null;
	matchPhrase?: string | null;
	matchPhrasePrefix?: string | null;
	multiMatch?: string | null;
	exists?: boolean | null;
	wildcard?: string | null;
	regexp?: string | null;
	range?: Array<string | null> | null;
};

export type SearchableStringFilterInput = {
	ne?: string | null;
	gt?: string | null;
	lt?: string | null;
	gte?: string | null;
	lte?: string | null;
	eq?: string | null;
	match?: string | null;
	matchPhrase?: string | null;
	matchPhrasePrefix?: string | null;
	multiMatch?: string | null;
	exists?: boolean | null;
	wildcard?: string | null;
	regexp?: string | null;
	range?: Array<string | null> | null;
};

export type SearchableIntFilterInput = {
	ne?: number | null;
	gt?: number | null;
	lt?: number | null;
	gte?: number | null;
	lte?: number | null;
	eq?: number | null;
	range?: Array<number | null> | null;
};

export type SearchableBooleanFilterInput = {
	eq?: boolean | null;
	ne?: boolean | null;
};

export type SearchableCandidatesSortInput = {
	field?: SearchableCandidatesSortableFields | null;
	direction?: SearchableSortDirection | null;
};

export enum SearchableCandidatesSortableFields {
	id = "id",
	email = "email",
	name = "name",
	profileUrl = "profileUrl",
	metadata = "metadata",
	createdAt = "createdAt",
	updatedAt = "updatedAt",
	_version = "_version",
	_deleted = "_deleted",
	_lastChangedAt = "_lastChangedAt",
}

export enum SearchableSortDirection {
	asc = "asc",
	desc = "desc",
}

export type SearchableCandidatesAggregationInput = {
	name: string;
	type: SearchableAggregateType;
	field: SearchableCandidatesAggregateField;
};

export enum SearchableAggregateType {
	terms = "terms",
	avg = "avg",
	min = "min",
	max = "max",
	sum = "sum",
	cardinality = "cardinality",
}

export enum SearchableCandidatesAggregateField {
	id = "id",
	email = "email",
	name = "name",
	profileUrl = "profileUrl",
	metadata = "metadata",
	createdAt = "createdAt",
	updatedAt = "updatedAt",
	_version = "_version",
	_deleted = "_deleted",
	_lastChangedAt = "_lastChangedAt",
}

export type SearchableCandidatesConnection = {
	__typename: "SearchableCandidatesConnection";
	items: Array<Candidates | null>;
	nextToken?: string | null;
	total?: number | null;
	aggregateItems: Array<SearchableAggregateResult | null>;
};

export type SearchableAggregateResult = {
	__typename: "SearchableAggregateResult";
	name: string;
	result?: SearchableAggregateGenericResult | null;
};

export type SearchableAggregateGenericResult =
	| SearchableAggregateScalarResult
	| SearchableAggregateBucketResult;

export type SearchableAggregateScalarResult = {
	__typename: "SearchableAggregateScalarResult";
	value: number;
};

export type SearchableAggregateBucketResult = {
	__typename: "SearchableAggregateBucketResult";
	buckets?: Array<SearchableAggregateBucketResultItem | null> | null;
};

export type SearchableAggregateBucketResultItem = {
	__typename: "SearchableAggregateBucketResultItem";
	key: string;
	doc_count: number;
};

export type ModelUsersFilterInput = {
	id?: ModelIDInput | null;
	userName?: ModelStringInput | null;
	email?: ModelStringInput | null;
	createdAt?: ModelStringInput | null;
	updatedAt?: ModelStringInput | null;
	and?: Array<ModelUsersFilterInput | null> | null;
	or?: Array<ModelUsersFilterInput | null> | null;
	not?: ModelUsersFilterInput | null;
	_deleted?: ModelBooleanInput | null;
};

export type ModelUsersConnection = {
	__typename: "ModelUsersConnection";
	items: Array<Users | null>;
	nextToken?: string | null;
	startedAt?: number | null;
};

export type ModelCandidatesFilterInput = {
	id?: ModelIDInput | null;
	email?: ModelStringInput | null;
	name?: ModelStringInput | null;
	profileUrl?: ModelStringInput | null;
	metadata?: ModelStringInput | null;
	createdAt?: ModelStringInput | null;
	updatedAt?: ModelStringInput | null;
	and?: Array<ModelCandidatesFilterInput | null> | null;
	or?: Array<ModelCandidatesFilterInput | null> | null;
	not?: ModelCandidatesFilterInput | null;
	_deleted?: ModelBooleanInput | null;
};

export type ModelCandidatesConnection = {
	__typename: "ModelCandidatesConnection";
	items: Array<Candidates | null>;
	nextToken?: string | null;
	startedAt?: number | null;
};

export type ModelPostsFilterInput = {
	id?: ModelIDInput | null;
	postUrl?: ModelStringInput | null;
	content?: ModelStringInput | null;
	createdAt?: ModelStringInput | null;
	updatedAt?: ModelStringInput | null;
	and?: Array<ModelPostsFilterInput | null> | null;
	or?: Array<ModelPostsFilterInput | null> | null;
	not?: ModelPostsFilterInput | null;
	_deleted?: ModelBooleanInput | null;
	candidatesPostId?: ModelIDInput | null;
};

export type ModelSubscriptionUsersFilterInput = {
	id?: ModelSubscriptionIDInput | null;
	userName?: ModelSubscriptionStringInput | null;
	email?: ModelSubscriptionStringInput | null;
	createdAt?: ModelSubscriptionStringInput | null;
	updatedAt?: ModelSubscriptionStringInput | null;
	and?: Array<ModelSubscriptionUsersFilterInput | null> | null;
	or?: Array<ModelSubscriptionUsersFilterInput | null> | null;
	_deleted?: ModelBooleanInput | null;
};

export type ModelSubscriptionIDInput = {
	ne?: string | null;
	eq?: string | null;
	le?: string | null;
	lt?: string | null;
	ge?: string | null;
	gt?: string | null;
	contains?: string | null;
	notContains?: string | null;
	between?: Array<string | null> | null;
	beginsWith?: string | null;
	in?: Array<string | null> | null;
	notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
	ne?: string | null;
	eq?: string | null;
	le?: string | null;
	lt?: string | null;
	ge?: string | null;
	gt?: string | null;
	contains?: string | null;
	notContains?: string | null;
	between?: Array<string | null> | null;
	beginsWith?: string | null;
	in?: Array<string | null> | null;
	notIn?: Array<string | null> | null;
};

export type ModelSubscriptionCandidatesFilterInput = {
	id?: ModelSubscriptionIDInput | null;
	email?: ModelSubscriptionStringInput | null;
	name?: ModelSubscriptionStringInput | null;
	profileUrl?: ModelSubscriptionStringInput | null;
	metadata?: ModelSubscriptionStringInput | null;
	createdAt?: ModelSubscriptionStringInput | null;
	updatedAt?: ModelSubscriptionStringInput | null;
	and?: Array<ModelSubscriptionCandidatesFilterInput | null> | null;
	or?: Array<ModelSubscriptionCandidatesFilterInput | null> | null;
	_deleted?: ModelBooleanInput | null;
	candidatesPostId?: ModelSubscriptionIDInput | null;
};

export type ModelSubscriptionPostsFilterInput = {
	id?: ModelSubscriptionIDInput | null;
	postUrl?: ModelSubscriptionStringInput | null;
	content?: ModelSubscriptionStringInput | null;
	createdAt?: ModelSubscriptionStringInput | null;
	updatedAt?: ModelSubscriptionStringInput | null;
	and?: Array<ModelSubscriptionPostsFilterInput | null> | null;
	or?: Array<ModelSubscriptionPostsFilterInput | null> | null;
	_deleted?: ModelBooleanInput | null;
};

export type CreateUsersMutationVariables = {
	input: CreateUsersInput;
	condition?: ModelUsersConditionInput | null;
};

export type CreateUsersMutation = {
	createUsers?: {
		__typename: "Users";
		id: string;
		userName: string;
		email: string;
		createdAt?: string | null;
		updatedAt?: string | null;
		_version: number;
		_deleted?: boolean | null;
		_lastChangedAt: number;
	} | null;
};

export type UpdateUsersMutationVariables = {
	input: UpdateUsersInput;
	condition?: ModelUsersConditionInput | null;
};

export type UpdateUsersMutation = {
	updateUsers?: {
		__typename: "Users";
		id: string;
		userName: string;
		email: string;
		createdAt?: string | null;
		updatedAt?: string | null;
		_version: number;
		_deleted?: boolean | null;
		_lastChangedAt: number;
	} | null;
};

export type DeleteUsersMutationVariables = {
	input: DeleteUsersInput;
	condition?: ModelUsersConditionInput | null;
};

export type DeleteUsersMutation = {
	deleteUsers?: {
		__typename: "Users";
		id: string;
		userName: string;
		email: string;
		createdAt?: string | null;
		updatedAt?: string | null;
		_version: number;
		_deleted?: boolean | null;
		_lastChangedAt: number;
	} | null;
};

export type CreateCandidatesMutationVariables = {
	input: CreateCandidatesInput;
	condition?: ModelCandidatesConditionInput | null;
};

export type CreateCandidatesMutation = {
	createCandidates?: {
		__typename: "Candidates";
		id: string;
		post?: {
			__typename: "ModelPostsConnection";
			nextToken?: string | null;
			startedAt?: number | null;
		} | null;
		email?: string | null;
		name?: string | null;
		profileUrl?: string | null;
		metadata?: string | null;
		createdAt?: string | null;
		updatedAt?: string | null;
		_version: number;
		_deleted?: boolean | null;
		_lastChangedAt: number;
	} | null;
};

export type UpdateCandidatesMutationVariables = {
	input: UpdateCandidatesInput;
	condition?: ModelCandidatesConditionInput | null;
};

export type UpdateCandidatesMutation = {
	updateCandidates?: {
		__typename: "Candidates";
		id: string;
		post?: {
			__typename: "ModelPostsConnection";
			nextToken?: string | null;
			startedAt?: number | null;
		} | null;
		email?: string | null;
		name?: string | null;
		profileUrl?: string | null;
		metadata?: string | null;
		createdAt?: string | null;
		updatedAt?: string | null;
		_version: number;
		_deleted?: boolean | null;
		_lastChangedAt: number;
	} | null;
};

export type DeleteCandidatesMutationVariables = {
	input: DeleteCandidatesInput;
	condition?: ModelCandidatesConditionInput | null;
};

export type DeleteCandidatesMutation = {
	deleteCandidates?: {
		__typename: "Candidates";
		id: string;
		post?: {
			__typename: "ModelPostsConnection";
			nextToken?: string | null;
			startedAt?: number | null;
		} | null;
		email?: string | null;
		name?: string | null;
		profileUrl?: string | null;
		metadata?: string | null;
		createdAt?: string | null;
		updatedAt?: string | null;
		_version: number;
		_deleted?: boolean | null;
		_lastChangedAt: number;
	} | null;
};

export type CreatePostsMutationVariables = {
	input: CreatePostsInput;
	condition?: ModelPostsConditionInput | null;
};

export type CreatePostsMutation = {
	createPosts?: {
		__typename: "Posts";
		id: string;
		postUrl?: string | null;
		content?: string | null;
		candidate?: {
			__typename: "Candidates";
			id: string;
			email?: string | null;
			name?: string | null;
			profileUrl?: string | null;
			metadata?: string | null;
			createdAt?: string | null;
			updatedAt?: string | null;
			_version: number;
			_deleted?: boolean | null;
			_lastChangedAt: number;
		} | null;
		createdAt?: string | null;
		updatedAt?: string | null;
		_version: number;
		_deleted?: boolean | null;
		_lastChangedAt: number;
		candidatesPostId?: string | null;
	} | null;
};

export type UpdatePostsMutationVariables = {
	input: UpdatePostsInput;
	condition?: ModelPostsConditionInput | null;
};

export type UpdatePostsMutation = {
	updatePosts?: {
		__typename: "Posts";
		id: string;
		postUrl?: string | null;
		content?: string | null;
		candidate?: {
			__typename: "Candidates";
			id: string;
			email?: string | null;
			name?: string | null;
			profileUrl?: string | null;
			metadata?: string | null;
			createdAt?: string | null;
			updatedAt?: string | null;
			_version: number;
			_deleted?: boolean | null;
			_lastChangedAt: number;
		} | null;
		createdAt?: string | null;
		updatedAt?: string | null;
		_version: number;
		_deleted?: boolean | null;
		_lastChangedAt: number;
		candidatesPostId?: string | null;
	} | null;
};

export type DeletePostsMutationVariables = {
	input: DeletePostsInput;
	condition?: ModelPostsConditionInput | null;
};

export type DeletePostsMutation = {
	deletePosts?: {
		__typename: "Posts";
		id: string;
		postUrl?: string | null;
		content?: string | null;
		candidate?: {
			__typename: "Candidates";
			id: string;
			email?: string | null;
			name?: string | null;
			profileUrl?: string | null;
			metadata?: string | null;
			createdAt?: string | null;
			updatedAt?: string | null;
			_version: number;
			_deleted?: boolean | null;
			_lastChangedAt: number;
		} | null;
		createdAt?: string | null;
		updatedAt?: string | null;
		_version: number;
		_deleted?: boolean | null;
		_lastChangedAt: number;
		candidatesPostId?: string | null;
	} | null;
};

export type SearchCandidatesQueryVariables = {
	filter?: SearchableCandidatesFilterInput | null;
	sort?: Array<SearchableCandidatesSortInput | null> | null;
	limit?: number | null;
	nextToken?: string | null;
	from?: number | null;
	aggregates?: Array<SearchableCandidatesAggregationInput | null> | null;
};

export type SearchCandidatesQuery = {
	searchCandidates?: {
		__typename: "SearchableCandidatesConnection";
		items: Array<{
			__typename: "Candidates";
			id: string;
			email?: string | null;
			name?: string | null;
			profileUrl?: string | null;
			metadata?: string | null;
			createdAt?: string | null;
			updatedAt?: string | null;
			_version: number;
			_deleted?: boolean | null;
			_lastChangedAt: number;
		} | null>;
		nextToken?: string | null;
		total?: number | null;
		aggregateItems: Array<{
			__typename: "SearchableAggregateResult";
			name: string;
			result:
				| (
						| {
								__typename: "SearchableAggregateScalarResult";
								value: number;
						  }
						| {
								__typename: "SearchableAggregateBucketResult";
								buckets?: Array<{
									__typename: string;
									key: string;
									doc_count: number;
								} | null> | null;
						  }
				  )
				| null;
		} | null>;
	} | null;
};

export type GetUsersQueryVariables = {
	id: string;
};

export type GetUsersQuery = {
	getUsers?: {
		__typename: "Users";
		id: string;
		userName: string;
		email: string;
		createdAt?: string | null;
		updatedAt?: string | null;
		_version: number;
		_deleted?: boolean | null;
		_lastChangedAt: number;
	} | null;
};

export type ListUsersQueryVariables = {
	filter?: ModelUsersFilterInput | null;
	limit?: number | null;
	nextToken?: string | null;
};

export type ListUsersQuery = {
	listUsers?: {
		__typename: "ModelUsersConnection";
		items: Array<{
			__typename: "Users";
			id: string;
			userName: string;
			email: string;
			createdAt?: string | null;
			updatedAt?: string | null;
			_version: number;
			_deleted?: boolean | null;
			_lastChangedAt: number;
		} | null>;
		nextToken?: string | null;
		startedAt?: number | null;
	} | null;
};

export type SyncUsersQueryVariables = {
	filter?: ModelUsersFilterInput | null;
	limit?: number | null;
	nextToken?: string | null;
	lastSync?: number | null;
};

export type SyncUsersQuery = {
	syncUsers?: {
		__typename: "ModelUsersConnection";
		items: Array<{
			__typename: "Users";
			id: string;
			userName: string;
			email: string;
			createdAt?: string | null;
			updatedAt?: string | null;
			_version: number;
			_deleted?: boolean | null;
			_lastChangedAt: number;
		} | null>;
		nextToken?: string | null;
		startedAt?: number | null;
	} | null;
};

export type GetCandidatesQueryVariables = {
	id: string;
};

export type GetCandidatesQuery = {
	getCandidates?: {
		__typename: "Candidates";
		id: string;
		post?: {
			__typename: "ModelPostsConnection";
			nextToken?: string | null;
			startedAt?: number | null;
		} | null;
		email?: string | null;
		name?: string | null;
		profileUrl?: string | null;
		metadata?: string | null;
		createdAt?: string | null;
		updatedAt?: string | null;
		_version: number;
		_deleted?: boolean | null;
		_lastChangedAt: number;
	} | null;
};

export type ListCandidatesQueryVariables = {
	filter?: ModelCandidatesFilterInput | null;
	limit?: number | null;
	nextToken?: string | null;
};

export type ListCandidatesQuery = {
	listCandidates?: {
		__typename: "ModelCandidatesConnection";
		items: Array<{
			__typename: "Candidates";
			id: string;
			email?: string | null;
			name?: string | null;
			profileUrl?: string | null;
			metadata?: string | null;
			createdAt?: string | null;
			updatedAt?: string | null;
			_version: number;
			_deleted?: boolean | null;
			_lastChangedAt: number;
		} | null>;
		nextToken?: string | null;
		startedAt?: number | null;
	} | null;
};

export type SyncCandidatesQueryVariables = {
	filter?: ModelCandidatesFilterInput | null;
	limit?: number | null;
	nextToken?: string | null;
	lastSync?: number | null;
};

export type SyncCandidatesQuery = {
	syncCandidates?: {
		__typename: "ModelCandidatesConnection";
		items: Array<{
			__typename: "Candidates";
			id: string;
			email?: string | null;
			name?: string | null;
			profileUrl?: string | null;
			metadata?: string | null;
			createdAt?: string | null;
			updatedAt?: string | null;
			_version: number;
			_deleted?: boolean | null;
			_lastChangedAt: number;
		} | null>;
		nextToken?: string | null;
		startedAt?: number | null;
	} | null;
};

export type GetPostsQueryVariables = {
	id: string;
};

export type GetPostsQuery = {
	getPosts?: {
		__typename: "Posts";
		id: string;
		postUrl?: string | null;
		content?: string | null;
		candidate?: {
			__typename: "Candidates";
			id: string;
			email?: string | null;
			name?: string | null;
			profileUrl?: string | null;
			metadata?: string | null;
			createdAt?: string | null;
			updatedAt?: string | null;
			_version: number;
			_deleted?: boolean | null;
			_lastChangedAt: number;
		} | null;
		createdAt?: string | null;
		updatedAt?: string | null;
		_version: number;
		_deleted?: boolean | null;
		_lastChangedAt: number;
		candidatesPostId?: string | null;
	} | null;
};

export type ListPostsQueryVariables = {
	filter?: ModelPostsFilterInput | null;
	limit?: number | null;
	nextToken?: string | null;
};

export type ListPostsQuery = {
	listPosts?: {
		__typename: "ModelPostsConnection";
		items: Array<{
			__typename: "Posts";
			id: string;
			postUrl?: string | null;
			content?: string | null;
			createdAt?: string | null;
			updatedAt?: string | null;
			_version: number;
			_deleted?: boolean | null;
			_lastChangedAt: number;
			candidatesPostId?: string | null;
		} | null>;
		nextToken?: string | null;
		startedAt?: number | null;
	} | null;
};

export type SyncPostsQueryVariables = {
	filter?: ModelPostsFilterInput | null;
	limit?: number | null;
	nextToken?: string | null;
	lastSync?: number | null;
};

export type SyncPostsQuery = {
	syncPosts?: {
		__typename: "ModelPostsConnection";
		items: Array<{
			__typename: "Posts";
			id: string;
			postUrl?: string | null;
			content?: string | null;
			createdAt?: string | null;
			updatedAt?: string | null;
			_version: number;
			_deleted?: boolean | null;
			_lastChangedAt: number;
			candidatesPostId?: string | null;
		} | null>;
		nextToken?: string | null;
		startedAt?: number | null;
	} | null;
};

export type OnCreateUsersSubscriptionVariables = {
	filter?: ModelSubscriptionUsersFilterInput | null;
};

export type OnCreateUsersSubscription = {
	onCreateUsers?: {
		__typename: "Users";
		id: string;
		userName: string;
		email: string;
		createdAt?: string | null;
		updatedAt?: string | null;
		_version: number;
		_deleted?: boolean | null;
		_lastChangedAt: number;
	} | null;
};

export type OnUpdateUsersSubscriptionVariables = {
	filter?: ModelSubscriptionUsersFilterInput | null;
};

export type OnUpdateUsersSubscription = {
	onUpdateUsers?: {
		__typename: "Users";
		id: string;
		userName: string;
		email: string;
		createdAt?: string | null;
		updatedAt?: string | null;
		_version: number;
		_deleted?: boolean | null;
		_lastChangedAt: number;
	} | null;
};

export type OnDeleteUsersSubscriptionVariables = {
	filter?: ModelSubscriptionUsersFilterInput | null;
};

export type OnDeleteUsersSubscription = {
	onDeleteUsers?: {
		__typename: "Users";
		id: string;
		userName: string;
		email: string;
		createdAt?: string | null;
		updatedAt?: string | null;
		_version: number;
		_deleted?: boolean | null;
		_lastChangedAt: number;
	} | null;
};

export type OnCreateCandidatesSubscriptionVariables = {
	filter?: ModelSubscriptionCandidatesFilterInput | null;
};

export type OnCreateCandidatesSubscription = {
	onCreateCandidates?: {
		__typename: "Candidates";
		id: string;
		post?: {
			__typename: "ModelPostsConnection";
			nextToken?: string | null;
			startedAt?: number | null;
		} | null;
		email?: string | null;
		name?: string | null;
		profileUrl?: string | null;
		metadata?: string | null;
		createdAt?: string | null;
		updatedAt?: string | null;
		_version: number;
		_deleted?: boolean | null;
		_lastChangedAt: number;
	} | null;
};

export type OnUpdateCandidatesSubscriptionVariables = {
	filter?: ModelSubscriptionCandidatesFilterInput | null;
};

export type OnUpdateCandidatesSubscription = {
	onUpdateCandidates?: {
		__typename: "Candidates";
		id: string;
		post?: {
			__typename: "ModelPostsConnection";
			nextToken?: string | null;
			startedAt?: number | null;
		} | null;
		email?: string | null;
		name?: string | null;
		profileUrl?: string | null;
		metadata?: string | null;
		createdAt?: string | null;
		updatedAt?: string | null;
		_version: number;
		_deleted?: boolean | null;
		_lastChangedAt: number;
	} | null;
};

export type OnDeleteCandidatesSubscriptionVariables = {
	filter?: ModelSubscriptionCandidatesFilterInput | null;
};

export type OnDeleteCandidatesSubscription = {
	onDeleteCandidates?: {
		__typename: "Candidates";
		id: string;
		post?: {
			__typename: "ModelPostsConnection";
			nextToken?: string | null;
			startedAt?: number | null;
		} | null;
		email?: string | null;
		name?: string | null;
		profileUrl?: string | null;
		metadata?: string | null;
		createdAt?: string | null;
		updatedAt?: string | null;
		_version: number;
		_deleted?: boolean | null;
		_lastChangedAt: number;
	} | null;
};

export type OnCreatePostsSubscriptionVariables = {
	filter?: ModelSubscriptionPostsFilterInput | null;
};

export type OnCreatePostsSubscription = {
	onCreatePosts?: {
		__typename: "Posts";
		id: string;
		postUrl?: string | null;
		content?: string | null;
		candidate?: {
			__typename: "Candidates";
			id: string;
			email?: string | null;
			name?: string | null;
			profileUrl?: string | null;
			metadata?: string | null;
			createdAt?: string | null;
			updatedAt?: string | null;
			_version: number;
			_deleted?: boolean | null;
			_lastChangedAt: number;
		} | null;
		createdAt?: string | null;
		updatedAt?: string | null;
		_version: number;
		_deleted?: boolean | null;
		_lastChangedAt: number;
		candidatesPostId?: string | null;
	} | null;
};

export type OnUpdatePostsSubscriptionVariables = {
	filter?: ModelSubscriptionPostsFilterInput | null;
};

export type OnUpdatePostsSubscription = {
	onUpdatePosts?: {
		__typename: "Posts";
		id: string;
		postUrl?: string | null;
		content?: string | null;
		candidate?: {
			__typename: "Candidates";
			id: string;
			email?: string | null;
			name?: string | null;
			profileUrl?: string | null;
			metadata?: string | null;
			createdAt?: string | null;
			updatedAt?: string | null;
			_version: number;
			_deleted?: boolean | null;
			_lastChangedAt: number;
		} | null;
		createdAt?: string | null;
		updatedAt?: string | null;
		_version: number;
		_deleted?: boolean | null;
		_lastChangedAt: number;
		candidatesPostId?: string | null;
	} | null;
};

export type OnDeletePostsSubscriptionVariables = {
	filter?: ModelSubscriptionPostsFilterInput | null;
};

export type OnDeletePostsSubscription = {
	onDeletePosts?: {
		__typename: "Posts";
		id: string;
		postUrl?: string | null;
		content?: string | null;
		candidate?: {
			__typename: "Candidates";
			id: string;
			email?: string | null;
			name?: string | null;
			profileUrl?: string | null;
			metadata?: string | null;
			createdAt?: string | null;
			updatedAt?: string | null;
			_version: number;
			_deleted?: boolean | null;
			_lastChangedAt: number;
		} | null;
		createdAt?: string | null;
		updatedAt?: string | null;
		_version: number;
		_deleted?: boolean | null;
		_lastChangedAt: number;
		candidatesPostId?: string | null;
	} | null;
};
