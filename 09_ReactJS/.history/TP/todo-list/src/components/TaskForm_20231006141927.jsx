import { useContext, useEffect, useRef } from "react";
import Task from "../model/Task"
import { TaskContext } from "../Context/TaskContext";
const TaskForm =() =>{
    const context = useContext (TaskContext)
    const {setTasks} = context
    const nameTaskRef = useRef()
    const deadlineRef = useRef()
    const isFinish = useRef()
    
}
