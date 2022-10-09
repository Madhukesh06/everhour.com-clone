import { Tabs, TabList, Tab, TabPanels } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
   deleteTask,
   getApi,
   patchApi,
   patchTasks,
   postTask,
} from "../../../hooks/Requests";
import useTimeSheetHook from "../../../hooks/useTimeSheetHook";
import TaskFavList from "./TaskFavList";
import TaskList from "./TaskList";
import TaskPanel from "./TaskPanel";

const dayArray = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const dateArray = new Array(7).fill("");
const dashArray = new Array(7).fill("-");

const TimeSheet = () => {
   const everhourUser = JSON.parse(localStorage.getItem("everhourUser"));
   const { date, month, day } = useTimeSheetHook();
   const [dayArr, setDayArr] = useState(dayArray);
   const [dateArr, setDateArr] = useState(dateArray);
   const [dashArr, setDashArr] = useState(dashArray);
   const [tasks, setTasks] = useState([]);

   const handleTask = (task) => {
      postTask(
         {
            title: task,
            isCompleted: false,
            isFav: false,
         },
         everhourUser.email
      ).then((res) => {
         setTasks(res.tasks);
      });
   };

   const handleToggle = (task) => {
      patchTasks(
         {
            ...task,
            isCompleted: !task.isCompleted,
         },
         everhourUser.email
      ).then((res) => {
         setTasks(res.tasks);
      });
   };

   const handleFav = (task, setFav=false) => {
      setFav(true)
      patchTasks(
         {
            ...task,
            isFav: !task.isFav,
         },
         everhourUser.email
      ).then((res) => {
         setTasks(res.tasks);
         setFav(false)
      });
   }

   const handleDelete = (task, setDel="") => {
      setDel(true)
      deleteTask(task, everhourUser.email).then((res) =>{
          setTasks(res.tasks)
          setDel(false)
         })
   }

   useEffect(() => {
      let temp = dayArr.indexOf(day);
      dateArray[temp] = `${month} ${date}`;
      setDateArr(dateArray);
      getApi(everhourUser.email).then((res) => setTasks(res.tasks));
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
