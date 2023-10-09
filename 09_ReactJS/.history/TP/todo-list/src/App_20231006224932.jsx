import { useState } from 'react'
import Task from './model/Task'
import TaskListDisplay from './components/TaskListDisplay'
import TaskForm from './components/TaskForm'
import { TaskContext } from './Context/TaskContext'
import './App.css'
import ButtonStatus from './components/ButtonStatus'




function App() {
  
  const [tasks, setTasks] = useState([])
  console.table(tasks);
  
  return (
    

<TaskContext.Provider value={{ tasks, setTasks}}>
      <div className="container p-2">
      <TaskForm />
     
      <hr />
        <div className="row mb-2">
          <div className="col-2">
          <th>Name of Tasks</th>
          </div>
          <div className="col-2">
          <th>Your Deadline</th>
          </div>
          <div className="col-2">
          <th>Status of Task</th>
          {tasks.map(task => (
        <ButtonStatus key={task.idTask} idTask={task.idTask} />
        <ButtonStatus key={task.isFinished} idTask={task.isFinished />
        <ButtonStatus key={task.idTask} idTask={task.idTask} />
      ))}    
          </div>
          
          <div className="col-2">
          <th><button className='btn btn-danger'>Delete</button></th>
          </div>
          </div>
          
     
</div>
    </TaskContext.Provider> 
    
  )
}

export default App
