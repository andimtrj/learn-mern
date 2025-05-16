import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, Container, Flex, HStack, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import { BsPlusSquare } from "react-icons/bs";
import { Link } from "react-router-dom";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", sm: "row" }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
        >
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>

        <HStack align={"center"} wordSpacing={2}>
          <Link to={"/create"}> <Button> <BsPlusSquare fontSize={20} /> </Button> </Link>
          <Button onClick={toggleColorMode}> {colorMode === "light" ? <MoonIcon/> : <SunIcon/> } </Button>

        </HStack>
      </Flex>
    </Container>
  );
}

export default Navbar;
