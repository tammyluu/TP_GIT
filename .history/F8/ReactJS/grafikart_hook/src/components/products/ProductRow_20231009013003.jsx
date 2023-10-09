export function ProductRow ({product}){
    const style = product.stocked
    return(
        <td>{product.name}</td>
        <td>{product.price}</td>
    )
}