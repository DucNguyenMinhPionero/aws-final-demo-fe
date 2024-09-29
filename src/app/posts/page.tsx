"use client";

import { withAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import clsx from "clsx";
import { cloneDeep } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

import Pagination from "@/components/common/pagination";
import Spinner from "@/components/common/spinner";
import PostEditModal from "@/components/posts/edit";
import PostSearch from "@/components/posts/search";
import PostTable from "@/components/posts/table";
import { listPosts } from "@/graphql/queries";
import config from "../../amplifyconfiguration.json";
import { PER_PAGE_LIMIT } from "../libs/constant";
import { Post } from "../libs/type";

import "@aws-amplify/ui-react/styles.css";

Amplify.configure(config);

export type ModalInfo = {
	isOpen: boolean;
	id?: string;
	content?: string | null;
	postUrl?: string | null;
	candidatesPostId?: string | null | undefined;
	_version?: number;
};

function PostPage() {
	// state
	const [modalInfo, setModalInfo] = useState<ModalInfo>({
		isOpen: false,
		id: undefined,
		content: undefined,
		postUrl: undefined,
		candidatesPostId: undefined,
		_version: undefined,
	});
	const [posts, setPosts] = useState<Post[]>([]);
	const [isLoading, setLoading] = useState(false);
	const [nextToken, setNextToken] = useState<string | undefined>(undefined);
	const [currentToken, setCurrentToken] = useState<string | undefined>(
		undefined,
	);
	const [previousTokens, setPreviousTokens] = useState<string[]>([]);

	// other variables
	const API = generateClient();

	// function group
	// call API
	const getPosts = useCallback(async (token?: string) => {
		try {
			setLoading(true);
			const res = await API.graphql({
				query: listPosts,
				variables: {
					limit: PER_PAGE_LIMIT,
					nextToken: token,
				},
			});

			if (res.data.listPosts.nextToken) {
				setNextToken(res.data.listPosts.nextToken);
			} else {
				setNextToken(undefined);
			}
			setPosts(res.data.listPosts.items);
		} catch (err) {
			toast.error((err as Error).message);
		}
		setTimeout(() => {
			setLoading(false);
		}, 500);
	}, []);

	// pagination group
	const handleNext = () => {
		if (currentToken) {
			setPreviousTokens((prev) => [...prev, currentToken]);
		}
		setCurrentToken(nextToken);
		getPosts(nextToken);
	};

	const handlePrev = () => {
		setCurrentToken(
			previousTokens.length === 1
				? previousTokens[previousTokens.length - 1]
				: undefined,
		);
		getPosts(previousTokens[previousTokens.length - 1]);
		const clone = cloneDeep(previousTokens);
		clone.pop();
		setPreviousTokens(clone);
	};

	// useEffect group
	useEffect(() => {
		if (modalInfo.isOpen) {
			return;
		}

		getPosts();
	}, [modalInfo.isOpen]);

	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
			<div className={clsx(modalInfo.isOpen ? "blur" : "")}>
				{/* search */}
				<div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
					<PostSearch />
				</div>
				{/* table */}
				{isLoading ? (
					<div className="my-10">
						<Spinner />
					</div>
				) : (
					<PostTable
						isLoading={isLoading}
						posts={posts}
						setModalInfo={setModalInfo}
					/>
				)}
				<Pagination
					handleNextPage={handleNext}
					handlePrevPage={handlePrev}
					previousTokens={previousTokens}
					nextToken={nextToken}
					currentToken={currentToken}
				/>
			</div>
			{/* Edit modal */}
			<PostEditModal modalInfo={modalInfo} setModalInfo={setModalInfo} />
		</div>
	);
}

export default withAuthenticator(PostPage);
