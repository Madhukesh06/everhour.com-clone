import {
   Accordion,
   AccordionButton,
   AccordionIcon,
   AccordionItem,
   AccordionPanel,
   Box,
   Flex,
   Table,
   TableContainer,
   TabPanel,
   Tbody,
   Text,
   Th,
   Thead,
   Tr,
} from "@chakra-ui/react";
import TaskInput from "../TaskInput/TaskInput";
import TaskTableList from "./TaskTableList";

function TaskPanel({
   dayArr,
   dateArr,
   dashArr,
   tasks,
   handleTask,
   handleFav,
   handleDelete,
}) {
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
                        This Week . . . . 0h
                     </Box>
                     <AccordionIcon />
                  </AccordionButton>
               </h2>
               <AccordionPanel pb={4}>
                  <TableContainer>
                     <Table variant="simple">
                        <Thead backgroundColor="#fafafa">
                           <Tr>
                              <Th width={"50%"} border="1px solid #eaeaea">
                                 Tasks
                              </Th>
                              {dayArr.map((item, i) => (
                                 <Th border="1px solid #eaeaea">
                                    {item}
                                    <br />
                                    <Text
                                       fontSize="10px"
                                       color="grey"
                                       fontWeight="lighter"
                                    >
                                       {dateArr[i]}
                                    </Text>
                                 </Th>
                              ))}
                              <Th border="1px solid #eaeaea" isNumeric>
                                 Total
                              </Th>
                           </Tr>
                        </Thead>
                        <Tbody>
                           <Tr>
                              <Th width={"50%"} border="1px solid #eaeaea"></Th>
                              {dashArr.map((item) => (
                                 <Th border="1px solid #eaeaea" isNumeric>
                                    -
                                 </Th>
                              ))}
                              <Th border="1px solid #eaeaea" isNumeric>
                                 -
                              </Th>
                           </Tr>

                           {/* Content */}

                           {tasks.map((task) => (
                              <>
                                 {!task.isCompleted && (
                                    <TaskTableList
                                       task={task}
                                       handleDelete={handleDelete}
                                       handleFav={handleFav}
                                    />
                                 )}
                              </>
                           ))}
                        </Tbody>
                     </Table>
                  </TableContainer>
               </AccordionPanel>
            </AccordionItem>
         </Accordion>
         <Flex w="100%">
            <TaskInput handleTask={handleTask} />
         </Flex>
      </TabPanel>
   );
}

export default TaskPanel;
