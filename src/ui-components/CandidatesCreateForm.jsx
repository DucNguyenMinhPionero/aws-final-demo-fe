/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
	Button,
	Flex,
	Grid,
	TextAreaField,
	TextField,
} from "@aws-amplify/ui-react";
import { Candidates } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function CandidatesCreateForm(props) {
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
		email: "",
		name: "",
		profileUrl: "",
		metadata: "",
		createdAt: "",
		updatedAt: "",
	};
	const [email, setEmail] = React.useState(initialValues.email);
	const [name, setName] = React.useState(initialValues.name);
	const [profileUrl, setProfileUrl] = React.useState(initialValues.profileUrl);
	const [metadata, setMetadata] = React.useState(initialValues.metadata);
	const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
	const [updatedAt, setUpdatedAt] = React.useState(initialValues.updatedAt);
	const [errors, setErrors] = React.useState({});
	const resetStateValues = () => {
		setEmail(initialValues.email);
		setName(initialValues.name);
		setProfileUrl(initialValues.profileUrl);
		setMetadata(initialValues.metadata);
		setCreatedAt(initialValues.createdAt);
		setUpdatedAt(initialValues.updatedAt);
		setErrors({});
	};
	const validations = {
		email: [],
		name: [],
		profileUrl: [],
		metadata: [{ type: "JSON" }],
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
					email,
					name,
					profileUrl,
					metadata,
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
					await DataStore.save(new Candidates(modelFields));
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
			{...getOverrideProps(overrides, "CandidatesCreateForm")}
			{...rest}
		>
			<TextField
				label="Email"
				isRequired={false}
				isReadOnly={false}
				value={email}
				onChange={(e) => {
					let { value } = e.target;
					if (onChange) {
						const modelFields = {
							email: value,
							name,
							profileUrl,
							metadata,
							createdAt,
							updatedAt,
						};
						const result = onChange(modelFields);
						value = result?.email ?? value;
					}
					if (errors.email?.hasError) {
						runValidationTasks("email", value);
					}
					setEmail(value);
				}}
				onBlur={() => runValidationTasks("email", email)}
				errorMessage={errors.email?.errorMessage}
				hasError={errors.email?.hasError}
				{...getOverrideProps(overrides, "email")}
			></TextField>
			<TextField
				label="Name"
				isRequired={false}
				isReadOnly={false}
				value={name}
				onChange={(e) => {
					let { value } = e.target;
					if (onChange) {
						const modelFields = {
							email,
							name: value,
							profileUrl,
							metadata,
							createdAt,
							updatedAt,
						};
						const result = onChange(modelFields);
						value = result?.name ?? value;
					}
					if (errors.name?.hasError) {
						runValidationTasks("name", value);
					}
					setName(value);
				}}
				onBlur={() => runValidationTasks("name", name)}
				errorMessage={errors.name?.errorMessage}
				hasError={errors.name?.hasError}
				{...getOverrideProps(overrides, "name")}
			></TextField>
			<TextField
				label="Profile url"
				isRequired={false}
				isReadOnly={false}
				value={profileUrl}
				onChange={(e) => {
					let { value } = e.target;
					if (onChange) {
						const modelFields = {
							email,
							name,
							profileUrl: value,
							metadata,
							createdAt,
							updatedAt,
						};
						const result = onChange(modelFields);
						value = result?.profileUrl ?? value;
					}
					if (errors.profileUrl?.hasError) {
						runValidationTasks("profileUrl", value);
					}
					setProfileUrl(value);
				}}
				onBlur={() => runValidationTasks("profileUrl", profileUrl)}
				errorMessage={errors.profileUrl?.errorMessage}
				hasError={errors.profileUrl?.hasError}
				{...getOverrideProps(overrides, "profileUrl")}
			></TextField>
			<TextAreaField
				label="Metadata"
				isRequired={false}
				isReadOnly={false}
				onChange={(e) => {
					let { value } = e.target;
					if (onChange) {
						const modelFields = {
							email,
							name,
							profileUrl,
							metadata: value,
							createdAt,
							updatedAt,
						};
						const result = onChange(modelFields);
						value = result?.metadata ?? value;
					}
					if (errors.metadata?.hasError) {
						runValidationTasks("metadata", value);
					}
					setMetadata(value);
				}}
				onBlur={() => runValidationTasks("metadata", metadata)}
				errorMessage={errors.metadata?.errorMessage}
				hasError={errors.metadata?.hasError}
				{...getOverrideProps(overrides, "metadata")}
			></TextAreaField>
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
							email,
							name,
							profileUrl,
							metadata,
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
							email,
							name,
							profileUrl,
							metadata,
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
