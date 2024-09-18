"use client";

import { withAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";

import Pagination from "@/components/common/pagination";
import PostSearch from "@/components/posts/search";
import PostTable from "@/components/posts/table";
import config from "../../amplifyconfiguration.json";
import { MOCK_POST } from "../libs/constant";

import "@aws-amplify/ui-react/styles.css";

Amplify.configure(config);

function PostPage() {
	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
			{/* search */}
			<div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
				<PostSearch />
			</div>
			{/* table */}
			<PostTable />
			<Pagination
				totalItems={MOCK_POST.length}
				itemsPerPage={10}
				isCurrentPage
				currentPage={1}
			/>
		</div>
	);
}

export default withAuthenticator(PostPage);
