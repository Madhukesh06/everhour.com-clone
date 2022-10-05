import { useEffect, useState } from "react";

const initTasks = ["Design", "Project Management", "Web Development"];

const useTaskInput = () => {
   const [tasks, setTasks] = useState(initTasks);

   const addTask = (task) => {
      setTasks([...tasks, task]);
   };

   return { tasks, addTask };
};

export default useTaskInput;
