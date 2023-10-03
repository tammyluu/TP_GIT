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
let array = 