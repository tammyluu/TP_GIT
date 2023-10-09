import React from 'react';
import {NavLink} from "react-router-dom";

const Projets = () =>{
  return (
    <div>
      <h3>Projets</h3>
      <div>
        Here are my projects
      </div>
      <NavLink to="/projects">Projets</NavLink>
    </div>
  );
}
export default Projets;
