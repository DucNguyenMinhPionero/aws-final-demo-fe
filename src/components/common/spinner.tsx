import SpinnerSvg from "@/app/libs/svg/spinner-svg";

export default function Spinner() {
	return (
		<div
			role="status"
			className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"
		>
			<SpinnerSvg />
			<span className="sr-only">Loading...</span>
		</div>
	);
}
