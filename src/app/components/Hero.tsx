import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Container,
  Text,
  Heading,
  Flex,
  Button,
  Image,
  chakra,
} from "@chakra-ui/react";

function Hero() {
  return (
    <Box bg="bgLight" py="4rem">
      <Container maxW={{ base: "90%", lg: "80%" }}>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
        >
          <GridItem w="100%" h={{ base: "auto", md: "auto", lg: "545" }}>
            <Text color="primary" fontSize={18}>
              Let&apos;s <chakra.span fontWeight="bold">Begins</chakra.span>
            </Text>
            <Heading
              fontSize={{ base: 25, md: 40, lg: 64 }}
              my="1rem"
              lineHeight={1.5}
              textShadow="0 2px #c7c7c7"
            >
              Let&apos;s Find The Right
              <chakra.span color="primary"> Course</chakra.span> For you
            </Heading>
            <Text
              color="light.1"
              mt="2rem"
              fontSize={{ base: 13, md: 15, lg: 18 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              dignissim, sem non convallis molestie.
            </Text>
            <Flex mt="3rem" gap={5}>
              <Button variant={"primary"} px="3.5rem">
                Register
              </Button>
              <Flex w="100%" alignItems="center" gap={2}>
                <Image src="/images/play-icon.svg" />
                <Text as="b">Play Video</Text>
              </Flex>
            </Flex>
          </GridItem>
          <GridItem
            w="100%"
            h={{ base: "auto", md: "auto", lg: "545" }}
            pt={{ base: 6, md: "none" }}
          >
            <Image src="/images/banner-image.svg" />
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default Hero;
