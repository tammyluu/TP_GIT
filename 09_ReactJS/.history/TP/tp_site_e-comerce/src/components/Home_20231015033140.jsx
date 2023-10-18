import { Link} from "react-router-dom"
import axios from "axios";
import { useEffect,useState } from "react";
import Header from "./Header";


const Home = () =>{
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        axios.get("http://localhost:5000/products")
      .then(response => {
        setProducts(response.data)
   
    })  
    },[])

    return (
        <>
       <Header/>
        <Link to={"/product"}>Detail product</Link>
        <br></br>
        <Link to={"/AddProduct"}>Add Product</Link>
        <ul>
            {products.map(product => (
                <li key={product.id}>{product.title}
                <Link to={`product/${product.id}`}> Detail </Link>
                </li>
            ))}
        </ul>
           
        </>
    )
}
export default Home