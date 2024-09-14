"use client";

import {
	withAuthenticator,
	WithAuthenticatorProps,
} from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";

import config from "../amplifyconfiguration.json";

import "@aws-amplify/ui-react/styles.css";

Amplify.configure(config);

function Home({ signOut, user }: WithAuthenticatorProps) {
	return (
		<div>
			<h1>Hello {user?.username}</h1>
			<button type="button" onClick={signOut}>
				Sign out
			</button>
		</div>
	);
}

export default withAuthenticator(Home);
