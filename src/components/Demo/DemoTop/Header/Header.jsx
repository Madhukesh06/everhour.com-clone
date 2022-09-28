import React from "react";
import { chakra } from "@chakra-ui/react";

const Header = () => {
    return (
        <chakra.h1
            fontSize="3rem"
            letterSpacing="0.01em"
            color="#333"
            lineHeight="1.17"
            fontWeight="600"
            _dark={{ color: "white" }}
        >
            <chakra.span display={{ base: "block", xl: "inline" }}>
                Book a 30-min live demo 🚀
            </chakra.span>
        </chakra.h1>
    );
};

export default Header;
