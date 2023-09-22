import Student from "./js/Student.js"; 

// Récupération des éléments du DOM
const tableau = document.querySelector('#tableau');
const btnValider = document.querySelector('#btnValider');

// Variable globale à l'app
const Students = []

function initalStudentList() {
    // Création d'un tableau de personne à deux dimensions
    let fakeStudent = [
        {
            lastName : "Robert",
            firstName : "Julia",
            subject : " Maths",
            note : "16"
        },
        {
            lastName : "Cruise",
            firstName : "Tom",
            subject : " Anglais",
            note : "20"
        },
        
    ];

    // Ajout des contact à la collection Contacts
    for (let student of fakeStudent) {
        let tmp = new Student(.nom, contact.prenom, new Date(contact.dateNaissance).toLocaleDateString(), contact.telephone, contact.email);
        Contacts.push(tmp);
    }
}


// Click Bouton Ajouter
btnValider.onclick = () => {
    // Récupération des saisies utilisateur
    const nom = document.querySelector('#Nom').value;
    const prenom = document.querySelector('#Prenom').value;
    const dateNaissance = new Date(document.querySelector('#dateNaissance').value).toLocaleDateString();
    const telephone = document.querySelector('#Telephone').value;
    const email = document.querySelector('#Email').value;

    // Récupérer la valeur des btn Radios
    const titre = document.getElementById('Mr').checked ? "Mr" : "Mme";

    if (nom != "" && prenom != "" && dateNaissance != "" && telephone != "" && email != "" && titre != "") {
        // Instanciation de notre objet Contact
        let tmp = new Contact(titre, nom, prenom, dateNaissance, telephone, email);

        Contacts.push(tmp);

        updateTab();
        resetForm();
    } else {
        alert("Veuillez renseigner tous les champs...");
    }

}


function updateTab() {
    // On vide le tableau
    tableau.innerHTML = '';
    // On le rempli des nouvelles valeurs
    for (let i = 0; i < Contacts.length; i++) {
        tableau.innerHTML += `
        <tr>
            <td>${Contacts[i].titre}</td>
            <td>${Contacts[i].nom}</td>
            <td>${Contacts[i].prenom}</td>
            <td>${Contacts[i].dateNaissance}</td>
            <td>${Contacts[i].telephone}</td>
            <td>${Contacts[i].email}</td>
        </tr>        
        `
    }
}


function resetForm() {
    document.querySelector('#Nom').value = "";
    document.querySelector('#Prenom').value = "";
    document.querySelector('#dateNaissance').value = "";
    document.querySelector('#Telephone').value = "";
    document.querySelector('#Email').value = "";
}


function init() {
    createFakeContact();
    updateTab();
}

window.onload = init();
