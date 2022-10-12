import { Tabs, TabList, Tab, TabPanels } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import useTimeSheetHook from "../../../hooks/useTimeSheetHook";
import TaskFavList from "./TaskFavList";
import TaskList from "./TaskList";
import TaskPanel from "./TaskPanel";

const dayArray = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const dateArray = new Array(7).fill("");
const dashArray = new Array(7).fill("-");

const TimeSheet = ({
   tasks,
   handleGet,
   handleTask,
   handleToggle,
   handleFav,
   handleDelete,
}) => {
   const { date, month, day } = useTimeSheetHook();
   const [dayArr, setDayArr] = useState(dayArray);
   const [dateArr, setDateArr] = useState(dateArray);
   const [dashArr, setDashArr] = useState(dashArray);

   useEffect(() => {
      let temp = dayArr.indexOf(day);
      dateArray[temp] = `${month} ${date}`;
      setDateArr(dateArray);
      handleGet();
   }, []);

   return (
      <Tabs
         isLazy
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
            <Tab fontSize={20}>Favourites</Tab>
         </TabList>

         <TabPanels>
            <TaskList
               tasks={tasks}
               handleTask={handleTask}
               handleToggle={handleToggle}
               handleDelete={handleDelete}
               handleFav={handleFav}
            />
            <TaskPanel
               dayArr={dayArr}
               dateArr={dateArr}
               dashArr={dashArr}
               tasks={tasks}
               handleTask={handleTask}
               handleDelete={handleDelete}
               handleFav={handleFav}
            />
            <TaskFavList
               tasks={tasks}
               handleToggle={handleToggle}
               handleDelete={handleDelete}
               handleFav={handleFav}
            />
         </TabPanels>
      </Tabs>
   );
};

export default TimeSheet;
