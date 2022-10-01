import {
    FormControl,
    FormLabel,
    HStack,
    Select,
    Stack,
} from "@chakra-ui/react";
import React from "react";

const TopComp = () => {
    return (
        <Stack p={{ base: "2", md: "4" }} direction={{ base: "column", md: "row" }} spacing={5}>
            <HStack w="100%" spacing={5}>
                <FormControl>
                    <FormLabel color="gray" fontWeight={600}>
                        Reports Time Rounding
                    </FormLabel>
                    <Select
                        borderRadius={"none"}
                        fontSize={14}
                        placeholder="SELECT ROUNDING DIRECTION"
                    >
                        <option value="option1"> Round To the Nearest</option>
                        <option value="option2">Round up</option>
                    </Select>
                </FormControl>
                <FormControl w="25%">
                    <FormLabel p={3}></FormLabel>
                    <Select borderRadius={"none"} fontSize={14} placeholder="ROUNDING">
                        <option value="option1"> 1 min</option>
                        <option value="option2">5 min</option>
                        <option value="option3">10 min</option>
                        <option value="option3">12 min</option>
                        <option value="option3">15 min</option>
                        <option value="option3">20 min</option>
                        <option value="option3">30 min</option>
                    </Select>
                </FormControl>
            </HStack>
            <FormControl>
                <FormLabel color="gray" fontWeight={600}>
                    Reports Time Format
                </FormLabel>

                <Select
                    borderRadius={"none"}
                    fontSize={14}
                    placeholder="SELECT TIME FORMAT"
                >
                    <option value="option1"> 1h/1h 5m/5m (default)</option>
                    <option value="option2">1h 00m/1h 05m/0h 05m</option>
                    <option value="option3">1:00/1:05/0:05</option>
                </Select>
            </FormControl>
            <FormControl>
                <FormLabel color="gray" fontWeight={600}>
                    Reports Date Format
                </FormLabel>
                <Select
                    borderRadius={"none"}
                    fontSize={14}
                    placeholder="SELECT DATE FORMAT"
                >
                    <option value="option1"> Oct 1 (MMM D)</option>
                    <option value="option2">Saturday, Oct 1 (dddd, MMM D)</option>
                    <option value="option3">Oct 1, 2022 (MMM D, YYYY)</option>
                </Select>
            </FormControl>
        </Stack>
    );
};

export default TopComp;
