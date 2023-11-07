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
//infinite
setTimeout (()=>{
    console.log("hello");//dispaly after 2s
},2000)
setInterval(()=>{
    console.log("hello"); //2s one time
},2000)
// stop by clearInterval
let times = 0
const interval = setInterval(()=>{
    if
})