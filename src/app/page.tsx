"use client";

import { withAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import { cloneDeep } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

import Pagination from "@/components/common/pagination";
import Spinner from "@/components/common/spinner";
import UserSearch from "@/components/users/search";
import UserTable from "@/components/users/table";
import { listUsers } from "@/graphql/queries";
import { PER_PAGE_LIMIT } from "./libs/constant";
import { User } from "./libs/type";
import config from "../amplifyconfiguration.json";

import "@aws-amplify/ui-react/styles.css";

Amplify.configure(config);

export type ModalInfo = {
	isOpen: boolean;
	id?: string;
	email?: string | null;
};

function Home() {
	// state
	const [users, setUsers] = useState<User[]>([]);
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
	const getUsers = useCallback(async (token?: string) => {
		try {
			setLoading(true);
			const res = await API.graphql({
				query: listUsers,
				variables: {
					limit: PER_PAGE_LIMIT,
					nextToken: token,
				},
			});

			if (res.data.listUsers.nextToken) {
				setNextToken(res.data.listUsers.nextToken);
			} else {
				setNextToken(undefined);
			}
			setUsers(res.data.listUsers.items);
			setTimeout(() => {
				setLoading(false);
			}, 500);
		} catch {
			toast.error("Please try again!");
		}
	}, []);

	// pagination group
	const handleNext = () => {
		if (currentToken) {
			setPreviousTokens((prev) => [...prev, currentToken]);
		}
		setCurrentToken(nextToken);
		getUsers(nextToken);
	};

	const handlePrev = () => {
		setCurrentToken(
			previousTokens.length === 1
				? previousTokens[previousTokens.length - 1]
				: undefined,
		);
		getUsers(previousTokens[previousTokens.length - 1]);
		const clone = cloneDeep(previousTokens);
		clone.pop();
		setPreviousTokens(clone);
	};

	// useEffect group
	useEffect(() => {
		getUsers();
	}, []);

	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
			{/* search */}
			<div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
				<UserSearch />
			</div>
			{/* table */}
			{isLoading ? (
				<Spinner />
			) : (
				<UserTable users={users} isLoading={isLoading} />
			)}

			<Pagination
				handleNextPage={handleNext}
				handlePrevPage={handlePrev}
				previousTokens={previousTokens}
				nextToken={nextToken}
				currentToken={currentToken}
			/>
		</div>
	);
}

export default withAuthenticator(Home);
