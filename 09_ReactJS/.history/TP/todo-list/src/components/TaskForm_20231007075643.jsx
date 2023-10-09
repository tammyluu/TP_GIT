import { useContext,  useRef } from "react";
import Task from "../model/Task"
import { TaskContext } from "../Context/TaskContext";

const status = ["To do", "Doing", "Done"]
const TaskForm =() =>{
    const context = useContext (TaskContext)
    const { setTasks} = context
    const nameTaskRef = useRef()
    const deadlineRef = useRef()
    const isFinishedRef = useRef()
    const submitHandle = (e) =>{
        e.preventDefault()
        

    }
    const addHandle = (e) =>{
        
    }

    return (

        <>
       
       <header> <h1>To Do List</h1></header>
       <form  onSubmit={submitHandle}>
            <div>
                <input type="text" className="form-control" ref={nameTaskRef} required placeholder="Task's name"  />
            </div>
            <div>
                <input type="date"  className="form-control" ref={deadlineRef} required placeholder="Deadline"  />
            </div>
            <div>
                < select id="task" className="form-control" ref={isFinishedRef} required>
                    <option value="">Select option</option>
                        {status.map((option) => (
                            <option value={option}>{option}</option>
                        ))}
                </select>
            </div>
            <div>
                <button className="btn mb-5 mt-2 btn-primary" >Add</button>
            </div>
       </form>
      
        
        </>
    )
}
export default TaskForm

