import { useContext,useEffect } from "react"
import {TaskContext} from "../Context/TaskContext"
import ButtonStatus from "./ButtonStatus"
let idTask
const TaskListDisplay = (props) =>{
    const context = useContext (TaskContext)
    const {idTask} = props
    
    // useEffect(() => {
    //     const timeout = setTimeout(() => showTask(), deadline);
    //          return () => { 
    //       clearTimeout(timeout) 
    //     };
    //   }, []);
    return
    <>
    <div>
        <form action="#" onSubmit={addTask}>
        <div>
                <label className ="name">Name: </label>
                <input type="text" value={name} onInput={(e) => setName(e.target.value)}  />
            </div>
            <div>
                <label className="deadline">Deadline: </label>
                <input type="date" value={date} onInput={(e)=> setDate(e.target.value)} />
            </div>
            {/* <div>
                <label className="deadline">Deadline: </label>
                <input type="text" value={isFinish} onInput={(e)=> setStatus( isFinish ? "Done" : "on Going")} />
            </div> */}
            <div>
                <LogButton dogId={dogId} />
            </div>

        </form>
    </div>
    </>
}
export default TaskListDisplay