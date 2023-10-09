export function ProductRow ({product}){
    const style = product.stoc
    return(
        <td>{product.name}</td>
        <td>{product.price}</td>
    )
}