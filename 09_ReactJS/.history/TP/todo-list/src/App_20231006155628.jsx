import { useState } from 'react'
import TaskList from './components/TaskListDisplay'
import TaskForm from './components/TaskForm'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [tasks, setTasks] = useState([])
  
  }
  return (
    <>

      <div>
       
      
      <TaskForm />
      {task}
      </div>
      
    </>
  )
}

export default App
