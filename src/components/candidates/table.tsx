import clsx from "clsx";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

import { ModalInfo } from "@/app/candidates/page";
import { MOCK_CANDIDATE } from "@/app/libs/constant";
import Spinner from "../common/spinner";

type CandidateTableProps = {
	setModalInfo: Dispatch<SetStateAction<ModalInfo>>;
};

export default function CandidateTable({ setModalInfo }: CandidateTableProps) {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [isLoading, setLoading] = useState(false);

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
						Post ID
					</th>
					<th scope="col" className="px-6 py-3">
						Action
					</th>
				</tr>
			</thead>
			<tbody className={clsx(isLoading ? "opacity-40" : "")}>
				{MOCK_CANDIDATE.map((item, index) => (
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
							<Link
								href={item.profileUrl}
								className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
							>
								{item.profileUrl}
							</Link>
						</td>
						<td className="px-6 py-4">{item.postId}</td>
						<td className="px-6 py-4">
							<p
								onClick={() =>
									setModalInfo({
										isOpen: true,
										id: item.id,
										name: item.name,
										email: item.email,
										profileUrl: item.profileUrl,
									})
								}
								className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
							>
								Edit
							</p>
						</td>
					</tr>
				))}
			</tbody>
			{isLoading && <Spinner />}
		</table>
	);
}
