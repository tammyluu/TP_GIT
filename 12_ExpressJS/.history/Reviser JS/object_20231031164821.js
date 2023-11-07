const user = {
    name: "TiTi",
    age : 20
}
console.log(user.name);
// verify key exists in object
console.log("name" in user);
//array contains keys
console.log(Object.keys(user));
console.log(Object.values(user));
//setTimeout
setTimeout (()=>{
    console.log("hello");
},200)
