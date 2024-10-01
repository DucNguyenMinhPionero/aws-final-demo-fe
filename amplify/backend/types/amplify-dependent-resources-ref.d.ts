export type AmplifyDependentResourcesAttributes = {
	api: {
		crawling: {
			ApiId: "string";
			ApiName: "string";
			RootUrl: "string";
		};
		crawlingappfe: {
			GraphQLAPIEndpointOutput: "string";
			GraphQLAPIIdOutput: "string";
			GraphQLAPIKeyOutput: "string";
		};
	};
	auth: {
		crawlingappfe42f1fb7a: {
			AppClientID: "string";
			AppClientIDWeb: "string";
			IdentityPoolId: "string";
			IdentityPoolName: "string";
			UserPoolArn: "string";
			UserPoolId: "string";
			UserPoolName: "string";
		};
	};
	function: {
		crawling: {
			Arn: "string";
			LambdaExecutionRole: "string";
			LambdaExecutionRoleArn: "string";
			Name: "string";
			Region: "string";
		};
		crawlingappfe42f1fb7aPreSignup: {
			Arn: "string";
			LambdaExecutionRole: "string";
			LambdaExecutionRoleArn: "string";
			Name: "string";
			Region: "string";
		};
		sendMailToSES: {
			Arn: "string";
			LambdaExecutionRole: "string";
			LambdaExecutionRoleArn: "string";
			Name: "string";
			Region: "string";
		};
		sendMailsToSQS: {
			Arn: "string";
			LambdaExecutionRole: "string";
			LambdaExecutionRoleArn: "string";
			Name: "string";
			Region: "string";
		};
		startCrawling: {
			Arn: "string";
			LambdaExecutionRole: "string";
			LambdaExecutionRoleArn: "string";
			Name: "string";
			Region: "string";
		};
	};
	storage: {
		s36e8ca1c7: {
			BucketName: "string";
			Region: "string";
		};
	};
};
