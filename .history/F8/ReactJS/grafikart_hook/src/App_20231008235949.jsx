import { useState } from 'react'
import './App.css'

function App() {
    const [firstname, setFirstname] =useState("Tammy")
  const hanleChange = (e)  =>{
      setFirstname(e.target.value)
  }

   
    return (
      <>
      <form action="#">
        <input type="text" name='firstname' value={firstname} onC />
        {firstname}
      </form>
       
        </>
        
    )

}

export default App
