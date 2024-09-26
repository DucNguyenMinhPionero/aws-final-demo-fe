/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
	[elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
	[key: string]: string;
};
export declare type Variant = {
	variantValues: VariantValues;
	overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
	hasError: boolean;
	errorMessage?: string;
};
export declare type ValidationFunction<T> = (
	value: T,
	validationResponse: ValidationResponse,
) => ValidationResponse | Promise<ValidationResponse>;
export declare type UsersCreateFormInputValues = {
	userName?: string;
	email?: string;
	createdAt?: string;
	updatedAt?: string;
};
export declare type UsersCreateFormValidationValues = {
	userName?: ValidationFunction<string>;
	email?: ValidationFunction<string>;
	createdAt?: ValidationFunction<string>;
	updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
	React.DOMAttributes<HTMLDivElement>;
export declare type UsersCreateFormOverridesProps = {
	UsersCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
	userName?: PrimitiveOverrideProps<TextFieldProps>;
	email?: PrimitiveOverrideProps<TextFieldProps>;
	createdAt?: PrimitiveOverrideProps<TextFieldProps>;
	updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UsersCreateFormProps = React.PropsWithChildren<
	{
		overrides?: UsersCreateFormOverridesProps | undefined | null;
	} & {
		clearOnSuccess?: boolean;
		onSubmit?: (
			fields: UsersCreateFormInputValues,
		) => UsersCreateFormInputValues;
		onSuccess?: (fields: UsersCreateFormInputValues) => void;
		onError?: (
			fields: UsersCreateFormInputValues,
			errorMessage: string,
		) => void;
		onChange?: (
			fields: UsersCreateFormInputValues,
		) => UsersCreateFormInputValues;
		onValidate?: UsersCreateFormValidationValues;
	} & React.CSSProperties
>;
export default function UsersCreateForm(
	props: UsersCreateFormProps,
): React.ReactElement;
