import { Link } from "react-router-dom"

import axios from "axios";

import  { useState, useEffect, useContext } from "react";

import {useNavigate, useParams, Link } from "react-router-dom";
import Header from "./Header";


const DetailProduct = () =>{

    const {id} = useParams();

    const [product, setProduct,cart, setCart] = useContext(ProductContext);
    
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/products/${id}`)
        .then (response => {
            setProduct(response.data)})
        }, [id])

    

    if (product == null) {

        return <h3>Loading...</h3>

    } 
    
    const onAddtoCartHandler=(product)=>{
       const newProduct = {...product};
       console.log(`course bought: ${newProduct.}`);
        navigate("/cart")
        }   
    

    return (

        <>
        <Header/>
        <h1>Product Detail</h1>

        <Link to={"/cart"}>Cart</Link>

        <br></br>

        <Link to={"/addProduct"}>Add Product</Link>

        <br></br>

        <Link to={"/"}>homepage</Link>

        <br></br>

        <h1>{product.title}</h1>
        <div>
            <img className="img-fluid" src={product.image} alt="image"/>
        </div>
        <ul>

            <li>{product.description}</li>

            <li>{product.price}</li>
        
        </ul>
        <button onClick={onAddtoCartHandler}>Add to Cart</button>
        </>

    )

}

export default DetailProduct
