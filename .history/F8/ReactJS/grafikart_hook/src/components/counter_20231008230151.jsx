let count = 0
const Increment = () =>{
    rerurn (
        <p>Compteur : {count}</p>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decre}>Decrement</button>
    )
}
export default Increment