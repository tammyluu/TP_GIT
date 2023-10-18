
import './App.css';
import { fetchAlbum } from './components/album/albumItemsslice';
import SignForm from './components/auth/SignForm';
import NavBar from './components/shared/NavBar';
import { useDispatch } from'react-redux';
import { useEffect } from'react';
import AlbumForm from './components/album/AlbumForm';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAlbum());
  },[]);
  return (
    <div className="App">
     <header><NavBar/></header>
      <SignForm/>
      <AlbumForm/>
    </div>
  );
}

export default App;
