"use client";

import { withAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";

import Pagination from "@/components/common/pagination";
import UserSearch from "@/components/users/search";
import UserTable from "@/components/users/table";
import { MOCK_USER } from "./libs/constant";
import config from "../amplifyconfiguration.json";

import "@aws-amplify/ui-react/styles.css";

Amplify.configure(config);

function Home() {
	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
			{/* search */}
			<div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
				<UserSearch />
			</div>
			{/* table */}
			<UserTable />
			<Pagination
				totalItems={MOCK_USER.length}
				itemsPerPage={10}
				isCurrentPage
				currentPage={1}
			/>
		</div>
	);
}

export default withAuthenticator(Home);
