export function ProductRow ({product}){
    const style = product.stocked ? undefied
    return(
        <td>{product.name}</td>
        <td>{product.price}</td>
    )
}