export type Candidate = {
	__typename: "Candidates";
	id: string;
	email?: string | null;
	name?: string | null;
	profileUrl?: string | null;
	metadata?: string | null;
	createdAt: string;
	updatedAt: string;
	_version: number;
	_deleted?: boolean | null;
	_lastChangedAt: number;
};

export type Post = {
	__typename: "Posts";
	id: string;
	postUrl?: string | null;
	content?: string | null;
	createdAt: string;
	updatedAt: string;
	_version: number;
	_deleted?: boolean | null;
	_lastChangedAt: number;
	candidatesPostId?: string | null;
};

export type User = {
	__typename: "Users";
	id: string;
	email: string;
	createdAt: string;
	updatedAt: string;
	_version: number;
	_deleted?: boolean | null;
	_lastChangedAt: number;
};
