import clsx from "clsx";
import { useState } from "react";

import { User } from "@/app/libs/type";
import Spinner from "../common/spinner";

type UserTableProps = {
	users: User[];
};

export default function UserTable({ users }: UserTableProps) {
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
						User Name
					</th>
					<th scope="col" className="px-6 py-3">
						Email
					</th>
				</tr>
			</thead>
			<tbody className={clsx(isLoading ? "opacity-40" : "")}>
				{users.map((item, index) => (
					<tr
						key={index}
						className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
					>
						<th
							scope="row"
							className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
						>
							{item.id}
						</th>
						<td className="px-6 py-4">{item.email}</td>
					</tr>
				))}
			</tbody>
			{isLoading && <Spinner />}
		</table>
	);
}
