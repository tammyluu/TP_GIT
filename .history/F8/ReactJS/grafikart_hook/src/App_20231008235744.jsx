import { useState } from 'react'
import './App.css'

function App() {
    const [firstname, setFirstname] =useState("Tammy")


   
    return (
      <>
      <form action="#">
        <input type="text" name='firstname' value={firstname} />
        {f}
      </form>
       
        </>
        
    )

}

export default App
