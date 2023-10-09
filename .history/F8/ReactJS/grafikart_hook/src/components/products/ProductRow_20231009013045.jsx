export function ProductRow ({product}){
    const style = product.stocked ? undefined : {color :red}
    return(
        <td>{product.name}</td>
        <td>{product.price}</td>
    )
}