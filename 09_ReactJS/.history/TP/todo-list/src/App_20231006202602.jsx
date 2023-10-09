import { useState } from 'react'
import Task from './model/Task'
import TaskListDisplay from './components/TaskListDisplay'
import TaskForm from './components/TaskForm'
import { TaskContext } from './Context/TaskContext'
import './App.css'




function App() {
  
  const [tasks, setTasks] = useState([])
  console.table(tasks);
  
  return (
    <>

<TodoContext.Provider value={{ tasks, setTasks}}>
      <div className="container p-2">
      <TaskForm />
      <h1>List of Tasks</h1>
      <hr />
        <div className="row mb-2">
          <div className="col-2">
          <th>Name of Task</th>
          </div>
          <div className="col-2">
          <th>deadline</th>
          </div>
          <div className="col-2">
          <th>TaskStatus</th>
          </div>
          <div className="col-2">
          <th>Change taskStatus?</th>
          </div>
          <div className="col-2">
          <th>Delete?</th>
          </div>
          </div>
      {tasks.map(task => (
        <DisplayTodoComponent key={task.idTask} idTodo={task.idTask} />
      ))}
</div>
    </TodoContext.Provider>

      
    </>
  )
  }
 


export default App
