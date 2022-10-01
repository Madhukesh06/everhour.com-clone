import { Heading } from "@chakra-ui/react";
import React from "react";
import BottomComp from "./BottomComp";
import MidComp from "./MidComp";
import TopComp from "./TopComp";

const Personal = () => {
    return (
        <>
            <Heading
                ml={{ base: "0.6rem", md: "0.9rem" }}
                as="h6"
                size="md"
                align="left"
                fontWeight={400}
            >
                Personal Preferences
            </Heading>
            <TopComp />
            <MidComp />
            <BottomComp />
        </>
    );
};

export default Personal;
