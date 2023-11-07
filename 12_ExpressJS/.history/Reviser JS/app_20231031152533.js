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
//neu value after retun is true : return val & push val in new array
const result1 = totos.filter((value, i)=>{
    return value >5
}) 
console.log(result1);
// 1st : value =2 , false 
// 2nd : value = 4, false
//"3rd" : value = 5, false
//"4th" : value = 6, true -> push val in new array
const numbersA = [2, 0 ,1, null]
const resultA = numbersA.filter((v)=>{
    return v
})
console.log(resultA); //[2,1] because 0, null are values if falsy, false not return, not push
/*---------------Reduce---------*/
const numbersB = [1,2,3,4]
// Case 1 : not have inital value , round 1 : acc = array[0], val = array[1], value return se là gt tich tru vào bien acc => gt sau cung cua acc là gt tra ve  cua reduce
// l1 : acc = 1, val = 2, acc = 3
// l2: acc = 3, val =3, acc = 6
// l3: acc = 6, val = 4, acc = 10
const sumB = numbersB.reduce((acc, val, i)=>{
    return acc + val
})
console.log(sumB);
// case 2 : initial value => acc = initialValue, val = array[0], ....
const sum = numbersB.reduce((acc, val)=>{
    console.log(acc);
    return acc + val
   
},5)
console.log(sum);
// l1 : acc = 5, val = 1, acc = 6
// l2 : acc = 6, val = 2, acc = 8
// l3 : acc = 8, val = 3, acc = 11
// l4: acc = 11, val = 4, acc = 15

const users = [
    {id : 1, balance : 10},
    {id : 2, balance : 20},
    {id : 3, balance : 30},
]
// sum of balances
const balances= users.reduce((acc,val) => {
    return acc + val.balance
},0) //why we must have initalValue, because acc = array[0] is an object, couldn't plus a value.
console.log(balances);
/*---------indexOf------*/
//find the first position (index)
const tata = [1,3,4,1,100]
console.log(tata.indexOf(99));// -1 par default value isnot exist 
console.log(tata.indexOf(1,1));// 3  since 