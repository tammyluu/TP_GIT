import { Person } from "./classes/Person.js";

let person : Person;
let personArray: Person[] = [];

person = new Person( "Albert", "DUPONT", 2000-12-01, "albert.dupont@hotmail.fr", "+33 61234566788", 59001);
let person2 = new Person( "John", "SMITH", 1970-10-09, "John.SMITHt@gmail.com", "+33 61234566788", 62001);
let person3 = new Person( "Clara", "GOMEZ", 2005-10-21, "Clara.GOMEZ@yahoo.com", "+33 61234566788", 75001);
let person4 = new Person( "Elizebeth", "MARTIN", 1998-09-06, "Elizebeth.MARTIN@wanado.fr", "+33 61234566788", 92001);
personArray.push(person)
personArray.push(person2)
personArray.push(person3)
personArray.push(person4)

console.log(personArray);

const btnAddContact = document.querySelector('.btnAddContact')
const btnEditContact = document.querySelector('#btnEditContact')
const btnDeleteContact = document.querySelector('#btnDeleteContact')
const firstname = document.querySelector('#details-firstname')
const lastname = document.querySelector('#details-lastname')
const dateOfBirth = document.querySelector('#details-dateOfBirth')
const age = document.querySelector('#details-age')
const email = document.querySelector('#details-email')
const phoneNumber = document.querySelector('#details-phoneNumber')

function displayListContact(): void {
    for ( person of personArray){
        console.log("forperson);
    }
}