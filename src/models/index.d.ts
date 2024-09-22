import {
	ModelInit,
	MutableModel,
	__modelMeta__,
	ManagedIdentifier,
} from "@aws-amplify/datastore";
// @ts-ignore
import {
	LazyLoading,
	LazyLoadingDisabled,
	AsyncCollection,
	AsyncItem,
} from "@aws-amplify/datastore";

type EagerUsers = {
	readonly [__modelMeta__]: {
		identifier: ManagedIdentifier<Users, "id">;
		readOnlyFields: "createdAt" | "updatedAt";
	};
	readonly id: string;
	readonly email: string;
	readonly createdAt?: string | null;
	readonly updatedAt?: string | null;
};

type LazyUsers = {
	readonly [__modelMeta__]: {
		identifier: ManagedIdentifier<Users, "id">;
		readOnlyFields: "createdAt" | "updatedAt";
	};
	readonly id: string;
	readonly email: string;
	readonly createdAt?: string | null;
	readonly updatedAt?: string | null;
};

export declare type Users = LazyLoading extends LazyLoadingDisabled
	? EagerUsers
	: LazyUsers;

export declare const Users: (new (init: ModelInit<Users>) => Users) & {
	copyOf(
		source: Users,
		mutator: (draft: MutableModel<Users>) => MutableModel<Users> | void,
	): Users;
};

type EagerCandidates = {
	readonly [__modelMeta__]: {
		identifier: ManagedIdentifier<Candidates, "id">;
		readOnlyFields: "updatedAt";
	};
	readonly id: string;
	readonly post?: (Posts | null)[] | null;
	readonly email?: string | null;
	readonly name?: string | null;
	readonly profileUrl?: string | null;
	readonly metadata?: string | null;
	readonly createdAt: string;
	readonly updatedAt?: string | null;
};

type LazyCandidates = {
	readonly [__modelMeta__]: {
		identifier: ManagedIdentifier<Candidates, "id">;
		readOnlyFields: "updatedAt";
	};
	readonly id: string;
	readonly post: AsyncCollection<Posts>;
	readonly email?: string | null;
	readonly name?: string | null;
	readonly profileUrl?: string | null;
	readonly metadata?: string | null;
	readonly createdAt: string;
	readonly updatedAt?: string | null;
};

export declare type Candidates = LazyLoading extends LazyLoadingDisabled
	? EagerCandidates
	: LazyCandidates;

export declare const Candidates: (new (
	init: ModelInit<Candidates>,
) => Candidates) & {
	copyOf(
		source: Candidates,
		mutator: (
			draft: MutableModel<Candidates>,
		) => MutableModel<Candidates> | void,
	): Candidates;
};

type EagerPosts = {
	readonly [__modelMeta__]: {
		identifier: ManagedIdentifier<Posts, "id">;
		readOnlyFields: "createdAt" | "updatedAt";
	};
	readonly id: string;
	readonly postUrl?: string | null;
	readonly content?: string | null;
	readonly candidate?: Candidates | null;
	readonly createdAt?: string | null;
	readonly updatedAt?: string | null;
	readonly candidatesPostId?: string | null;
};

type LazyPosts = {
	readonly [__modelMeta__]: {
		identifier: ManagedIdentifier<Posts, "id">;
		readOnlyFields: "createdAt" | "updatedAt";
	};
	readonly id: string;
	readonly postUrl?: string | null;
	readonly content?: string | null;
	readonly candidate: AsyncItem<Candidates | undefined>;
	readonly createdAt?: string | null;
	readonly updatedAt?: string | null;
	readonly candidatesPostId?: string | null;
};

export declare type Posts = LazyLoading extends LazyLoadingDisabled
	? EagerPosts
	: LazyPosts;

export declare const Posts: (new (init: ModelInit<Posts>) => Posts) & {
	copyOf(
		source: Posts,
		mutator: (draft: MutableModel<Posts>) => MutableModel<Posts> | void,
	): Posts;
};
