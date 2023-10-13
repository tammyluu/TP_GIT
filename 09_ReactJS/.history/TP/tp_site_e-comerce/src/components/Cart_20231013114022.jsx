import { useEffect, useState, useContext } from "react";
import ProductContext from "../context/ProductContext";
import { Link } from "react-router-dom";
//import { useNavigate } from "react-router-dom"

const Cart = () =>{
    /* const [ setTotal] = useState(0);
    //const navigate = useNavigate();  
    const calculTotal =()=>{
         let tt = 0;
        cart.forEach(item => {
            tt += item.price * item.amount;
        })
        setTotal(tt);
    }
    useEffect(() => {
        calculTotal();
    })
    const changeQuantity = (item, quantity) => {
        
        const idx = cart.indexOf(item);
        const arr = [...cart];
        arr[idx].amount += quantity;
        if (arr[idx].amount === 0) arr[idx].amount = 1;
        setCart([...arr]);
      }; */
      const {id} = useParams();
    const { products, setProducts, cart, setCart } = useContext(ProductContext)
    console.table(cart);

    const valeurs = cart.map(product=>product.price)
    const somme = valeurs.reduce((total, valeur)=> total + valeur)
    console.log(somme); 

    const deleteProduct = (e) => {
    const productDeleted = {...cart}
    console.log("productDeleted"+productDeleted);
    setCart(prevProduct => prevProduct.filter(p => p !== productDeleted))
    console.log("productDeleted "+productDeleted);
    console.log(cart);
}

    return (
       
       
       
        <>
        <h1>Shopping - Cart</h1>
            <ul>
                {cart.map((product,index)=> <div><li className="mb-3" key={index}> <b>Article :</b> {product.title} - <b>Prix : </b>{product.price}€
                <button className="btn btn-outline-danger mx-3" onClick={deleteProduct}>Supprimer</button></li></div>)} 
            </ul>
            <div class="">
                <Link to={"/"} className="btn btn-outline-success mt-3 mb-2"type="button"><i class="bi bi-patch-plus"></i> Ajouter des articles au panier</Link>
            </div>
            <hr />
            <p className="display-6 text-end fw-bold" >Total : {somme}€</p>
        </>
                    {/* <button onClick={() => changeQuantity(product, 1)}>+</button>
                    <input type="text" value={product.amount} readOnly={true} />
                    <button onClick={() => changeQuantity(product, -1)}>-</button> */}
                
                
           }
       
    )
}
export default Cart