
import { Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      ici
    <Link to={"/"}>go to Homepage</Link>
   {/*  <br></br>
    <Link to={"/product/"}>go to Homepage</Link>
    <br></br>
    <Link to={"/cart"}>go to Homepage</Link> */}
    <Home/>
    </div>
  );
}

export default App;
