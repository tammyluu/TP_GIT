import { User, Admin } from "./User.js";

let user1: User = {
    nom : "Toto Dupont",
    age:  35,
    occupation : "Facteur",
   
}
let user2: Admin = {
    nom : "Jeanne Doe",
    age:  25,
    role: "Admin",
   
}
let user3: User = {
    nom : "Michel Michel",
    age:  23,
    occupation : "Lutteur",
   
}
let user4: Admin = {
    nom : "Michael Flinch",
    age:  64,
    role: "Gérant",
   
}
console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);



console.table(monTab);