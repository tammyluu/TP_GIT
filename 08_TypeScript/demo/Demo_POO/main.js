"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Person_js_1 = require("./classes/Person.js");
const Person_js_2 = require("./classes/Person.js");
let person;
person = new Person_js_1.Person("Albert", "DUPONT", 45, 54545556);
person.firstname = "Toto";
console.log(person.fullname);
console.log(person.numeroIdNat);
console.log(`Il y a actuellement ${Person_js_1.Person.count} personnes`);
// un tableau de person
let personArray = [];
personArray.push(person);
let myStudent;
myStudent = new Person_js_2.Student("titi", "tata", 45, 455655, true);
console.log(myStudent.toString());
console.log(`Il y a actuellement ${Person_js_1.Person.count} personnes`);
console.clear();
//utiliser interface
let monObjetA = {
    firstname: "Albert",
    lastname: "DUPONT",
    numeroIdNat: 123456,
    acheter() {
        if (this.firstname === "blabla") {
            return 10;
        }
        else {
            return 25;
        }
    }
};
let monObjetC = {
    firstname: "Thierry",
    lastname: "DUPONT",
    pointFid: 15
};
console.log(monObjetC);
