const { DynamoDBClient, ScanCommand } = require("@aws-sdk/client-dynamodb");
const { SQSClient, SendMessageCommand } = require("@aws-sdk/client-sqs");

const dynamoDBClient = new DynamoDBClient({ region: "ap-northeast-1" });
const sqsClient = new SQSClient({ region: "ap-northeast-1" });

const DYNAMODB_TABLE = "Candidates-wxuidfqzrbbnxnp36io5ktrj4a-dev";
const SQS_QUEUE_URL =
	"https://sqs.ap-northeast-1.amazonaws.com/845778290046/sendMail";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

exports.handler = async (event) => {
	const headers = {
		"content-type": "application/json",
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Headers": "Content-Type",
		"Access-Control-Allow-Methods": "POST",
	};

	try {
		const { subject, content } = event;
		const emails = await getEmailsFromDynamoDB();
		const validEmails = emails.filter(validateEmail);
		await sendEmailsToSQS(validEmails, subject, content);

		return {
			statusCode: 200,
			headers,
			body: JSON.stringify("Emails processed successfully"),
		};
	} catch (error) {
		console.error("Error processing emails:", error);
	}
};

async function getEmailsFromDynamoDB() {
	const params = {
		TableName: DYNAMODB_TABLE,
		Limit: 15,
	};

	const command = new ScanCommand(params);
	const result = await dynamoDBClient.send(command);
	return result.Items.map((item) => item.email.S);
}

async function sendEmailsToSQS(emails, subject, content) {
	const promises = emails.map((email) => {
		console.log("sending", email);
		const messageBody = JSON.stringify({
			email: email,
			subject: subject,
			content: content,
		});
		const params = {
			QueueUrl: SQS_QUEUE_URL,
			MessageBody: messageBody,
		};
		const command = new SendMessageCommand(params);
		return sqsClient.send(command);
	});

	await Promise.all(promises);
}

function validateEmail(email) {
	const isValid = emailRegex.test(email);
	if (!isValid) {
		console.log(`Invalid email: ${email}`);
	}
	return isValid;
}
