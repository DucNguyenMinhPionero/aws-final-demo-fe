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
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getCandidates } from "../graphql/queries";
import { updateCandidates } from "../graphql/mutations";
const client = generateClient();
export default function CandidatesUpdateForm(props) {
	const {
		id: idProp,
		candidates: candidatesModelProp,
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
	};
	const [email, setEmail] = React.useState(initialValues.email);
	const [name, setName] = React.useState(initialValues.name);
	const [profileUrl, setProfileUrl] = React.useState(initialValues.profileUrl);
	const [metadata, setMetadata] = React.useState(initialValues.metadata);
	const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
	const [errors, setErrors] = React.useState({});
	const resetStateValues = () => {
		const cleanValues = candidatesRecord
			? { ...initialValues, ...candidatesRecord }
			: initialValues;
		setEmail(cleanValues.email);
		setName(cleanValues.name);
		setProfileUrl(cleanValues.profileUrl);
		setMetadata(
			typeof cleanValues.metadata === "string" || cleanValues.metadata === null
				? cleanValues.metadata
				: JSON.stringify(cleanValues.metadata),
		);
		setCreatedAt(cleanValues.createdAt);
		setErrors({});
	};
	const [candidatesRecord, setCandidatesRecord] =
		React.useState(candidatesModelProp);
	React.useEffect(() => {
		const queryData = async () => {
			const record = idProp
				? (
						await client.graphql({
							query: getCandidates.replaceAll("__typename", ""),
							variables: { id: idProp },
						})
					)?.data?.getCandidates
				: candidatesModelProp;
			setCandidatesRecord(record);
		};
		queryData();
	}, [idProp, candidatesModelProp]);
	React.useEffect(resetStateValues, [candidatesRecord]);
	const validations = {
		email: [{ type: "Required" }],
		name: [{ type: "Required" }],
		profileUrl: [{ type: "Required" }],
		metadata: [{ type: "JSON" }],
		createdAt: [{ type: "Required" }],
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
					metadata: metadata ?? null,
					createdAt,
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
					await client.graphql({
						query: updateCandidates.replaceAll("__typename", ""),
						variables: {
							input: {
								id: candidatesRecord.id,
								...modelFields,
							},
						},
					});
					if (onSuccess) {
						onSuccess(modelFields);
					}
				} catch (err) {
					if (onError) {
						const messages = err.errors.map((e) => e.message).join("\n");
						onError(modelFields, messages);
					}
				}
			}}
			{...getOverrideProps(overrides, "CandidatesUpdateForm")}
			{...rest}
		>
			<TextField
				label="Email"
				isRequired={true}
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
				isRequired={true}
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
				isRequired={true}
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
				value={metadata}
				onChange={(e) => {
					let { value } = e.target;
					if (onChange) {
						const modelFields = {
							email,
							name,
							profileUrl,
							metadata: value,
							createdAt,
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
				isRequired={true}
				isReadOnly={false}
				value={createdAt}
				onChange={(e) => {
					let { value } = e.target;
					if (onChange) {
						const modelFields = {
							email,
							name,
							profileUrl,
							metadata,
							createdAt: value,
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
					isDisabled={!(idProp || candidatesModelProp)}
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
							!(idProp || candidatesModelProp) ||
							Object.values(errors).some((e) => e?.hasError)
						}
						{...getOverrideProps(overrides, "SubmitButton")}
					></Button>
				</Flex>
			</Flex>
		</Grid>
	);
}
