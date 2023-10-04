import { useEffect, useState } from "react";

const MysteryNumber = (myMysteryNumber)=>{
    const [inputA, setInputA] = useState("")
    const [inputB, setInputB] = useState("")
    const [isRightInput, setRightInput] = useState(false)
    const inputAHandle = (event) => {
        setInputA(+event.target.value)
    }
    const inputBHandle = (event) => {
        setInputB(+event.target.value)
    }
    useEffect(()=>{
        const multify = inputA * inputB
        multify === 12 ? setRightInput(true) :setRightInput(false)
       
    },[inputA, inputB])
    return (
        <>
        <div className="row">
            <div></div>

        </div>
        <label htmlFor="inputA">fyour first number</label>
        <input type="text" value={inputA} onInput={inputAHandle} />
        <label htmlFor="inputB">Your second number</label>
        <input type="text" value={inputB} onInput={inputBHandle} />
        {/* <p>My mystery number : <b>{isRightInput ? 'You win!' : 'Try again!'}</b> </p> */}
       
        {isRightInput && <p>You win !!!</p>}
        {!isRightInput && <p>Try again !!!</p>}
        <p>My mystery number is : `(${inputA}* ${inputB} = 12 )`</p>
        </>
    )

}
export default MysteryNumber