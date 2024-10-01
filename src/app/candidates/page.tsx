"use client";

import { withAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import clsx from "clsx";
import { cloneDeep } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import CandidateEditModal from "@/components/candidates/edit";
import CandidateSearch from "@/components/candidates/search";
import CandidateTable from "@/components/candidates/table";
import Pagination from "@/components/common/pagination";
import Spinner from "@/components/common/spinner";
import { listCandidates } from "@/graphql/queries";
import config from "../../amplifyconfiguration.json";
import { PER_PAGE_LIMIT } from "../libs/constant";
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
	_version?: number;
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
		_version: undefined,
	});
	const [searchTerm, setSearchTerm] = useState("");
	const [candidates, setCandidates] = useState<Candidate[]>([]);
	const [isLoading, setLoading] = useState(false);
	const [currentToken, setCurrentToken] = useState<string | undefined>(
		undefined,
	);
	const [nextToken, setNextToken] = useState<string | undefined>(undefined);
	const [previousTokens, setPreviousTokens] = useState<string[]>([]);

	// other variables
	const API = generateClient();

	// function group
	// call API
	const getCandidates = useCallback(async (token?: string, text?: string) => {
		const queryVar = text
			? {
					limit: PER_PAGE_LIMIT,
					nextToken: token,
					filter: {
						name: {
							contains: text,
						},
					},
				}
			: {
					limit: PER_PAGE_LIMIT,
					nextToken: token,
				};

		try {
			setLoading(true);
			const res = await API.graphql({
				query: listCandidates,
				variables: queryVar,
			});

			if (res.data.listCandidates.nextToken) {
				setNextToken(res.data.listCandidates.nextToken);
			} else {
				setNextToken(undefined);
			}
			setCandidates(res.data.listCandidates.items);
		} catch {
			toast.error("Please try again!");
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
		getCandidates(nextToken, searchTerm);
	};

	const handlePrev = () => {
		setCurrentToken(
			previousTokens.length === 1
				? previousTokens[previousTokens.length - 1]
				: undefined,
		);
		getCandidates(previousTokens[previousTokens.length - 1], searchTerm);
		const clone = cloneDeep(previousTokens);
		clone.pop();
		setPreviousTokens(clone);
	};

	// useEffect group
	useEffect(() => {
		if (modalInfo.isOpen) {
			return;
		}

		getCandidates();
	}, [modalInfo.isOpen]);

	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
			<div className={clsx(modalInfo.isOpen ? "blur" : "")}>
				<div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
					<CandidateSearch
						getCandidates={getCandidates}
						searchTerm={searchTerm}
						setSearchTerm={setSearchTerm}
					/>
				</div>
				{/* table */}
				{isLoading ? (
					<div className="my-10">
						<Spinner />
					</div>
				) : (
					<CandidateTable
						isLoading={isLoading}
						candidates={candidates}
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
			{/* search */}
			{/* edit modal */}
			<CandidateEditModal setModalInfo={setModalInfo} modalInfo={modalInfo} />
			<ToastContainer />
		</div>
	);
}

export default withAuthenticator(CandidatePage);
