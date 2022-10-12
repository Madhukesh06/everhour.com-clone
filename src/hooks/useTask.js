import { useState } from "react";
import { deleteTask, getApi, patchTasks, postTask } from "./Requests";

const useTask = () => {
   const everhourUser = JSON.parse(localStorage.getItem("everhourUser"));
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

   const handleFav = (task, setFav) => {
      setFav(true);
      patchTasks(
         {
            ...task,
            isFav: !task.isFav,
         },
         everhourUser.email
      ).then((res) => {
         setTasks(res.tasks);
         setFav(false);
      });
   };

   const handleDelete = (task, setDel) => {
      setDel(true);
      deleteTask(task, everhourUser.email).then((res) => {
         setTasks(res.tasks);
         setDel(false);
      });
   };

   const handleGet = () => {
      getApi(everhourUser.email).then((res) => setTasks(res.tasks));
   };

   return {
      tasks,
      handleGet,
      handleTask,
      handleToggle,
      handleFav,
      handleDelete,
   };
};

export default useTask;
