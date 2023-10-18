
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
              {user && <button className='btn btn-success' onClick={() => dispatch(setFormMode("add"))}>Add</button>}
            </div>
            <hr />
            {
              albums.length === 0 ? (
                <p>Il n'y a pas d'albums</p>
              ) : albums.map(recipe => <AlbumDisplay key={recipe.id} recipe={recipe} />)
            }
          </div>
        </div>
      </main>
    </>

  );
}

export default App;
