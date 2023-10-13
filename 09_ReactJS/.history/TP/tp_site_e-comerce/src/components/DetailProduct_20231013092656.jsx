import { Link } from "react-router-dom"

import axios from "axios";

import  { useState, useEffect } from "react";

import {useNavigate, useParams } from "react-router-dom";



const DetailProduct = () =>{

    const {id} = useParams();

    const [product, setProduct] = useState(null);
    const [cart, setCart]= useState(null);

    const navigate = useNavigate();

    navigate("/cart")

    useEffect(() => {

        axios.get(`http://localhost:5000/products/${id}`)

        .then (response => {

            setProduct(response.data)})

        }, [id])



    

    if (product == null) {

        return <h3>Loading...</h3>

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
        <button onClick={() =>onAdd }>Add to Cart</button>
        </>

    )

}

export default DetailProduct
