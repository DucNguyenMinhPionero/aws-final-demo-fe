const { DynamoDBClient, ScanCommand } = require("@aws-sdk/client-dynamodb");
const { SQSClient, SendMessageCommand } = require("@aws-sdk/client-sqs");

const dynamoDBClient = new DynamoDBClient({ region: "ap-northeast-1" });
const sqsClient = new SQSClient({ region: "ap-northeast-1" });

const DYNAMODB_TABLE = "Candidates-wxuidfqzrbbnxnp36io5ktrj4a-dev";
const SQS_QUEUE_URL =
	"https://sqs.ap-northeast-1.amazonaws.com/845778290046/sendMail";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

exports.handler = async (event) => {
	try {
		// const body = event.options.body;
		console.log(event);
		const emails = await getEmailsFromDynamoDB();
		const validEmails = emails.filter(validateEmail);
		await sendEmailsToSQS(validEmails);

		return {
			statusCode: 200,
			body: JSON.stringify("Emails processed successfully"),
		};
	} catch (error) {
		console.error("Error processing emails:", error);
		return {
			statusCode: 500,
			body: JSON.stringify("Error processing emails"),
		};
	}
};

async function getEmailsFromDynamoDB() {
	const params = {
		TableName: DYNAMODB_TABLE,
	};

	const command = new ScanCommand(params);
	const result = await dynamoDBClient.send(command);
	return result.Items.map((item) => item.email.S);
}

async function sendEmailsToSQS(emails) {
	const promises = emails.map((email) => {
		console.log("sending", email);
		const params = {
			QueueUrl: SQS_QUEUE_URL,
			MessageBody: email,
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
