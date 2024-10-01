import { get } from "aws-amplify/api";
import { toast } from "react-toastify";

import SendSvg from "@/app/libs/svg/send-svg";

export default function EmailForm() {
	const sendAllMails = async function postTodo() {
		try {
			const restOperation = get({
				apiName: "crawling",
				path: "/emails",
			});

			const { body } = await restOperation.response;
			const response = await body.json();

			if (response) {
				toast.success("Send email successfully");
			}
		} catch {
			toast.error("Something wrong. Please check again!");
		}
	};

	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
				<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
					Send mail to users
				</h2>
				<form action="#" className="space-y-8">
					<div>
						<label
							htmlFor="email"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
						>
							Email Subject
						</label>
						<input
							type="text"
							id="email"
							className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
							placeholder="Cat’s outta the bag! Surprise sale tomorrow—up to 50% off!"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="content"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
						>
							Email Content
						</label>
						<input
							type="text"
							id="content"
							className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
							placeholder="Type your content here"
							required
						/>
					</div>
					<button
						type="submit"
						onClick={sendAllMails}
						className="flex justify-between items-center py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 sm:w-fit focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						<SendSvg />
						<span className="ml-2">Send emails</span>
					</button>
				</form>
			</div>
		</section>
	);
}
