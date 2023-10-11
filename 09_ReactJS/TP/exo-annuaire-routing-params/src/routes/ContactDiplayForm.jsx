
import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import { AnnuaireContext } from "../contexts/AnnuaireContact"
import { useContext } from "react"


const ContactDiplayForm =(props) =>{
    const {idContact} = props
    const {contacts,setContacts} = useContext(AnnuaireContext)
    

    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const objParams = useParams()
    const {monparam} = objParams 
    const mode = searchParams.get('mode') ?? "default"
    const contactId = searchParams.get('contactId')

    const clickHandle = () => {
        console.log("added");
        navigate("/formContact")
    }

   
return (
    <>
     <AnnuaireContext.Provider>
        <div className="card mb-2 text-right"  >
            <div className="card-body row">
            
                <div className="col-3 text-center">
                    <span>{contacts.firstname}</span>
                </div>
                <div className="col-3 text-center">
                    <span>{contacts.lastname}</span>
                </div>
                <div className="col-3 text-center">
                    <span>{contacts.mail}</span>
                </div>
                <div className="col-3 text-center">
                    <span>{contacts.phonenumber}</span>
                </div>
                <div className="text-end">
                    <button  onClick={clickHandle} className="btn btn-outline-light">
                        <i className="bi bi-plus-circle"></i> Ajouter
                    </button>
                </div>
            </div>    
        </div>
            
        
     </AnnuaireContext.Provider>
   
</>
)
}
export default ContactDiplayForm