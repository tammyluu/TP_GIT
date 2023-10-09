import { useContext, useEffect, useRef } from "react";
import Task from "../model/Task"
import { TaskContext } from "../Context/TaskContext";

const ["To do", "Doing", "Done"]
const TaskForm =() =>{
    const context = useContext (TaskContext)
    const {taskssetTasks} = context
    const nameTaskRef = useRef()
    const deadlineRef = useRef()
    const isFinish = useRef()
    const submitHandle = (e) =>{
        e.preventDefault()
        const name = nameTaskRef.current.value
        const deadline = deadlineRef.current.value
        const isFinish = isFinish.current.value
        const newTask = new Task (name, deadline, isFinish)
        setTasks((preTask) => [...preTask, newTask])
        console.log(newTask);

    }

    return (

        <>
       
       <header> <h1>To Do List</h1></header>
       <form autoComplete="off">
            <div>
                <label htmlFor="name">Task :</label>
                <input type="text" ref={nameTaskRef} />
            </div>
            <div>
                <label htmlFor="deadline">Deadline :</label>
                <input type="date" ref={deadlineRef} />
            </div>
            <div>
                <button className="btn btn-primary" onClick={submitHandle} >Add</button>
            </div>
       </form>
      
        
        </>
    )
}
export default TaskForm

