//.slice()
const str = "hello world";
//3 first caracters
console.log(str.slice(0,3)); // hel
//str.slice(a,b): (start, end) from left to right => return substring from position index a to b , exclude b , not b
console.log(str.slice(3,8)); // lo wo
//str.slice(a) => return substring from position index a to end of string
console.log(str.slice(3)); // lo world
console.log(str.slice(8)); // rld
//str.slice(-a) => return substring from position  index -a to the end of string
//"hello world" index 0-10
// d = -1, l=-2, r =-3, o =-4,...=> -2 = l to the end of string
console.log(str.slice(-2)); // ld
console.log(str.slice(-5,9)); //wor
// possibility convertir 2 places eache other in substring, but not in slice
console.log(str.substring(0,8)); //hello wo
console.log(str.substring(8,0)); //hello wo
console.log(str.substring(3)); //lo world
console.log(str.substring(-5,8)); // hello wo not recieved value negative, it only reads 8
console.log(str.substr(-1,8));//d
console.log(str.substr(0,8));//hello wo
console.log(str.includes('lo'));
const str1 = "I Love VietNam so much, how about you!"
// count the captital in the string
const caracters = [...str1]
console.log(caracters);
//solution 1
const inputString = "I Love VietNam so much, how about you?";
let capitalLettersCount = 0;

for (let i = 0; i < inputString.length; i++) {
  const currentChar = inputString[i];
  console.log(currentChar);
  if (currentChar >= 'A' && currentChar <= 'Z') {
    console.log("beforecapitalLettersCount);
    capitalLettersCount++;
    console.log("after",capitalLettersCount);
  }
}

console.log("The number of capital letters in the string is: " + capitalLettersCount);
// solution 2   with regex
const inputStr = "I Love VietNam so much, how about you?";
const capitalLettersCounting = inputStr.replace(/[^A-Z]/g, '').length;

console.log("The number of capital letters in the string is: " + capitalLettersCounting);





