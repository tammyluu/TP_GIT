import { useDispatch, useSelector } from "react-redux"
import { setAuthMode, setUser } from "./authSlice"
import { useRef } from "react"
import { SIGN_IN_URL, SIGN_UP_URL } from "../fireBaseConfig"

const SignForm = ()=>{
    const authMode = useSelector(state => state.auth.authMode)
    const dispatch = useDispatch()

    const emailRef = useRef()
    const passwordRef = useRef()

    const submitFormHandler = async(e) => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value

        const credentials = { //elements  demandés dans le doc firebase dans request body Payload
            email,
            password,
            returnSecureToken: true,
        }
        const URL = authMode === "Se connecter" ? SIGN_IN_URL : SIGN_UP_URL
        try {
            const reponse = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            })
            if (!reponse.ok) {
                throw new Error("Some thing went wrong during the" + authMode)
            }
            const data = await reponse.json()
                console.log(data);
                localStorage.setItem("token", data.idToken)
                dispatch(setUser(data))
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <>
        <h3>{authMode}</h3>
        <hr />
        <form  onSubmit={submitFormHandler}>
            <div>
                <label htmlFor="email">Email :</label>
                <input type="email" id="email" ref={emailRef} />
            </div>
            <div>
                <label htmlFor="password">Password :</label>
                <input type="password" id="password" ref={passwordRef} />
            </div>
            <button>{authMode}</button>
        </form>
        <button onClick={() => dispatch(setAuthMode(authMode === "Se connecter" ? "S'inscrire" : "Se connecter"))}> 
                    {authMode === "Se connecter" ? "S'inscrire" : "Se connecter"}
        </button>
        </>
    )
        
}
export default SignForm