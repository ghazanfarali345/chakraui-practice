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
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  return (
    <Container maxW={"80%"} mt={"80px"}>
      <Heading textAlign={"center"} mb={"40px"}>
        Testimonials
      </Heading>
      <Grid templateColumns={"repeat(2, 1fr)"} gap={5}>
        <GridItem>
          <TestimonialCard
            image="/images/testimonial-img1.svg"
            name="Friskidia"
            subLine="Client"
            starImage="/images/Star.svg"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum dapibus luctus."
          />
        </GridItem>
        <GridItem>
          <TestimonialCard
            image="/images/testimonial-img2.svg"
            name="Finkidia"
            subLine="Client"
            starImage="/images/Star.svg"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum dapibus luctus."
          />
        </GridItem>
      </Grid>
    </Container>
  );
}

export default Testimonials;
