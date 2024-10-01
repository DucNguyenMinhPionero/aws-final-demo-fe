import { ToastContainer } from "react-toastify";

import Body from "@/components/common/body";

import "./globals.css";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Body children={children} />
				<ToastContainer position="top-right" />
			</body>
		</html>
	);
}
