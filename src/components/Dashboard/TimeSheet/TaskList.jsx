import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, TabPanel } from "@chakra-ui/react";
import TaskInput from "../TaskInput/TaskInput";

function TaskList({handleTask}) {
   return (
      <TabPanel>
         <Flex w="100%">
            <TaskInput handleTask={handleTask} />
         </Flex>
         <Accordion defaultIndex={[0]} allowToggle>
            <AccordionItem>
               <h2>
                  <AccordionButton>
                     <Box
                        flex="1"
                        textAlign="left"
                        p="5px"
                        fontSize="25px"
                        color="grey"
                     >
                        Incomplete
                     </Box>
                     <AccordionIcon />
                  </AccordionButton>
               </h2>
               <AccordionPanel pb={4}>
                  
               </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
               <h2>
                  <AccordionButton>
                     <Box
                        flex="1"
                        textAlign="left"
                        p="5px"
                        fontSize="25px"
                        color="grey"
                     >
                        Completed
                     </Box>
                     <AccordionIcon />
                  </AccordionButton>
               </h2>
               <AccordionPanel pb={4}>
                  
               </AccordionPanel>
            </AccordionItem>
         </Accordion>
      </TabPanel>
   );
}

export default TaskList;
