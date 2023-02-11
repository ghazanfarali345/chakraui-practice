"use client";

import {
  Box,
  Flex,
  Link,
  Button,
  chakra,
  Image,
  Container,
} from "@chakra-ui/react";

let hoverEffectForNavbar = {
  textDecoration: "none",
  fontWeight: "bold",
  transition: "all  0.3s",
};

function Header() {
  return (
    <Box bg="white" boxShadow="base" py={4}>
      <Container maxW="1140px">
        <Flex justifyContent="space-between">
          <Image src="/images/logo.svg" />
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
        </Flex>
      </Container>
    </Box>
  );
}

export default Header;
