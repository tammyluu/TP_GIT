import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios";

const Cart = () =>{
   
    return (
        <>
        <h1>Shopping - Cart</h1>
        <button onClick={(addProduct) => navigate("/")}>Add to Cart</button>
        </>
    )
}
export default Cart