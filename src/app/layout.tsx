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
			</body>
		</html>
	);
}
