import Timer from './components/Timer';
import './App.css';
import { useState } from 'react';

function App() {
  const [timers, setTimers] = useState([])
  const [timerName, setTimerName] = useState('')
  const [timerDuration, setTimerDuration]= useState(0)
  const [timerId, setTimerId] = useState (false)
  const handleCreateTimer = () => {
    if (timers.length < 5 && timerName && timerDuration > 0) {
      setTimers([...timers, { id: timerId, name: timerName, duration: timerDuration }]);
      setTimerId(timerId + 1);
      setTimerName('');
      setTimerDuration(0);
    }
    const handleDeleteTimer = (id) => {
      const updatedTimers = timers.filter((timer) => timer.id !== id);
      setTimers(updatedTimers);
    };
  
  return (
    <div className="App">
    <h1>Minuteurs</h1>
      <div className="timer-form">
        <input
          type="text"
          placeholder="Nom du minuteur"
          value={timerName}
          onChange={(e) => setTimerName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Durée (en secondes)"
          value={timerDuration}
          onChange={(e) => setTimerDuration(e.target.value)}
        />
        <button onClick={handleCreateTimer}>Créer Minuteur</button>
      </div>
      
    </div>
  );
}
}
export default App;
