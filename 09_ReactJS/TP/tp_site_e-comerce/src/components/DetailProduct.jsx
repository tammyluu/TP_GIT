import { Link } from "react-router-dom"
import axios from "axios";
import  { useState, useEffect } from "react";
import {useNavigate, useParams } from "react-router-dom";


const DetailProduct = () =>{
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();
    const [params] = useParams();
     id = params.get('id')?? null;

    useEffect(() => {
        axios.get(`http://localhost:5000/products/${id}`)
        .then (response => {
            setProduct(response.data)})
        }, [id])

    
    if (product == null) {
        return <h3>Loading...</h3>
    }    
    
    

   const addProduct = () => {
    if (id) {
        axios.get(`http://localhost:5000/products/${id}`)
      .then (response => {
        console.log(response.data.title)
        })
    } else{
        axios.post(`http://localhost:5000/products`, product)
      .then (response => {
        console.log(response.data);
        navigate(`/product/${response.data.id}`)
    })
   }
   
        return (
            <>
           
            <Link to={"/cart"}>Cart</Link>
            <br></br>
            <Link to={"/addProduct"}>Add Product</Link>
            <br></br>
            <Link to={"/"}>homepage</Link>
            <br></br>
            <h1>Product Detail</h1>
            <hr></hr>
            <h1 style={{color : "blue"}}>{product.title}</h1>
           
            <ul>
                <li>{product.description}</li>
                <li>{product.price}</li>
            </ul>
            <button onClick={(addProduct) => navigate("/cart")}>Add to Cart</button>
            </>
        )
    }
}   
    
export default DetailProduct