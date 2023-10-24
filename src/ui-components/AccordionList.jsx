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
import { Flex, Text } from "@aws-amplify/ui-react";
export default function AccordionList(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        MyIcons4553: {},
        "List Title": {},
        "Frame 43": {},
        MyIcons4555: {},
        title: {},
        "This is a section title": {},
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam risus erat, porta eget magna eu, fringilla ornare nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.":
          {},
        "Frame 50": { display: "flex" },
        AccordionList: {},
      },
      variantValues: { mode: "open" },
    },
    {
      overrides: {
        MyIcons4553: {},
        "List Title": {},
        "Frame 43": {},
        MyIcons4555: {},
        title: {},
        "This is a section title": {},
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam risus erat, porta eget magna eu, fringilla ornare nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.":
          {},
        "Frame 50": {},
        AccordionList: {},
      },
      variantValues: { mode: "close" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="16px"
      direction="column"
      width="646px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(213,205,205,1)"
      borderRadius="20px"
      padding="23px 23px 23px 23px"
      display="flex"
      {...getOverrideProps(overrides, "AccordionList")}
      {...rest}
    >
      <Flex
        gap="8px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="space-between"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "title")}
      >
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="36px"
          justifyContent="flex-start"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 43")}
        >
          <MyIcons
            width="36px"
            height="36px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            type="paper"
            {...getOverrideProps(overrides, "MyIcons4553")}
          ></MyIcons>
          <Text
            fontFamily="Poppins"
            fontSize="24px"
            fontWeight="700"
            color="rgba(100,94,94,1)"
            lineHeight="36px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.33px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="List Title"
            {...getOverrideProps(overrides, "List Title")}
          ></Text>
        </Flex>
        <MyIcons
          width="36px"
          height="36px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          type="chevron-right-large"
          {...getOverrideProps(overrides, "MyIcons4555")}
        ></MyIcons>
      </Flex>
      <Flex
        gap="8px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="none"
        {...getOverrideProps(overrides, "Frame 50")}
      >
        <Text
          fontFamily="Poppins"
          fontSize="20px"
          fontWeight="500"
          color="rgba(0,0,0,1)"
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
          children="This is a section title"
          {...getOverrideProps(overrides, "This is a section title")}
        ></Text>
        <Text
          fontFamily="Poppins"
          fontSize="18px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="28.80000114440918px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.39px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam risus erat, porta eget magna eu, fringilla ornare nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia."
          {...getOverrideProps(
            overrides,
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam risus erat, porta eget magna eu, fringilla ornare nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia."
          )}
        ></Text>
      </Flex>
    </Flex>
  );
}
