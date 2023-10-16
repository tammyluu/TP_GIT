import { useDispatch } from "react-redux";
import { deleteProduct,editProduct} from "./productsSlice"
import {  useRef, useState } from "react";
const ProductItem = (props)=>{
    const product = props.product
    const dispatch = useDispatch();
    const titleRef = useRef()
    const priceRef = useRef()
    const [update, setUpdate] = useState(false)

   const updateProductHandler = (e)=>{
      e.preventDefault()
      
      const newTitle = titleRef.current.value ? titleRef.current.value : product.title
      const newPrice = priceRef.current.value? priceRef.current.value : product.price

      const editProduct = {
        id : product.id,
        title : titleRef.current.value,
        price : priceRef.current.value
      }
      dispatch(editProduct(editProduct))
      setUpdate(!update)

   }

        

    return (
        <> {update?
        <tr>
          <td><input type="text" 
                      placeholder={product.title} 
                      className="form-control"
                     ref={titleRef} defaultValue={product.title} /></td>
          <td><input type="number" placeholder={product.price} className="form-control" ref={priceRef} defaultValue={product.price}/></td>
          <td>
            <button className="btn tbn-success">Valider</button>
            <button onClick={()=> setUpdate (!update)} className="btn btn-danger">Supprimer</button>
          </td>
        </tr> 
        :
        <tr>
          <td>{product.title}</td>
          <td>{product.price} €</td>
          {/* <td>{product.isDisposed ? "Disponible" : "Rupture de stock"}</td> */}
          
          <td>
            <button className="btn btn-danger mx-3" onClick={() => dispatch(deleteProduct(product.id))}>Supprimer</button>
            <button className="btn btn-success" onClick={() => dispatch( editProduct(product.id))}>Modifier</button>
          </td>
        </tr>
        }
        </>  
        )  
                 

    
}
export default ProductItem;