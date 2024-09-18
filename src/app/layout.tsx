"use client";

import { withAuthenticator } from "@aws-amplify/ui-react";

import NavBar from "@/components/nav-bar";
import SideBar from "@/components/side-bar";

import "./globals.css";

function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<NavBar />
				<SideBar />
				<div className="p-4 sm:ml-64">
					<div className="mt-14">{children}</div>
				</div>
			</body>
		</html>
	);
}

export default withAuthenticator(RootLayout);
