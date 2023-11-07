/*--------convert string to number-------------------- */
const a= "5";
console.log(+a);

//reference type:
const arr = [1,2,3,4]
const copyArr= arr;// pointer reference memory
//spread operator 
const copyArray = [...arr]
arr.push(100);// only push in arr
console.log("arr", arr);
console.log("copyArr: " , copyArr);// also have element 100
console.log("copyArray: " , copyArray);// no have element 100