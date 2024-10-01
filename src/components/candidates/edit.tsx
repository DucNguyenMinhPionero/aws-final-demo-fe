import { generateClient } from "aws-amplify/api";
import clsx from "clsx";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { type ModalInfo } from "@/app/candidates/page";
import CloseSvg from "@/app/libs/svg/close-svg";
import EditSvg from "@/app/libs/svg/edit-svg";
import { updateCandidates } from "@/graphql/mutations";

type CandidateEditModalProps = {
	setModalInfo: Dispatch<SetStateAction<ModalInfo>>;
	modalInfo: ModalInfo;
};

export default function CandidateEditModal({
	setModalInfo,
	modalInfo,
}: CandidateEditModalProps) {
	// state
	const [isLoading, setLoading] = useState(false);
	const [input, setInput] = useState<{
		id?: string;
		name?: string | null;
		email?: string | null;
		profileUrl?: string | null;
	}>({});

	// other variables
	const API = generateClient();

	// useEffect group
	useEffect(() => {
		setInput({
			id: modalInfo.id,
			email: modalInfo.email,
			name: modalInfo.name,
			profileUrl: modalInfo.profileUrl,
		});
	}, [modalInfo]);

	// function group
	const updateCandidate = async () => {
		if (!input.id) {
			return;
		}

		try {
			setLoading(true);
			await API.graphql({
				query: updateCandidates,
				variables: {
					input: {
						id: input.id,
						email: input.email,
						name: input.name,
						profileUrl: input.profileUrl,
						_version: modalInfo._version ?? 1,
					},
				},
			});
			setInput({});
			toast.success("Update candidate successfully");
		} catch {
			toast.error("Something wrong! Please try again");
		}
		setModalInfo({
			isOpen: false,
			id: undefined,
			name: undefined,
			email: undefined,
			profileUrl: undefined,
			metadata: undefined,
			_version: undefined,
		});
		setInput({});
		setTimeout(() => {
			setLoading(false);
		}, 500);
	};

	return (
		<div
			id="crud-modal"
			tabIndex={-1}
			aria-hidden="true"
			className={clsx(
				"overflow-y-auto overflow-x-hidden flex z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full",
				modalInfo.isOpen ? "fixed" : "hidden",
			)}
		>
			<div className="relative p-4 w-full max-w-md max-h-full">
				{/* <!-- Modal content --> */}
				<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
					{/* <!-- Modal header --> */}
					<div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
						<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
							Edit Candidate
						</h3>
						<button
							onClick={() => {
								setModalInfo({
									isOpen: false,
									id: undefined,
									name: undefined,
									email: undefined,
									profileUrl: undefined,
									metadata: undefined,
									_version: undefined,
								});
								setInput({});
							}}
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
									htmlFor="name"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Name
								</label>
								<input
									type="text"
									name="name"
									id="name"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
									placeholder="Type candidate name"
									required
									value={input.name ?? ""}
									onChange={(e) => setInput({ ...input, name: e.target.value })}
								/>
							</div>
							<div className="col-span-2">
								<label
									htmlFor="email"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Email
								</label>
								<input
									type="text"
									name="email"
									id="email"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
									placeholder="Type candidate email"
									required
									value={input.email ?? ""}
									onChange={(e) =>
										setInput({ ...input, email: e.target.value })
									}
								/>
							</div>
							<div className="col-span-2">
								<label
									htmlFor="email"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Profile Link
								</label>
								<input
									type="text"
									name="profileUrl"
									id="profileUrl"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
									placeholder="Type candidate link"
									required
									value={input.profileUrl ?? ""}
									onChange={(e) =>
										setInput({ ...input, profileUrl: e.target.value })
									}
								/>
							</div>
						</div>
						<button
							disabled={isLoading}
							type="button"
							onClick={updateCandidate}
							className={clsx(
								"text-white inline-flex items-center font-medium rounded-lg text-sm px-5 py-2.5 text-center",
								isLoading
									? "dark:bg-blue-900"
									: "focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
							)}
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
