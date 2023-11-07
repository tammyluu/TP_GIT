/* ---- commonjs, es module------*/
//{math : "this is from math.js"}
const  {math, addNumbers, user} = require("./math");
//const hello = require("./math");
console.log("&math);
console.log(addNumbers());// NaN not is a numeber because it no have parameters, undefined plus undefined = Nan
console.log(addNumbers(10,100));
console.log(user.name + " is : " + user.age + " years old");
//console.log(hello);
