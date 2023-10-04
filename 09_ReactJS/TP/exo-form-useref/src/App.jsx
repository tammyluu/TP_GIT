import FormComponent from "./components/FormComponent";


function App() {
   const addUser = ({pseudo, password}) => {
   console.log(pseudo);
   console.log(password)
  }
  return (
    
      <div className="container">
        <FormComponent addUser={addUser}  />        
      </div>
   
  )
}

export default App