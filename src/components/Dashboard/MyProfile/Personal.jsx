import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import BottomComp from "./BottomComp";
import MidComp from "./MidComp";
import TopComp from "./TopComp";

const Personal = () => {
  return (
    <Box
      w={"100%"}
      p={{ base: 3, md: 7 }}
      align={"left"}
      color={"blackAlpha.800"}
      border={"1px solid lightgray"}
      bg={"white"}
      borderRadius={"lg"}
      mt={{ base: 3, md: 7 }}
    >
      <Heading align={"left"} size={"lg"} mb={4} fontWeight={400}>
        Personal Preferences
      </Heading>
      <TopComp />
      <MidComp />
      <BottomComp />
    </Box>
  );
};

export default Personal;
