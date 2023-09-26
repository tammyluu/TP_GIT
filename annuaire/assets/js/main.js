import { Person } from "./classes/Person.js";
let person;
let personArray = [];
person = new Person("Albert", "DUPONT", new Date("2000-12-01"), "albert.dupont@hotmail.fr", "+33 6 12 34 56 67 ", 59001);
let person2 = new Person("John", "SMITH", new Date("1970-10-09"), "John.SMITHt@gmail.com", "+33 6 12 34 56 88", 62001);
let person3 = new Person("Clara", "GOMEZ", new Date("2005-10-21"), "Clara.GOMEZ@yahoo.com", "+33 6 12 34 56 78", 75001);
let person4 = new Person("Elizebeth", "MARTIN", new Date("2005-10-21"), "Elizebeth.MARTIN@wanado.fr", "+33 6 12 34 56 68", 92001);
personArray.push(person);
personArray.push(person2);
personArray.push(person3);
personArray.push(person4);
console.log(personArray);
const btnAddContact = document.querySelector('.btnAddContact');
const btnEditContact = document.querySelector('#btnEditContact');
const btnDeleteContact = document.querySelector('#btnDeleteContact');
const firstname = document.querySelector('#details-firstname');
const lastname = document.querySelector('#details-lastname');
const dateOfBirth = document.querySelector('#details-dateOfBirth');
const age = document.querySelector('#details-age');
const email = document.querySelector('#details-email');
const phoneNumber = document.querySelector('#details-phoneNumber');
const detail = document.querySelectorAll('.row');
function displayListContact() {
    let listContact = "";
    const listPerson = document.querySelector('#contactsContainer');
    for (let i = 0; i < personArray.length; i++) {
        console.log(` person index : ${i} is  ${personArray[i].toString()}`);
        listContact += `<tr>
                        <button id = "contact-detail">${personArray[i].firstname} ${personArray[i].lastname}</button>
                        <hr>
                        </tr>`;
    }
    listPerson.innerHTML = listContact;
}
displayListContact();
