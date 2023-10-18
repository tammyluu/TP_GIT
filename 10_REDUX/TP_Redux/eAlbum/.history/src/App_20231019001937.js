
import './App.css';
import { fetchAlbum } from './components/album/albumItemsslice';
import SignForm from './components/auth/SignForm';
import NavBar from './components/shared/NavBar';
import { useDispatch } from'react-redux';
import { useEffect } from'react';
import AlbumForm from './components/album/AlbumForm';

function App() {
  const user = useSelector(state => state.auth.user)
  const formMode = useSelector(state => state.albums.formMode)
  const albums = useSelector(state => state.albums.albums)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAlbum());
  },[]);

  return (
    <></>
    
  );
}

export default App;
