/*-----Array--------- */
const numbers = [2, 3, 4, 5, 6, 7]
// copy new array [2,4,6,8,10,12,14]
// a loop, return new array which have the same elements -> result
// the value after return will be pushed into the new array
const result = numbers.map((val,i) =>{
return val * 2;

})
console.log(result);
// 1st: val = 2; i = 0
// 2nd: val = 3; i = 1............
const array = [1,2,3,4,5,6,7]
const newArray = array.map((val) =>{
    return val > 4
})
console.log(newArray);
/*-----filter--------- */

const totos = [2, 4, 5 , 6, 7]
// return a new array , possible []
//neu value after retun is true : return val
const result1 = totos.filter((value, i)=>{
    return value >5
}) 
console.log(val);