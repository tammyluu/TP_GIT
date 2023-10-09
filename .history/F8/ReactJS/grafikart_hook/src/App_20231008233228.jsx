import { useState } from 'react'
import './App.css'

function App() {
    
    const [count, setCount] = useState(0)
    const [person, setPerson] =useState({
      name : 'toto',
      age : 16
    })
    console.log(count);
    console.log(person);
    const increment = () =>{
      setCount(count + 1)}
    const decrement = () =>{
      setCount(count -1)}
    const IncrementAge = ()=>{
      setPerson({...person,age :person.age +1 })
    }
    return (
      <>
      <p>{count}</p>
      
        <button   onClick={increment}>Increment</button>
        <button   onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
       
        </>
        
    )

}

export default App
