/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

const express = require("express");
const bodyParser = require("body-parser");
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
const AWS = require("aws-sdk");

// declare a new express app
const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "*");
	next();
});

/**********************
 * Example get method *
 **********************/

app.get("/item", async function (req, res) {
	// Tạo một instance của ECS
	const ecs = new AWS.ECS();

	// Thông tin về task definition và cluster
	const clusterName = "test"; // Tên cluster ECS của bạn
	const serviceName = "crawler"; // Tên service ECS của bạn

	const params = {
		cluster: clusterName,
		service: serviceName,
		desiredCount: 1, // Số lượng task bạn muốn khởi động
	};

	try {
		console.log("start");
		// Cập nhật desired count của service
		const data = await ecs.updateService(params).promise();
		console.log("Service updated successfully:", data);
		return {
			statusCode: 200,
			body: JSON.stringify({
				message: "Service updated successfully",
				data: data,
			}),
		};
	} catch (error) {
		console.error("Error updating service:", error);
		return {
			statusCode: 500,
			body: JSON.stringify({
				message: "Failed to update service",
				error: error.message,
			}),
		};
	}

	res.json({ success: "get call succeed!", url: req.url });
});

app.listen(3000, function () {
	console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
