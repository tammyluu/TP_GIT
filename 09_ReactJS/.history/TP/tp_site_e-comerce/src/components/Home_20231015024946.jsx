import { Link} from "react-router-dom"
import axios from "axios";
import { useEffect,useState } from "react";
import Header from "./Header";


const Home = () =>{
    const [product, setProduct] = useState([]);
    useEffect(() =>{
        axios.get("http://localhost:5000/products")
      .then(response => {
        setProduct(response.data)
   
    })  
    },[])

    return (
        <>
       <Header/>
        <Link to={"/product"}>Detail product</Link>
        <br></br>
        <Link to={"/AddProduct"}>Add Product</Link>
        <ul>
            {product.map(couse => (
                <li key={product.id}>{product.title}
                <Link to={`product/${product.id}`}> Your detail Product </Link>
                </li>
            ))}
        </ul>
           
        </>
    )
}
export default Home