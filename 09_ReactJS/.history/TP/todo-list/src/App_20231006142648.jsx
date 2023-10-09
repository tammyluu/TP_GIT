import { useState } from 'react'
import TaskList from './components/TaskList'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [inputName, setInputName] = useState("")
  const addtoDoList = () =>{
    console.log("click on me");
  }
  return (
    <>
      <div>
       Hello
      <TaskList addTask = {addtoDoList}/>
      <TaskForm
      </div>
      
    </>
  )
}

export default App
