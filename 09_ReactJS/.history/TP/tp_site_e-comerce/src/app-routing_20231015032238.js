import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import DetailProduct from "./components/DetailProduct";
import Cart from "./components/Cart";
import Home from "./components/Home";
import AddProductSecutity from "./components/AddProductSecurity";


const router = createBrowserRouter([
    { path : '/', element : <Home/> },
    children : [
        {path : "//:id", element : <ItemDetails />},
        { path : '/cart', element : <Cart/>},
        { path : '/addProduct', element :  <ProtectedRoute><AddProductSecutity/></ProtectedRoute>},
    ],
    
])
export default router