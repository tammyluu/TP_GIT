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
