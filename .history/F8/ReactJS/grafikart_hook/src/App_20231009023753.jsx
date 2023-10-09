import { useState } from 'react'
import './App.css'
import { Checkbox } from './components/forms/Checkbox.jsx'
import { Input } from './components/forms/Inputs.jsx'
import { ProductCategoryRow } from './components/products/ProductCategoryRow.jsx'
import { ProductRow } from './components/products/ProductRow.jsx'

const Products = [
  {category : "Fruits", price : "$1", stocked : true, name :"Apple"},
  {category : "Fruits", price : "$1", stocked : true, name :"AppleDrgonfruit"},
  {category : "Fruits", price : "$2", stocked :false, name :"Mango"},
  {category : "Vegetables", price : "$2", stocked : true, name :"Spinache"},
  {category : "Vegetables", price : "$3", stocked : false, name :"Salade"},
  {category : "Vegetables", price : "$1", stocked : true, name :"Peas"},
]
function App() {
  const [showStockedOnly, setShowStockedOnly] =useState(false)
  const [search, setSearch] = useState('')
  const visibleProducts = Products.filter(product =>{
    if (showStockedOnly && !product.stocked){
        return false
    }if (search && !product.name.includes(search)){
      return false
    }
    r
  })
  return (
    <div className="container my-3">
    <SearcheBar search={search}
                 onSearchChange ={setSearch}
                 showStockedOnly={showStockedOnly} onStockedOnlyChange={setShowStockedOnly}/>
    <ProductTable products={visibleProducts}/>
</div>
  )
  
   
  }
  function SearcheBar({showStockedOnly,onStockedOnlyChange, search, onSearchChange}){
    return (
      <div>
        <div className = "mb-3"> 
          <Input value= {search} onChange={onSearchChange} placeholder= "Rechercher..." />
          <Checkbox id="stocked" 
          checked ={showStockedOnly} 
          onChange= {onStockedOnlyChange} label ="N' afficher que les produits en stock"/>
        
      </div>
    </div>
    )  
  }
  function ProductTable ({products}){
    const rows = []
      let lastCategory = null
      for (let product of products){
        if(products.category !== lastCategory){
          rows.push(<ProductCategoryRow key ={product.category} name={product.category}/>)
        }
        lastCategory =product.category
        rows.push(<ProductRow product={product} key={product.name}/>)

      }
    return(
      <table className='table'>
         <thead>
            <tr>
                <th>Nom</th>
                <th>Prix</th>
                
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
      </table>
     
    )
  }
   
 export default App
