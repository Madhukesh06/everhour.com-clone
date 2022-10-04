import React from "react";
import { Box } from "@chakra-ui/react";
import MidHero from "./MidHero";
import BottomHero from "./BottomHero";

function Hero() {
  return (
    <Box mt={{ base: "40px", md: "80px" }}>
      <MidHero />
      <Box w={{ base: "80%", md: "60%", lg: "35%" }} m="auto">
        <BottomHero />
      </Box>
    </Box>
  );
}

export default Hero;
