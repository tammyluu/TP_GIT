import { useRef } from "react"

const FormComponent = (props) => {
    const { addUser } = props

    const pseudo  = useRef()
    const password = useRef()
    
    const submitHandler = (event) => {
        event.preventDefault()
        addUser({
             pseudo : pseudo.current.value, 
             password : password.current.value 
         })     
       
    }


    return (
        <>
        <div className="row mt-3">
            <h3>Loggin Page</h3>
            <hr />
            <form action="#" onSubmit={submitHandler}>
            <   div className="mb-3">
                    <label htmlFor="pseudo" className="form-label">Pseudo: </label>
                    <input className="mx-3" type="email" ref={pseudo} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password: </label>
                    <input className="mx-3" type="password" ref ={password} />
                </div>
                
                <div>
                    <button onClick={addUser} className="btn btn-primary">Enregistre</button>
                </div>
        </form>
        </div>
        </>
    )

}




export default FormComponent