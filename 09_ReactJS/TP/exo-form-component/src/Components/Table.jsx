import { useState } from "react";
import FormUser from "./Form";

const ListUser = (props) => {

    const{users} = props
    
    return(
        <div>
    <h2>Liste des Utilisateurs</h2>
    {users.length > 0 ? (
      <table>
        <thead>
          <tr>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Date de naissance</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={i}>
              <td>{user.fName}</td>
              <td>{user.lName}</td>
              <td>{user.birthday}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p>Aucun contactcd disponible.</p>
    )}
  </div>

    )
}

export default ListUser