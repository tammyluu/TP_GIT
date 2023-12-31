import { useRef } from "react";
import {useDispatch} from "react-redux";
import { postAlbums } from "./albumSlice";

const  AddAlbumForm = ()=>{
    const dispatch = useDispatch();
    const titleRef = useRef();
    const artistRef = useRef();
    const releaseDateRef = useRef();
    const scoreRef = useRef();
    const coverURLRef = useRef();
    const priceRef = useRef();

    const submitHandler = (e)=>{
        e.preventDefault();
        const album = {
            title: titleRef.current.value,
            artist: artistRef.current.value,
            releaseDate: releaseDateRef.current.value,
            score: scoreRef.current.value,
            coverURL: coverURLRef.current.value,
            price : priceRef.current.value
        }
        dispatch(postAlbums(album));
         titleRef.current.value = "";
         artistRef.current.value = "";
         releaseDateRef.current.value = "";
         scoreRef.current.value = "";
         coverURLRef.current.value = "";
         priceRef.current.value = "";
    }
    return(
        <>
         <h1>Add an album</h1>
            <hr />
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                <div className="mb-3">
                    <label htmlFor="input-group-text" className="form-label">Cover URL:</label>
                    <input type="text" className="form-control" required ref={coverURLRef}/>
                </div>
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
                    <label htmlFor="input-group-text" className="form-label">Score:</label>
                    <input type="number" className="form-control" required  min={0} max={5} ref={scoreRef}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="input-group-text" className="form-label">Price:</label>
                    <input type="number" className="form-control" ref={priceRef}/>
                </div>
                <div className="text-end">
                    <button className="btn btn-success">Add</button>
                </div>
            </form>
        </>
    )

}
export default AddAlbumForm;