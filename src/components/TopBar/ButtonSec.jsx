import { Box, Button } from "@chakra-ui/react";
import React from "react";

const ButtonSec = () => {
    return (
        <Box width={{ base: "100%", md: "15%" }}>
            <Button
                h="100%"
                bg="#24BE6A"
                padding={{ base: "1.5rem", md: "1.8rem" }}
                _hover={{ backgroundColor: "green" }}
                borderRadius={{ base: "0.2rem", md: "0" }}
                color="white"
                width="100%"
                fontWeight="400"
            >
                Start Timer
            </Button>
        </Box>
    );
};

export default ButtonSec;
