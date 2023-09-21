"use strict";
let userName : string;
userName = "Tom";

let userAge : number;
userAge = 18;

let isLogin : boolean;
isLogin = true;

let userNames : string[] = [];
userNames.push(userName);
console.log(userNames);

 let person = {};
 person = {
    firstName : "Dupont",
    age : 20 ,
    isLoggedIn : true
 }
 //console.log("1st",person.age);

 let person1 : {
    firstName : string,
    age: number,
    isLoggedIn: boolean
 } =  {
    firstName : "Dupont",
    age : 20 ,
    isLoggedIn : true
 }
 console.log("2st",person1.age);

 let person2  = { 
    firstName : "Dupont",
    age : 20 ,
    isLoggedIn : true
}
console.log("3nd",person2.age);

let infos : [string, number];




