import { Flex, Image, Text, Box, Icon } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Tabs({ text, profile, src }) {
  return (
    <Flex
      // border="1px solid white"
      justifyContent="left"
      alignItems="center"
      w="100%"
      // gap="10px"
      p="9px 0px 9px 4px"
      borderRadius="6px"
      transition="0.2s ease-out"
      _hover={{
        background: "gray.100",
        opacity: "0.9",
        transition: "0.2s ease-out"
      }}
      as={NavLink}
      to='/dashboard/time'
    >
      <Icon as={src} fontSize="26px" color="gray" />

      <Text
        fontSize="14px"
        fontWeight="400"
        textDecoration="none"
        ml="12px"
        color="#222"
      >
        {text}
      </Text>
    </Flex>
  );
}
