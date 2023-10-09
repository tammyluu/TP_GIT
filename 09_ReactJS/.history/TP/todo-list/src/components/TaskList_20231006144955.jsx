import { useContext,useEffect } from "react"
import {TaskContext} from "../Context/TaskContext"

const TaskList = () =>{
    const {name, setName}= useContext(TaskContext)
    const{date, setDate} = useContext(TaskContext)
    useEffect(() => {
        const currentDate = ne
        const timeout = setTimeout(() => showTask(), expirationDate-currentDate);
      
        return () => { 
          clearTimeout(timeout) 
        };
      }, []);
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
            <div>
                <button>Add</button>
            </div>

        </form>
    </div>
    </>
}
export default TaskList