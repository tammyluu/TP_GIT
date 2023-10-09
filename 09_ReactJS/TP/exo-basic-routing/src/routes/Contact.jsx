import React from 'react';
import {NavLink} from "react-router-dom";


const Contact = () =>{
  return (
    <div>
      <h3>Contact</h3>
      <div>
        This is the contact page
      </div>
      <NavLink to="/contact">Projets</NavLink>
    </div>
  );
}
export default Contact;
