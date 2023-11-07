/*--------convert string to number-------------------- */
const a= "5";
console.log(+a);

//reference type:
const arr = [1,2,3,4]
const copyArr= arr;// pointer
//sprea operator
const copyArray = [...arr]
arr.push(100);
console.log("arr", arr);
console.log("copyArr: " , copyArr);
console.log("object");