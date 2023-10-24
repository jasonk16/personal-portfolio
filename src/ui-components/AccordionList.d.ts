/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MyIconsProps } from "./MyIcons";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AccordionListOverridesProps = {
    AccordionList?: PrimitiveOverrideProps<FlexProps>;
    title?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43"?: PrimitiveOverrideProps<FlexProps>;
    MyIcons4553?: MyIconsProps;
    "List Title"?: PrimitiveOverrideProps<TextProps>;
    MyIcons4555?: MyIconsProps;
    "Frame 50"?: PrimitiveOverrideProps<FlexProps>;
    "This is a section title"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam risus erat, porta eget magna eu, fringilla ornare nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type AccordionListProps = React.PropsWithChildren<Partial<FlexProps> & {
    mode?: "close" | "open";
} & {
    overrides?: AccordionListOverridesProps | undefined | null;
}>;
export default function AccordionList(props: AccordionListProps): React.ReactElement;
