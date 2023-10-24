import { useDispatch, useSelector } from "react-redux";
import { removeUser, setAuthMode } from "../auth/authSlice";
import Modal from "./Modal";
import SignForm from "../auth/SignForm";
import { useRef } from "react";
import { setFilteredAlbums } from "../album/albumSlice";
import "bootstrap-icons/font/bootstrap-icons.css";

const NavBar = () => {
    const user = useSelector(state => state.auth.user)
    const authMode = useSelector(state => state.auth.authMode)
    const dispatch = useDispatch()
    const searchRef = useRef()
    
    const submitHandler = (e) => {
        e.preventDefault()
        const search = searchRef.current.value
        console.log(search);
        dispatch(setFilteredAlbums(search))
    }
    



    return ( 
        <>
        {
            authMode && (
                <Modal onClose={() => dispatch(setAuthMode(""))}>
                    <SignForm/>
                </Modal>
            )
        }
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <span className="navbar-brand"><i className="bi bi-globe"></i> eAlbums</span>
                    <form class="form-inline m-4" onSubmit={submitHandler}>
                    <div className="input-group mb-3">

                        <input class="form-control  " type="search" placeholder="Search..." ref={searchRef} aria-label="Search" button />
                        <button class="btn btn-outline-light p-2 my-2 my-sm-0" type="submit"  >Search</button>

                    </div>

                </form>
                    <button 
                        onClick={() => !user ? dispatch(setAuthMode("Se connecter")) : dispatch(removeUser())}
                        className="ms-auto btn btn-info"
                    >
                        {user ? "Disconnection" : "Sign In"}
                    </button>
                </div>
            </nav>
        </>
     );
}
 
export default NavBar;