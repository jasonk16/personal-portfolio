/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function TextInput(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Label: {}, Placeholder: {}, Input: {}, TextInput: {} },
      variantValues: { mode: "default" },
    },
    {
      overrides: {
        Label: {},
        Placeholder: { color: "rgba(35,31,31,1)", children: "Lorem Ipsum" },
        Input: {},
        TextInput: {},
      },
      variantValues: { mode: "filled" },
    },
    {
      overrides: {
        Label: {},
        Placeholder: {},
        Input: {
          height: "159px",
          alignItems: "flex-start",
          border: "2px SOLID rgba(160,152,152,1)",
          padding: "14px 14px 14px 14px",
          borderRadius: "10px",
        },
        TextInput: { gap: "16px" },
      },
      variantValues: { mode: "multiline" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="column"
      width="485px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "TextInput")}
      {...rest}
    >
      <Text
        fontFamily="Poppins"
        fontSize="20px"
        fontWeight="500"
        color="rgba(100,94,94,1)"
        lineHeight="30px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.25px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Label"
        {...getOverrideProps(overrides, "Label")}
      ></Text>
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        border="1px SOLID rgba(160,152,152,1)"
        padding="15px 0px 15px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Input")}
      >
        <Text
          fontFamily="Poppins"
          fontSize="20px"
          fontWeight="500"
          color="rgba(160,152,152,1)"
          lineHeight="30px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.25px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Placeholder"
          {...getOverrideProps(overrides, "Placeholder")}
        ></Text>
      </Flex>
    </Flex>
  );
}
