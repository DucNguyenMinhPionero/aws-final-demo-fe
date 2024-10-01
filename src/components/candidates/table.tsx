import { generateClient } from "aws-amplify/api";
import clsx from "clsx";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

import { ModalInfo } from "@/app/candidates/page";
import { Candidate } from "@/app/libs/type";
import { deleteCandidates } from "@/graphql/mutations";
import Spinner from "../common/spinner";

type CandidateTableProps = {
	setModalInfo: Dispatch<SetStateAction<ModalInfo>>;
	candidates: Candidate[];
	isLoading: boolean;
};

export default function CandidateTable({
	setModalInfo,
	candidates,
	isLoading,
}: CandidateTableProps) {
	const API = generateClient();

	const handleDeleteItem = (id: string, _version: number) => {
		if (!id) {
			return;
		}

		Swal.fire({
			title: "Do you want to delete this candidate?",
			showCancelButton: true,
			confirmButtonText: "Yes",
		}).then((result) => {
			if (result.isConfirmed) {
				try {
					API.graphql({
						query: deleteCandidates,
						variables: {
							input: {
								id,
								_version,
							},
						},
					});

					toast.success("Delete candidate successfully");
				} catch {
					toast.error("Something wrong. Please try again!");
				}
			}
		});
	};

	return (
		<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
			<thead
				className={clsx(
					"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",
					isLoading ? "opacity-40" : "",
				)}
			>
				<tr>
					<th scope="col" className="px-6 py-3">
						ID
					</th>
					<th scope="col" className="px-6 py-3">
						Name
					</th>
					<th scope="col" className="px-6 py-3">
						Email
					</th>
					<th scope="col" className="px-6 py-3">
						Profile Link
					</th>
					<th scope="col" className="px-6 py-3">
						Action
					</th>
				</tr>
			</thead>
			<tbody className={clsx(isLoading ? "opacity-40" : "")}>
				{candidates.map((item, index) => (
					<tr
						key={index}
						className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
					>
						<td className="px-6 py-4">{item.id}</td>
						<th
							scope="row"
							className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
						>
							{item.name}
						</th>
						<td className="px-6 py-4">{item.email}</td>
						<td className="px-6 py-4">
							{item.profileUrl && (
								<Link
									href={item.profileUrl}
									className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
								>
									{item.profileUrl}
								</Link>
							)}
						</td>
						<td className="px-6 py-4 flex justify-start items-center">
							<p
								onClick={() =>
									setModalInfo({
										isOpen: true,
										id: item.id,
										name: item.name,
										email: item.email,
										profileUrl: item.profileUrl,
										metadata: item.metadata,
										_version: item._version,
									})
								}
								className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-4"
							>
								Edit
							</p>
							<p
								onClick={() => handleDeleteItem(item.id, item._version)}
								className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
							>
								Delete
							</p>
						</td>
					</tr>
				))}
			</tbody>
			{isLoading && <Spinner />}
		</table>
	);
}
