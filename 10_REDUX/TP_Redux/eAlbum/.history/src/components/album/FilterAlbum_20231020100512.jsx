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
        
        </>
    )
}
export default FilterAlbum;