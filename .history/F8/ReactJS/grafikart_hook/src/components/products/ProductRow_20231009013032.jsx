export function ProductRow ({product}){
    const style = product.stocked ? undefined
    return(
        <td>{product.name}</td>
        <td>{product.price}</td>
    )
}