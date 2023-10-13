import { Link} from "react-router-dom"
import axios from "axios";
import { useEffect,useState } from "react";

const Home = () =>{
    const [products, setProducts] = useState([]);
    useEffect(() =>{
       
    },[])
    const loadData = (route) => {
        axios.get(route)
        .then(response => {
          setProducts(response.data)
        })  
        .ca
    }

    return (
        <>
        <h1>E - Learning Homepage</h1>
        <Link to={"/product"}>Detail product</Link>
        <br></br>
        <Link to={"/AddProduct"}>Add Product</Link>
        <ul>
            {products.map(product => (
                <li key={product.id}>{product.title}
                <Link to={`product/${product.id}`}> Your detail Product </Link>
                </li>
            ))}
        </ul>
           
        </>
    )
}
export default Home