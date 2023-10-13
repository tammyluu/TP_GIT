import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

const Cart = ({cart, setCart}) =>{
    const [ total,setTotal] = useState(0);
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
    const changeQuantity = (item, quantity) => {
        
        const idx = cart.indexOf(item);
        const arr = [...cart];
        arr[idx].amount += quantity;
        if (arr[idx].amount === 0) arr[idx].amount = 1;
        setCart([...arr]);
      };
    return (
        <>
        <h1>Shopping - Cart</h1>
        {cart.map(product => (
                <ul>
                    <li key={product.id}>{product.title}</li>
                    <button onClick={() => changeQuantity(product, 1)}>+</button>
                    <input type="text" value={product.amount} readOnly={true} />
                    <button onClick={() => changeQuantity(product, -1)}>-</button>
                </ul>
                
            ))}
        </>
    )
}
export default Cart