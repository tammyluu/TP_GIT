import { useState } from 'react'
import Task from './model/Task'
import TaskListDisplay from './components/TaskListDisplay'
import TaskForm from './components/TaskForm'
import T
import './App.css'




function App() {
  
  const [tasks, setTasks] = useState([])
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
