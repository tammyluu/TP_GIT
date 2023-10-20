import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector,setFormMode, filteredAlbum} from "./albumSlice";
const FilterAlbum = ()=>{
    const filterRef = useRef()
    const dispatch = useDispatch()
    const selectedAlbum = useSelector(state=>state.albums.selectedAlbum) 
    const  filterFormHandler =()=>{
        dispatch(filteredAlbum(filterRef.current.value))
    }

   

    }
    
}
export default FilterAlbum;