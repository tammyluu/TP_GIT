import { useState, useEffect } from "react";

function Timer (props){
    const {timers} = props
    const [time, setTime] = useState('')
    useEffect(() =>{
        setInterval(()=>{
            const currentTime = new Date()
            const newTime =  formatDate(currentTime)
            setTime(newTime)
         }, 1000)
     }, [])   
     return (
        <div className="timer">
            <div className="timer-info">
                <p style={{fontSize : '42px'}}>{time}</p>
                
            </div>
            <button onClick={() =>onDelete(id)}>Supprimer</button>
        </div>
    )
    }  
   
    //const formattedTime = `${Math.floor(time/60)} : ${(time % 60).toString().padStart(2,'0')}`
   

   

export default Timer