import { useState } from 'react'
import TaskList from './components/TaskListDisplay'
import TaskForm from './components/TaskForm'
import './App.css'
import TaskListDisplay from './components/TaskListDisplay'



function App() {
  const [count, setCount] = useState(0)
  const [tasks, setTasks] = useState([])
  return (
    <>

      <div>
       
      
      <TaskForm click ={()=> console.log("add")}/>
      
      </div>
      
    </>
  )
  }
 


export default App
