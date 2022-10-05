import {
   Accordion,
   AccordionButton,
   AccordionIcon,
   AccordionItem,
   AccordionPanel,
   Box,
   Flex,
   Text,
   Table,
   Thead,
   Tbody,
   Tr,
   Th,
   TableContainer,
   Tabs,
   TabList,
   Tab,
   TabPanels,
   TabPanel,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import useTimeSheetHook from "../../../hooks/useTimeSheetHook";
import TaskInput from "../TaskInput/TaskInput";
import TaskList from "./TaskList";
import TaskPanel from "./TaskPanel";

const dayArray = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const dateArray = new Array(7).fill("");
const dashArray = new Array(7).fill("-");
const initTasks = ["Design", "Project Management", "Web Development"];

const TimeSheet = () => {
   const { date, month, day } = useTimeSheetHook();
   const [dayArr, setDayArr] = useState(dayArray);
   const [dateArr, setDateArr] = useState(dateArray);
   const [dashArr, setDashArr] = useState(dashArray);
   const [tasks, setTasks] = useState(initTasks);

   const handleTask = (task) => {
      setTasks([...tasks, task]);
   };

   useEffect(() => {
      let temp = dayArr.indexOf(day);
      dateArray[temp] = `${month} ${date}`;
      setDateArr(dateArray);
   }, []);

   return (
      <Tabs
         bg="white"
         p={4}
         mt={7}
         border="1px solid lightgray"
         borderRadius={"lg"}
         defaultIndex={1}
      >
         <TabList color="green">
            <Tab fontSize={20}>List</Tab>
            <Tab fontSize={20}>Timesheet</Tab>
         </TabList>

         <TabPanels>
            <TaskPanel
               dayArr={dayArr}
               dateArr={dateArr}
               dashArr={dashArr}
               tasks={tasks}
               handleTask={handleTask}
            />
            <TaskPanel
               dayArr={dayArr}
               dateArr={dateArr}
               dashArr={dashArr}
               tasks={tasks}
               handleTask={handleTask}
            />
         </TabPanels>
      </Tabs>
   );
};

export default TimeSheet;
