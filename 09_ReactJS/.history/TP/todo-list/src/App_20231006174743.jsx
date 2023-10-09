import { useState } from 'react'
import TaskList from './components/TaskListDisplay'
import TaskForm from './components/TaskForm'
import './App.css'
import TaskListDisplay from './components/TaskListDisplay'



function App() {
  const [count, setCount] = useState(0)
  const [tasks, setTasks] = useState([])
  const newTask = (name, deadline, isFinish) =>{

  }
  return (
    <>

      <div>
       
      
      <TaskForm newTask ={()=> console.log("add")}/>
      {tasks.map((task, i))}
      </div>
      
    </>
  )
  }
 


export default App
