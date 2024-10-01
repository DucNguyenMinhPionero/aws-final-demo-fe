"use client";

import { withAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import { ToastContainer } from "react-toastify";

import Crawling from "@/components/email/crawling";
import EmailForm from "@/components/email/form";
import config from "../../amplifyconfiguration.json";

import "@aws-amplify/ui-react/styles.css";

Amplify.configure(config);

function EmailPage() {
	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
			<Crawling />
			<EmailForm />
			<ToastContainer />
		</div>
	);
}

export default withAuthenticator(EmailPage);
