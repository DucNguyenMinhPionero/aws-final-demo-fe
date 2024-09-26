import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";

import CloseSvg from "@/app/libs/svg/close-svg";
import EditSvg from "@/app/libs/svg/edit-svg";
import { type ModalInfo } from "@/app/posts/page";

type PostEditModalProps = {
	modalInfo: ModalInfo;
	setModalInfo: Dispatch<SetStateAction<ModalInfo>>;
};

export default function PostEditModal({
	modalInfo,
	setModalInfo,
}: PostEditModalProps) {
	return (
		<div
			id="crud-modal"
			tabIndex={-1}
			aria-hidden="true"
			className={clsx(
				"overflow-y-auto overflow-x-hidden flex z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full",
				modalInfo.isOpen ? "" : "hidden",
			)}
		>
			<div className="relative p-4 w-full max-w-md max-h-full">
				{/* <!-- Modal content --> */}
				<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
					{/* <!-- Modal header --> */}
					<div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
						<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
							Edit Post
						</h3>
						<button
							onClick={() =>
								setModalInfo({
									isOpen: false,
									id: undefined,
									content: undefined,
									postUrl: undefined,
									candidatesPostId: undefined,
								})
							}
							type="button"
							className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
							data-modal-toggle="crud-modal"
						>
							<CloseSvg />
							<span className="sr-only">Close modal</span>
						</button>
					</div>
					{/* <!-- Modal body --> */}
					<form className="p-4 md:p-5">
						<div className="grid gap-4 mb-4 grid-cols-2">
							<div className="col-span-2">
								<label
									htmlFor="content"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Post Link
								</label>
								<input
									type="text"
									name="post-url"
									id="post-url"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
									placeholder="Type post link here"
									required
									value={modalInfo.postUrl ?? ""}
								/>
							</div>
							<div className="col-span-2">
								<label
									htmlFor="content"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Content
								</label>
								<textarea
									id="content"
									rows={4}
									className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Write post content here"
									value={modalInfo.content ?? ""}
								/>
							</div>
						</div>
						<button
							type="submit"
							className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							<EditSvg />
							Edit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
