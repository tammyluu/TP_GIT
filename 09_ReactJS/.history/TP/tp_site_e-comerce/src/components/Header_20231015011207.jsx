import classes from "./Header.module.css"
const Header =({quantity, setShowCart})=>{
    const onShowCartHandler = () => {
        setShowCart(true)
    }
    return (
        <div className={classes.row}>
          <div className={classes.logo}>E-le@rning</div>
          <div className={classes.cart} onClick={onShowCartHandler}>
            <i className="bi bi-cart4 display-6" aria-hidden="true"></i>
    
            <span className={classes.cartamount}>
              <sup>{quantity}</sup>
            </span>
          </div>
        </div>
      );
    
}
export default Header;