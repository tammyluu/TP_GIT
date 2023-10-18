import { NavLink } from "react-router-dom";

const Header =()=>{
    
    return(
        <div className="App">
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
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
                <li className="nav-item">
                <NavLink className="navbar-brand" to="/basket" >
            <i class="bi bi-bag-check display-6"></i>
          </NavLink>
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