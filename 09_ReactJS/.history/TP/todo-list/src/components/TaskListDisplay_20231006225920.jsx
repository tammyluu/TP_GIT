import { useContext, useEffect, useState } from "react"
import {TaskContext} from "../Context/TaskContext"
import ButtonStatus from "./ButtonStatus"


const status = ["To do", "Doing", "Done"]
const TaskListDisplay = (props) =>{
    const {idTask} = props
    const {setTasks, setStatus} =useContext(TaskContext)
    const context = useContext (TaskContext)
    const foundTask = context.tasks.find(t => t.id ===idTask)
    console.log(foundTask);
    
    // useEffect(() => {
    //     const timeout = setTimeout(() => showTask(), deadline);
    //          return () => { 
    //       clearTimeout(timeout) 
    //     };
    //   }, []);
    return (
       
        {/* <div>
           <label className="deadline">Deadline: </label>
           <input type="text" value={isFinish} onInput={(e)=> setStatus( isFinish ? "Done" : "on Going")} />
       </div> */}
       <div>
           {/* <LogButton idTask={idTask} /> */}
       </div>
   </div>

    )            
}
export default TaskListDisplay