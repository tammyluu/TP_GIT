import { useSelector,useDispatch } from "react-redux";
import { deleteAlbum ,  setFormMode} from "./albumSlice";



const DeletAlbumForm = () =>{
    const selectedAlbum = useSelector(state=>state.albums.selectedAlbum)
    const dispatch = useDispatch()
   
    const deleteAlbumHandler = async (e)=>{
        e.preventDefault()
        
        dispatch(deleteAlbum(selectedAlbum.id))
        dispatch(setFormMode(""))
        console.log(selectedAlbum);
    }

    return (
        <>
         <h1>Delete this album</h1>
            <hr />
            <form onSubmit={deleteAlbumHandler}>
                <div className="mb-3">
                <div className="mb-3">
                    <label htmlFor="input-group-text" className="form-label">Cover URL:</label>
                    <input type="text" className="form-control" disabled  defaultValue={selectedAlbum.coverURL}/>
                </div>
                    <label htmlFor="input-group-text" className="form-label">Title:</label>
                    <input type="text" className="form-control" disabled  defaultValue={selectedAlbum.title}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="input-group-text" className="form-label">Artist:</label>
                    <input type="text" className="form-control" disabled defaultValue={selectedAlbum.artist} />
                </div>
                <div className="mb-3">
                    <label htmlFor="input-group-text" className="form-label">Release Date:</label>
                    <input type="date" className="form-control"disabled defaultValue={selectedAlbum.releaseDate}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="input-group-text" className="form-label">Score:</label>
                    <input type="number" className="form-control"  min={0} max={5} defaultValue={selectedAlbum.score} />
                </div>
                <div className="mb-3">
                    <label htmlFor="input-group-text" className="form-label">Price:</label>
                    <input type="number" className="form-control" disabled  defaultValue={selectedAlbum.price}/>
                </div>
                <div className="text-end">
                    <button className="btn btn-danger">Delete</button>
                </div>
            </form>
        </>
    )
}
export default DeletAlbumForm;