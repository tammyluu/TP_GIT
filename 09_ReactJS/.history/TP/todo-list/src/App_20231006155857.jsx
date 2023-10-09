import { useState } from 'react'
import TaskList from './components/TaskListDisplay'
import TaskForm from './components/TaskForm'
import './App.css'
import TaskListDisplay from './components/TaskListDisplay'
import TaskListDisplay from './components/TaskListDisplay'


function App() {
  const [count, setCount] = useState(0)
  const [tasks, setTasks] = useState([])
  
  }
  return (
    <>

      <div>
       
      
      <TaskForm />
      {tasks.map(task =>(
        TaskListDisplay key ={task.id} idTask = [task.id]
      ))}
      </div>
      
    </>
  )
}

export default App
