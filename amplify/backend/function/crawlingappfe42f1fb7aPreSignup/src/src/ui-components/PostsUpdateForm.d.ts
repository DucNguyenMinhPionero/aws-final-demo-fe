/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Posts } from "../models";
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
export declare type PostsUpdateFormInputValues = {
	postUrl?: string;
	content?: string;
	createdAt?: string;
	updatedAt?: string;
};
export declare type PostsUpdateFormValidationValues = {
	postUrl?: ValidationFunction<string>;
	content?: ValidationFunction<string>;
	createdAt?: ValidationFunction<string>;
	updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
	React.DOMAttributes<HTMLDivElement>;
export declare type PostsUpdateFormOverridesProps = {
	PostsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
	postUrl?: PrimitiveOverrideProps<TextFieldProps>;
	content?: PrimitiveOverrideProps<TextFieldProps>;
	createdAt?: PrimitiveOverrideProps<TextFieldProps>;
	updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PostsUpdateFormProps = React.PropsWithChildren<
	{
		overrides?: PostsUpdateFormOverridesProps | undefined | null;
	} & {
		id?: string;
		posts?: Posts;
		onSubmit?: (
			fields: PostsUpdateFormInputValues,
		) => PostsUpdateFormInputValues;
		onSuccess?: (fields: PostsUpdateFormInputValues) => void;
		onError?: (
			fields: PostsUpdateFormInputValues,
			errorMessage: string,
		) => void;
		onChange?: (
			fields: PostsUpdateFormInputValues,
		) => PostsUpdateFormInputValues;
		onValidate?: PostsUpdateFormValidationValues;
	} & React.CSSProperties
>;
export default function PostsUpdateForm(
	props: PostsUpdateFormProps,
): React.ReactElement;
