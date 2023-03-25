import { Box, Image, Text, Flex } from "@chakra-ui/react";

type propTypes = {
  title: string;
  image: string;
  price: string;
  noOfTeachers: string;
  noOfVideos: string;
  noOfViews: string;
};

function AvailableCourseCard({
  title,
  image,
  price,
  noOfTeachers,
  noOfVideos,
  noOfViews,
}: propTypes) {
  return (
    <Box
      position="relative"
      boxShadow="2xl"
      borderRadius="10"
      minWidth={{ lg: "328px" }}
    >
      <Box bg={"primary"} p="2" position={"absolute"} top={5}>
        <Text
          color="white"
          fontWeight={"bold"}
          fontSize={{ base: "11px", lg: "16px" }}
          letterSpacing={1}
        >
          Best course
        </Text>
      </Box>
      <Image src={image} />
      <Box py="5" px="4" position={"relative"}>
        <Text
          position="absolute"
          top="-45px"
          right="4"
          color="white"
          fontSize={{ base: "14px", lg: "22px" }}
          fontWeight="bold"
          lineHeight={"28px"}
        >
          $ 20 USD
          {/* {price && price} */}
        </Text>
        <Flex justifyContent={"space-between"} alignItems="center">
          <Text fontSize={"21px"} fontWeight="bold" lineHeight={"33px"}>
            {/* HTML & CSS */}
            {title && title}
          </Text>
          <Text color="primary" fontSize={13}>
            {/* 1,500 Views */}
            {noOfViews && noOfViews}
          </Text>
        </Flex>
        <Flex gap="5" mt={2}>
          <Text color="light.1" fontSize={13}>
            {/* 120 Videos */}
            {noOfVideos && noOfVideos}
          </Text>
          <Text color="light.1" fontSize={13}>
            {/* 2 Teachers */}
            {noOfTeachers && noOfTeachers}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default AvailableCourseCard;
