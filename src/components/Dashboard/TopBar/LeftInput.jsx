import { SearchIcon, SmallAddIcon } from "@chakra-ui/icons";
import { Box, Icon, Input, Tooltip } from "@chakra-ui/react";
import React from "react";

const LeftInput = () => {
    return (
        <Box
            w={{ base: "100%", md: "60%" }}
            border={{ base: "1px solid #e8e8e8", md: "hidden" }}
            borderRadius={{ base: "0.5rem", md: "0" }}
            padding={{ base: "0.8rem" }}
        >
            <Icon
                color="gray"
                cursor="pointer"
                borderRadius="70%"
                px="2px"
                as={SearchIcon}
                boxSize={7}
            />
            <Input
                width="90%"
                variant={{ outline: "none" }}
                type="text"
                placeholder="What are you working on..."
                _placeholder={{ opacity: "0.4" }}
            />
            <Tooltip
                hasArrow
                label="Create Task"
                bg="black"
                color="white"
                placement="top"
            >
                <Icon
                    color="gray"
                    cursor="pointer"
                    borderRadius="70%"
                    border="1px solid #e8e8e8"
                    as={SmallAddIcon}
                />
            </Tooltip>
        </Box>
    );
};

export default LeftInput;
