import { Box, Text, Heading, Image, Icon } from "@chakra-ui/react";

type propTypes = {
  heading: string;
  description: string;
  image: string;
};

function SliderCard({ heading, description, image }: propTypes) {
  return (
    <Box
      bg="primary"
      width={267}
      h={267}
      borderRadius={10}
      py={8}
      px={4}
      pr={6}
    >
      <Box
        bg="white"
        borderRadius="100"
        w="2.8rem"
        h="2.8rem"
        pt={"4px"}
        mb="1rem"
        alignItems={"center"}
        justifyContent="center"
      >
        <Image src={image && image} m="auto" />
      </Box>

      <Heading color="white" fontWeight="bold" fontSize={18} fontFamily="Inter">
        {heading && heading}
      </Heading>

      <Text color="light.2" mt="1.5rem" fontSize={14}>
        {description && description}
      </Text>
    </Box>
  );
}

export default SliderCard;
