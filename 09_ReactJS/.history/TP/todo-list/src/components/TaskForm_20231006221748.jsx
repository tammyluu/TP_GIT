import { useContext, useEffect, useRef } from "react";
import Task from "../model/Task"
import { TaskContext } from "../Context/TaskContext";

const status = ["To do", "Doing", "Done"]
const TaskForm =() =>{
    const context = useContext (TaskContext)
    const {tasks, setTasks} = context
    const nameTaskRef = useRef()
    const deadlineRef = useRef()
    const isFinishedRef = useRef()
    const submitHandle = (e) =>{
        e.preventDefault()
        const name = nameTaskRef.current.value
        const deadline = deadlineRef.current.value
        const isFinished = isFinishedRef.current.value
       
        setTasks((preTask) => [...preTask, (name, deadline, isFinished)])
        console.log(setTasks);

    }

    return (

        <>
       
       <header> <h1>To Do List</h1></header>
       <form b onSubmit={submitHandle}>
            <div>
                <input type="text" className="form-control" ref={nameTaskRef} placeholder="Task's name"  />
            </div>
            <div>
                <input type="date"  className="form-control" ref={deadlineRef} placeholder="Deadline"  />
            </div>
            <div>
                < select id="task" className="form-control" ref={isFinishedRef}>
                    <option value="">Select option</option>
                        {status.map((option) => (
                            <option value={option}>{option}</option>
                        ))}
                </select>
            </div>
            <div>
                <button className="btn btn-primary"  >Add</button>
            </div>
       </form>
      
        
        </>
    )
}
export default TaskForm

