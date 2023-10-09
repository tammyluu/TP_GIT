import { useState } from 'react'
import './App.css'
import { Checkbox } from './components/forms/Checkbox'
const Products = [
  {category : "Fruits", price : "$1", stocked : true, name :"Apple"},
  {category : "Fruits", price : "$1", stocked : true, name :"AppleDrgonfruit"},
  {category : "Fruits", price : "$2", stocked :false, name :"Mango"},
  {category : "Vegetables", price : "$2", stocked : true, name :"Spinache"},
  {category : "Vegetables", price : "$3", stocked : false, name :"Salade"},
  {category : "Vegetables", price : "$1", stocked : true, name :"Peas"},
]
function App() {
  return 
  <div className='container my-3'>
      <SearcheBar/>
  </div>
  }
  function SearcheBar(){
    return <div>
      <div className = "mb-3"> 
        <input value="" onChange={()=> null} placeholder= "Rechercher..." />
        <Checkbox/>
        <Inputs/>
     </div>
    </div>
  }
   
 export default App
