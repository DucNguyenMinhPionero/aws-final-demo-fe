export const schema = {
	models: {
		Users: {
			name: "Users",
			fields: {
				id: {
					name: "id",
					isArray: false,
					type: "ID",
					isRequired: true,
					attributes: [],
				},
				userName: {
					name: "userName",
					isArray: false,
					type: "String",
					isRequired: true,
					attributes: [],
				},
				email: {
					name: "email",
					isArray: false,
					type: "String",
					isRequired: true,
					attributes: [],
				},
				createdAt: {
					name: "createdAt",
					isArray: false,
					type: "AWSDateTime",
					isRequired: false,
					attributes: [],
				},
				updatedAt: {
					name: "updatedAt",
					isArray: false,
					type: "AWSDateTime",
					isRequired: false,
					attributes: [],
				},
			},
			syncable: true,
			pluralName: "Users",
			attributes: [
				{
					type: "model",
					properties: {},
				},
				{
					type: "aws_api_key",
					properties: {},
				},
			],
		},
		Candidates: {
			name: "Candidates",
			fields: {
				id: {
					name: "id",
					isArray: false,
					type: "ID",
					isRequired: true,
					attributes: [],
				},
				post: {
					name: "post",
					isArray: true,
					type: {
						model: "Posts",
					},
					isRequired: false,
					attributes: [],
					isArrayNullable: true,
					association: {
						connectionType: "HAS_MANY",
						associatedWith: ["candidatesPostId"],
					},
				},
				email: {
					name: "email",
					isArray: false,
					type: "String",
					isRequired: false,
					attributes: [],
				},
				name: {
					name: "name",
					isArray: false,
					type: "String",
					isRequired: false,
					attributes: [],
				},
				profileUrl: {
					name: "profileUrl",
					isArray: false,
					type: "String",
					isRequired: false,
					attributes: [],
				},
				metadata: {
					name: "metadata",
					isArray: false,
					type: "AWSJSON",
					isRequired: false,
					attributes: [],
				},
				createdAt: {
					name: "createdAt",
					isArray: false,
					type: "AWSDateTime",
					isRequired: false,
					attributes: [],
				},
				updatedAt: {
					name: "updatedAt",
					isArray: false,
					type: "AWSDateTime",
					isRequired: false,
					attributes: [],
				},
			},
			syncable: true,
			pluralName: "Candidates",
			attributes: [
				{
					type: "model",
					properties: {},
				},
				{
					type: "searchable",
					properties: {},
				},
				{
					type: "aws_api_key",
					properties: {},
				},
				{
					type: "aws_cognito_user_pools",
					properties: {},
				},
			],
		},
		Posts: {
			name: "Posts",
			fields: {
				id: {
					name: "id",
					isArray: false,
					type: "ID",
					isRequired: true,
					attributes: [],
				},
				postUrl: {
					name: "postUrl",
					isArray: false,
					type: "String",
					isRequired: false,
					attributes: [],
				},
				content: {
					name: "content",
					isArray: false,
					type: "String",
					isRequired: false,
					attributes: [],
				},
				candidate: {
					name: "candidate",
					isArray: false,
					type: {
						model: "Candidates",
					},
					isRequired: false,
					attributes: [],
					association: {
						connectionType: "BELONGS_TO",
						targetNames: ["candidatesPostId"],
					},
				},
				createdAt: {
					name: "createdAt",
					isArray: false,
					type: "AWSDateTime",
					isRequired: false,
					attributes: [],
				},
				updatedAt: {
					name: "updatedAt",
					isArray: false,
					type: "AWSDateTime",
					isRequired: false,
					attributes: [],
				},
				candidatesPostId: {
					name: "candidatesPostId",
					isArray: false,
					type: "ID",
					isRequired: false,
					attributes: [],
				},
			},
			syncable: true,
			pluralName: "Posts",
			attributes: [
				{
					type: "model",
					properties: {},
				},
				{
					type: "aws_api_key",
					properties: {},
				},
				{
					type: "aws_cognito_user_pools",
					properties: {},
				},
			],
		},
	},
	enums: {},
	nonModels: {},
	codegenVersion: "3.4.4",
	version: "77dc6bb4d91a3cbe1d654278448eae53",
};
