"use client";

import { withAuthenticator } from "@aws-amplify/ui-react";
import { ToastContainer } from "react-toastify";

import NavBar from "./nav-bar";
import SideBar from "./side-bar";

import "@aws-amplify/ui-react/styles.css";

function Body({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<NavBar />
			<SideBar />
			<div className="p-4 sm:ml-64">
				<div className="mt-14">{children}</div>
			</div>
			<ToastContainer position="top-right" />
		</>
	);
}

export default withAuthenticator(Body);
