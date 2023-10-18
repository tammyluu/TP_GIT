import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import DetailProduct from "./components/DetailProduct";
import Cart from "./components/Cart";
import Home from "./components/Home";
import AddProduct from "./components/AddProductSecurity";


const router = createBrowserRouter([
    { path : '/', element : <Home/> },
    { path : '/product/:id', element : <DetailProduct/> },
   
    { path : '/cart', element : <Cart/>},
    { path : '/addProduct', element :  <ProtectedRoute><AddProductSecutity/></ProtectedRoute>}
])
export default router