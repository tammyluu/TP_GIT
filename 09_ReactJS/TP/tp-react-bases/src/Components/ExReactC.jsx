import { useState } from "react"

const ListElement = (props) => {
    const [listEle, setListEl] = useState([])

     const addElementToList = () =>{
        let element = ["homework", " clean a house", " take a break"]
        setListEl([...listEle, element])
        console.log("listEle");
     }
     return (
        <>
        <ul>
            {listEle.map((ele, i) => <li key ={i}>{ele[i]}</li>)}
        </ul>
        <button onClick={addElementToList}>Add an Element</button>
        </>
     )
}
export default ListElement