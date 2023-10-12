
import { useState } from 'react';
import './App.css';
import TodoContext from './context/TodoContext';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';


function App() {
  const [todos, setTodos] = useState([])
 
  return (
   
      <TodoContext.Provider value ={{todos, setTodos}}>
        <div className="app-todo">
          <TodoForm/>
        </div>
      {todos.map(todo =>(
        <TodoList key ={todo.id} todoId ={todo.id}/>
      ))}
      </TodoContext.Provider>
     
   
  );
}

export default App;
