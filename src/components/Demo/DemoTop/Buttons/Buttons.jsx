import { Box, Stack, chakra } from "@chakra-ui/react";
import React from "react";

const Buttons = () => {
    return (
        <Stack
            direction={{ base: "column", sm: "column", md: "row" }}
            mb={{ base: 4, md: 8 }}
            spacing={{ base: 4, md: 8 }}
            justifyContent="center"
        >
            <Box rounded="full">
                <chakra.a
                    w="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    border="solid 1px transparent"
                    fontSize="1rem"
                    rounded="md"
                    color="white"
                    bg="#57BB71"
                    lineHeight="1"
                    fontWeight="normal"
                    _hover={{ bg: "green.500", transition: ".5s" }}
                    px={{ base: 10, md: 12 }}
                    py={{ base: 4, md: 5 }}
                    cursor="pointer"
                >
                    Schedule time
                </chakra.a>
            </Box>
            <Box>
                <chakra.a
                    w="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    px={{ base: 8, md: 12 }}
                    py={{ base: 3, md: 4 }}
                    border="solid 1px #57BB71"
                    fontSize="1rem"
                    rounded="md"
                    color="#3ACA7F"
                    bg="brand.100"
                    _hover={{ bg: "green.50", transition: ".5s" }}
                    cursor="pointer"
                >
                    Watch videos
                </chakra.a>
            </Box>
        </Stack>
    );
};

export default Buttons;
