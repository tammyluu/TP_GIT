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
    }  
   
    //const formattedTime = `${Math.floor(time/60)} : ${(time % 60).toString().padStart(2,'0')}`
    const formatDate(date) => {
        if (!date) return ''
        const hours = `0{date.getHours()}`
        const minutes = `0{date.getMinutes()}`
        const secondes = `0{date.getSecondes()}`
        return `${hours} : ${minutes} : ${secondes}`
    }
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