import clsx from "clsx";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

import { Post } from "@/app/libs/type";
import { type ModalInfo } from "@/app/posts/page";
import Spinner from "../common/spinner";

type PostTableProps = {
	setModalInfo: Dispatch<SetStateAction<ModalInfo>>;
	posts: Post[];
};

export default function PostTable({ setModalInfo, posts }: PostTableProps) {
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
			<tbody className={clsx(isLoading ? "opacity-40" : "")}>
				{posts.map((item, index) => (
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
							{item.postUrl && (
								<Link
									href={item.postUrl}
									className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
								>
									{item.postUrl}
								</Link>
							)}
						</td>
						<td className="px-6 py-4">{item.candidatesPostId}</td>
						<td className="px-6 py-4">
							<p
								onClick={() =>
									setModalInfo({
										isOpen: true,
										id: item.id,
										content: item.content,
										postUrl: item.postUrl,
										candidatesPostId: item.candidatesPostId,
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
