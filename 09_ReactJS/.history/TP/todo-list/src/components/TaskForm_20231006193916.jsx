import { useContext, useEffect, useRef } from "react";
import Task from "../model/Task"
import { TaskContext } from "../Context/TaskContext";

const ["To do", "Doing", "Done"]
const TaskForm =() =>{
    const context = useContext (TaskContext)
    const {task, setTasks} = context
    const nameTaskRef = useRef()
    const deadlineRef = useRef()
    const isFinishedRef = useRef()
    const submitHandle = (e) =>{
        e.preventDefault()
        const name = nameTaskRef.current.value
        const deadline = deadlineRef.current.value
        const isFinished = isFinished.current.value
        const newTask = new Task (name, deadline, isFinished)
        setTasks((preTask) => [...preTask, newTask])
        console.log(newTask);

    }

    return (

        <>
       
       <header> <h1>To Do List</h1></header>
       <form autoComplete="off" onSubmit={submitHandle}>
            <div>
                <label className="form-control">Task :</label>
                <input type="text" ref={nameTaskRef} />
            </div>
            <div>
                <label className="form-control">Deadline :</label>
                <input type="date" ref={deadlineRef} />
            </div>
            <div>
                < select id="task" className="form-control" ref={completeedReference}>
                    <option value="">Select an options</option>
                        {status.map((s) => (
                            <option value={s}>{s}</option>
                        ))}
                </select>
            </div>
            <div>
                <button className="btn btn-primary" onClick={submitHandle} >Add</button>
            </div>
       </form>
      
        
        </>
    )
}
export default TaskForm

