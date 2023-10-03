import { useState } from "react";

const DiplayHookComponent = (props) =>{
    const [fName, setfName] = useState("")
    const [lName, setlName] = useState("")
   // const [fName, setfName] = useState("")

   
    const addFirstName = (event) => {
        setfName(event.target.value.charAt(0).toUpperCase()+ fName.slice(1))
        console.log(fName);
    }
    const addLastName = (event) => {
        setlName(event.target.value.toUpperCase())
        console.log(lName);
    }
    
    
    return (
        <>
        <label htmlFor="fName">Prénom :</label>
        <input type="text" value={fName} onInput={addFirstName} />
        <label htmlFor="lName">Nom : </label>
        <input type="text" value={lName} onInput={addLastName} />
        <hr />
        <p>Bonjour {fName} {lName}, bienvenue sur l'application</p>
        </>
)
}
    
export default DiplayHookComponent