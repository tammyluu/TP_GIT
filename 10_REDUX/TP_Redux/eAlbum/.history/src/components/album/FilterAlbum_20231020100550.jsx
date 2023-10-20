import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "./albumSlice";
const FilterAlbum = ()=>{
    const filterRef = useRef()
    const dispatch = useDispatch()
    const selectedAlbum = useSelector(state=>state.albums.selectedAlbum) 

    const submitFormHandler = async (e)=>{
        e.preventDefault()
        const album = {
           filterAlbum : 
        }
      
        dispatch(editAlbum({...album, id : selectedAlbum.id}))
        dispatch(setFormMode("edit"))

    }
    return (
        <>
        
        </>
    )
}
export default FilterAlbum;