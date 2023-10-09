import { useState } from 'react'
import TaskList from './components/TaskList'
import T
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [tasks, setTasks] = useState([])
  const addtoDoList = () =>{
    console.log("click on me");
  }
  return (
    <>
      <div>
       
      <TaskList addTask = {addtoDoList}/>
      <TaskForm />
      </div>
      
    </>
  )
}

export default App
