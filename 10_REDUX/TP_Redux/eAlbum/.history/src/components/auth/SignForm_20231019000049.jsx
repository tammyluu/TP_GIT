import { useDispatch, useSelector } from "react-redux";
import { setAuthMode, setUser } from "./authSlice";
import { useRef } from "react";
import { SIGN_IN_URL, SIGN_UP_URL } from "../../firebaseConfig";

const SignForm = () => {
    const authMode = useSelector(state => state.auth.authMode)
    const dispatch = useDispatch()

    const emailRef = useRef()
    const passwordRef = useRef()

    const submitFormHandler = async (event) => {
        event.preventDefault()

        console.log("envoyer data");
        const email = emailRef.current.value
        const password = passwordRef.current.value

        const credentials = {
            email,
            password,
            returnSecureToken: true
        }

         {authMode === "Se connecter" ?  (dispatch(postSetUserSignin(credentials))) : (dispatch(postSetUserSignup(credentials)))}
     
    }

    return ( 
        <>
            <h3>{authMode}</h3>
            <hr />
            <form onSubmit={submitFormHandler}>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email"  ref={emailRef}/>
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" ref={passwordRef} />
                </div>
                <button>{authMode}</button>
            </form>
            <button 
                onClick={() => dispatch(setAuthMode(authMode === "Sign In" ? "Sign Up" : "Sign In"))}>
                    {authMode === "SignIn" ? "Sign Up" : "Sign In"}
            </button>
        </>
     );
}
 
export default SignForm;