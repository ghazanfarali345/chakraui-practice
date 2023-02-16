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
    <Container maxW={1300} py="4rem" m="auto">
      <Grid templateColumns="1fr 2fr">
        <GridItem h={362}>
          <Text color="primary">What We Give</Text>
          <Heading
            my="1rem"
            fontWeight={"bold"}
            fontSize={40}
            // pr={10}
            maxW={290}
            lineHeight={1.5}
          >
            What do You Get From Us
          </Heading>
          <Text color="light.1" mt="1rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            dignissim, sem non convallis molestie.
          </Text>
        </GridItem>
        <GridItem h={362}>
          <Flex gap={10}>
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
