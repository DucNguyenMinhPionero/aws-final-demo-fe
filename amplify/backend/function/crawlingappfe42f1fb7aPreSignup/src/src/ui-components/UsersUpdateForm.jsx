/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Users } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function UsersUpdateForm(props) {
	const {
		id: idProp,
		users: usersModelProp,
		onSuccess,
		onError,
		onSubmit,
		onValidate,
		onChange,
		overrides,
		...rest
	} = props;
	const initialValues = {
		userName: "",
		email: "",
		createdAt: "",
		updatedAt: "",
	};
	const [userName, setUserName] = React.useState(initialValues.userName);
	const [email, setEmail] = React.useState(initialValues.email);
	const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
	const [updatedAt, setUpdatedAt] = React.useState(initialValues.updatedAt);
	const [errors, setErrors] = React.useState({});
	const resetStateValues = () => {
		const cleanValues = usersRecord
			? { ...initialValues, ...usersRecord }
			: initialValues;
		setUserName(cleanValues.userName);
		setEmail(cleanValues.email);
		setCreatedAt(cleanValues.createdAt);
		setUpdatedAt(cleanValues.updatedAt);
		setErrors({});
	};
	const [usersRecord, setUsersRecord] = React.useState(usersModelProp);
	React.useEffect(() => {
		const queryData = async () => {
			const record = idProp
				? await DataStore.query(Users, idProp)
				: usersModelProp;
			setUsersRecord(record);
		};
		queryData();
	}, [idProp, usersModelProp]);
	React.useEffect(resetStateValues, [usersRecord]);
	const validations = {
		userName: [{ type: "Required" }],
		email: [{ type: "Required" }],
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
					userName,
					email,
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
					await DataStore.save(
						Users.copyOf(usersRecord, (updated) => {
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
			{...getOverrideProps(overrides, "UsersUpdateForm")}
			{...rest}
		>
			<TextField
				label="User name"
				isRequired={true}
				isReadOnly={false}
				value={userName}
				onChange={(e) => {
					let { value } = e.target;
					if (onChange) {
						const modelFields = {
							userName: value,
							email,
							createdAt,
							updatedAt,
						};
						const result = onChange(modelFields);
						value = result?.userName ?? value;
					}
					if (errors.userName?.hasError) {
						runValidationTasks("userName", value);
					}
					setUserName(value);
				}}
				onBlur={() => runValidationTasks("userName", userName)}
				errorMessage={errors.userName?.errorMessage}
				hasError={errors.userName?.hasError}
				{...getOverrideProps(overrides, "userName")}
			></TextField>
			<TextField
				label="Email"
				isRequired={true}
				isReadOnly={false}
				value={email}
				onChange={(e) => {
					let { value } = e.target;
					if (onChange) {
						const modelFields = {
							userName,
							email: value,
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
							userName,
							email,
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
							userName,
							email,
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
					children="Reset"
					type="reset"
					onClick={(event) => {
						event.preventDefault();
						resetStateValues();
					}}
					isDisabled={!(idProp || usersModelProp)}
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
							!(idProp || usersModelProp) ||
							Object.values(errors).some((e) => e?.hasError)
						}
						{...getOverrideProps(overrides, "SubmitButton")}
					></Button>
				</Flex>
			</Flex>
		</Grid>
	);
}
