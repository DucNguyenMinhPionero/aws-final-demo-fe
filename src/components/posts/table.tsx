import { generateClient } from "aws-amplify/api";
import clsx from "clsx";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

import { Post } from "@/app/libs/type";
import { type ModalInfo } from "@/app/posts/page";
import { deletePosts } from "@/graphql/mutations";
import Spinner from "../common/spinner";

type PostTableProps = {
	setModalInfo: Dispatch<SetStateAction<ModalInfo>>;
	posts: Post[];
	isLoading: boolean;
};

export default function PostTable({
	setModalInfo,
	posts,
	isLoading,
}: PostTableProps) {
	const API = generateClient();

	const handleDeleteItem = (id: string, _version: number) => {
		if (!id) {
			return;
		}

		Swal.fire({
			title: "Do you want to delete this post?",
			showCancelButton: true,
			confirmButtonText: "Yes",
		}).then((result) => {
			if (result.isConfirmed) {
				try {
					API.graphql({
						query: deletePosts,
						variables: {
							input: {
								id,
								_version,
							},
						},
					});

					toast.success("Delete post successfully");
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
						<td className="px-6 py-4 flex justify-start items-center">
							<p
								onClick={() =>
									setModalInfo({
										isOpen: true,
										id: item.id,
										content: item.content,
										postUrl: item.postUrl,
										candidatesPostId: item.candidatesPostId,
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
