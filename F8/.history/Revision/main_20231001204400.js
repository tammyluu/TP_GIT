//spread (...)
let obj1 = {
    name : 'JS',
};
let obj2 = {
    price : 1000
};
let obj3 = {
    ...obj1,
    ...obj2
};
console.log(obj3);

let defaultConfig = {
    api: 'https://domain-trang-khoa-hoc',
    apiVersion :'V1',
    other : 'other',
};
let exerciseConfig = {
    ...defaultConfig,
    api : 'https://domain-trang-bai-tap'
};
console.log(exerciseConfig);
// spread avec params
let array = ['JS', 'Java', 'Ruby', 'ReactJS'];
function logger(a,b,c){
    console.log(a,b,c);
    }
logger(array);
logger(...array);//enlève les crochets ou tableaux
console.log(object);
function logger2 (...rest){
    for (i= 0; i < rest.length; i++)
    console.log(rest[i]);
}
logger2(...array)