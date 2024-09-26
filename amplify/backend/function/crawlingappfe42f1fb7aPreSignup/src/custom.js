/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");

const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
	console.log("trigger event cognito", event);
	try {
		const params = {
			TableName: "Users-wxuidfqzrbbnxnp36io5ktrj4a-dev",
			Item: {
				id: uuidv4(),
				userName: event.userName,
				email: event.request.userAttributes.email,
				createdAt: new Date().toISOString(),
				_version: 1,
				_lastChangedAt: Math.floor(new Date().getTime() / 1000),
			},
		};
		const data = await docClient.put(params).promise();
		console.log("response", data);
		return { body: "Successfully created item!" };
	} catch (err) {
		console.log("err", err);
		return { error: err };
	}
};
