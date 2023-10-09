
import './App.css';
import {Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <li>
        <Link to="/">Accueil</Link>
      </li>
      <li>
        <Link to="/projets">Projects</Link>
      </li>
      <li>
        <Link to="/about">Contactez-moi</Link>
      </li>
      <li>
        <Link to="/contact">A propos</Link>
      </li>
    </div>
  );
}

export default App;
