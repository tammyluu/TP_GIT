import { useContext } from "react"
import {TaskContext} from "../Context/TaskContext"

const TaskList = () =>{
    const {name, setName}= useContext(TaskContext)
    const{} = useContext(TaskContext)
    
    return
    <>
    <div>
        <form action="#">
        <div>
                <label className ="name">Name: </label>
                <input type="text" value={name} onInput={(e) => setName(e.target.value)}  />
            </div>
            <div>
                <label className="deadline">Deadline: </label>
                <input type="date" value={date} onInput={(e)=> setDate(e.target.value)} />
            </div>
            <div>
                <button>Add</button>
            </div>

        </form>
    </div>
    </>
}
export default TaskList