import { useState } from 'react'
import Task from './model/Task'
import TaskListDisplayt from './components/TaskListDisplay'
import TaskForm from './components/TaskForm'
import './App.css'
import TaskListDisplay from './components/TaskListDisplay'



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
