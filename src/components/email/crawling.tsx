import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Crawling() {
	const [topic, setTopic] = useState("");
	const [total, setTotal] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [response, setResponse] = useState(null);

	useEffect(() => {
		// Gọi API check task status khi component load
		const checkTaskStatus = async () => {
			try {
				const apiUrl =
					"https://3e8guxp99g.execute-api.ap-northeast-1.amazonaws.com/dev/checkCrawlinngStatus";
				const result = await axios.get(apiUrl);
				// eslint-disable-next-line eqeqeq
				setIsRunning(result.data.status == "RUNNING");
			} catch {
				toast.error("Error checking task status:");
			}
		};
		checkTaskStatus();
	}, []);

	const startCrawling = async () => {
		const apiUrl =
			"https://3e8guxp99g.execute-api.ap-northeast-1.amazonaws.com/dev/start-crawling";

		const requestData = {
			type: "start",
			topic,
			total,
		};

		try {
			// Gửi request với axios
			const result = await axios.post(apiUrl, requestData, {});

			setResponse(result.data); // Lấy dữ liệu từ response
			setIsRunning(true);
		} catch (error) {
			console.error("Error starting crawl:", error);
		}
	};

	const stopCrawling = async () => {
		const apiUrl =
			"https://3e8guxp99g.execute-api.ap-northeast-1.amazonaws.com/dev/start-crawling";

		const requestData = {
			type: "stop",
			topic,
			total,
		};

		try {
			// Gửi request với axios
			const result = await axios.post(apiUrl, requestData, {});

			setResponse(result.data); // Lấy dữ liệu từ response
			setIsRunning(false);
		} catch {
			toast.error("Error starting crawl:");
		}
	};

	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
				<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
					Crawling
				</h2>
				<form action="#" className="space-y-8">
					<div>
						<label
							htmlFor="email"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
						>
							Number of users
						</label>
						<input
							type="number"
							value={total}
							onChange={(e) => setTotal(Number(e.target.value))}
							id="num-of-users"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
							placeholder="1"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="category"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
						>
							Category
						</label>
						<input
							type="text"
							id="category"
							value={topic}
							onChange={(e) => setTopic(e.target.value)}
							className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
							placeholder="Type your category here"
							required
						/>
					</div>

					<div className="flex">
						<button
							onClick={startCrawling}
							disabled={isRunning} // Disable nếu task đang chạy hoặc đang load
							type="button"
							className="mr-4 flex justify-between items-center py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 sm:w-fit focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							{isRunning ? (
								<div className="spinner" />
							) : (
								<span className="ml-2">Start</span>
							)}
						</button>
						<button
							type="button"
							disabled={!isRunning}
							onClick={stopCrawling}
							className="flex justify-between items-center py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 sm:w-fit focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							<span className="ml-2">Stop</span>
						</button>
					</div>
				</form>
			</div>
		</section>
	);
}
