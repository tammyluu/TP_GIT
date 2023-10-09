import {}
const Increment = (e) =>{
    e.target.evenDefault()
    return (
        <p>Compteur : {count}</p>
        <button onClick={Increment}>Increment</button>
        // <button onClick={Decrement}>Decrement</button>
    )
}
export default Increment