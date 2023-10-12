import { useContext,useEffect,useState } from "react"
import TodoContext from "../context/TodoContext"
import TodoForm from "./TodoForm"
import axios from "axios"
const TodoList = (todoId ) =>{
  
  const [todos, setTodos ] = useContext(TodoContext)
  

  const todo = todos.find(t => t.id === todoId)
  console.log(todo);
  
  

 return(
    <>
     <li className="mb-3 text-dark list-group-item d-flex justify-content-between align-items-center">
            <span>{todo.title}</span>
            <span>{todo.description}</span>
           {/*  <button onClick={editTodos} className="btn btn-warning">Modifier</button>
            <button onClick={deleteTodos}className="btn btn-danger">Supprimer</button> */}
        </li>
  </>
 )
}
export default TodoList