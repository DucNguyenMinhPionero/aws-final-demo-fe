/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const AWS = require("aws-sdk");

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
	console.log(`EVENT: ${JSON.stringify(event)}`);
	// Tạo một instance của ECS
	const ecs = new AWS.ECS();

	// Thông tin về task definition và cluster
	const clusterName = "test"; // Tên cluster ECS của bạn
	const serviceName = "crawler"; // Tên service ECS của bạn

	const params = {
		cluster: "test",
		taskDefinition: "crawling-app",
		overrides: {
			containerOverrides: [
				{
					name: "crawling-app",
					command: [
						"node",
						"src/crawling.js",
						event.topic,
						event.total.toString(),
					], // Truyền topic và total
				},
			],
		},
		count: 1,
		launchType: "FARGATE", // Kiểu launch (EC2 hoặc Fargate)

		// Cấu hình mạng (BẮT BUỘC khi dùng 'awsvpc' network mode)
		networkConfiguration: {
			awsvpcConfiguration: {
				assignPublicIp: "ENABLED",
				subnets: ["subnet-0b235c5a1477a2949"], // Thay thế bằng subnet ID của bạn
				securityGroups: ["sg-0894ec599149b890d"], // Thay thế bằng security group ID của bạn
			},
		},
	};
	const headers = {
		"content-type": "application/json",
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Headers": "Content-Type",
		"Access-Control-Allow-Methods": "OPTIONS",
	};
	try {
		console.log("start");
		if (event.type === "start") {
			const data = await ecs.runTask(params).promise();
			return {
				statusCode: 200,
				headers,
				body: JSON.stringify({
					message: "Service updated successfully",
					data: null,
				}),
			};
		} else if (event.type === "stop") {
			const tasks = await ecs.listTasks({ cluster: clusterName }).promise();

			const stopTasks = tasks.taskArns.map((taskArn) =>
				ecs.stopTask({ cluster: clusterName, task: taskArn }).promise(),
			);

			await Promise.all(stopTasks);
			console.log(`Stopped all tasks in cluster ${clusterName}`);
			return {
				statusCode: 200,
				headers,
				body: JSON.stringify({
					message: "Service stopped successfully",
					data: null,
				}),
			};
		}
		// Cập nhật desired count của service
	} catch (error) {
		console.error("Error updating service:", error);
		return {
			statusCode: 500,
			headers,
			body: JSON.stringify({
				message: "Failed to update service",
				error: error.message,
			}),
		};
	}

	async function stopAllTasks(clusterName) {
		const tasks = await ecs.listTasks({ cluster: clusterName }).promise();

		const stopTasks = tasks.taskArns.map((taskArn) =>
			ecs.stopTask({ cluster: clusterName, task: taskArn }).promise(),
		);

		await Promise.all(stopTasks);
		console.log(`Stopped all tasks in cluster ${clusterName}`);
	}
};
