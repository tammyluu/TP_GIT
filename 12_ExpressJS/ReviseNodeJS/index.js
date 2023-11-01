/* ---- commonjs, es module------*/
//{math : "this is from math.js"}
const  {math, addNumbers, user} = require("./math");
//const hello = require("./math");
console.log("1:", math);
console.log("2: " ,addNumbers());// NaN not is a number because it no have parameters, undefined + undefined = Nan
console.log("3: ",addNumbers(10,30));
console.log(user.name + " is : " + user.age + " years old");
//console.log(hello);
