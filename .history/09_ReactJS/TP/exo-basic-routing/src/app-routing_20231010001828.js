import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import ErrorPage from "./routes/ErrorPage"
import Accueil from "./routes/Accueil"
import Projets from "./routes/Projets"

import Apropose from "./routes/Apropose"
import Contact from "./routes/Contact"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children:[]
   
    ]);
        


export default router