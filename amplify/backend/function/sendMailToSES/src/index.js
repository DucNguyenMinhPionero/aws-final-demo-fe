const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");

//const sesClient = new SESClient({ region: "ap-northeast-1" });
const sesClient = new SESClient({ region: "us-east-1" });
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
			const messageBody = JSON.parse(record.body);
			const recipientEmail = messageBody.email;
			const subject = messageBody.subject;
			const content = messageBody.content;

			console.log(`Sending email to: ${recipientEmail}`);

			await sendEmail(recipientEmail, subject, content);
		}

		return {
			statusCode: 200,
			body: JSON.stringify("Emails sent successfully via SES"),
		};
	} catch (error) {
		console.log("Error sending emails:", error);
	}
};

async function sendEmail(recipientEmail, subject, content) {
	const params = {
		Source: SENDER_EMAIL,
		Destination: {
			ToAddresses: [recipientEmail],
		},
		Message: {
			Subject: {
				Data: subject,
				Charset: "UTF-8",
			},
			Body: {
				Text: {
					Data: content,
					Charset: "UTF-8",
				},
			},
		},
	};

	const command = new SendEmailCommand(params);
	await sesClient.send(command);
}
