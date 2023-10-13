import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

const Cart = ({cart, setCart}) =>{
    const [total, setTotal] = useState(0);
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
        <button onClick={(close) => navigate("/")}>Finish</button>
        </>
    )
}
export default Cart