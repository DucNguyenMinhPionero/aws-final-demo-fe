import clsx from "clsx";

type PaginationProps = {
	totalItems: number;
	itemsPerPage: number;
	isCurrentPage: boolean;
	currentPage: number;
};

export default function Pagination({
	totalItems,
	itemsPerPage,
	isCurrentPage,
	currentPage,
}: PaginationProps) {
	const handlePrevious = () => {};
	const handleNext = () => {};
	return (
		<nav
			className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
			aria-label="Table navigation"
		>
			<span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
				Showing{" "}
				<span className="font-semibold text-gray-900 dark:text-white">
					{(currentPage - 1) * itemsPerPage + 1}-
					{Math.min(currentPage * itemsPerPage, totalItems)}
				</span>{" "}
				of{" "}
				<span className="font-semibold text-gray-900 dark:text-white">
					{totalItems}
				</span>
			</span>
			<ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
				<li>
					<p
						onClick={() => handlePrevious()}
						className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
					>
						Previous
					</p>
				</li>

				{Array.from(
					{ length: Math.ceil(totalItems / itemsPerPage) },
					(_, i) => i + 1,
				).map((item, index) => (
					<li key={index}>
						<p
							className={clsx(
								isCurrentPage
									? "flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
									: "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
							)}
						>
							{item}
						</p>
					</li>
				))}

				<li>
					<p
						onClick={() => handleNext()}
						className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
					>
						Next
					</p>
				</li>
			</ul>
		</nav>
	);
}
