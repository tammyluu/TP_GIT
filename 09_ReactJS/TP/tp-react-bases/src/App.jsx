
import './App.css';
import TextBox from './Components/ExReactA';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <TextBox textBox= "A simple alert -check it out!" colorBox="primary" textcolor="primary"/> <br />
      <TextBox textBox= "A simple alert -check it out!" colorBox="secondary" textcolor="secondary"/> <br />
      <TextBox textBox= "A simple alert -check it out!" colorBox= "success"  textcolor= "success"/> <br />
      <TextBox textBox= "A simple alert -check it out!" colorBox="danger" textcolor= "danger"/> <br />
      <TextBox textBox= "A simple alert -check it out!" colorBox="warning" textcolor= "warning"/> <br />
      <TextBox textBox= "A simple alert -check it out!" colorBox="info" textcolor= "info"/> <br />
      <TextBox textBox= "A simple alert -check it out!" colorBox="light" textcolor="light"/> <br />
      <TextBox textBox= "A simple alert -check it out!" colorBox="dark" textcolor="dark"/> <br />
        
    </div>
  );
}

export default App;
