/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Posts } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function PostsUpdateForm(props) {
	const {
		id: idProp,
		posts: postsModelProp,
		onSuccess,
		onError,
		onSubmit,
		onValidate,
		onChange,
		overrides,
		...rest
	} = props;
	const initialValues = {
		postUrl: "",
		content: "",
	};
	const [postUrl, setPostUrl] = React.useState(initialValues.postUrl);
	const [content, setContent] = React.useState(initialValues.content);
	const [errors, setErrors] = React.useState({});
	const resetStateValues = () => {
		const cleanValues = postsRecord
			? { ...initialValues, ...postsRecord }
			: initialValues;
		setPostUrl(cleanValues.postUrl);
		setContent(cleanValues.content);
		setErrors({});
	};
	const [postsRecord, setPostsRecord] = React.useState(postsModelProp);
	React.useEffect(() => {
		const queryData = async () => {
			const record = idProp
				? await DataStore.query(Posts, idProp)
				: postsModelProp;
			setPostsRecord(record);
		};
		queryData();
	}, [idProp, postsModelProp]);
	React.useEffect(resetStateValues, [postsRecord]);
	const validations = {
		postUrl: [],
		content: [],
	};
	const runValidationTasks = async (
		fieldName,
		currentValue,
		getDisplayValue,
	) => {
		const value =
			currentValue && getDisplayValue
				? getDisplayValue(currentValue)
				: currentValue;
		let validationResponse = validateField(value, validations[fieldName]);
		const customValidator = fetchByPath(onValidate, fieldName);
		if (customValidator) {
			validationResponse = await customValidator(value, validationResponse);
		}
		setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
		return validationResponse;
	};
	return (
		<Grid
			as="form"
			rowGap="15px"
			columnGap="15px"
			padding="20px"
			onSubmit={async (event) => {
				event.preventDefault();
				let modelFields = {
					postUrl,
					content,
				};
				const validationResponses = await Promise.all(
					Object.keys(validations).reduce((promises, fieldName) => {
						if (Array.isArray(modelFields[fieldName])) {
							promises.push(
								...modelFields[fieldName].map((item) =>
									runValidationTasks(fieldName, item),
								),
							);
							return promises;
						}
						promises.push(
							runValidationTasks(fieldName, modelFields[fieldName]),
						);
						return promises;
					}, []),
				);
				if (validationResponses.some((r) => r.hasError)) {
					return;
				}
				if (onSubmit) {
					modelFields = onSubmit(modelFields);
				}
				try {
					Object.entries(modelFields).forEach(([key, value]) => {
						if (typeof value === "string" && value === "") {
							modelFields[key] = null;
						}
					});
					await DataStore.save(
						Posts.copyOf(postsRecord, (updated) => {
							Object.assign(updated, modelFields);
						}),
					);
					if (onSuccess) {
						onSuccess(modelFields);
					}
				} catch (err) {
					if (onError) {
						onError(modelFields, err.message);
					}
				}
			}}
			{...getOverrideProps(overrides, "PostsUpdateForm")}
			{...rest}
		>
			<TextField
				label="Post url"
				isRequired={false}
				isReadOnly={false}
				value={postUrl}
				onChange={(e) => {
					let { value } = e.target;
					if (onChange) {
						const modelFields = {
							postUrl: value,
							content,
						};
						const result = onChange(modelFields);
						value = result?.postUrl ?? value;
					}
					if (errors.postUrl?.hasError) {
						runValidationTasks("postUrl", value);
					}
					setPostUrl(value);
				}}
				onBlur={() => runValidationTasks("postUrl", postUrl)}
				errorMessage={errors.postUrl?.errorMessage}
				hasError={errors.postUrl?.hasError}
				{...getOverrideProps(overrides, "postUrl")}
			></TextField>
			<TextField
				label="Content"
				isRequired={false}
				isReadOnly={false}
				value={content}
				onChange={(e) => {
					let { value } = e.target;
					if (onChange) {
						const modelFields = {
							postUrl,
							content: value,
						};
						const result = onChange(modelFields);
						value = result?.content ?? value;
					}
					if (errors.content?.hasError) {
						runValidationTasks("content", value);
					}
					setContent(value);
				}}
				onBlur={() => runValidationTasks("content", content)}
				errorMessage={errors.content?.errorMessage}
				hasError={errors.content?.hasError}
				{...getOverrideProps(overrides, "content")}
			></TextField>
			<Flex
				justifyContent="space-between"
				{...getOverrideProps(overrides, "CTAFlex")}
			>
				<Button
					children="Reset"
					type="reset"
					onClick={(event) => {
						event.preventDefault();
						resetStateValues();
					}}
					isDisabled={!(idProp || postsModelProp)}
					{...getOverrideProps(overrides, "ResetButton")}
				></Button>
				<Flex
					gap="15px"
					{...getOverrideProps(overrides, "RightAlignCTASubFlex")}
				>
					<Button
						children="Submit"
						type="submit"
						variation="primary"
						isDisabled={
							!(idProp || postsModelProp) ||
							Object.values(errors).some((e) => e?.hasError)
						}
						{...getOverrideProps(overrides, "SubmitButton")}
					></Button>
				</Flex>
			</Flex>
		</Grid>
	);
}
