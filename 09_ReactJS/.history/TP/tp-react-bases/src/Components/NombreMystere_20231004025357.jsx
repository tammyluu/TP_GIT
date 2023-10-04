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
            <div className="col-6" text-center></div>
            <label htmlFor="inputA">fyour first number</label>
            <input type="text" value={inputA} onInput={inputAHandle} />
        </div>
        <div className="row">
            <div className="col-6" text-center></div>
            <label htmlFor="inputB">Your second number</label>
            <input type="text" value={inputB} onInput={inputBHandle} />
        </div>
        
        
        {/* <p>My mystery number : <b>{isRightInput ? 'You win!' : 'Try again!'}</b> </p> */}
       
        {isRightInput && <p><b>style{{color : 'blue'}}You win !!!</b></p>}
        {!isRightInput && <p>Try again !!!</p>}
        <p>My mystery number is : `(${inputA}* ${inputB} = 12 )`</p>
        </>
    )

}
export default MysteryNumber