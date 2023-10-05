import { useState, useEffect, useRef } from "react";




function Timer (props){
    const {timers} = props
    const [time, setTime] = useState('')
    const timerId =useRef()
    const prevTime = useRef()

    
    useEffect(() =>{
        prevTime.current = time
    },[time])
    const handleStart = () =>{
        //formatDate()
        timerId.current = setInterval(() =>{
            setTime( prevTime => prevTime - 1)
        }, 1000)
       
        console.log('Start ->', timerId.current);
    }    
   
    const handleStop = () => {
        clearInterval(timerId.current)
        console.log('stop ->', timerId.current);
    }
    console.log(time,prevTime.current);
     return (
        <div className="timer">
            <div className="timer-info">
                <p style={{fontSize : '42px', padding : 20}}>{time}</p>
                
            </div>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
    }  
   
    // const formattedTime = `${Math.floor(time/60)} : ${(time % 60).toString().padStart(2,'0')}`
    export default Timer  

   

