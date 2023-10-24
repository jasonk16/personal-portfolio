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
import MyIconsLogo from "./MyIconsLogo";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Navbar(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "MyIcons/Logo": {},
        Work: {},
        About: {},
        "Get In Touch": {},
        "navigation-items": {},
        Navbar: {},
      },
      variantValues: { active: "default" },
    },
    {
      overrides: {
        "MyIcons/Logo": {},
        Work: { color: "rgba(160,152,152,1)" },
        About: {},
        "Get In Touch": {},
        "navigation-items": {},
        Navbar: {},
      },
      variantValues: { active: "work" },
    },
    {
      overrides: {
        "MyIcons/Logo": {},
        Work: {},
        About: { color: "rgba(160,152,152,1)" },
        "Get In Touch": {},
        "navigation-items": {},
        Navbar: {},
      },
      variantValues: { active: "about" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="1030px"
      direction="row"
      width="1440px"
      height="80px"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      borderRadius="0px 0px 20px 20px"
      padding="16px 64px 16px 64px"
      backgroundColor="rgba(245,239,239,0.5)"
      display="flex"
      {...getOverrideProps(overrides, "Navbar")}
      {...rest}
    >
      <MyIconsLogo
        width="113px"
        height="36px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "MyIcons/Logo")}
      ></MyIconsLogo>
      <Flex
        gap="64px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "navigation-items")}
      >
        <Text
          fontFamily="Poppins"
          fontSize="20px"
          fontWeight="500"
          color="rgba(35,31,31,1)"
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
          children="Work"
          {...getOverrideProps(overrides, "Work")}
        ></Text>
        <Text
          fontFamily="Poppins"
          fontSize="20px"
          fontWeight="500"
          color="rgba(35,31,31,1)"
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
          children="About"
          {...getOverrideProps(overrides, "About")}
        ></Text>
        <Text
          fontFamily="Poppins"
          fontSize="20px"
          fontWeight="500"
          color="rgba(39,24,124,1)"
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
          children="Get In Touch"
          {...getOverrideProps(overrides, "Get In Touch")}
        ></Text>
      </Flex>
    </Flex>
  );
}
