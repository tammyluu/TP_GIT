import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import ProductAlbum from './components/ProductAlbum';
function App() {
  const prodInfos = (name,date,url) => {
    console.log(prodInfos);
  } 
  return (
    <div className="container mt-5">
      <div className="App">
      
      <ProductAlbum displayInfos={prodInfos} />
    </div>
    </div>
  );
}

export default App;
