//import Timer from './components/Timer';
import './App.css';
import { useState, useRef, useEffect } from 'react';

function App() {
  
  //const {timers} = props
  const [time, setTime] = useState(20)
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
  console.log(timerId.current,prevTime.current);
   return (
      <div className="timer">
          <div className="timer-info">
              <p style={{fontSize : '42px', padding : 20}}>{time}</p>
              
          </div>
          <button onClick={handleStart}>Start</button>
          <button onClick={ handleStop}>Stop</button>
      </div>
  )
}

export default App;
