/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Users } from "../models";
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
export declare type UsersUpdateFormInputValues = {
	userName?: string;
	email?: string;
	createdAt?: string;
	updatedAt?: string;
};
export declare type UsersUpdateFormValidationValues = {
	userName?: ValidationFunction<string>;
	email?: ValidationFunction<string>;
	createdAt?: ValidationFunction<string>;
	updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
	React.DOMAttributes<HTMLDivElement>;
export declare type UsersUpdateFormOverridesProps = {
	UsersUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
	userName?: PrimitiveOverrideProps<TextFieldProps>;
	email?: PrimitiveOverrideProps<TextFieldProps>;
	createdAt?: PrimitiveOverrideProps<TextFieldProps>;
	updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UsersUpdateFormProps = React.PropsWithChildren<
	{
		overrides?: UsersUpdateFormOverridesProps | undefined | null;
	} & {
		id?: string;
		users?: Users;
		onSubmit?: (
			fields: UsersUpdateFormInputValues,
		) => UsersUpdateFormInputValues;
		onSuccess?: (fields: UsersUpdateFormInputValues) => void;
		onError?: (
			fields: UsersUpdateFormInputValues,
			errorMessage: string,
		) => void;
		onChange?: (
			fields: UsersUpdateFormInputValues,
		) => UsersUpdateFormInputValues;
		onValidate?: UsersUpdateFormValidationValues;
	} & React.CSSProperties
>;
export default function UsersUpdateForm(
	props: UsersUpdateFormProps,
): React.ReactElement;
