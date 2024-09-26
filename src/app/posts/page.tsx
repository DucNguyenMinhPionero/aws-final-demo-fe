"use client";

import { withAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Pagination from "@/components/common/pagination";
import Spinner from "@/components/common/spinner";
import PostEditModal from "@/components/posts/edit";
import PostSearch from "@/components/posts/search";
import PostTable from "@/components/posts/table";
import { listPosts } from "@/graphql/queries";
import config from "../../amplifyconfiguration.json";
import { Post } from "../libs/type";

import "@aws-amplify/ui-react/styles.css";

Amplify.configure(config);

export type ModalInfo = {
	isOpen: boolean;
	id?: string;
	content?: string | null;
	postUrl?: string | null;
	candidatesPostId?: string | null | undefined;
};

function PostPage() {
	// state
	const [modalInfo, setModalInfo] = useState<ModalInfo>({
		isOpen: false,
		id: undefined,
		content: undefined,
		postUrl: undefined,
		candidatesPostId: undefined,
	});
	const [posts, setPosts] = useState<Post[]>([]);
	const [isLoading, setLoading] = useState(false);

	// other variables
	const API = generateClient();

	// useEffect group
	useEffect(() => {
		async function getListPost() {
			try {
				setLoading(true);
				const res = await API.graphql({
					query: listPosts,
				});

				setPosts(res.data.listPosts.items);
				setTimeout(() => {
					setLoading(false);
				}, 700);
			} catch (err) {
				toast.error((err as Error).message);
			}
		}

		getListPost();
	}, []);

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
					totalItems={posts.length}
					itemsPerPage={10}
					isCurrentPage
					currentPage={1}
				/>
			</div>
			{/* Edit modal */}
			<PostEditModal modalInfo={modalInfo} setModalInfo={setModalInfo} />
		</div>
	);
}

export default withAuthenticator(PostPage);
