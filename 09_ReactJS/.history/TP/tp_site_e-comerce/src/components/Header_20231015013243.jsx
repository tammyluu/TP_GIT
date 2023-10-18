import { NavLink, Outlet } from "react-router-dom";
import classes from "./Header.module.css"
const Header =()=>{
    
    return(
        <>
          <header>

                <nav class="className={classes.row} " >
                <div className={classes.logo}>My Shop</div>
                     <NavLink to={"/"} className="navbar-brand" >
                        <i class="bi bi-house-heart display-6"></i>   Home  

                     </NavLink >
                
                <NavLink className="navbar-brand" to="/cart" >
                    <i class="bi bi-cart4 display-6"></i>
                </NavLink>

                </nav>
                </header>
                <main>
                <div className="container" >
                <Outlet />
                
                </div>
                </main>
               
        </>
      );
    
}
export default Header;