import { useState } from 'react'
import './App.css'

function App() {
    const [firstname, setFirstname] =useState("Tammy")
  const hanleChange = (e)  =>{
    
  }

   
    return (
      <>
      <form action="#">
        <input type="text" name='firstname' value={firstname} />
        {firstname}
      </form>
       
        </>
        
    )

}

export default App
