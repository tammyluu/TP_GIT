import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios";

const Cart = ({cart, setCart}) =>{
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();  
    const
    return (
        <>
        <h1>Shopping - Cart</h1>
        <button onClick={(close) => navigate("/")}>Finish</button>
        </>
    )
}
export default Cart