import { useState } from 'react'
import TaskList from './components/TaskList'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [inputName, setInputName] = useState("")
  return (
    <>
      <div>
       Hello
      <TaskList value = {name}/>
      </div>
      
    </>
  )
}

export default App
