//.slice()
const str = "hello world";
//3 first caracters
console.log(str.slice(0,3)); // hel
//str.slice(a,b) => return substring from position index a to b , exclude b , not b
console.log(str.slice(3,8)); // lo wo
//str.slice(a) => return substring from position index a to end of string
console.log(str.slice(3)); // lo world
console.log(str.slice(8)); // rld
//str.slice(-a) => return substring from position index the end of string
console.log(str.slice(-2)); // ld

