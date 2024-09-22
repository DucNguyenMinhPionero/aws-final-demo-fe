/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import {
	GridProps,
	TextAreaFieldProps,
	TextFieldProps,
} from "@aws-amplify/ui-react";
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
export declare type CandidatesCreateFormInputValues = {
	email?: string;
	name?: string;
	profileUrl?: string;
	metadata?: string;
	createdAt?: string;
};
export declare type CandidatesCreateFormValidationValues = {
	email?: ValidationFunction<string>;
	name?: ValidationFunction<string>;
	profileUrl?: ValidationFunction<string>;
	metadata?: ValidationFunction<string>;
	createdAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
	React.DOMAttributes<HTMLDivElement>;
export declare type CandidatesCreateFormOverridesProps = {
	CandidatesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
	email?: PrimitiveOverrideProps<TextFieldProps>;
	name?: PrimitiveOverrideProps<TextFieldProps>;
	profileUrl?: PrimitiveOverrideProps<TextFieldProps>;
	metadata?: PrimitiveOverrideProps<TextAreaFieldProps>;
	createdAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CandidatesCreateFormProps = React.PropsWithChildren<
	{
		overrides?: CandidatesCreateFormOverridesProps | undefined | null;
	} & {
		clearOnSuccess?: boolean;
		onSubmit?: (
			fields: CandidatesCreateFormInputValues,
		) => CandidatesCreateFormInputValues;
		onSuccess?: (fields: CandidatesCreateFormInputValues) => void;
		onError?: (
			fields: CandidatesCreateFormInputValues,
			errorMessage: string,
		) => void;
		onChange?: (
			fields: CandidatesCreateFormInputValues,
		) => CandidatesCreateFormInputValues;
		onValidate?: CandidatesCreateFormValidationValues;
	} & React.CSSProperties
>;
export default function CandidatesCreateForm(
	props: CandidatesCreateFormProps,
): React.ReactElement;
