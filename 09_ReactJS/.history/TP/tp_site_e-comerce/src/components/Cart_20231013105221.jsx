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
    const changeQuantity = (sanpham, sl) => {
        //tim san pham trong cart va thay doi mot luong sl
        const idx = cart.indexOf(sanpham);
        const arr = [...cart];
        arr[idx].amount += sl;
        if (arr[idx].amount == 0) arr[idx].amount = 1;
        setCart([...arr]);
      };
    return (
        <>
        <h1>Shopping - Cart</h1>
        {cart.map(product => (
                <li key={product.id}>{product.title}</li>
                <button onClick={() => changeQuantity(product, 1)}>+</button>
                <input type="text" value={product.amount} readOnly={true} />
                <button onClick={() => changeQuantity(product, -1)}>-</button>
                
            ))}
        </>
    )
}
export default Cart