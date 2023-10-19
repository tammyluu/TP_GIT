import { RouterProvider } from "react-router-dom";
import router from "../app-routing";
import { useState } from "react";
import ProductContext from "../context/product-context";

const MyPage = () => {
    const [setProducts, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    return(
        <ProductContext.Provider value={{product, setProduct, cart, setCart}}>
            <RouterProvider router={router}/>
        </ProductContext.Provider>        
        )
}
export default MyPage;