import { FormControl, FormLabel, Select, Stack } from "@chakra-ui/react";
import React from "react";

const MidComp = () => {
    return (
        <Stack py={{ base: "2", md: "4" }} direction={{ base: "column", md: "row" }} spacing={5}>
            <FormControl w={{ base: "100%", md: "33%" }}>
                <FormLabel color="gray" fontWeight={600}>
                    Time Format
                </FormLabel>
                <Select
                    borderRadius={"none"}
                    fontSize={14}
                    placeholder="SELECT TIME FORMATTime Format"
                >
                    <option value="option1">12 - hour</option>
                    <option value="option2">24 - hour</option>
                </Select>
            </FormControl>
            <FormControl w={{ base: "100%", md: "33%" }}>
                <FormLabel color="gray" fontWeight={600}>
                    Export CSV Separator
                </FormLabel>
                <Select
                    borderRadius={"none"}
                    fontSize={14}
                    placeholder="SELECT CSV SEPARATOR"
                >
                    <option value="option1"> Comma (default)</option>
                    <option value="option2">Semicolon</option>
                    <option value="option3">Tab</option>
                </Select>
            </FormControl>
        </Stack>
    );
};

export default MidComp;
