import clsx from "clsx";

type PaginationProps = {
	nextToken: string | undefined;
	previousTokens: string[];
	currentToken: string | undefined;
	handleNextPage: () => void;
	handlePrevPage: () => void;
};

export default function Pagination({
	nextToken,
	previousTokens,
	currentToken,
	handleNextPage,
	handlePrevPage,
}: PaginationProps) {
	const handlePrevious = () => {
		if (
			previousTokens.length > 0 ||
			(previousTokens.length === 0 && currentToken)
		) {
			handlePrevPage();
		}
	};

	const handleNext = () => {
		if (nextToken) {
			handleNextPage();
		}
	};

	return (
		<nav
			className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
			aria-label="Table navigation"
		>
			<ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
				<li>
					<p
						onClick={() => handlePrevious()}
						className={clsx(
							"hover:cursor-pointer flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400",
							previousTokens.length > 0 ||
								(previousTokens.length === 0 && currentToken)
								? "hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white"
								: "",
						)}
					>
						Previous
					</p>
				</li>

				<li>
					<p
						onClick={() => handleNext()}
						className={clsx(
							"hover:cursor-pointer flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400",
							nextToken
								? " hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white"
								: "",
						)}
					>
						Next
					</p>
				</li>
			</ul>
		</nav>
	);
}
