import {
  Box,
  Grid,
  GridItem,
  Container,
  Text,
  Heading,
  Flex,
} from "@chakra-ui/react";

import SliderCard from "./SliderCard";

function Slider() {
  return (
    <Container maxW={"80%"} py="4rem" m="auto">
      <Grid templateColumns={{ lg: "1fr 2fr" }}>
        <GridItem h={{ base: 210, lg: 362 }}>
          <Text color="primary">What We Give</Text>
          <Heading
            my="1rem"
            fontWeight={"bold"}
            fontSize={{ base: 20, lg: 40 }}
            maxW={290}
            lineHeight={1.5}
          >
            What do You Get From Us
          </Heading>
          <Text color="light.1" mt="1rem" display="flex" flexWrap={"wrap"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            dignissim, sem non convallis molestie.
          </Text>
        </GridItem>
        <GridItem>
          <Flex
            gap={{ base: 4, lg: 10 }}
            flexDir={{ base: "column", lg: "row" }}
          >
            <SliderCard
              heading="Professional Teacher"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie."
              image="/images/user-icon.svg"
            />
            <SliderCard
              heading="Course Certificate"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie."
              image="/images/hat-icon.svg"
            />
            <SliderCard
              heading="Interesting learning"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie."
              image="/images/badge-icon.svg"
            />
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default Slider;
