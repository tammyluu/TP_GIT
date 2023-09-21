"use strict";
console.log("Bases TypeScript");

// inférence / défaut(TS le fait pour nous)
let test ;
test = true;
test = "true";
test = 42;

let monPrenom = " Tammy"; // type String
let monAge = 35; // type Number
let isPresent = true ; // type Boolean

// je peux rensigne des valeurs uniquement du mêm type
monPrenom = "true";
//monPrenom = 45; //Type 'number' is not assignable to type 'string'
monAge = 45;
//isPresent = "true" //Type 'string' is not assignable to type 'boolean'

//Assignation (on donne nous meme le type)
// pour spécifier le type d'une variable; la syntaxe est la suivante
let firstname : string ;
firstname = "Tammy";
//firstname = 45;//Type 'number' is not assignable to type 'string'
//let age: number = "toto"; //erreur
let age: number = 45; 
let present : boolean = true;

// Via le  typescript on a une auto-completion et une intellissence plus poussées
console.log("nombre de lettre dans "+firstname +" "+ firstname.length + present );
// connaitre le type d'une variable avec typeof
console.log("type de la variable firstname est : " + typeof firstname);
console.log("type de la variable age est: " + typeof age);
console.log("type de la variable present est : " + typeof present);
let ageString: string = age.toString();
let presentString: string = present.toString();
console.log(ageString + " est desormais type " + typeof ageString);
console.log(presentString + " est desormais type " + typeof presentString);

let message : String = `
Bonjour ${firstname}
Vous avez ${age} ans.
Vous etes ${present ? "present" : "absent"}`
console.log(message);

// pour la creation de fonction en TS , la difference et l'ajoute du typage pour les paramètres
// De la sorte on sécurise les utlisations futures de notre fonction en véroullant des types incorrectes
function addition (a: number, b: number): number{
    return a + b
}
function multify (a: number, b: number): number{
    return a * b
}
function logMessage (message : string) :void {
    console.log(message);
}
let result: number = addition(1,5);
console.log("resultat de 1 + 2 = " + result);

//let resultB = multify ("a", "b")

//Array 

//pour definir un tableau de number, il faut utiliser le type suivi des crochets
let numbers : number[] = [1,2,3,4];
//ou
let numbers2: Array<number> = [1,2,3,4]

//numbers.push("toto")// erreur
numbers.push(5);
console.log(numbers);
console.table(numbers2);
// Dans un tableau array de type any on peut mettre ce que l'on veut
let tab: any[];
//on peut declarer un tableau qui conteint plusieurs types alors ces types peuuvent etres present dans le tableau
let tab2 = [ true, "Tammy"]
console.log(tab2);
tab2[1]= "toto" ;
tab2.push("24");
console.log(tab2);

//tuples
//on peut aussi via le TS crer des tuples, des Array de taille fixe
// on devra du cooup avoir le bpn nombre d'élement dans la var et le bon typage dans le bon ordre

let myPerson: [string, string, number];
myPerson = ["Albert","Dupont", 45];
//myPerson = ["Albert",45, "Dupont"];// Respect l'ordre et type
myPerson.push("toto")// incoherence mais possible
myPerson.push(24);// incoherence mais possible
//myPerson.push(true);// erreur
console.log(myPerson);
console.log(myPerson.length);
//myPerson[3]// index inconnu donc erreur ,tab initial a déclarer 3 élements malgré push.

let monObjectA = {
    firstname : "Toto",
    lastname : "Tata",
    age : 35
}
let monObjectB : object = { //permat de definir que c"est in obj  sans préciser
    firstname : "Toto",
    lastname : "Tata",
    age : 35
}

monObjectA.age
//monObjectB.age //ne trouve rien
let monObjectC : { //definir avant distribution
    firstname : string,
    lastname : string,
    age : number
} = {
    firstname : "Toto",
    lastname : "Tata",
    age : 35
}
monObjectC.age // trouve la propriete
// de préférence utilisation de l'inference
