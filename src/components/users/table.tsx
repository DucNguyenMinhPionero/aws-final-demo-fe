import Link from "next/link";

import { MOCK_USER } from "@/app/libs/constant";

export default function UserTable() {
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
					<th scope="col" className="px-6 py-3">
						Action
					</th>
				</tr>
			</thead>
			<tbody>
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
						<td className="px-6 py-4">
							<Link
								href="/"
								className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
							>
								Edit
							</Link>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
