import { useState, useEffect } from "react";

function Timer (props){
    const [time, setTime] = useState(duration)
    useEffect(() =>{
        if (time > 0) {
            const intervalId = setInterval(()=>{
                setTime((prevTime)=> prevTime - 1)
            }, 1000)
            return ()=> {
                console.log("clear time out");
                clearInterval(intervalId)
            }
        }else {
            onTimeEnd()
        }
    }, [time, onTimeEnd])
    const formattedTime = `${Math.floor(time/60)} : ${(time % 60).toString().padStart(2,'0')}`
    return (
        <div className="timer">
            <div className="timer-info">
                <p style={{fontSize : '42px'}}>{time}</p>
                
            </div>
            <button onClick={() =>onDelete(id)}>Supprimer</button>
        </div>
    )
}
export default Timer