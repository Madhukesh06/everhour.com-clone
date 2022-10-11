import {
   Accordion,
   AccordionButton,
   AccordionIcon,
   AccordionItem,
   AccordionPanel,
   Box,
   Button,
   Flex,
   Heading,
   HStack,
   StackDivider,
   TabPanel,
   Text,
   VStack,
} from "@chakra-ui/react";
import TaskInput from "../TaskInput/TaskInput";
import Task from "./Task";

function TaskList({
   tasks,
   handleTask,
   handleToggle,
   handleDelete,
   handleFav,
}) {
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
               <AccordionPanel py={4}>
                  <VStack
                     border="1px solid #eaeaea"
                     spacing={0}
                     borderBottom="none"
                  >
                     {tasks.map((task) => (
                        <>
                           {!task.isCompleted && (
                              <Task
                                 task={task}
                                 handleToggle={handleToggle}
                                 handleDelete={handleDelete}
                                 handleFav={handleFav}
                              />
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
                           {task.isCompleted && (
                              <Task
                                 task={task}
                                 handleToggle={handleToggle}
                                 handleDelete={handleDelete}
                                 handleFav={handleFav}
                              />
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

export default TaskList;
