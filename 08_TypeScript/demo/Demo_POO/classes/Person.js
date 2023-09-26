"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = exports.Person = void 0;
class Person {
    constructor(firstname, lastname, age, numeroIdNat) {
        this._id = ++Person._count;
        this._firstname = firstname;
        this._lastname = lastname;
        this._age = age;
        this.numeroIdNat = numeroIdNat;
    }
    // En Typescript, il est possible de créer des getter / setter pour modifier les attributs privés / protégés
    // Ces getters / setters sont par défaut 'public' mais il est possible de leur affecter un niveau d'accessibilité propre
    get firstname() {
        return this._firstname;
    }
    set firstname(value) {
        if (value !== "Blabla") {
            this._firstname = value;
        }
    }
    get fullname() {
        return this._firstname + " " + this._lastname;
    }
    static get count() {
        return Person._count;
    }
}
exports.Person = Person;
Person._count = 0;
class Student extends Person {
    constructor(firstname, lastname, age, numeroIdNat, backpack) {
        super(firstname, lastname, age, numeroIdNat);
        this._backpack = backpack;
    }
    toString() {
        return this.fullname + `backpack ? ${this._backpack}`;
    }
}
exports.Student = Student;
