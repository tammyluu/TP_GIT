import { useContext, useEffect, useState } from "react"
import ProductContext from "../Context/ProductContext"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"

const ItemDetails = () => {

    const { itemList, setItemList, cart, } = useContext(ProductContext)
    const { id } = useParams()
    //const navigate = useNavigate()

    const navigate = useNavigate()
   

    useEffect(() => {
        axios.get(`http://localhost:4444/items/${id}`)
            .then(response => {
                setItemList(response.data)
            })
        
        
    }, [id])

    if (!itemList) {
        return <p>Chargement...</p>
    }


    const addcart = () => {
        const newItem = { ...itemList }
        console.log(`article acheté ${newItem.title}${newItem.price}`);
        console.log(newItem);
    (prev => [...prev, newItem])
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


            <button className="mt-3 mb-3 btn btn-outline-success " onClick={addBasket}>Ajouter au panier</button>
        </>
    )
}

export default ItemDetails