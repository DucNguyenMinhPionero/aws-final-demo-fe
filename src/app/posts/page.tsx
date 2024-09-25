"use client";

import { withAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import clsx from "clsx";
import { useState } from "react";

import Pagination from "@/components/common/pagination";
import PostEditModal from "@/components/posts/edit";
import PostSearch from "@/components/posts/search";
import PostTable from "@/components/posts/table";
import config from "../../amplifyconfiguration.json";
import { MOCK_POST } from "../libs/constant";

import "@aws-amplify/ui-react/styles.css";

Amplify.configure(config);

export type ModalInfo = {
	isOpen: boolean;
	id?: string;
	content?: string;
	postUrl?: string;
};

function PostPage() {
	const [modalInfo, setModalInfo] = useState<ModalInfo>({
		isOpen: false,
		id: undefined,
		content: undefined,
		postUrl: undefined,
	});

	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
			<div className={clsx(modalInfo.isOpen ? "blur" : "")}>
				{/* search */}
				<div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
					<PostSearch />
				</div>
				{/* table */}
				<PostTable setModalInfo={setModalInfo} />
				<Pagination
					totalItems={MOCK_POST.length}
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
