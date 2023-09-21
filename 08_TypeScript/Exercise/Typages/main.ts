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
 console.log("1st",person);

 let person1 : {
    firstName : string,
    age: number,
    isLoggedIn: true
 } =  {
    firstName : "Dupont",
    age : 20 ,
    isLoggedIn : true
 }
 console.log("2st",person1);

 let person2 : object = { 
    firstName : "Dupont",
    age : 20 ,
    isLoggedIn : true
}
console.log("3nd",person2);

let infos : [string, number];




