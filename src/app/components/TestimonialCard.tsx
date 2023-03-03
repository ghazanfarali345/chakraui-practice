import { Flex, Box, Text, Image } from "@chakra-ui/react";
import React from "react";

type props = {
  image: string;
  name: string;
  subLine: string;
  starImage: string;
  paragraph: string;
};

function TestimonialCard({
  image,
  name,
  subLine,
  starImage,
  paragraph,
}: props) {
  return (
    <Box
      boxShadow="2xl"
      position={"relative"}
      p={12}
      _before={{
        content: '""',
        display: "block",
        position: "absolute",
        top: "0",
        right: "0",
        width: 0,
        height: 0,
        borderLeft: "25px solid transparent",
        borderBottom: "70px solid transparent",
        borderRight: "70px solid #F4F4F4",
      }}
    >
      <Flex>
        <Image src={image} alt="Client image" />
        <Box ml={5}>
          <Text fontSize={"18px"} fontWeight="bold">
            {name}
          </Text>
          <Text fontSize={"14px"} color="light.1" mt={2}>
            {subLine}
          </Text>
        </Box>
      </Flex>
      <Flex mt={5}>
        <Image src={starImage} />
        <Image src={starImage} />
        <Image src={starImage} />
        <Image src={starImage} />
        <Image src={starImage} />
      </Flex>
      <Box pt={5} pl={2} fontSize={18} color="dark.4" maxW="588px" pr={"66px"}>
        &quot; {paragraph} &quot;
      </Box>
    </Box>
  );
}

export default TestimonialCard;
