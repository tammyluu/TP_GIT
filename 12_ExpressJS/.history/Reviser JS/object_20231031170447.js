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
    console.log("hello");//dispaly after 2s
},2000)
//infinite
setInterval(()=>{
    console.log("hi"); //2s one time
},2000)
// stop by clearInterval
let times = 0
const interval = setInterval(()=>{
    if(times === 5){
        clearInterval(interval);
    }else
    console.log("times : ", times) ;
    times ++;
},2000)
