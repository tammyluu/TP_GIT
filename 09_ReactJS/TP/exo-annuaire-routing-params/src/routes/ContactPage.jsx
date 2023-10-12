import { useRef,useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AnnuaireContext } from "../contexts/AnnuaireContact"

const ContactPage = () => {
    const navigate = useNavigate()  
    const {contacts, setContacts} = useContext(AnnuaireContext)

    const senderMailRef = useRef()
    const lastnameRef = useRef()
    const firstnameRef = useRef()
    const phonenumberRef = useRef()

  const submitFormHandler = (e) => {
    e.preventDefault()

    const senderMail = senderMailRef.current.value
    const lastname =  lastnameRef.current.value
    const firstname = firstnameRef.current.value
    const phonenumber = phonenumberRef.current.value
    const formValues = {
      senderMail,
      lastname,
      firstname,
      phonenumber
    }

    senderMailRef.current.value = ""
    lastnameRef.current.value = ""
    firstnameRef.current.value = ""
    phonenumberRef.current.value = ""

    

    console.log(formValues)
    const param = formValues.lastname
    console.log(param);
    navigate(`/contact`)
    // navigate(`/contact/:${param}`)
  }

  return (
    <>
      <h3>Add Contact</h3>
      <hr />
      <form onSubmit={submitFormHandler}>
        <div className="mb-3">
          <label htmlFor="lastname" className="form-label">Nom: </label>
          <input type="text" id="lastname" required ref={ lastnameRef} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="firstname" className="form-label">Prenom: </label>
          <input type="text" id="firstname" required ref={firstnameRef} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="senderMail" className="form-label">Mail: </label>
          <input type="mail" id="senderMail" required ref={senderMailRef} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="phonenumber" className="form-label">Numéro téléphone: </label>
          <input type="text" id="phonenumber" required ref={phonenumberRef} className="form-control" />
        </div>
        
        
        <div className="text-end">
          <button className="btn btn-outline-light">
            <i className="bi bi-plus-circle"></i> Ajouter
          </button>
        </div>
      </form>
    </>
  )
}

export default ContactPage