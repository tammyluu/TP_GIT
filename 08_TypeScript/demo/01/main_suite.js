"use strict";
// ENUM
/* Le typescript permet la création d'enum, des types permettant

de relier des valeurs numériques avec des valeurs en toutes lettres plus utiles pour nous développeur.

Au niveau de la RAM, cela restera seulement des nombres cela dit, on gagne en performances.*/
var STATUS;
(function (STATUS) {
    STATUS[STATUS["CADRE"] = 0] = "CADRE";
    STATUS[STATUS["SALARIE"] = 1] = "SALARIE";
    STATUS[STATUS["COMMERCIAL"] = 2] = "COMMERCIAL";
    STATUS[STATUS["BLABLA"] = 3] = "BLABLA";
})(STATUS || (STATUS = {}));
// plusieurs façons d'attribuer
let myStatusC = STATUS.CADRE;
let myStatusD = 2; //commercial car l'index commence à 0
let myStatusE = STATUS[2]; //commercial car l'index commence à 0
console.log(myStatusC); // affiche 0
console.log(myStatusD); // affiche 2
console.log(myStatusE); // affiche COMMERCIAL => récupère la valeur
let myObjectWithEnum = {
    name: "Toto",
    role: STATUS.COMMERCIAL,
    isCommercial: function () { return this.role === STATUS.COMMERCIAL; }
};
console.log('Mon utilisateur est un commercial ?' + ' ' + myObjectWithEnum.isCommercial());
// affiche true si on met STATUS.COMMERCIAL, affiche false si on met un autre statut
// Type ANY
const myFunction = (arg) => {
    console.log(arg.length);
};
myFunction("Bonjour");
myFunction(3);
// type Unknown
console.log("===== type Unknown =======");
let str;
let strAny;
let hello = "bonjour";
let myNumber = 42;
str = hello;
strAny = hello;
//console.log(str.length); // error  str est le type unknown
console.log("strAny " + strAny.length);
//console.log(typeof str);
if (typeof str == 'string') {
    console.log(str.length); //string est type de string
    console.log(typeof str);
}
else {
    console.log(str); // type autre que string
    console.log(typeof str);
}
//VOID 
function afficherMessage() {
    console.log(("bonjour, monde!"));
}
const resultat = afficherMessage(); // resultat est type void
console.log(typeof resultat); // undefined
//type function
console.log("******* type function ************...");
let operation;
operation = function (a, b) {
    return a + b;
};
const calcul = operation(5, 3); // resultat est de type number
console.log(calcul); //affiche 8
let operation2;
operation2 = function (a, b) {
    return a + b;
};
//const calcul = operation2("toto",5); // error
const calcul2 = operation2(5, 5); // 10
console.log(calcul2);
//Parametres falcutatifs
console.log("########## Parametres falcutatifs ############");
function saluer(nom) {
    if (nom) {
        console.log(`Bonjour, ${nom}`);
    }
    else {
        console.log(`Bonjour!`);
    }
}
saluer();
saluer("Alice");
// Parametres par défaut
console.log("---------------  Parametres par défaut ---------");
function multify(a, b = 2) {
    return a * b;
}
const res1 = multify(5);
console.log(res1);
const res2 = multify(5, undefined); // utiliser la valeur par defaut b(2)
console.log(res2);
function afficheInfo(nom = "Inconnu", age) {
    if (age == undefined) {
        console.log((`Nom : ${nom}, Age : ${age}`));
    }
    else {
        console.log(`Nom : ${nom}`);
    }
}
afficheInfo(); // affiche 3nom : Inconnu"
afficheInfo("Alice");
afficheInfo("Bob", 30);
// Type Assertion
// exemple avec recuperarions d'un element
console.log("****** Type Assertion ********");
let myTiltleHTML = document.querySelector('#title');
// ou
let myTiltleHTML2 = document.querySelector("#title"); //angle-bracket
let myTitle = document.querySelector("#title");
console.log(myTiltleHTML.textContent);
console.log(myTiltleHTML2.textContent);
myTitle.textContent = "Fin démo Typescript";
//div
//HTMLElement
//p
//HTMLParagraphElement
//button
//HTMLButtonElement
//Input
//HTMLInputElement
//img
//HTMLImageElement
// si on a besoins de recuperer l'event d'un elemment
function onFormSunmit(event) {
    event.preventDefault();
}
let monText = "";
function onInputChange(event) {
    monText = event.target.value;
    monText = event.target.value;
}
/*
---------- Union type ---------------
*/
console.log("---------- Union type ---------------");
let strOrNum; // type string ou number
strOrNum = "true";
strOrNum = 42;
let strNum;
let monTab = [];
monTab.push(23);
monTab.push("hello");
console.table(monTab);
// Intersection type
console.log("-------------Intersection type-------");
let poissonRouge;
let poissonVert;
poissonRouge = {
    nom: "toto",
    yeux: 3,
    href: "#FFFFFF"
};
poissonVert = {
    nom: "toto",
    yeux: 3,
    href: "#FFFFFF",
};
