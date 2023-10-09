import { useState, useContext } from "react";
import { TaskContext } from "../Context/TaskContext";
import TaskForm from "./TaskForm";

const status = ["To do", "Doing", "Done"]
const ButtonStatus = (props) => {
    const {isFinished} = props 
    const context = useContext (TaskContext)
    const {idTask, tasks} = props
    const foundTask = context.tasks.find(task => task.id === idTask)
    const [statusT, setStatusT] =useState(isFinished)

    const statusChanged = ()=>{
        const currentIndex = status.indexOf(statusT)
        console.log(currentIndex);
    }
    
}
export default ButtonStatus
