import { NavLink, Outlet } from "react-router-dom";
import classes from "./Header.module.css"
const Header =()=>{
    
    return(
        <div className="App">
      <header>
        <nav className={classes}>
          <div className="container-fluid">
            <NavLink className="navbar-brand" to={`/`}><i className="bi bi-globe"></i> e-Le@rning</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to={`/`}>Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={`/product`}>Courses</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
     
    </div>
      );
    
}
export default Header;