import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import BottomComp from "./BottomComp";
import MidComp from "./MidComp";
import TopComp from "./TopComp";

const Personal = () => {
    return (
        <Box  w='90%' borderTop='1px solid lightGray' py={7}>
            <Heading
                // ml={{ base: "0.6rem", md: "0.9rem" }}
                as="h6"
                size="md"
                align="left"
                fontWeight={400}
                mb={5}
            >
                Personal Preferences
            </Heading>
            <TopComp />
            <MidComp />
            <BottomComp />
        </Box>
    );
};

export default Personal;
