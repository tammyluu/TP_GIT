import { useState } from 'react'
import './App.css'

function App() {
  
    const [count, setCount] = useState(0)
    console.log(count);
    const increment = () =>{
      setCount(count + 1)}
    return (
      <>
      <p>{count}</p>
      
        <button onClick={increment}>Increment</button>
        <button onClick={dencrement}>Increment</button>
       
        </>
        
    )

}

export default App
