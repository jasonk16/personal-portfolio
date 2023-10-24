/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectCardReverseOverridesProps = {
    ProjectCardReverse?: PrimitiveOverrideProps<FlexProps>;
    "cover-image"?: PrimitiveOverrideProps<FlexProps>;
    "image 1"?: PrimitiveOverrideProps<ImageProps>;
    content?: PrimitiveOverrideProps<FlexProps>;
    "UX DESIGN"?: PrimitiveOverrideProps<TextProps>;
    "Project Name: A caption of the project"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue nibh a semper elementum. Integer eu quam fermentum, vehicula felis."?: PrimitiveOverrideProps<TextProps>;
    "READ MORE"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ProjectCardReverseProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ProjectCardReverseOverridesProps | undefined | null;
}>;
export default function ProjectCardReverse(props: ProjectCardReverseProps): React.ReactElement;
