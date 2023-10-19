import { useDispatch, useSelector } from "react-redux"
import { setFormMode, setSelectedAlbum } from "./albumSlice"
 const AlbumDisplay =(props)=>{

    const album = props.album
    const dispatch = useDispatch()
    const user = useSelector(state=>state.auth.user)
    

    const editAlbumHandler = (e) => {
        e.preventDefault()
        dispatch(setSelectedAlbum(album))
        dispatch(setFormMode("edit"))
    }
    const deleteAlbumHandler = (e) => {
        e.preventDefault()
        dispatch(setSelectedAlbum(album))
        dispatch(setFormMode("delete"))
    }
    

        return (
            <>
            <div class="card" style={{"width": "20rem"}}>
                <h5 class="card-title">{album.title}</h5>
                <img src={album.coverURL} className="card-img-top" alt="" />
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Artist : {album.artist}</li>
                    <li class="list-group-item">Release date : {album.releaseDate}</li>
                    <li class="list-group-item">Score: {album.score}</li>
                    <li class="list-group-item">Price: {album.price}</li>
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
