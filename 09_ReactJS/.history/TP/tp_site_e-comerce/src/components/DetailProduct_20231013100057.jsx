import { Link } from "react-router-dom"

import axios from "axios";

import  { useState, useEffect } from "react";

import {useNavigate, useParams } from "react-router-dom";



const DetailProduct = () =>{

    const {id} = useParams();

    const [product, setProduct] = useState(null);
    const [cart, setCart]= useState([]);

    const navigate = useNavigate();

   

    useEffect(() => {

        axios.get(`http://localhost:5000/products/${id}`)

        .then (response => {

            setProduct(response.data)})

        }, [id])



    

    if (product == null) {

        return <h3>Loading...</h3>

    }   
    const onAddtoCartHandler=()=>{
        if (cart.indexOf(product) !== -1) return null;
        const arr = [...cart];
        product.amount = 1;
        arr.push(product);
        setCart([...arr]);
        console.log(cart);
        navigate("/cart")
        }   
      

    return (

        <>

        <h1>Product Detail</h1>

        <Link to={"/cart"}>Cart</Link>

        <br></br>

        <Link to={"/addProduct"}>Add Product</Link>

        <br></br>

        <Link to={"/"}>homepage</Link>

        <br></br>

        <h1>{product.title}</h1>

        <ul>

            <li>{product.description}</li>

            <li>{product.price}</li>

        </ul>
        <button onClick={() =>onAddtoCartHandler(product) }>Add to Cart</button>
        </>

    )

}

export default DetailProduct
