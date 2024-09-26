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
	};
	const [email, setEmail] = React.useState(initialValues.email);
	const [name, setName] = React.useState(initialValues.name);
	const [profileUrl, setProfileUrl] = React.useState(initialValues.profileUrl);
	const [metadata, setMetadata] = React.useState(initialValues.metadata);
	const [errors, setErrors] = React.useState({});
	const resetStateValues = () => {
		setEmail(initialValues.email);
		setName(initialValues.name);
		setProfileUrl(initialValues.profileUrl);
		setMetadata(initialValues.metadata);
		setErrors({});
	};
	const validations = {
		email: [],
		name: [],
		profileUrl: [],
		metadata: [{ type: "JSON" }],
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
					email,
					name,
					profileUrl,
					metadata,
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
