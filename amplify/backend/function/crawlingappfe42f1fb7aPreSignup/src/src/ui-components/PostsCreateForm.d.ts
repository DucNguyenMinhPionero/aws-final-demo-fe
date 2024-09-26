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
export declare type PostsCreateFormInputValues = {
	postUrl?: string;
	content?: string;
	createdAt?: string;
	updatedAt?: string;
};
export declare type PostsCreateFormValidationValues = {
	postUrl?: ValidationFunction<string>;
	content?: ValidationFunction<string>;
	createdAt?: ValidationFunction<string>;
	updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
	React.DOMAttributes<HTMLDivElement>;
export declare type PostsCreateFormOverridesProps = {
	PostsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
	postUrl?: PrimitiveOverrideProps<TextFieldProps>;
	content?: PrimitiveOverrideProps<TextFieldProps>;
	createdAt?: PrimitiveOverrideProps<TextFieldProps>;
	updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PostsCreateFormProps = React.PropsWithChildren<
	{
		overrides?: PostsCreateFormOverridesProps | undefined | null;
	} & {
		clearOnSuccess?: boolean;
		onSubmit?: (
			fields: PostsCreateFormInputValues,
		) => PostsCreateFormInputValues;
		onSuccess?: (fields: PostsCreateFormInputValues) => void;
		onError?: (
			fields: PostsCreateFormInputValues,
			errorMessage: string,
		) => void;
		onChange?: (
			fields: PostsCreateFormInputValues,
		) => PostsCreateFormInputValues;
		onValidate?: PostsCreateFormValidationValues;
	} & React.CSSProperties
>;
export default function PostsCreateForm(
	props: PostsCreateFormProps,
): React.ReactElement;
