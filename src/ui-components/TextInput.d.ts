/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TextInputOverridesProps = {
    TextInput?: PrimitiveOverrideProps<FlexProps>;
    Label?: PrimitiveOverrideProps<TextProps>;
    Input?: PrimitiveOverrideProps<FlexProps>;
    Placeholder?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TextInputProps = React.PropsWithChildren<Partial<FlexProps> & {
    mode?: "default" | "filled" | "multiline";
} & {
    overrides?: TextInputOverridesProps | undefined | null;
}>;
export default function TextInput(props: TextInputProps): React.ReactElement;
