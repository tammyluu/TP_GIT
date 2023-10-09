export function ProductRow ({product}){
    const style = product
    return(
        <td>{product.name}</td>
        <td>{product.price}</td>
    )
}