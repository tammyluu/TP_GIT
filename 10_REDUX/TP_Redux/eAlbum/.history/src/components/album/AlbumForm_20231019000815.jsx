import { useRef } from "react";
import {useDispatch} from "react-redux";
import { postAlbums } from "./albumItemsslice";
const  AlbumForm = ()=>{
    const dispatch = useDispatch();
    const titleRef = useRef(null);
    const artistRef = useRef(null);
    const releaseDateRef = useRef(null);
    const scoreRef = useRef(null);
    const coverURLRef = useRef(null);

    const submitHandler = (e)=>{
        e.preventDefault();
        const album = {
            title: titleRef.current.value,
            artist: artistRef.current.value,
            releaseDate: releaseDateRef.current.value,
            score: scoreRef.current.value,
            coverURL: coverURLRef.current.value
        }
        dispatch(postAlbums(album));
    }
    return(
        <>
         <h1>Add an album</h1>
            <hr />
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="input-group-text" className="form-label">Title:</label>
                    <input type="text" className="form-control" required ref={titleRef}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="input-group-text" className="form-label">Artist:</label>
                    <input type="text" className="form-control" required ref={artistRef}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="input-group-text" className="form-label">Release Date:</label>
                    <input type="date" className="form-control" required ref={releaseDateRef}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="input-group-text" className="form-label">Cover URL:</label>
                    <input type="number" className="form-control" required ref={scoreRef}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="input-group-text" className="form-label">Title:</label>
                    <input type="text" className="form-control" required ref={coverURLRef}/>
                </div>
                <div className="text-end">
                    <button className="btn btn-success">Add</button>
                </div>
            </form>
        </>
    )

}
export default AlbumForm;