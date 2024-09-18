"use client";

import {
	withAuthenticator,
	WithAuthenticatorProps,
} from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";

import config from "../amplifyconfiguration.json";

import "@aws-amplify/ui-react/styles.css";

Amplify.configure(config);

function Home({ user }: WithAuthenticatorProps) {
	return (
		<div className="flex justify-between mx-2">
			<h1>Hello {user?.username}!</h1>
		</div>
	);
}

export default withAuthenticator(Home);
