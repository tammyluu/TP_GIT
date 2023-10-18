import { NavLink } from "react-router-dom";
import classes from "./Header.module.css"
const Header =({quantity, setShowCart})=>{
    const onShowCartHandler = () => {
        setShowCart(true)
    }
    return (
        <div className={classes.row}>
          <div className={classes.logo}>E-le@rning</div>
          <div className={classes.cart} >
            <NavLink to={"/cart"} >
            <i className="bi bi-cart4 display-6" ></i>
    
            <span className={classes.cartamount}>
              <sup>{quantity}</sup>
            </span>
          </div>
        </div>
      );
    
}
export default Header;