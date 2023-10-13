import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"

const Cart = ({cart, setCart}) =>{
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();  
    const calculTotal =()=>{
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.amount;
        })
        setTotal(total);
    }
    return (
        <>
        <h1>Shopping - Cart</h1>
        <button onClick={(close) => navigate("/")}>Finish</button>
        </>
    )
}
export default Cart