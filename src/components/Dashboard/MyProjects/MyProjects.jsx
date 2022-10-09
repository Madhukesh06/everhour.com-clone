import {
   Box,
   Checkbox,
   Flex,
   Heading,
   HStack,
   Input,
   Select,
   VStack,
} from "@chakra-ui/react";
import ProjectModal from "./ModalProject/ProjectModal";
import TableComp from "./TableComp";

export default function MyProjects() {
   let data = ["task1", "task2", "task3"];

   return (
      <Box
         p={7}
         pb={10}
         borderRadius={"lg"}
         bg={"white"}
         border="1px solid lightgray"
      >
         <Flex direction={{ base: "column", md: "row" }}>
            <Heading
               w={"90%"}
               size={"lg"}
               fontWeight={400}
               align="left"
               color="blackAlpha.800"
            >
               My Project list
            </Heading>
            <ProjectModal />
         </Flex>
         <HStack
            bg="#f9f9f9"
            w="100%"
            h="50px"
            justifyContent="space-between"
            p={3}
            mt={8}
         >
            <Checkbox colorScheme="green">Select All</Checkbox>
            <HStack>
               <Select
                  focusBorderColor="green.300"
                  _hover={{ borderColor: "green.300" }}
                  placeholder="Group By"
                  bg="white"
               >
                  <option value="option1">None</option>
                  <option value="option2">Billing</option>
                  <option value="option3">Budget</option>
               </Select>
               <Select
                  focusBorderColor="green.300"
                  _hover={{ borderColor: "green.300" }}
                  placeholder="Filter"
                  bg="white"
               >
                  <option value="option1">All</option>
                  <option value="option2">Active</option>
                  <option value="option3">Favourites</option>
                  <option value="option3">Recent</option>
                  <option value="option3">Has Budget</option>
               </Select>
               <Input
                  type="text"
                  placeholder="Search Projects..."
                  bg="white"
                  focusBorderColor="green.300"
                  _hover={{ borderColor: "green.300" }}
               />
            </HStack>
         </HStack>

         <Box mt="20px">
            <TableComp />
         </Box>
      </Box>
   );
}
