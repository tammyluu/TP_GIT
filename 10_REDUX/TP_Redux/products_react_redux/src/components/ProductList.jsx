import {useSelector} from "react-redux"
import ProductItem from "./ProductItem"

const ProductList=() =>{
    const products = useSelector(state=>state.product.products);
    console.log(products);
    return (
        <>
            <h2>Application de gestion de produits</h2>
           <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Nom</th>
                    <th scope="col">Prix</th>
                    {/* <th scope="col">Disponibilité</th> */}
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product,key) => (
                        <ProductItem key={key} product={product} />)
                    )}
                </tbody>
            
            </table>
        </>

    )
}
export default ProductList;