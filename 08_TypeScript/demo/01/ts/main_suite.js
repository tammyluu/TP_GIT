"use strict";
// ENUM
//relier des valeur
var STATUS;
(function (STATUS) {
    STATUS[STATUS["CADRE"] = 0] = "CADRE";
    STATUS[STATUS["SALARIE"] = 1] = "SALARIE";
    STATUS[STATUS["COMMERCIAL"] = 2] = "COMMERCIAL";
    STATUS[STATUS["BLABLA"] = 3] = "BLABLA";
})(STATUS || (STATUS = {}));
let maStatusC = STATUS.CADRE;
let maStatusD = 2;
let maStatusE = STATUS[2]; // equivalent ligne 14
console.log(maStatusC);
console.log(maStatusD);
console.log(maStatusE);
let myObjectWithEnum = {
    nam: "Toto",
    role: STATUS.COMMERCIAL,
    isCommercial: function () { return this.role === STATUS.COMMERCIAL; }
};
console.log('mon utilisateur est un commercial? ' + myObjectWithEnum.isCommercial());
