/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function ProjectCardReverse(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="20px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ProjectCardReverse")}
      {...rest}
    >
      <Flex
        gap="8px"
        direction="row"
        width="645px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        borderRadius="20px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "cover-image")}
      >
        <Image
          width="unset"
          height="unset"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "image 1")}
        ></Image>
      </Flex>
      <Flex
        gap="16px"
        direction="column"
        width="646px"
        height="550px"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        borderRadius="20px"
        padding="32px 32px 32px 32px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "content")}
      >
        <Text
          fontFamily="Poppins"
          fontSize="14px"
          fontWeight="500"
          color="rgba(160,152,152,1)"
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
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="UX DESIGN"
          {...getOverrideProps(overrides, "UX DESIGN")}
        ></Text>
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
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Project Name: A caption of the project"
          {...getOverrideProps(
            overrides,
            "Project Name: A caption of the project"
          )}
        ></Text>
        <Text
          fontFamily="Poppins"
          fontSize="18px"
          fontWeight="400"
          color="rgba(100,94,94,1)"
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
          children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue nibh a semper elementum. Integer eu quam fermentum, vehicula felis."
          {...getOverrideProps(
            overrides,
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue nibh a semper elementum. Integer eu quam fermentum, vehicula felis."
          )}
        ></Text>
        <Text
          fontFamily="Poppins"
          fontSize="16px"
          fontWeight="500"
          color="rgba(39,24,124,1)"
          textTransform="capitalize"
          lineHeight="24px"
          textAlign="center"
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
          children="READ MORE"
          {...getOverrideProps(overrides, "READ MORE")}
        ></Text>
      </Flex>
    </Flex>
  );
}
