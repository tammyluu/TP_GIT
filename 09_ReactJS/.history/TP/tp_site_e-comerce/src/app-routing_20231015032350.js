import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import DetailProduct from "./components/DetailProduct";
import Cart from "./components/Cart";
import Home from "./components/Home";
import AddProductSecutity from "./components/AddProductSecurity";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home* />,
        errorElement: <ErrorPage />,
        children: [
          { path: "/", element: <Home /> },
          {path : "/details/:id", element : <ItemDetails />},
          { path : "/basket", element : <Basket />},
          { path : "/formauth", element : <FormAuth />},
          { path : "/addItems", element : <ProtectedRoute><AddItemsSecure/></ProtectedRoute>}
        
        ],
      },
    ]);
  
export default router