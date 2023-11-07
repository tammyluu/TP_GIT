/* ---- commonjs, es module------*/
//{math : "this is from math.js"}
const  {math, addNumbers, user} = require("./math");
console.log(addNumbers(10,100));
console.log(user.name + ": " + user.age + " years old);
