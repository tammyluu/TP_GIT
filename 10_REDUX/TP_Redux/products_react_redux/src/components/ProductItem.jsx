import { useDispatch } from "react-redux";
import{ deleteProduct,changeStatusProduct, editProduct} from "./productsSlice"

const ProductItem = (props)=>{
    const product = props.product
    const dispatch = useDispatch();
    /* const inputTitleRef = useRef(true);
    const inputPriceRef = useRef(true);

    const edit = (id, value,e )=>{
      if (e.which === id) {
        editProduct({id, title : value, price:value})
       inputTitleRef.current.disable =true
       inputPriceRef.current.disable =true
      }
    } */
   
    

    return (
        <>
            <tr>
                <th scope="row">{product.title}</th>
                <td>{product.price}</td>
                {/* <td>{product.isDisposed ? "Disponible" : "Rupture de stock"}</td> */}
                <td>
                <button className="btn btn-danger mx-3" onClick={() => dispatch(deleteProduct(product.id))}>Supprimer</button>
                    <button className="btn btn-success" onClick={() => dispatch( handleSave(product.id))}>Modifier</button>
                </td>
            </tr> 
        </>   
        )  
        
        

       

    
}
export default ProductItem;