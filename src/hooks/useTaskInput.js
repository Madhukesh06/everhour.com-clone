import { useState } from "react";

const useTaskInput = () => {
   const [tasks, setTasks] = useState([]);

   const addTask = (task) => {
      setTasks([...tasks, task]);
   }
   
   return { tasks, addTask };
}

export default useTaskInput;