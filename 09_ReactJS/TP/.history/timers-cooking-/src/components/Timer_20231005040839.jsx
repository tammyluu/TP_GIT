import { useState, useEffect } from "react";
import { ReactPropTypes } from "react";
Time
function Timer (props){
    const {timers} = props
    const [time, setTdime] = useState('')
    const formatDate() => {
        if (!date) return ''
        const hours = `0{date.getHours()}`.slice(-2)
        const minutes = `0{date.getMinutes()}`.slice(-2)
        const secondes = `0{date.getSecondes()}`.slice(-2)
        return `${hours} : ${minutes} : ${secondes}`
    }
    useEffect(() =>{
        const timeInterval = setInterval(()=>{
            const currentTime = new Date()
            const newTime =  formatDate(currentTime)
            setTime(newTime)
         }, 1000)
         return () =>{
            console.log("time clean up")
            clearInterval(timeInterval)
         }
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

   

