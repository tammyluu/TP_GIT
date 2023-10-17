

import { useSelector } from 'react-redux'
import './App.css'
import SignForm from './components/SignForm.jsx'
import TaskForm from './components/task/TaskForm'
function App() {
  const user = useSelector(state => state.auth.user)
 
  return (
    <>
    {
      user? 
      <TaskForm  user={user}/> 
      : 
      <SignForm />
    }
     
    </>
  )
}

export default App
