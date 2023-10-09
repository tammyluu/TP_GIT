import { useContext } from "react"

const TaskList = () =>{
    const [nam, setName] = useContext(TaskContext)
    return
    <>
    <div>
        <form action="#">
        <div>
                <label className ="name">Name: </label>
                <input type="text" ref={nameInputRef}  />
            </div>
            <div>
                <label className="deadline">Deadline: </label>
                <input type="date" ref={dateInputRef} />
            </div>
            <div>
                <button>Add</button>
            </div>

        </form>
    </div>
    </>
}
export default TaskList