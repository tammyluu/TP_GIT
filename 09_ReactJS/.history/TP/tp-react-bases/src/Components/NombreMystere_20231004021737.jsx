import { useEffect, useState } from "react";

const MysteryNumber = (myMysteryNumber)=>{
    const [inputA, setInputA] = useState("")
    const [inputB, setInputB] = useState("")
    const [isRightInput, setRightInput] = useState(false)
    const inputAHandle = (event) => {
        setInputA(event.target.value)
    }
    const inputBHandle = (event) => {
        setInputB(event.target.value)
    }
    useEffect()
    return (
        <>
        <input type="text" value={inputA} onInput={inputAHandle} />
        <input type="text" value={inputB} onInput={inputBHandle} />
        <p>My mystery number : <b>{isRightInput ? 'You win!' : 'Try again!'}</b> </p>
        </>
    )

}
export default MysteryNumber