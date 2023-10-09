import { useState } from 'react'
import Task from './model/Task'
import TaskListDisplay from './components/TaskListDisplay'
import TaskForm from './components/TaskForm'
import { TaskContext } from './Context/TaskContext'
import './App.css'




function App() {
  
  const [tasks, setTasks] = useState([])
  console.ta(tasks);
  const newTask = (name, deadline, isFinish) =>{

  }
  return (
    <>

      <div>
       
      
      <TaskForm newTask ={()=> console.log("add")}/>
      {tasks.map((task, i) =>(
        key ={i}
      ))}
      </div>
      
    </>
  )
  }
 


export default App
