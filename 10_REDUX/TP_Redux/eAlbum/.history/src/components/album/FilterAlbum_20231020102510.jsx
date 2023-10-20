import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector,setFormMode, filteredAlbum} from "./albumSlice";
const FilterAlbum = ()=>{
    const filterRef = useRef()
    const dispatch = useDispatch()
    const selectedAlbum = useSelector(state=>state.albums.selectedAlbum) 

    const submitFormHandler = async (e)=>{
        e.preventDefault()
        const album = {
           filterAlbum : filterRef.current.value
        }
      
        dispatch(filteredAlbum({...album, id : selectedAlbum.id}))
        dispatch(setFormMode("filter"))

    }
    return (
        <>
        
        </>
    )
}
export default FilterAlbum;