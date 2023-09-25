import { Person } from "./classes/Person.js";
import { Student } from "./classes/Person.js";


let person: Person;

person = new Person("Albert","DUPONT",45,54545556)
person.firstname = "Toto"
console.log(person.fullname)
console.log(person.numeroIdNat)
console.log(`Il y a actuellement ${Person.count} personnes`)
// un tableau de person
let personArray : Person[] = []
personArray.push(person)
let myStudent : Student;
myStudent = new Student ("titi","tata", 45, 455655, true)
console.log(myStudent.toString());
console.log(`Il y a actuellement ${Person.count} personnes`)