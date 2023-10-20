import { useDispatch, useSelector } from "react-redux"
import { setFormMode, setSelectedAlbum } from "./albumSlice"

 const AlbumDisplay =(props)=>{

    const album = props.album
    const dispatch = useDispatch()
    const user = useSelector(state=>state.auth.user)
    const formMode = useSelector(state=>state.albums.formMode)

    const editAlbumHandler = () => {
      
        dispatch(setSelectedAlbum(album))
        dispatch(setFormMode("edit"))
    }
    const deleteAlbumHandler = () => {
       
        dispatch(setSelectedAlbum(album))
        dispatch(setFormMode("delete"))
        console.log(formMode);
    }
    

        return (
            <>
            <div className="col-3 bg-dark rounded border border-secondary text-light p-2">
                <h5 className="card-title">{album.title}</h5>
                <img src={album.coverURL} className="card-img-top" alt="" />
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Artist : <strong>{album.artist}</strong></li>
                    <li className="list-group-item">Release date : {album.releaseDate}</li>
                    <li className="list-group-item">Score: {album.score}</li>
                    <li className="list-group-item">Price: {album.price} €</li>
                </ul>
                {
                user &&
                    <div className="text-end">
                        <button className="btn btn-warning" onClick={() => editAlbumHandler()}>Edit</button>
                        <button className="btn btn-danger" onClick={() => deleteAlbumHandler()}>Delete</button>
                    </div>
                }
                
            </div>

            </>
        )
 }
 export default AlbumDisplay;
