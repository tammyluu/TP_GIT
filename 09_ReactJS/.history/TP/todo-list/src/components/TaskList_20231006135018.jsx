import { useContext } from "react"
import {TaskContext} from "../"

const TaskList = () =>{
    const [name, setName] = useContext(TaskContext)
    const [date, setDate] = useContext(TaskContext)
    
    return
    <>
    <div>
        <form action="#">
        <div>
                <label className ="name">Name: </label>
                <input type="text" value={name}  />
            </div>
            <div>
                <label className="deadline">Deadline: </label>
                <input type="date" value={date} />
            </div>
            <div>
                <button>Add</button>
            </div>

        </form>
    </div>
    </>
}
export default TaskList