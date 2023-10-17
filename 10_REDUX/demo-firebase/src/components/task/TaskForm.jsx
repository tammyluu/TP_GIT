import { useRef } from "react"
import { removerUser } from "../authSlice"
import { useDispatch } from "react-redux"
import { addTask } from "./TaskSlice"
import { BASE_DB_URL } from "../../fireBaseConfig"


const TaskForm =(props)=> {

    const textRef = useRef()
    const user = props.user
    const dispatch = useDispatch()

    const handlesubmit = async (e) => {
        e.preventDefault( )
            const newTask ={
                id: Date.now(),
                text: textRef.current.value,
                done: false

            }
            if (user.idToken) {
                try {
                    const response = await fetch(`${BASE_DB_URL}/TODOLIST.json?auth=${user.idToken}`, {
                        method: "POST", //l'action on veut faire
                        headers: {
                            "Content-Type": "application/json",
                            
                        },
                        body: JSON.stringify(newTask),
                    })
                    if (!response.ok) {
                        throw new Error("Some thing went wrong during the POST request!")
                    }
                    const data = await response.json()
                    console.log(data);
                    dispatch(addTask(newTask))
                } catch (error) {
                    console.error(error.message);
                }
            }

       

    }
    return(
        <>
        <button onClick={()=>dispatch(removerUser())}>Déconexion</button>
        <form onSubmit={handlesubmit}>
            <input type="text" placeholder="Ajouter une tâche" ref={textRef} />
        </form>
        </>
    )
}
export default TaskForm