import { createBrowserRouter } from "react-router-dom"

import ErrorPage from "./routes/ErrorPage"
import HomePage from "./routes/HomePage"
import ContactPage from "./routes/ContactPage"
import NavBar from "./routes/Navbar"
import ContactDiplayForm from "./routes/ContactDiplayForm"

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
     
      {
        path: "/contact",
        element: <ContactDiplayForm />
      },
      {
        path: "/formcontact",
        element: <ContactPage />
      },
      
    ]
  }
])

export default router