import { useSelector,useDispatch } from "react-redux";
import { useRef } from "react";
import { BASE_DB_URL } from "../../firebaseConfig";
import { setFormMode } from "./albumSlice";
import { editAlbum } from "./albumSlice";

const EditAlbumForm = () =>{
    const selectedAlbum = useSelector(state=>state.albums.selectedAlbum)
    const dispatch = useDispatch()
    const token = localStorage.getItem("token")

    const titleRef = useRef();
    const artistRef = useRef();
    const releaseDateRef = useRef();
    const scoreRef = useRef();
    const coverURLRef = useRef();
    const priceRef = useRef();

    const submitFormHandler = async (e)=>{
        e.preventDefault()
        const album = {
            title: titleRef.current.value,
            artist: artistRef.current.value,
            releaseDate: releaseDateRef.current.value,
            score: scoreRef.current.value,
            coverURL: coverURLRef.current.value,
            price: priceRef.current.value
        }
      
        dispatch(editAlbum({...album, id : selectedAlbum.id}))
        dispatch(setFormMode("edit"))

    }

return (
    <>
     <h1>Modify this album</h1>
            <hr />
            <form onSubmit={submitFormHandler}>
                <div className="mb-3">
                <div className="mb-3">
                    <label htmlFor="input-group-text" className="form-label">Cover URL:</label>
                    <input type="text" className="form-control" required ref={coverURLRef} defaultValue={selectedAlbum.coverURL}/>
                </div>
                    <label htmlFor="input-group-text" className="form-label">Title:</label>
                    <input type="text" className="form-control" required ref={titleRef} defaultValue={selectedAlbum.title}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="input-group-text" className="form-label">Artist:</label>
                    <input type="text" className="form-control" required ref={artistRef} defaultValue={selectedAlbum.artist}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="input-group-text" className="form-label">Release Date:</label>
                    <input type="date" className="form-control" required ref={releaseDateRef} defaultValue={selectedAlbum.releaseDate}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="input-group-text" className="form-label">Score:</label>
                    <input type="number" className="form-control" required  min={0} max={5} ref={scoreRef} defaultValue={selectedAlbum.score}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="input-group-text" className="form-label">Price:</label>
                    <input type="number" className="form-control" ref={priceRef} defaultValue={selectedAlbum.price}/>
                </div>
                <div className="text-end">
                    <button className="btn btn-success">Save</button>
                </div>
            </form>
    </>
)

}
export default EditAlbumForm;