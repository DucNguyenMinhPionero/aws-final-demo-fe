"use client";

import { withAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import CandidateEditModal from "@/components/candidates/edit";
import CandidateSearch from "@/components/candidates/search";
import CandidateTable from "@/components/candidates/table";
import Pagination from "@/components/common/pagination";
import { listCandidates } from "@/graphql/queries";
import config from "../../amplifyconfiguration.json";
import { Candidate } from "../libs/type";

import "react-toastify/dist/ReactToastify.css";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(config);

export type ModalInfo = {
	isOpen: boolean;
	id?: string;
	name?: string | null;
	email?: string | null;
	profileUrl?: string | null;
	metadata?: string | null;
};

function CandidatePage() {
	// state
	const [modalInfo, setModalInfo] = useState<ModalInfo>({
		isOpen: false,
		id: undefined,
		name: undefined,
		email: undefined,
		profileUrl: undefined,
		metadata: undefined,
	});
	const [candidates, setCandidates] = useState<Candidate[]>([]);

	// other variables
	const API = generateClient();

	// useEffect group
	useEffect(() => {
		async function getListCandidate() {
			try {
				const res = await API.graphql({
					query: listCandidates,
				});

				setCandidates(res.data.listCandidates.items);
			} catch (err) {
				toast.error((err as Error).message);
			}
		}

		getListCandidate();
	}, []);

	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
			<div className={clsx(modalInfo.isOpen ? "blur" : "")}>
				<div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
					<CandidateSearch />
				</div>
				{/* table */}
				<CandidateTable candidates={candidates} setModalInfo={setModalInfo} />
				<Pagination
					totalItems={candidates.length}
					itemsPerPage={10}
					isCurrentPage
					currentPage={1}
				/>
			</div>
			{/* search */}
			{/* edit modal */}
			<CandidateEditModal setModalInfo={setModalInfo} modalInfo={modalInfo} />
			<ToastContainer />
		</div>
	);
}

export default withAuthenticator(CandidatePage);
