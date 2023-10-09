import React from 'react';
import {NavLink} from "react-router-dom";

const Apropose = () =>{
  return (
    <div>
      <h3>A Propos</h3>
      <div>
        This is the About page
      </div>
      <NavLink to="/about">Projets</NavLink>
    </div>
  );
}
export default Apropose;
