import Link from "next/link";

import { MOCK_POST } from "@/app/libs/constant";

export default function PostTable() {
	return (
		<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
			<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
				<tr>
					<th scope="col" className="px-6 py-3">
						ID
					</th>
					<th scope="col" className="px-6 py-3">
						Content
					</th>
					<th scope="col" className="px-6 py-3">
						Post Link
					</th>
					<th scope="col" className="px-6 py-3">
						Candidate ID
					</th>
					<th scope="col" className="px-6 py-3">
						Action
					</th>
				</tr>
			</thead>
			<tbody>
				{MOCK_POST.map((item, index) => (
					<tr
						key={index}
						className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
					>
						<td className="px-6 py-4">{item.id}</td>
						<th
							scope="row"
							className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
						>
							{item.content}
						</th>
						<td className="px-6 py-4">
							<Link
								href={item.postUrl}
								className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
							>
								{item.postUrl}
							</Link>
						</td>
						<td className="px-6 py-4">{item.candidateId}</td>
						<td className="px-6 py-4">
							<Link
								href={`/posts/${item.id}`}
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
