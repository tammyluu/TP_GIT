let count = 0
const Increment = (e) =>{
    e.target
    rerurn (
        <p>Compteur : {count}</p>
        <button onClick={Increment}>Increment</button>
        // <button onClick={Decrement}>Decrement</button>
    )
}
export default Increment