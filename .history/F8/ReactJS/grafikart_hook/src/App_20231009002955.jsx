import { useState } from 'react'
import './App.css'

function App() {
    
  }
   
    return (
      <>
      <form action="#">
        <input type="text" name='firstname' value={firstname} onChange={hanleChange} />
       {firstname}
        <button onClick={reset}>Reset</button>
      </form>
       
        </>
        
    )

}

export default App
