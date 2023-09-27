"use strict";
class Base {
    //private int:number;
    constructor(int) {
        this.int = int;
        //this.int = int;
    }
    get getInt() {
        return this.int;
    }
    set setInt(value) {
        this.int = value;
    }
    palrer() {
        console.log("toto");
    }
}
// let maBase = new Base(24):
class Basic extends Base {
    constructor(firstname, int) {
        super(int);
        this.firstname = firstname;
    }
    toString() {
        return "Hello World" + this.getInt.toString();
    }
}
let b = new Basic("toto", 42);
console.log(b.toString());
