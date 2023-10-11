import { useState } from 'react';
import ContactDiplayForm from './routes/ContactDiplayForm';
import NavBar from './routes/Navbar';



function App() {
 const [contacts, setContacts]=useState([]) 
 
  return (
    <>
    <NavBar/>
           <div>
            {contacts.map(contact =>(
                <ContactDiplayForm key={contact} idContact ={contact}/>
            ))}
          </div> 
    
    </>
       
    
   
    
  );
}

export default App;