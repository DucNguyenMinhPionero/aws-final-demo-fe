export default function Crawling() {
	return (
		<div className="flex justify-center flex-col">
			<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
				Crawling
			</h2>
			<div className="flex justify-center items-center">
				<button
					type="button"
					className="flex mr-10 justify-between items-center py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 sm:w-fit focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					<span className="ml-2">Start</span>
				</button>
				<button
					type="button"
					className="flex justify-between items-center py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 sm:w-fit focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					<span className="ml-2">Stop</span>
				</button>
			</div>
		</div>
	);
}
