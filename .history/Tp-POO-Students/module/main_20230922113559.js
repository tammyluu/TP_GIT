import Student from "./js/Student.js"; 
import StudentList from "./js/StudentList.js";

// Récupération des éléments du DOM
const tableau = document.querySelector('#tableau');
const btnAddStudent = document.querySelector('#btnAddStudent');
const btnAddSubject = document.querySelector('#btnAddSubject');
const btnAddNote = document.querySelector('#btnAddNote');

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

    // Ajout des student à la collection de Students
    for (let student of fakeStudent) {
        let tmp = new Student(student.lastName, student.firstName, student.subject, student.note);
        Students.push(tmp);
       
    }
}
// function addStudent () {
//     let tmp = new Student (lastName, firstName, subject, note);
//     Students.push(tmp);
// }

// Click Bouton Ajouter
btnAddStudent.onclick = () => {
    // Récupération des saisies input
    const lastName = document.querySelector('#lastName').value;
    const firstName = document.querySelector('#firstName').value;
       
    if (lastName != "" && firstName != "") {
        // Instanciation de notre objet Student
         tmp = new Student(lastName, firstName, "","");
        addStudent();
        updateTab();
        resetForm();
    } else {
        alert("Veuillez renseigner tous les champs...");
    }

}
btnAddSubject.onclick = () => {
    // Récupération des saisies input
    const subject = document.querySelector('#subject').value;  
    if ( (lastName != "" && firstName != "") && subject!= "" ) {
        // Instanciation de notre objet matiere
        tmp = new Student(lastName, firstName, subject, "");
       addStudent();
        updateTab();
        resetForm();
    } else {
        alert("Veuillez renseigner le matière...");
    }

}
btnAddNote.onclick = () => {
    // Récupération des saisies input
    const note = document.querySelector('#note').value;  
    if (note != "") {
        // Instanciation de notre objet note (avec un élève existe)
         tmp = new Student(lastName, firstName, subject, note);
        addStudent();
        updateTab();
        resetForm();
    } else {
        alert("Veuillez renseigner le note...");
    }
}

function updateTab() {
    // On vide le tableau
    tableau.innerHTML = '';
    // On le rempli des nouvelles valeurs
    for (let i = 0; i < Students.length; i++) {
        tableau.innerHTML += `
        <tr>
            <td>${Students[i].lastName}</td>
            <td>${Students[i].firstName}</td>
            <td>${Students[i].subject}</td>
            <td>${Students[i].note}</td>
         </tr>        
        `
    }
}
// function findStudentByName (key){
//     let  listStudent = new Students;
//     for (let i = 0; i < Students.length; i++){
//         findStudent = this.Students[i];
//         if (student.lastName.toLowerCase().trim().search(key.toLowerCase().trim()) != -1){
//             listStudent.
//         }

//     }
// }
function resetForm() {
    document.querySelector('#lastName').value = "";
    document.querySelector('#firstName').value= "";
    document.querySelector('#subject').value = "";
    document.querySelector('#Telephone').value = "";
    document.querySelector('#note').value = "";
}
function init() {
    initalStudentList();
    updateTab();
}
window.onload = init();
