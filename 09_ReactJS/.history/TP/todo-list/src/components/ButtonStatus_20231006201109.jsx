import { useState, useContext } from "react";
import { TaskContext } from "../Context/TaskContext";
import TaskForm from "./TaskForm";

const ButtonStatus = (props) => {
    const {isFinished} = props 
    const context = useContext (TaskContext)
    const {idTask, tasks} = props
    const foundTask = context.tasks.find(task => task.id === idTask)
    const [status, setStatus] =useState(isFinished)

    const statusChanged = ()
    
}
export default ButtonStatus
