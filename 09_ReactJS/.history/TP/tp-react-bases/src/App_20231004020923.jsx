
import './App.css';
//import TextBox from './Components/ExReactA';
//import 'bootstrap/dist/css/bootstrap.min.css'
//import'bootstrap-icons/font/bootstrap-icons.min.css'
//import DisplayTab from './Components/ExReactB';
//import ListElement from './Components/ExReactC';
//import DiplayHookComponent from './Components/ExReactD';
import { useState } from 'react';
//import FizzBuzz from './Components/ExReactE';
import MysteryNumber from './Components/NombreMystere';
function App() {
  const [currentValue, setCurrentValue] =useState (0)
  return (
    
      
      <MysteryNumber myMysteryNumber = {12}/>
      
  )
}

export default App;
