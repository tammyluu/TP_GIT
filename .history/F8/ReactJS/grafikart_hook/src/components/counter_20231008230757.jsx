import { useState } from "react"
const Increment = () =>{
    const [count, setCount]
   
    return (
        <p>Compteur : {count}</p>
        <button onClick={Increment}>Increment</button>
        // <button onClick={Decrement}>Decrement</button>
    )
}
export default Increment