import { useState } from 'react'
import Task from './model/Task'
import TaskListDisplay from './components/TaskListDisplay'
import TaskForm from './components/TaskForm'
import { TaskContext } from './Context/TaskContext'
import './App.css'
import ButtonStatus from './components/ButtonStatus'




function App() {
  
  const [tasks, setTasks] = useState([])
  console.log(tasks);
 
  
  return (
    

  <TaskContext.Provider value={{tasks, setTasks}}>
        <div className="container p-2">
        <TaskForm  />
      
        <hr />
          <div className="row mb-3">
              <div className="col-3">
              <th>Name of Tasks</th>
              </div>
              <div className="col-3">
              <th>Your Deadline</th>
              </div>
              <div className="col-3">
              <th>Status of Task</th>
              {tasks.map(task => (
                <TaskListDisplay key={task.id} idTask = {task.idtask} />       
                ))}    
            </div>
        </div>           
      
  </div>
      </TaskContext.Provider> 
    
  )
}

export default App
