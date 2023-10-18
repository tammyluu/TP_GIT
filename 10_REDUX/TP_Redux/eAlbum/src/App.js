
import './App.css';
import SignForm from './components/auth/SignForm';
import NavBar from './components/shared/NavBar';

function App() {
  return (
    <div className="App">
     <header><NavBar/></header>
      <SignForm/>
    </div>
  );
}

export default App;
