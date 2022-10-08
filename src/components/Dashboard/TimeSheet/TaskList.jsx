import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex, TabPanel } from "@chakra-ui/react";
import { useState } from "react";
import TaskInput from "../TaskInput/TaskInput";

function TaskList({handleTask, tasks, handleToggle} ) {
   const [toggleLoading, setToggleLoading] = useState(false)

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
                  {
                     tasks.map((item) => (
                        <>
                         {!item.isCompleted && 
                           <li>
                              {item.title}
                              <Button isLoading={toggleLoading} onClick={() => handleToggle(item)}>{item.isCompleted? "DONE" : "NOT DONE"}</Button>
                              <span>Delete</span>
                           </li>
                           }
                        </>
                     ))
                  }
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
                  {
                     tasks.map((item) => (
                        <>
                           {item.isCompleted && 
                           <li>
                              {item.title}
                              <Button isLoading={toggleLoading} onClick={() => {
                                 setToggleLoading(true)
                                 handleToggle(item)
                                 setTimeout(() => {
                                    setToggleLoading(false)
                                 } , 700)
                                 }}>{item.isCompleted? "DONE" : "NOT DONE"}</Button>
                              <span>Delete</span>
                           </li>
                           }
                           
                        </>
                     ))
                  }
               </AccordionPanel>
            </AccordionItem>
         </Accordion>
      </TabPanel>
   );
}

export default TaskList;
