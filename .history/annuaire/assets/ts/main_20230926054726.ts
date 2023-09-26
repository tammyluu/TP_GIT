import { Person } from "./classes/Person.js";

let person : Person;
let personArray: Person[] = [];

person = new Person( "Albert", "DUPONT", 12-12-2000, "albert.dupont@hotmail.fr", "+33 61234566788", 59001);
person = new Person( "John", "SMITH", 18-01-1970, "John.SMITHt@gmail.com", "+33 61234566788", 62001);
person = new Person( "Clara", "GOMEZ", 21-10-2005, "Clara.GOMEZ@yahoo.com", "+33 61234566788", 75001);
person = new Person( "Elizebeth", "MARTIN", 09-06-1998, "Elizebeth.MARTIN@wanado.fr", "+33 61234566788", 59001);
personArray.push(person)
console.log(person);