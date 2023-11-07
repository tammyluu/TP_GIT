/* ---- commonjs, es module------*/
//{math : "this is from math.js"}
const  {math, addNumbers, user} = require("./math");
//const hello = require("./math");
console.log(addNumbers());// NaN not is a numeber beacause 
console.log(user.name + " is : " + user.age + " years old");
//console.log(hello);
