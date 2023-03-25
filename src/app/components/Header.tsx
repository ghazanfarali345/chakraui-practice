"use client";

import React from "react";

import {
  Box,
  Flex,
  Link,
  Button,
  chakra,
  Image,
  Container,
  Icon,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Text,
  IconButton,
} from "@chakra-ui/react";

import { FaBars } from "react-icons/fa";

let hoverEffectForNavbar = {
  textDecoration: "none",
  fontWeight: "bold",
  transition: "all  0.3s",
};

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Box
      bg="white"
      boxShadow="base"
      py={4}
      position="sticky"
      top="0"
      zIndex={999}
      width={"100%"}
    >
      <Container maxW={{ base: "90%", lg: "80%" }}>
        <Flex justifyContent="space-between">
          <Image src="/images/logo.svg" />
          <Box display={{ base: "none", md: "none", lg: "block" }}>
            <Flex gap={7} alignItems="center">
              <chakra.nav display="flex" gap={7}>
                <Link
                  _hover={hoverEffectForNavbar}
                  fontWeight="bold"
                  cursor="pointer"
                >
                  Home
                </Link>
                <Link _hover={hoverEffectForNavbar}>Course</Link>
                <Link _hover={hoverEffectForNavbar}>About Us</Link>
                <Link _hover={hoverEffectForNavbar}>Article</Link>
                <Link _hover={hoverEffectForNavbar}>Contact</Link>
              </chakra.nav>
              <Button variant={"secondary"} px="4rem">
                Login
              </Button>
              <Button variant={"primary"} px="3.5rem">
                Register
              </Button>
            </Flex>
          </Box>

          <IconButton
            aria-label="Search database"
            variant={"unstyled"}
            icon={<FaBars />}
            fontSize={30}
            ref={btnRef.current}
            colorScheme="teal"
            onClick={onOpen}
            display={{ base: "block", md: "block", lg: "none" }}
          />
        </Flex>
      </Container>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef.current}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Text>asfda</Text>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Header;
