import { NavLink, Outlet } from "react-router-dom";
import classes from "./Header.module.css"
const Header =()=>{
    
    return(
        <div className="App">
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to={`/`}><i className="bi bi-globe"></i> eContacts</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to={`/`}>Accueil</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={`/contacts`}>Contacts</NavLink>
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