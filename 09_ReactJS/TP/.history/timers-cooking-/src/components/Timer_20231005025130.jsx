import { useState, useEffect } from "react";

function Timer ({id, name, duration, onDelete, onTimeEnd}){
    const [time, setTime] = useState(duration)
    useEffect(() =>{
        if (time > 0) {
            const intervalId = setInterval(()=>{
                setTime((prevTime)=> prevTime - 1)
            }, 1000)
            return ()=> 
        }else {
            onTimeEnd()
        }
    }, [time, onTimeEnd])
    const formattedTime = `${Math.floor(time/60)} : ${(time % 60).toString().padStart(2,'0')}`
    return (
        <div className="timer">
            <div className="timer-info">
                <p>{name}</p>
                <p> Temps restant :</p>
            </div>
            <button onClick={() =>onDelete(id)}>Supprimer</button>
        </div>
    )
}
export default Timer