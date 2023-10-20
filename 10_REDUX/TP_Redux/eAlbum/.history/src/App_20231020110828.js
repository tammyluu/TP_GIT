
import './App.css';
import { fetchAlbum } from './components/album/albumSlice';
//import SignForm from './components/auth/SignForm';
import NavBar from './components/shared/NavBar';
import { useDispatch , useSelector} from'react-redux';
import { useEffect } from'react';
//import AlbumForm from './components/album/AlbumForm';
import AlbumDisplay from './components/album/AlbumDiplay';
import Modal from './components/shared/Modal';
import AddAlbumForm from './components/album/AddAlbumForm';
import EditAlbumForm from './components/album/EditAlbumForm';
import DeleteAlbumForm from './components/album/DeleteAlbumForm';
import { setFormMode } from './components/album/albumSlice';

function App() {
  const user = useSelector(state => state.auth.user)
  const formMode = useSelector(state => state.albums.formMode)
  const albums = useSelector(state => state.albums.albums)
  const filteredAlbum = useSelector(state => state.albums.filteredAlbum)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAlbum());
  },[]);

  return (
    <>
      {formMode === "add" && <Modal onClose={() => dispatch(setFormMode(""))}><AddAlbumForm/></Modal>}
      {formMode === "edit" && <Modal onClose={() => dispatch(setFormMode(""))}><EditAlbumForm/></Modal>}
      {formMode === "delete" && <Modal onClose={() => dispatch(setFormMode(""))}><DeleteAlbumForm/></Modal>}
      <header>
        <NavBar />
      </header>
      <main className='container'>
        <div className='row my-3'>
          <div className='col-10 offset-1 bg-dark rounded text-light p-3'>
            <div className='d-flex justify-content-between align-items-center'>
              <h3>Albums</h3>
              
              <input className="" id="myInput" type="text" placeholder="Search.."></input>
              {user && <button className='btn btn-success' onClick={() => dispatch(setFormMode("add"))}>Add</button>}
            </div>
            <hr />
            <div className='d-flex flex-wrap align-items-center'>
            <div className={styles.card}>
            {filteredAlbum !== null ? <AlbumDisplay key={filteredAlbum.id} album={filteredAlbum[0]} /> :
              albums.length === 0 ? (
                <p>There albums</p>
              ) : albums.map(album => <AlbumDisplay key={album.id} album={album} />)
            }
            </div>
          </div>
        </div>
      </main>
    </>

  );
}

export default App;
