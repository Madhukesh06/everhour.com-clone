import { Box, Checkbox, HStack, Input, Select, VStack } from "@chakra-ui/react";
import TableComp from "./TableComp";

export default function Myprojects() {
  let data = ["task1", "task2", "task3"];

  return (
    <Box>
      <HStack
        bg="#f9f9f9"
        w="100%"
        h="50px"
        justifyContent="space-between"
        p={3}
      >
        <Checkbox colorScheme="green">Select All</Checkbox>
        <HStack>
          <Select placeholder="Group By" bg="white">
            <option value="option1">None</option>
            <option value="option2">Billing</option>
            <option value="option3">Budget</option>
          </Select>
          <Select placeholder="Filter" bg="white">
            <option value="option1">All</option>
            <option value="option2">Active</option>
            <option value="option3">Favourites</option>
            <option value="option3">Recent</option>
            <option value="option3">Has Budget</option>
          </Select>
          <Input type="text" placeholder="Search Projects..." bg="white" />
        </HStack>
      </HStack>

      <Box mt="20px">
        <TableComp />
      </Box>
    </Box>
  );
}
