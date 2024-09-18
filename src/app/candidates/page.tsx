"use client";

import { withAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";

import CandidateSearch from "@/components/candidates/search";
import CandidateTable from "@/components/candidates/table";
import Pagination from "@/components/common/pagination";
import config from "../../amplifyconfiguration.json";
import { MOCK_USER } from "../libs/constant";

import "@aws-amplify/ui-react/styles.css";

Amplify.configure(config);

function CandidatePage() {
	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
			{/* search */}
			<div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
				<CandidateSearch />
			</div>
			{/* table */}
			<CandidateTable />
			<Pagination
				totalItems={MOCK_USER.length}
				itemsPerPage={10}
				isCurrentPage
				currentPage={1}
			/>
		</div>
	);
}

export default withAuthenticator(CandidatePage);
