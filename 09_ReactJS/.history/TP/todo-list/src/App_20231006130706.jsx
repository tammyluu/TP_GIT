import { useState } from 'react'
import TaskList from './components/TaskList'
import './App.css'
import TaskList from './components/TaskList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       Hello
      <TaskList/>
      </div>
      
    </>
  )
}

export default App
