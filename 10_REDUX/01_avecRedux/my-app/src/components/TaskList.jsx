import TaskItem from "./TaskItem";
import { useSelector } from "react-redux";

const TaskList =()=>{
    const tasks = useSelector(state=>state.task.tasks); // .task dans notre store.js
    console.log(tasks);
    return(
        
        <>
        {
            tasks.map((task, key) => (
                <TaskItem task={task} key={key}/>
            ))
        }
    </>
     
    )
}
export default TaskList

