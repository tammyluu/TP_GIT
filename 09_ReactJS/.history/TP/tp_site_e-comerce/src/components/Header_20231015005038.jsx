import clas
const Header =({quantity, setShowCart})=>{
    const onShowCartHandler = () => {
        setShowCart(true)
    }
    return (
        <div className={classes.row}>
          <div className={classes.logo}>E-le@rning</div>
          <div className={classes.cart} onClick={onShowCartHandler}>
            <i className="fa fa-shopping-bag" aria-hidden="true"></i>
    
            <span className={classes.cartamount}>
              <sup>{quantity}</sup>
            </span>
          </div>
        </div>
      );
    
}
export default Header;