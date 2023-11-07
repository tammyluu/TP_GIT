/*------array---------*/
//push() add an element to the end of the array
//pop() remove an element from the end of the array
//shift() remove the first element of array  
//unshift() add the elements to the beginning of the array
//slice()
//spice() add & remove elements anywhere in array
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
// splice(start, delete count, element)
console.log(" splice add element in index :  " + arr.splice(2,1, "hello"));// from index 2 delete 1 element , add 'hello'
console.log(" splice add element in index :  " + arr.splice(2,1, "hello","world"));
console.log("deleted element : " + arr.splice(2,1));
console.log("newArray: " ,  arr);//newArray:  [66, 77,  'hello',2,  3,   4,5,  6,   7,8,  100, 99,88]
      
  
 

/*---------remove elements*/
console.log(arr.pop()); //  remove 88
console.log(arr.length);
console.log(arr);
console.log(arr.shift()); // remove 66
console.log(arr);
console.log(arr.length);
/*---------indexOf----*/
const array = [1,2,3,4,5,6,7,8]
console.log(array.indexOf(3)); //find index of 3 in array
/*---------function----*/
//function declarations
function getNumber (arr) {
    return number
}
console.log(getNumber(200));
//function expressions : a variable do a function 
const print = function(message) {
    console.log(message);
}
print("hello world")

