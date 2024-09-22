"use client";

import { withAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import clsx from "clsx";
import { useState } from "react";

import CandidateEditModal from "@/components/candidates/edit";
import CandidateSearch from "@/components/candidates/search";
import CandidateTable from "@/components/candidates/table";
import Pagination from "@/components/common/pagination";
import config from "../../amplifyconfiguration.json";
import { MOCK_USER } from "../libs/constant";

import "@aws-amplify/ui-react/styles.css";

Amplify.configure(config);

export type ModalInfo = {
	isOpen: boolean;
	id?: string;
	name?: string;
	email?: string;
	profileUrl?: string;
};

function CandidatePage() {
	const [modalInfo, setModalInfo] = useState<ModalInfo>({
		isOpen: false,
		id: undefined,
		name: undefined,
		email: undefined,
		profileUrl: undefined,
	});

	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
			<div className={clsx(modalInfo.isOpen ? "blur" : "")}>
				<div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
					<CandidateSearch />
				</div>
				{/* table */}
				<CandidateTable setModalInfo={setModalInfo} />
				<Pagination
					totalItems={MOCK_USER.length}
					itemsPerPage={10}
					isCurrentPage
					currentPage={1}
				/>
			</div>
			{/* search */}
			{/* edit modal */}
			<CandidateEditModal setModalInfo={setModalInfo} modalInfo={modalInfo} />
		</div>
	);
}

export default withAuthenticator(CandidatePage);
