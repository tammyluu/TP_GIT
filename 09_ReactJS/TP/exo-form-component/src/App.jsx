
//import { useState } from 'react';
import './App.css';

import FormUser from './Components/Form';
import ListUser from './Components/Table';

function App() {
  const [users, setUsers] = useState([])
   
     const submitHandle = ({fName,lName,birthday})=> {
        if (fName && lName && birthday) {
            setUsers([...users, { fName, lName, birthday }]);
           addUser()
          }
     } 
  return (
    <>
     <FormUser /> 
      
     
     <ListUser/>
    
    </>
  );
}

export default App;
