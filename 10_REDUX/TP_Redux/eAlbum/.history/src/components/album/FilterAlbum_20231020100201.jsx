import { useRef } from "react";

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