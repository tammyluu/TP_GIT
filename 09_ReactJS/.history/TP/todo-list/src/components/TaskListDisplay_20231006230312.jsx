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
       
        <>


            <div className="card mb-2">
                <div className="card-body row">
                    <div className="col-2">
                        <span>{foundTask.name}</span>
                    </div>
                    <div className="col-2">
                        <span>{foundTask.deadline}</span>
                    </div>
            
                    <div className="col-2">
                    
                        <ButtonStatus  isFinished={foundTask.isFinished}/>
                    </div>
                    
                </div>
            </div>
        </>


    )            
}
export default TaskListDisplay