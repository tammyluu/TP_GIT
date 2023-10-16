import { useSelector } from "react-redux"
import TaskForm from "./TaskForm"

const TaskHeader = () =>{
    const counter = useSelector(state => state.task.counterTask) // useSeletor: chercher les elments dans initial state
    return (
        <header>
            <h1> React todo List</h1>
            <p>
                Tâche à faire :<strong>{counter}</strong>
            </p>
            <TaskForm />
        </header>
    )
}
export default TaskHeader