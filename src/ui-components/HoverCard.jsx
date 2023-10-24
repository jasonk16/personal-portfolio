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
import MyIcons from "./MyIcons";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function HoverCard(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        MyIcons: {},
        "Rectangle 9": {},
        "CARD TITLE": {},
        "Frame 48": {},
        HoverCard: {},
      },
      variantValues: { mode: "default" },
    },
    {
      overrides: {
        MyIcons: { display: "none" },
        "Rectangle 9": { display: "block" },
        "CARD TITLE": {},
        "Frame 48": { display: "flex" },
        HoverCard: {},
      },
      variantValues: { mode: "hover" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="8px"
      direction="row"
      width="300px"
      height="300px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      borderRadius="20px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(39,24,124,1)"
      display="flex"
      {...getOverrideProps(overrides, "HoverCard")}
      {...rest}
    >
      <MyIcons
        width="56px"
        height="56px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        type="dashboard"
        {...getOverrideProps(overrides, "MyIcons")}
      ></MyIcons>
      <Image
        width="unset"
        height="unset"
        display="none"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        borderRadius="20px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "Rectangle 9")}
      ></Image>
      <Flex
        gap="8px"
        direction="column"
        width="300px"
        height="300px"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="16px 16px 16px 16px"
        backgroundColor="rgba(39,24,126,0.6)"
        display="none"
        {...getOverrideProps(overrides, "Frame 48")}
      >
        <Text
          fontFamily="Poppins"
          fontSize="32px"
          fontWeight="700"
          color="rgba(245,239,239,1)"
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
          children="CARD TITLE"
          {...getOverrideProps(overrides, "CARD TITLE")}
        ></Text>
      </Flex>
    </Flex>
  );
}
