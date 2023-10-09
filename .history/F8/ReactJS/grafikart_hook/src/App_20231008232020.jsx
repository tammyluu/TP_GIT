import { useState } from 'react'
import './App.css'

function App() {
    
    const [count, setCount] = useState(0)
    console.log(count);
    const increment = () =>{
      setCount(count + 1)}
    const decrement = () =>{
      setCount(count -1)}
    return (
      <>
      <p>{count}</p>
      
        <button  className= "btn btn-primary" onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
       
        </>
        
    )

}

export default App
