import { useEffect,useState } from "react";

function FizzBuzz ({maxValue}) {
    const [currentValue, setCurrentValue] =useState (0);
    const [result, setResult] = useState ('')

    const Increment = (event) => {
        const currentValue = setCurrentValue(event.target.value)
        if (currentValue > maxValue){
            setCurrentValue(currentValue + 1)
            console.log(currentValue);
        }
    }
    const Decrement = () =>{
         if (currentValue >0){
            setCurrentValue (currentValue - 1)
        }
    }
    useEffect(() => {
        let result = ''
        if (currentValue % 15 === 0 && currentValue !== 0){
            result += 'FizzBuzz'
        }  else if(currentValue % 5 === 0 && currentValue !== 0) {
            result += 'Buzz'
        }  else if(currentValue % 3 === 0 && currentValue !== 0) {
            result += 'Fizz'
        }  else {
            result +=  currentValue
        }
        setResult(result)
    }, [currentValue])
    return (
        <>
        <dir>
            <input type="text" value = {currentValue} onInput={Increment} />
            <button onClick={Increment} disabled ={currentValue === maxValue}> + </button>
            <button onClick={Decrement} disabled ={currentValue === 0}> - </button>
            <p>Result : {result}</p>
        </dir>
        </>
    )
}
export default FizzBuzz