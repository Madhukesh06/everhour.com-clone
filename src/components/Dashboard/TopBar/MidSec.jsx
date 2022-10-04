import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Switch,
    chakra,
} from "@chakra-ui/react";
import React from "react";

const MidSec = () => {
    return (
        <Box
            display="flex"
            align="center"
            w={{ base: "100%", md: "25%" }}
            border={{ base: "1px solid #e8e8e8", md: "hidden" }}
            borderRadius={{ base: "0.5rem", md: "0" }}
            mt={{ base: "0.8rem", md: "0" }}
            mb={{ base: "0.8rem", md: "0" }}
        >
            <Box
                w={{base: '60%', md:"50%"}}
                borderLeft={{ base: "0", md: "1px solid #e8e8e8" }}
                padding={{ base: "0", md: "0.5rem" }}
            >
                <FormControl
                    overflow="hidden"
                    mx="1rem"
                    display="flex"
                    align="center"
                    py="0.2rem"
                >
                    <FormLabel
                        htmlFor="email-alerts"
                        mb="0"
                        color="gray"
                        cursor="pointer"
                    >
                        Time/Period
                    </FormLabel>
                    <Switch id="email-alerts" colorScheme="green" />
                </FormControl>
                <Input
                    ml="1rem"
                    variant={{ outline: "none" }}
                    padding="0"
                    align="left"
                    placeholder="ex. 2h"
                    _placeholder={{ opacity: "0.3" }}
                />
            </Box>

            <Box width="50%" align="left" ml="1rem" borderLeft="1px solid #e8e8e8">
                <Box px="0.9rem" py="0.2rem">
                    <chakra.p color="gray">Date</chakra.p>
                    <chakra.p
                        padding="1rem 0 0 0"
                        color="gray"
                        cursor="pointer"
                        _hover={{ color: "blue.400" }}
                    >
                        Today
                    </chakra.p>
                </Box>
            </Box>
        </Box>
    );
};

export default MidSec;
