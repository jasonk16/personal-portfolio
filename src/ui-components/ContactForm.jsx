/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
import TextInput from "./TextInput";
import CTAButton from "./CTAButton";
export default function ContactForm(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="32px"
      direction="column"
      width="800px"
      height="unset"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      borderRadius="20px"
      padding="32px 32px 32px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "ContactForm")}
      {...rest}
    >
      <Text
        fontFamily="Poppins"
        fontSize="32px"
        fontWeight="700"
        color="rgba(100,94,94,1)"
        lineHeight="48px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.49px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Fill in the form below."
        {...getOverrideProps(overrides, "Fill in the form below.")}
      ></Text>
      <TextInput
        display="flex"
        gap="0"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        mode="default"
        {...getOverrideProps(overrides, "TextInput39161545")}
      ></TextInput>
      <TextInput
        display="flex"
        gap="0"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        mode="default"
        {...getOverrideProps(overrides, "TextInput39161549")}
      ></TextInput>
      <TextInput
        display="flex"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        mode="multiline"
        {...getOverrideProps(overrides, "TextInput39161553")}
      ></TextInput>
      <CTAButton
        display="flex"
        gap="8px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        borderRadius="12px"
        padding="12px 40px 12px 40px"
        backgroundColor="rgba(39,24,124,1)"
        {...getOverrideProps(overrides, "CTAButton")}
      ></CTAButton>
    </Flex>
  );
}
