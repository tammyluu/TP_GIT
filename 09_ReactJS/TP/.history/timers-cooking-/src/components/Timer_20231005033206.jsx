import { useState, useEffect } from "react";

function Timer (props){
    const {timers} = props
    const [time, setTime] = useState('')
    useEffect(() =>{
        if (time > 0) {
            const intervalId = setInterval(()=>{
               const now = new Date()
               const newTime =  formatDate(now)
            }, 1000)
            return ()=> {
                console.log("clear time out");
                clearInterval(intervalId)
            }
        }else {
            onTimeEnd()
        }
    }, [])
    //const formattedTime = `${Math.floor(time/60)} : ${(time % 60).toString().padStart(2,'0')}`
    const forma
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