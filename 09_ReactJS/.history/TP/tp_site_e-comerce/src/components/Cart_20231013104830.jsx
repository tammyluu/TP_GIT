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
                <li key={product.id}>{product.title}</li>
                <button onClick={() => thaydoisoluong(product, 1)}>+</button>
            <input type="text" value={product.amount} readOnly={true} />
            <button onClick={() => thaydoisoluong(product, -1)}>-</button>
                
            ))}
        </>
    )
}
export default Cart