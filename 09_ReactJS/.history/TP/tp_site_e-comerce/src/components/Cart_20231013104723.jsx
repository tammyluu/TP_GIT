import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

const Cart = ({cart, setCart}) =>{
    const [ setTotal] = useState(0);
    const navigate = useNavigate();  
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
    return (
        <>
        <h1>Shopping - Cart</h1>
        {cart.map(product => (
                <li key={product.id}>{product.title}
                <Link to={`product/${product.id}`}> Your detail Product </Link>
                </li>
            ))}
        </>
    )
}
export default Cart