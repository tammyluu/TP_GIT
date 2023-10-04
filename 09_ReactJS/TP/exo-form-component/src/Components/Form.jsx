/* Réaliser une application de repertoire en ligne via React. Pour ce faire, vous réaliserez au moins deux composants: 
Un composant de formulaire permettant l'envoi des informations de contactsUn composant de display des contacts sous la forme d'un tableau en cas de présence de contacts (dans le cas contraire, un message informatif)
Pour permettre aux deux composants de communiquer, vous pouvez faire transiter les props via le composant App.
 
Vous aurez ainsi besoin d'une variable d'état dans App ainsi que de 3 variables d'état minimum dans le composant de formulaire. */

import { useState } from "react";

const FormUser = (props) =>{

    const {submitHandle} = props
    const [fName, setFname] = useState("")
    const [lName, setLname] = useState("")
    const [birthday, setBirthday] = useState("")

    const addUser = (e) =>  {
        e.preventDefault()
        submitHandle({
            fName, lName, birthday
        })
        
        }
        return (
            <form action="#" onSubmit={addUser}>
                <div>
                    <label htmlFor="fName"> First Name </label>
                    <input type="text" value={fName} onInput={(e) => setFname(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="lName"> Last Name </label>
                    <input type="text" value={lName} onInput={(e) => setLname(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="birthday"> Date of birth</label>
                    <input type="date" value={birthday} onInput={(e) => setBirthday(e.target.value)} />
                </div>
                <button type="button" onClick={submitHandle}>Add User</button>
            </form>
        )

    }
    


export default FormUser