import {
   Accordion,
   AccordionButton,
   AccordionIcon,
   AccordionItem,
   AccordionPanel,
   Box,
   TabPanel,
   VStack,
} from "@chakra-ui/react";
import Task from "./Task";

function TaskFavList({ tasks, handleToggle }) {
   return (
      <TabPanel>
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
               <AccordionPanel py={4}>
                  <VStack
                     border="1px solid #eaeaea"
                     spacing={0}
                     borderBottom="none"
                  >
                     {tasks.map((task) => (
                        <>
                           {!task.isCompleted && task.isFav && (
                              <Task task={task} handleToggle={handleToggle} />
                           )}
                        </>
                     ))}
                  </VStack>
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
               <AccordionPanel py={4}>
                  <VStack
                     border="1px solid #eaeaea"
                     spacing={0}
                     borderBottom="none"
                  >
                     {tasks.map((task) => (
                        <>
                           {task.isCompleted && task.isFav && (
                              <Task task={task} handleToggle={handleToggle} />
                           )}
                        </>
                     ))}
                  </VStack>
               </AccordionPanel>
            </AccordionItem>
         </Accordion>
      </TabPanel>
   );
}

export default TaskFavList;
