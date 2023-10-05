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
        const hours = `0{date.getHours()}`.slice(-2)
        const minutes = `0{date.getMinutes()}`.slice(-2)
        const secondes = `0{date.getSecondes()}`.slice(-2)
        return `${hours} : ${minutes} : ${secondes}`
    }

   

export default Timer