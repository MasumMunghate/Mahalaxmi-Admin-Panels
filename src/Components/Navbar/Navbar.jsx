import {
  Flex,
  Box,
  Avatar,
  InputLeftElement,
  Text,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import React from "react";

const Navbar = () => {
  return (
    <Box
      width={{base: "100%", md: "79%" }}
      marginLeft={{ base: "0", md: "16rem" }}
      px={4}
      py={2}
      bg="white"
    >
      <Flex
      width={{base: "100%", md: "100%" }}
        direction={{ base: "row", md: "row" }}
        justify={{ base: "end", md: "end" }}
        align="center"
        height="4rem"
        gap="3rem"
        boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
      >
        {/* <Text
          fontSize={["1rem", "2rem"]}
          mb={{ base: 2, md: 0 }}
          textAlign={{ base: "center", md: "left" }}
          ml={{ base: "5rem", md: "3rem" }}
        >
          Hello Jone!! 👋
        </Text> */}
        <Flex direction={{ base: "column", lg: "row" }}>
          <InputGroup borderRadius="10px" width={{base: "80%", md: "100%" }} ml='5rem'>
            <InputLeftElement pointerEvents="none" mt="1" borderRadius="10px">
              <Search2Icon color="gray.400" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search courses or another..."
              ml="0.1rem"
              padding="1rem"
              borderRadius="10px"
            />
          </InputGroup>
        </Flex>
        <Flex align="center" gap={{ base: 2, md: "1rem" }}>
          <Box>
            <Avatar
              size="md"
              name="John Doe"
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
              ml={{ base: 2, md: 0 }}
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;


