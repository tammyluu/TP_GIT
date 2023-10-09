import { useState, useContext } from "react";
import { TaskContext } from "../Context/TaskContext";
import TaskForm from "./TaskForm";

const ButtonStatus = (props) => {
    const {isFinished} = props 
    const context = useContext (TaskContext)
    const {idTask, tasks} = props
    const foundTask = context.tasks.find(task => task.id === idTask)
    const [statusT, setStatusT] =useState(isFinished)

    const statusChanged = ()=>{
        const currentIndex = status.indexOf(statusT)
        console.log(cur);
    }
    
}
export default ButtonStatus
