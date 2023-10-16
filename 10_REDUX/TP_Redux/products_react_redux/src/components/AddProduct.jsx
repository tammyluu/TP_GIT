import { useRef } from "react"
import { useDispatch } from "react-redux"
import { addProduct} from "./productsSlice"
const AddProduct = ()=>{
    const tittleRef = useRef()
    const priceRef = useRef()
    const dispatch = useDispatch()
    const handleSubmit = (e)=>{
        e.preventDefault()
            dispatch(addProduct(
                {title : tittleRef.current.value,
                 price : priceRef.current.value}))
            tittleRef.current.value = ''
            priceRef.current.value = ''
        }
        return (
            <>

     
            

            <h2>Ajouter un produit</h2>
            <form >
            <label htmlFor="form-control form-control-lg" >Nom de produit</label><br/>
            <input className="form-control" type = "text" ref={tittleRef}/><br/>
            <label htmlFor="form-control form-control-lg">Prix de produit</label><br/>
             <input className="form-control"type = "number" ref={priceRef}/><br/> 
                
            <button  className="btn btn-success" onClick={handleSubmit}>Submit</button>      
            </form>
            
            </>
    
        )
    }


    
    
export default AddProduct;