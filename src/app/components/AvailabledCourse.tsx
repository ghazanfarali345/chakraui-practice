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
import AvailableCourseCard from "./AvailableCourseCard";

function AvailabledCourse() {
  return (
    <Box p={5} pt={20}>
      <Container maxW="80%">
        <Grid templateColumns="repeat(2, 1fr)" gap={20}>
          <GridItem>
            <Grid templateColumns="repeat(2, 2fr )" gap="10">
              <GridItem>
                <AvailableCourseCard
                  title="HTML & CSS"
                  image="/images/course1.svg"
                  price="$ 20 USD"
                  noOfTeachers="2 Teachers"
                  noOfVideos="120 Videos"
                  noOfViews="1,500 Views"
                />
              </GridItem>
              <GridItem>
                <AvailableCourseCard
                  title="Photographer"
                  image="/images/course2.svg"
                  price="$ 20 USD"
                  noOfTeachers="2 Teachers"
                  noOfVideos="100 Videos"
                  noOfViews="1,500 Views"
                />
              </GridItem>
              <GridItem>
                <AvailableCourseCard
                  title="Javascript"
                  image="/images/course3.svg"
                  price="$ 20 USD"
                  noOfTeachers="2 Teachers"
                  noOfVideos="120 Videos"
                  noOfViews="1,500 Views"
                />
              </GridItem>
              <GridItem>
                <AvailableCourseCard
                  title="Desain Grafis"
                  image="/images/course4.svg"
                  price="$ 20 USD"
                  noOfTeachers="2 Teachers"
                  noOfVideos="120 Videos"
                  noOfViews="1,500 Views"
                />
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem>
            <Text color="primary" mb="16px">
              Available for you
            </Text>
            <Heading mb="16px" fontSize={"40px"} lineHeight="60px">
              Available <br /> Course
            </Heading>
            <Text mb="24px" color={"light.1"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              dignissim, sem non convallis molestie.
            </Text>

            <Button variant={"primary"} px={10}>
              See all
            </Button>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default AvailabledCourse;
