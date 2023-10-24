/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { TextInputProps } from "./TextInput";
import { CTAButtonProps } from "./CTAButton";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactFormOverridesProps = {
    ContactForm?: PrimitiveOverrideProps<FlexProps>;
    "Fill in the form below."?: PrimitiveOverrideProps<TextProps>;
    TextInput39161545?: TextInputProps;
    TextInput39161549?: TextInputProps;
    TextInput39161553?: TextInputProps;
    CTAButton?: CTAButtonProps;
} & EscapeHatchProps;
export declare type ContactFormProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ContactFormOverridesProps | undefined | null;
}>;
export default function ContactForm(props: ContactFormProps): React.ReactElement;
