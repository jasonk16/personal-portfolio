/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
import CTAButton from "./CTAButton";
import MyIcons from "./MyIcons";
export default function Footer(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="40px"
      direction="column"
      width="1312px"
      height="unset"
      justifyContent="center"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(212,205,205,1)"
      padding="31px 0px 31px 0px"
      {...getOverrideProps(overrides, "Footer")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="64px 0px 64px 0px"
        {...getOverrideProps(overrides, "Frame 34")}
      >
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "cta-text")}
        >
          <Text
            fontFamily="Playfair Display"
            fontSize="40px"
            fontWeight="600"
            color="rgba(35,31,31,1)"
            lineHeight="56px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.65px"
            width="647px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Say Hello! 👋 "
            {...getOverrideProps(overrides, "Say Hello! \uD83D\uDC4B")}
          ></Text>
          <Text
            fontFamily="Poppins"
            fontSize="18px"
            fontWeight="400"
            color="rgba(101,95,95,1)"
            lineHeight="28.80000114440918px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.39px"
            width="647px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="I love making new friends and meeting new people. Whether is a new opportunity or question, I’m always down for a chat."
            {...getOverrideProps(
              overrides,
              "I love making new friends and meeting new people. Whether is a new opportunity or question, I\u2019m always down for a chat."
            )}
          ></Text>
        </Flex>
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
      <Flex
        gap="40px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 37")}
      >
        <Text
          fontFamily="Poppins"
          fontSize="14px"
          fontWeight="500"
          color="rgba(101,95,95,1)"
          lineHeight="22.399999618530273px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.41px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="© 2023 Jason Khoo"
          {...getOverrideProps(overrides, "\u00A9 2023 Jason Khoo")}
        ></Text>
        <Flex
          gap="32px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-end"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 38")}
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
            type="linkedin"
            {...getOverrideProps(overrides, "MyIcons39061416")}
          ></MyIcons>
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
            type="github"
            {...getOverrideProps(overrides, "MyIcons39061419")}
          ></MyIcons>
        </Flex>
      </Flex>
    </Flex>
  );
}
