import { Link} from "react-router-dom"
import axios from "axios";
import { useEffect,useState } from "react";
import Header from "./Header";
import classes from "./Home.module.css";


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
       <div className={classes.cousesList}>
        <h1 className="text-center display-4 p-2">Best Courses online & Certifications</h1>
        <Link to={"/AddProduct"}>Add Product</Link>
        <ul>
            {products.map(product => (
                <div claskey={product.id}>{product.title}
                <img src={product.image} alt={product.title} />
                <divnk to={`product/${product.id}`}> Detail </Link>
                </li>
            ))}
        </ul>
     </div>      
        </>
    )
}
export default Home