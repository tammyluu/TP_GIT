import { NavLink, Outlet } from "react-router-dom";
import classes from "./Header.module.css"
const Header =({quantity, setShowCart})=>{
    
        <>
          <header>

<nav class="navbar navbar-expand-lg bg-dark border-bottom border-body p-2 " data-bs-theme="dark">
  <NavLink to={"/"} className="navbar-brand" >
   <i class="bi bi-house-heart display-6"></i>   Home  

  </NavLink >
 
  <NavLink className="navbar-brand" to="/basket" >
    <i class="bi bi-bag-check display-6"></i>
  </NavLink>

</nav>
</header>
<main>
<div className="container" >
  <Outlet />
  
</div>
</main>
<footer>
<nav class="navbar sticky-bottom navbar-expand-lg bg-dark border-bottom border-body p-2 " data-bs-theme="dark">
<NavLink className="navbar-brand display-1 " to={"/formauth"}>Administrateur</NavLink>
</nav>
</footer>
        </>
      );
    
}
export default Header;