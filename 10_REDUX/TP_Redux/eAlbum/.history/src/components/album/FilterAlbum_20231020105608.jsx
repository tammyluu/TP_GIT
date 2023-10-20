import { useRef } from "react";
import { useDispatch } from "react-redux";
impo
import {   setFilteredAlbums} from "./albumSlice";
const FilterAlbum = ()=>{
    const filterRef = useRef()
    const dispatch = useDispatch()
    const selectedAlbum = useSelector(state=>state.albums.selectedAlbum) 

    const  filterFormHandler =()=>{
        dispatch( setFilteredAlbums(filterRef.current.value))
    }
    return (
        <>
        <input type="text" 
             className="form-control" 
             ref={filterRef} 
             placeholder="Enter album title"
             defaultValue={selectedAlbum.title}
             onChange={filterFormHandler}/>
        
        </>
    )

   

    }
    

export default FilterAlbum;