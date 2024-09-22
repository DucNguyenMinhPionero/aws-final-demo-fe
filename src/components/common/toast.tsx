import { useEffect } from "react";

import CloseSvg from "@/app/libs/svg/close-svg";
import DangerSvg from "@/app/libs/svg/toast/danger-svg";
import SuccessSvg from "@/app/libs/svg/toast/success-svg";
import WarningSvg from "@/app/libs/svg/toast/warning-svg";

type ToastProps = {
	type: "success" | "danger" | "warning";
	message: string;
	onClose: () => void;
	defaultTimeClose: number;
};

export default function Toast({
	type,
	message,
	onClose,
	defaultTimeClose = 3,
}: ToastProps) {
	useEffect(() => {
		const timer = setTimeout(() => {
			onClose();
		}, defaultTimeClose * 1000);

		return () => clearTimeout(timer);
	}, [onClose, defaultTimeClose]);

	return (
		<div
			id={`toast-${type}`}
			className="fixed top-5 right-5 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
			role="alert"
		>
			{type === "success" && (
				<div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
					<SuccessSvg />
					<span className="sr-only">Check icon</span>
				</div>
			)}
			{type === "danger" && (
				<div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
					<DangerSvg />
					<span className="sr-only">Error icon</span>
				</div>
			)}
			{type === "warning" && (
				<div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
					<WarningSvg />
					<span className="sr-only">Warning icon</span>
				</div>
			)}
			<div className="ms-3 text-sm font-normal">{message}</div>
			<button
				onClick={() => onClose()}
				type="button"
				className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
				data-dismiss-target={`#toast-${type}`}
				aria-label="Close"
			>
				<span className="sr-only">Close</span>
				<CloseSvg />
			</button>
		</div>
	);
}
