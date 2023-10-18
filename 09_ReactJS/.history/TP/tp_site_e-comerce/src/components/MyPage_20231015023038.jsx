import { RouterProvider } from "react-router-dom";
import router from "../app-routing";
import 


const MyPaage = () => {
    const [products,setProducts, cart, setCart] = useState([]);
    return(
        <ProductContext.Provider value={{products, setProducts, cart, setCart}}>
            <RouterProvider router={router}/>
        </ProductContext.Provider>        
        )
}
