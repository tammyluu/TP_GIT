

const MyPaage = () {
    const [products,setProducts, cart, setCart] = useState([]);
    return(
        <ProductContext.Provider value={{products, setProducts, cart, setCart}}>
        <CartContext.Provider value={{cart, setCart}}>
        <Header/>
        <Outlet />
        </CartContext.Provider>
    )
}
