import { useState } from "react"
const Increment = () =>{
    const [count, setCount] = useState(0)
    console.log('render');
    setCount(count + 1)
   
    
}
export default Increment