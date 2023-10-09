import { useState, useContext, useEffect } from "react";
import { TaskContext } from "../Context/TaskContext";
import TaskForm from "./TaskForm";

const status = ["To do", "Doing", "Done"]
const ButtonStatus = (props) => {
  
    const context = useContext (TaskContext)
    const 
    const {idTask, isFinished,} = props
    const foundTask = context.tasks.find(task => task.id === idTask)
    const [statusT, setStatusT] =useState(isFinished)
    useEffect (()=>{
        statusT != "isFinished" ? "Delete" : "Pending"
    },[])
    const statusChanged = ()=>{
        console.log("change");
        const currentIndex = status.indexOf(statusT)
        console.log(currentIndex)
        const newIndex = (currentIndex + 1) % status.length
        console.log(newIndex)
        const newStatus =status[newIndex]
        console.log(newStatus)
        setStatusT(newStatus)
    }
    
    // const buttonColor =(b) =>{
    //     switch (b) {
    //         case  "To do":
    //             return color = "white"
    //             break;
    //         case "Doing":
    //             return color = "blue"
    //             break;
                   
    //         default: 
    //         return color = "vert"
    //             break;
    //     }
    return (

        <button className= "btn btn-outline-success" onClick={statusChanged}>{statusT}</button>
    )
    }
    

export default ButtonStatus
