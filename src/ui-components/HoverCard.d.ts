/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MyIconsProps } from "./MyIcons";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HoverCardOverridesProps = {
    HoverCard?: PrimitiveOverrideProps<FlexProps>;
    MyIcons?: MyIconsProps;
    "Rectangle 9"?: PrimitiveOverrideProps<ImageProps>;
    "Frame 48"?: PrimitiveOverrideProps<FlexProps>;
    "CARD TITLE"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type HoverCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    mode?: "default" | "hover";
} & {
    overrides?: HoverCardOverridesProps | undefined | null;
}>;
export default function HoverCard(props: HoverCardProps): React.ReactElement;
