import { useState } from 'react'
import <TaskL></TaskL> from './components/Task'
import './App.css'
import TaskList from './components/Task'

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
