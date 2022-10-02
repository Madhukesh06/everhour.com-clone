import { FormControl, FormLabel, Select, Stack } from "@chakra-ui/react";
import React from "react";

const BottomComp = () => {
    return (
        <Stack py={{ base: "2", md: "4" }} direction={{ base: "column", md: "row" }}>
            <FormControl>
                <FormLabel color="gray" fontWeight={600}>
                    Default Startup Page
                </FormLabel>
                <Select
                    borderRadius={"none"}
                    fontSize={14}
                    w={{ base: "100%", md: "33%" }}
                    placeholder="SELECT STARTUP PAGE"
                >
                    <option value="option1"> Home Page</option>
                    <option value="option2">Time Page</option>
                    <option value="option3">Reports Page</option>
                    <option value="option3">Projects Page</option>
                </Select>
            </FormControl>
        </Stack>
    );
};

export default BottomComp;
