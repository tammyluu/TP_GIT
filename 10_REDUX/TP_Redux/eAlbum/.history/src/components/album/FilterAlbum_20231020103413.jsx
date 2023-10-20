import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector,setFormMode, filteredAlbum} from "./albumSlice";
const FilterAlbum = ()=>{
    const filterRef = useRef()
    const dispatch = useDispatch()
    const selectedAlbum = useSelector(state=>state.albums.selectedAlbum) 

    const filterFormHandler = async (e)=>{
        e.preventDefault()
        const album = {
           filterAlbum : filterRef.current.value
        }
      
        dispatch(filteredAlbum)
        dispatch(setFormMode("filter"))
        

    }
    return (
        <>
        <input type="text" 
             className="form-control" 
             ref={filterRef} 
             placeholder="Enter album title"
             defaultValue={selectedAlbum.filterAlbum}
             onChange={filterFormHandler}/>
        
        </>
    )
}
export default FilterAlbum;