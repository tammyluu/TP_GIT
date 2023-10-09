export function ProductRow ({product}){
    const style = product.stocked ? undefined : {color :red}
    return(
        div
        <td style={style}>{product.name}</td>
        <td>{product.price}</td>
    )
}