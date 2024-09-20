import clsx from "clsx";
import { useState } from "react";

import { MOCK_USER } from "@/app/libs/constant";
import Spinner from "../common/spinner";

export default function UserTable() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [isLoading, setLoading] = useState(false);

	return (
		<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
			<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
				<tr>
					<th scope="col" className="px-6 py-3">
						User Name
					</th>
					<th scope="col" className="px-6 py-3">
						Email
					</th>
				</tr>
			</thead>
			<tbody className={clsx(isLoading ? "opacity-20" : "")}>
				{MOCK_USER.map((item, index) => (
					<tr
						key={index}
						className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
					>
						<th
							scope="row"
							className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
						>
							{item.username}
						</th>
						<td className="px-6 py-4">{item.email}</td>
					</tr>
				))}
			</tbody>
			{isLoading && <Spinner />}
		</table>
	);
}
