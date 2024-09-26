"use client";

import { withAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Pagination from "@/components/common/pagination";
import Spinner from "@/components/common/spinner";
import UserSearch from "@/components/users/search";
import UserTable from "@/components/users/table";
import { listUsers } from "@/graphql/queries";
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

	// other variables
	const API = generateClient();

	// useEffect group
	useEffect(() => {
		async function getListCandidate() {
			try {
				setLoading(true);
				const res = await API.graphql({
					query: listUsers,
				});

				setUsers(res.data.listUsers.items);
				setTimeout(() => {
					setLoading(false);
				}, 700);
			} catch (err) {
				toast.error((err as Error).message);
			}
		}

		getListCandidate();
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
				totalItems={users.length}
				itemsPerPage={10}
				isCurrentPage
				currentPage={1}
			/>
		</div>
	);
}

export default withAuthenticator(Home);
