import { Person } from "./classes/Person.js";

let person : Person;
let personArray: Person[] = [];

person = new Person( "Albert", "DUPONT", 12-12-2000, "albert.dupont@hotmail.fr", "+33 61234566788", 59001);
person = new Person( "John", "SMITH", 12-12-2000, "albert.dupont@hotmail.fr", "+33 61234566788", 59001);
person = new Person( "Clara", "GOMEZ", 12-12-2000, "albert.dupont@hotmail.fr", "+33 61234566788", 59001);
person = new Person( "Elizebeth", "MA", 12-12-2000, "albert.dupont@hotmail.fr", "+33 61234566788", 59001);
personArray.push(person)
console.log(person);