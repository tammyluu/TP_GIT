/*--------convert string to number-------------------- */
const a= "5";
console.log(+a);

//reference type:
const arr = [1,2,3,4]
const copyArr= arr;// pointer reference memory
//spread operator trai cac phan tu trong array
const copyArray = [...arr]
arr.push(100);// only push in arr
console.log("arr", arr);
console.log("copyArr: " , copyArr);// also have element 100
console.log("copyArray: " , copyArray);// no have element 100

const add = (a,b,c) =>{
 console.log(a+b+c);
}
const arrA = [1,2,3]
add (...arrA) // = [1,2,3] no trai ra
const user = {
    name: 'Ti',
    age : 20
}
const copyUser ={...user};
console.log("copyUser: " , copyUser);
//destructuring cau truc lai
const {name, age} = user;