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
        const newIndex = (currentIndex + 1) % status.length
        console.log(newIndex);
        const newStatus =status[newIndex]
        console.log(newStatus);
        setStatusT(newStatus)
    }
    const buttonColor =(b) =>{
        switch (b) {
            case  "To do":
                return color = 
                break;
        
            default:
                break;
        }
    }
    return (
        <button onClick={statusChanged}>{statusT}</button>
    )
}
export default ButtonStatus
