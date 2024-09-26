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
import { Candidates } from "../models";
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
export declare type CandidatesUpdateFormInputValues = {
	email?: string;
	name?: string;
	profileUrl?: string;
	metadata?: string;
	createdAt?: string;
};
export declare type CandidatesUpdateFormValidationValues = {
	email?: ValidationFunction<string>;
	name?: ValidationFunction<string>;
	profileUrl?: ValidationFunction<string>;
	metadata?: ValidationFunction<string>;
	createdAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
	React.DOMAttributes<HTMLDivElement>;
export declare type CandidatesUpdateFormOverridesProps = {
	CandidatesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
	email?: PrimitiveOverrideProps<TextFieldProps>;
	name?: PrimitiveOverrideProps<TextFieldProps>;
	profileUrl?: PrimitiveOverrideProps<TextFieldProps>;
	metadata?: PrimitiveOverrideProps<TextAreaFieldProps>;
	createdAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CandidatesUpdateFormProps = React.PropsWithChildren<
	{
		overrides?: CandidatesUpdateFormOverridesProps | undefined | null;
	} & {
		id?: string;
		candidates?: Candidates;
		onSubmit?: (
			fields: CandidatesUpdateFormInputValues,
		) => CandidatesUpdateFormInputValues;
		onSuccess?: (fields: CandidatesUpdateFormInputValues) => void;
		onError?: (
			fields: CandidatesUpdateFormInputValues,
			errorMessage: string,
		) => void;
		onChange?: (
			fields: CandidatesUpdateFormInputValues,
		) => CandidatesUpdateFormInputValues;
		onValidate?: CandidatesUpdateFormValidationValues;
	} & React.CSSProperties
>;
export default function CandidatesUpdateForm(
	props: CandidatesUpdateFormProps,
): React.ReactElement;
