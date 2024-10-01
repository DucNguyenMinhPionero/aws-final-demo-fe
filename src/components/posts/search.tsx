import { debounce } from "lodash";
import { Dispatch, SetStateAction, useCallback } from "react";

import { SearchSvg } from "@/app/libs/svg/search-svg";

type PostSearchProps = {
	getPosts: (token?: string, id?: string) => Promise<void>;
	setSearchTerm: Dispatch<SetStateAction<string>>;
	searchTerm: string;
};

export default function PostSearch({
	getPosts,
	searchTerm,
	setSearchTerm,
}: PostSearchProps) {
	const handleSearch = async (id: string) => {
		await getPosts(undefined, id);
	};

	const debounced = useCallback(
		debounce((id: string) => handleSearch(id), 500),
		[],
	);

	return (
		<div>
			<label htmlFor="table-search" className="sr-only">
				Search
			</label>
			<div className="relative">
				<div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
					<SearchSvg />
				</div>
				<input
					value={searchTerm}
					type="text"
					id="table-search"
					className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Search by ID"
					onChange={(e) => {
						setSearchTerm(e.target.value);
						debounced(e.target.value);
					}}
				/>
			</div>
		</div>
	);
}
