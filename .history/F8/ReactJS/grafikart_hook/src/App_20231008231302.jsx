import { useState } from 'react'
import './App.css'

function App() {
  
    const [count, setCount] = useState(0)
    console.log('render');
    const Increment = () =>{
    setCount(count + 1)
    return (
      <>
      <p>{count}</p>
      <p> Compteur : {count}</p>
        <button onClick={Increment}>Increment</button>
        // <button onClick={Decrement}>Decrement</button>
        </>
        
    )
}
}

export default App
