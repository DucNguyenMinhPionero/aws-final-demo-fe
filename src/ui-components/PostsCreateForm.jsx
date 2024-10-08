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
export default function PostsCreateForm(props) {
	const {
		clearOnSuccess = true,
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
		createdAt: "",
		updatedAt: "",
	};
	const [postUrl, setPostUrl] = React.useState(initialValues.postUrl);
	const [content, setContent] = React.useState(initialValues.content);
	const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
	const [updatedAt, setUpdatedAt] = React.useState(initialValues.updatedAt);
	const [errors, setErrors] = React.useState({});
	const resetStateValues = () => {
		setPostUrl(initialValues.postUrl);
		setContent(initialValues.content);
		setCreatedAt(initialValues.createdAt);
		setUpdatedAt(initialValues.updatedAt);
		setErrors({});
	};
	const validations = {
		postUrl: [],
		content: [],
		createdAt: [],
		updatedAt: [],
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
	const convertToLocal = (date) => {
		const df = new Intl.DateTimeFormat("default", {
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
			hour: "2-digit",
			minute: "2-digit",
			calendar: "iso8601",
			numberingSystem: "latn",
			hourCycle: "h23",
		});
		const parts = df.formatToParts(date).reduce((acc, part) => {
			acc[part.type] = part.value;
			return acc;
		}, {});
		return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
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
					createdAt,
					updatedAt,
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
					await DataStore.save(new Posts(modelFields));
					if (onSuccess) {
						onSuccess(modelFields);
					}
					if (clearOnSuccess) {
						resetStateValues();
					}
				} catch (err) {
					if (onError) {
						onError(modelFields, err.message);
					}
				}
			}}
			{...getOverrideProps(overrides, "PostsCreateForm")}
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
							createdAt,
							updatedAt,
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
							createdAt,
							updatedAt,
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
			<TextField
				label="Created at"
				isRequired={false}
				isReadOnly={false}
				type="datetime-local"
				value={createdAt && convertToLocal(new Date(createdAt))}
				onChange={(e) => {
					let value =
						e.target.value === "" ? "" : new Date(e.target.value).toISOString();
					if (onChange) {
						const modelFields = {
							postUrl,
							content,
							createdAt: value,
							updatedAt,
						};
						const result = onChange(modelFields);
						value = result?.createdAt ?? value;
					}
					if (errors.createdAt?.hasError) {
						runValidationTasks("createdAt", value);
					}
					setCreatedAt(value);
				}}
				onBlur={() => runValidationTasks("createdAt", createdAt)}
				errorMessage={errors.createdAt?.errorMessage}
				hasError={errors.createdAt?.hasError}
				{...getOverrideProps(overrides, "createdAt")}
			></TextField>
			<TextField
				label="Updated at"
				isRequired={false}
				isReadOnly={false}
				type="datetime-local"
				value={updatedAt && convertToLocal(new Date(updatedAt))}
				onChange={(e) => {
					let value =
						e.target.value === "" ? "" : new Date(e.target.value).toISOString();
					if (onChange) {
						const modelFields = {
							postUrl,
							content,
							createdAt,
							updatedAt: value,
						};
						const result = onChange(modelFields);
						value = result?.updatedAt ?? value;
					}
					if (errors.updatedAt?.hasError) {
						runValidationTasks("updatedAt", value);
					}
					setUpdatedAt(value);
				}}
				onBlur={() => runValidationTasks("updatedAt", updatedAt)}
				errorMessage={errors.updatedAt?.errorMessage}
				hasError={errors.updatedAt?.hasError}
				{...getOverrideProps(overrides, "updatedAt")}
			></TextField>
			<Flex
				justifyContent="space-between"
				{...getOverrideProps(overrides, "CTAFlex")}
			>
				<Button
					children="Clear"
					type="reset"
					onClick={(event) => {
						event.preventDefault();
						resetStateValues();
					}}
					{...getOverrideProps(overrides, "ClearButton")}
				></Button>
				<Flex
					gap="15px"
					{...getOverrideProps(overrides, "RightAlignCTASubFlex")}
				>
					<Button
						children="Submit"
						type="submit"
						variation="primary"
						isDisabled={Object.values(errors).some((e) => e?.hasError)}
						{...getOverrideProps(overrides, "SubmitButton")}
					></Button>
				</Flex>
			</Flex>
		</Grid>
	);
}
