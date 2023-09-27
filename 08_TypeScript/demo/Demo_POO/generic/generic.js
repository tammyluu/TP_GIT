"use strict";
// Generic
function getLength(array) {
    return array.length;
}
const nombres = [1, 2, 3, 4];
getLength(nombres);
const lettres = ["1", "2", "3", 4];
getLength(lettres);
// generic en classe
class NomDeClass {
    constructor(monAttribute) {
        this.monAttribute = monAttribute;
    }
}
let monObject;
monObject = new NomDeClass("42");
let monObject2;
monObject2 = new NomDeClass(42);
