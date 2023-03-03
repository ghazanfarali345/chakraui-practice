import React from "react";
import {
  Box,
  Text,
  Container,
  Grid,
  GridItem,
  Image,
  UnorderedList,
  ListItem,
  Icon,
  Flex,
} from "@chakra-ui/react";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <Box bg={"bgDark"} mt={"80px"} color="white" py="100px">
      <Container maxW={"80%"}>
        <Grid templateColumns={"2fr 3fr"} gap={"149px"}>
          <GridItem>
            <Box>
              <Image src="/images/logo-footer.svg" alt="logo" />
            </Box>
            <Text my={5} fontSize={14} color={"light.4"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              mollis, justo nec porttitor auctor, erat sapien faucibus lectus,
              vel tempor dolor augue et lectus.{" "}
            </Text>
            <Box>
              <Flex gap={5}>
                <Box
                  border="solid white 1px"
                  p={2}
                  width="32px"
                  height={"32px"}
                  display="flex"
                  alignItems={"center"}
                  justifyContent="center"
                >
                  <Icon as={FaFacebookF} />
                </Box>
                <Box
                  border="solid white 1px"
                  p={2}
                  width="32px"
                  height={"32px"}
                  display="flex"
                  alignItems={"center"}
                  justifyContent="center"
                >
                  <Icon as={FaTwitter} />
                </Box>{" "}
                <Box
                  border="solid white 1px"
                  p={2}
                  width="32px"
                  height={"32px"}
                  display="flex"
                  alignItems={"center"}
                  justifyContent="center"
                >
                  <Icon as={FaLinkedinIn} />
                </Box>{" "}
                <Box
                  border="solid white 1px"
                  p={2}
                  width="32px"
                  height={"32px"}
                  display="flex"
                  alignItems={"center"}
                  justifyContent="center"
                >
                  <Icon as={FaInstagram} />
                </Box>
              </Flex>
            </Box>
          </GridItem>
          <GridItem>
            <Grid templateColumns={"repeat(4, 1fr)"}>
              <GridItem>
                <UnorderedList spacing={3} listStyleType={"none"}>
                  <ListItem fontSize={18} fontWeight="bold" mb={5}>
                    Home
                  </ListItem>
                  <ListItem color={"light.4"} fontSize={14}>
                    Product
                  </ListItem>
                  <ListItem color={"light.4"} fontSize={14}>
                    Course
                  </ListItem>
                  <ListItem color={"light.4"} fontSize={14}>
                    About us
                  </ListItem>
                  <ListItem color={"light.4"} fontSize={14}>
                    Login
                  </ListItem>
                </UnorderedList>
              </GridItem>

              <GridItem>
                <UnorderedList spacing={3} listStyleType={"none"}>
                  <ListItem fontSize={18} fontWeight="bold" mb={5}>
                    Course
                  </ListItem>
                  <ListItem color={"light.4"} fontSize={14}>
                    HTML & CSS
                  </ListItem>
                  <ListItem color={"light.4"} fontSize={14}>
                    Javascript
                  </ListItem>
                  <ListItem color={"light.4"} fontSize={14}>
                    Photography
                  </ListItem>
                  <ListItem color={"light.4"} fontSize={14}>
                    Grphics Designing
                  </ListItem>
                </UnorderedList>
              </GridItem>

              <GridItem>
                <UnorderedList spacing={3} listStyleType={"none"}>
                  <ListItem fontSize={18} fontWeight="bold" mb={5}>
                    Article
                  </ListItem>
                  <ListItem color={"light.4"} fontSize={14}>
                    New
                  </ListItem>
                  <ListItem color={"light.4"} fontSize={14}>
                    Old
                  </ListItem>
                  <ListItem color={"light.4"} fontSize={14}>
                    Popular
                  </ListItem>
                  <ListItem color={"light.4"} fontSize={14}>
                    Trend
                  </ListItem>
                </UnorderedList>
              </GridItem>

              <GridItem>
                <UnorderedList spacing={3} listStyleType={"none"}>
                  <ListItem fontSize={18} fontWeight="bold" mb={5}>
                    Contact Us
                  </ListItem>
                  <ListItem color={"light.4"} fontSize={14}>
                    abc.info@gmail.com
                  </ListItem>
                </UnorderedList>
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
