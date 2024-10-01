const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");

const sesClient = new SESClient({ region: "ap-northeast-1" });
const SENDER_EMAIL = "awsweek14@hungpham.lol";

exports.handler = async (event) => {
	try {
		const headers = {
			"content-type": "application/json",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Headers": "Content-Type",
			"Access-Control-Allow-Methods": "POST",
		};

		for (const record of event.Records) {
			const recipientEmail = record.body;

			console.log(`Sending email to: ${recipientEmail}`);
			await sendEmail(recipientEmail);
		}

		return {
			statusCode: 200,
			headers,
			body: JSON.stringify("Emails sent successfully via SES"),
		};
	} catch (error) {
		console.log("Error sending emails:", error);
	}
};

// Function to send the email via SES
async function sendEmail(recipientEmail) {
	const params = {
		Source: SENDER_EMAIL, // Your SES verified sender email
		Destination: {
			ToAddresses: [recipientEmail], // The recipient's email from SQS
		},
		Message: {
			Subject: {
				Data: "Welcome Email",
				Charset: "UTF-8",
			},
			Body: {
				Text: {
					Data: `Hello, this is a test email to: ${recipientEmail}`,
					Charset: "UTF-8",
				},
			},
		},
	};

	const command = new SendEmailCommand(params);
	await sesClient.send(command);
}
