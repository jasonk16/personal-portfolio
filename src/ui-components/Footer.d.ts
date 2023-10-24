/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { CTAButtonProps } from "./CTAButton";
import { MyIconsProps } from "./MyIcons";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FooterOverridesProps = {
    Footer?: PrimitiveOverrideProps<FlexProps>;
    "Frame 34"?: PrimitiveOverrideProps<FlexProps>;
    "cta-text"?: PrimitiveOverrideProps<FlexProps>;
    "Say Hello! \uD83D\uDC4B"?: PrimitiveOverrideProps<TextProps>;
    "I love making new friends and meeting new people. Whether is a new opportunity or question, I\u2019m always down for a chat."?: PrimitiveOverrideProps<TextProps>;
    CTAButton?: CTAButtonProps;
    "Frame 37"?: PrimitiveOverrideProps<FlexProps>;
    "\u00A9 2023 Jason Khoo"?: PrimitiveOverrideProps<TextProps>;
    "Frame 38"?: PrimitiveOverrideProps<FlexProps>;
    MyIcons39061416?: MyIconsProps;
    MyIcons39061419?: MyIconsProps;
} & EscapeHatchProps;
export declare type FooterProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FooterOverridesProps | undefined | null;
}>;
export default function Footer(props: FooterProps): React.ReactElement;
