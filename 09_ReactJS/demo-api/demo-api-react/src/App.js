import{useEffect} from 'react'
import './App.css';
import axios from 'axios'
function App() {
  useEffect (()=>{
      axios.get(" http://localhost:5000/personnes")
      .then(reponse =>{
        console.log(reponse.data);
      })
      .catch(error =>{
        console.error("erreur :", error)
      })
  },[])
   const addPerson =()=> {
    axios.post(" http://localhost:5000/personnes",{nom: "lolo", prenom : "lily"})
    .then(reponse =>{
      console.log(reponse.data);
    })
    .catch(error =>{
      console.error("erreur :", error)
    })
    
   }
   const deletePerson =(e) =>{
    const id = 3
    axios.delete(`http://localhost:5000/personnes/${id}`)
    .then(()=>{
      console.log("personne avec id : " +id +" a été supprimmer")
    })
    .catch(error =>{
      console.error("erreur :", error)
    })
   }
   const modifyPerson =(e) =>{
    const id = 2
    axios.put(`http://localhost:5000/personnes/${id}`,{nom: "hoho", prenom : "haha"})
    .then((reponse)=>{
      console.log("personne avec id : " +id +" a été mofifié")
      console.log(reponse.data);
    })
    .catch(error =>{
      console.error("erreur :", error)
    })
   }
  return (
    <div className="App">
      <button onClick={addPerson}>Ajoute</button>
      <br></br>
      <button onClick={deletePerson}>Suppression</button>
      <br></br>
      <button onClick={modifyPerson}>Modifier</button>
    
     
    </div>
  );
}

export default App;
