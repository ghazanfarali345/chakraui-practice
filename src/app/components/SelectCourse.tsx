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

function SelectCourse() {
  return (
    <Box bg="primary" p={{ base: 1, lg: 4 }}>
      <Container maxW="1140px">
        <Grid
          templateColumns={{ lg: "repeat(2, 1fr)" }}
          alignItems="center"
          gap={20}
        >
          <GridItem
            // bg="green"
            position="relative"
            justifyContent="center"
            // alignItems="center"
            alignContent="center"
            p={4}
          >
            <Image
              src="/images/orange-circle.svg"
              position="absolute"
              top="3rem"
              left="70"
              w="5"
            />
            <Image
              src="/images/blue-circle.svg"
              position="absolute"
              top="7rem"
              left="5"
              w="5"
            />
            <Image
              src="/images/white-circle.svg"
              position="absolute"
              top="15"
              right="113"
              w="70"
            />
            <Image src="/images/select-course-image.svg" />
            <Image
              src="/images/orange-circle.svg"
              position="absolute"
              bottom="6rem"
              left="3.75rem"
              w="70"
            />
            <Image
              src="/images/blue-circle.svg"
              position="absolute"
              bottom="15rem"
              right={9}
              w="8"
            />

            <Image
              src="/images/white-circle.svg"
              position="absolute"
              bottom="12rem"
              right={13}
              w="5"
            />
          </GridItem>
          <GridItem>
            <Text color="yellow">SELECTED COURSE</Text>
            <Heading
              fontSize={{ md: 20, lg: 40 }}
              color={"white"}
              my={4}
              lineHeight={1.5}
            >
              People Taking <br />
              Courses
            </Heading>
            <Text
              color="light.2"
              fontSize={{ base: 13 }}
              display="flex"
              flexWrap={"wrap"}
            >
              Lorem ipsum dolor sit amet, consectetur <br />
              adipiscing elit. Etiam dignissim, sem non convallis molestie.
            </Text>
            <Grid
              templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
              mt={5}
            >
              <GridItem>
                <Text color="yellow" fontSize={24} fontWeight="bold">
                  6000
                </Text>
                <Text color="light.2">People Views</Text>
              </GridItem>
              <GridItem>
                <Text color="yellow" fontSize={24} fontWeight="bold">
                  6000
                </Text>
                <Text color="light.2">People Views</Text>
              </GridItem>
              <GridItem mt={{ base: "10px", lg: "none" }}>
                <Text color="yellow" fontSize={24} fontWeight="bold">
                  6000
                </Text>
                <Text color="light.2">People Views</Text>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default SelectCourse;
