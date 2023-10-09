export function ProductRow ({product}){
    const style = product.stocked ? undefined : {col}
    return(
        <td>{product.name}</td>
        <td>{product.price}</td>
    )
}