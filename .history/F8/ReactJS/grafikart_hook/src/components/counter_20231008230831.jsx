import { useState } from "react"
const Increment = () =>{
    const [count, setCount] = useState(0)
    console.log(render);
   
    return (
        <p>Compteur : {count}</p>
        <button onClick={Increment}>Increment</button>
        // <button onClick={Decrement}>Decrement</button>
    )
}
export default Increment