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
      <Container maxW="1140px">
        <Grid templateColumns="repeat(2, 1fr)">
          <GridItem w="100%" h="545">
            <Text color="primary" fontSize={18}>
              Let's <chakra.span fontWeight="bold">Begins</chakra.span>
            </Text>
            <Heading
              fontSize={64}
              my="1rem"
              lineHeight={1.5}
              textShadow="0 1.5px #c7c7c7"
            >
              Let's Find The Right{" "}
              <chakra.span color="primary">Course</chakra.span> For you
            </Heading>
            <Text color="light.1" mt="2rem">
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
          <GridItem w="100%" h="545">
            <Image src="/images/banner-image.svg" />
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default Hero;
