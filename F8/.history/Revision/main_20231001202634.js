//spread (...)
let obj1 = {
    name : 'JS',
};
let obj2 = {
    price : 1000
};
let obj3 = {
    ...obj2,
    ...obj1
};
console.log(obj3);