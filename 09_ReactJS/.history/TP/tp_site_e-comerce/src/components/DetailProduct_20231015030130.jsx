import { useContext, useEffect, useState } from "react"
import ProductContext from "../context/ProductContext"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"

const ItemDetails = () => {

    const { products, setProducts, cart, setCart } = useContext(ProductContext)
    const { id } = useParams()
    //const navigate = useNavigate()

    const navigate = useNavigate()
   

    useEffect(() => {
        axios.get(`http://localhost:4444/items/${id}`)
            .then(response => {
                setProducts(response.data)
            })
        
        
    }, [id])

    if (!products) {
        return <p>Chargement...</p>
    }


    const addCart = () => {
        const newProduct = { ...products }
        console.log(`article acheté ${newProduct.title}${newnewProduct.price}`);
        console.log(newnewProduct);
    setCart(prev => [...prev, newnewProduct])
        console.log("cart"+cart);
        
        navigate("/cart")
    }
  
    return (
        <>
            <h1 className="mt-2 display-5">
                Détails des articles
            </h1>
            <hr />
            <div className="row">
                <div className="col-6">
                    <img className="img-fluid" src={itemList.url} alt="image" />
                </div>
                <div className="col-6">
                    <p><b>Nom article : </b>{itemList.title}</p>
                    <p><b>Détail article : </b>{itemList.details}</p>
                    <p><b>Prix article : </b>{itemList.price}€</p>
                </div>
            </div>


            <button className="mt-3 mb-3 btn btn-outline-success " onClick={addCart}>Add to cart</button>
        </>
    )
}

export default ItemDetails