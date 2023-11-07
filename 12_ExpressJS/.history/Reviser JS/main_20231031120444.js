/*------array---------*/
//push() add an element to the end of the array
//pop() remove an element from the end of the array
//shift() remove the first element of array  
//unshift() add the elements to the beginning of the array
//slice()
//spice()
//map()
//filter()
//reduce()
//indexOf()
//findIndex()
//find()
/*----add elements---------*/
const arr = [1,2,3,4,5,6,7,8]
//arr.push(100)
console.log(arr.push(100,99,88)); //return amount of elements==console.log(arr.length);
console.log(arr.unshift(66,77)); //return amount of elements==console.log(arr.length);
console.log(arr);
console.log(arr.splice);
//remove elements
console.log(arr.pop()); //  remove 88
console.log(arr.length);
console.log(arr);
console.log(arr.shift()); // remove 66
console.log(arr);
console.log(arr.length);

