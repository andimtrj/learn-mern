import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";

function ProductCard({ product }) {
  const bg = useColorModeValue("white", "gray.800");

  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={bg}
    ></Box>
  );
}

export default ProductCard;
