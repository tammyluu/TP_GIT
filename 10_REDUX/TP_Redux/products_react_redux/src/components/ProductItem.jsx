import { useDispatch } from "react-redux";
import{ deleteProduct,editProduct} from "./productsSlice"
import { useRef } from "react";
const ProductItem = (props)=>{
    const product = props.product
    const dispatch = useDispatch();
    const inputTitleRef = useRef(true);
    const inputPriceRef = useRef(true);

    editProduct ({title: inputTitleRef.current.value,price: inputPriceRef.current.value})
   
    

    return (
        <>
            <tr>
                <th scope="row">{product.title}</th>
                <td>{product.price} €</td>
                {/* <td>{product.isDisposed ? "Disponible" : "Rupture de stock"}</td> */}
                <td>
                <button className="btn btn-danger mx-3" onClick={() => dispatch(deleteProduct(product.id))}>Supprimer</button>
                    <button className="btn btn-success" onClick={() => dispatch( editProduct(product.id))}>Modifier</button>
                </td>
            </tr> 
        </>   
        )  
        
        

       

    
}
export default ProductItem;