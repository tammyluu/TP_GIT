import { useContext,useEffect } from "react"

import TodoContext from "../context/TodoContext"
import { useRef } from "react"
import axios from 'axios';

 const TodoForm =()=>{
    const {todos,setTodos} = useContext(TodoContext)
    const titleInputRef = useRef()
    const descriptionInputRef = useRef()
    
    useEffect(() => {
        axios.get ("http://localhost:5000/todos")
        .then (response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error("Erreur: ",error);
        })
    },[])
    
    const submitHandler = (event) => {
        event.preventDefault()

        const title =  titleInputRef.current.value
        const description = descriptionInputRef.current.value
    
        axios.post("http://localhost:5000/todos", {title : title, description :description})
        .then (response => {
            console.log(response.data);
            console.log(todos);
        setTodos((prevTodos => [...prevTodos, response.data]))
       
        })
        .catch(error => {
          console.error("Erreur: ",error);
        })
      }
  

    return(
        <>
         
       <header> <h1>To Do List</h1></header>
       <form  onSubmit={submitHandler}>
            <div>
                <input type="text" className="form-control" ref={titleInputRef} required placeholder="title"  />
            </div>
            <div>
                <input type="text"  className="form-control" ref={descriptionInputRef} required placeholder="Description"  />
            </div>
            
            <div>
                <button className="btn mb-5 mt-2 btn-primary" >Add</button>
            </div>
       </form>
      
        
        </>

    )

}
export default TodoForm