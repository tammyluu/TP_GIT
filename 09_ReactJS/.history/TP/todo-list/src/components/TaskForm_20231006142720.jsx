import { useContext, useEffect, useRef } from "react";
import Task from "../model/Task"
import { TaskContext } from "../Context/TaskContext";
const TaskForm =() =>{
    const context = useContext (TaskContext)
    const {setTasks} = context
    const nameTaskRef = useRef()
    const deadlineRef = useRef()
    const isFinish = useRef()
    const submitForm = (e) =>{
        e.preventDefault()
        const name = nameTaskRef.current.value
        const deadline = deadlineRef.current.value
        const isFinish = isFinish.current.value
        newTask ({name, deadline, isFinish})
        setTasks((preTask) => [...preTask, newTask])
    }
    return 
    
}
export default TaskForm

