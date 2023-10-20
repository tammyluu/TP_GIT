import { useRef } from "react";
import { useDispatch } from "react-redux";
import se
const FilterAlbum = ()=>{
    const filterRef = useRef()
    const dispatch = useDispatch()
    const selectedAlbum = useSelector(state=>state.albums.selectedAlbum) 
    return (
        <>
        
        </>
    )
}
export default FilterAlbum;