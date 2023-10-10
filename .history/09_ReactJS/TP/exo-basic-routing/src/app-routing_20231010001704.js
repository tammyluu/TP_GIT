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
        element: <Accueil />
      },
      {
        path: "/projects",
        element: <Projets />
      },
      {
        path: "/about",
        element: <Apropose />
      },
      {
        path: "/contact",
        element: <Contact/>
      },
    ]);
        


export default router