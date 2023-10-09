import { useState } from 'react'
import './App.css'
import Increment from './components/counter'

function App() {
  const Increment = () =>{
    const [count, setCount] = useState(0)
    console.log('render');
    setCount(count + 1)
    return (
      <>
      <p>{count}</p>
      <
        <button onClick={Increment}>Increment</button>
        // <button onClick={Decrement}>Decrement</button>
        </>
        
    )
}
}

export default App
