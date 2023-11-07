//http, https
const http = require("./http");// priority the same position
console.log(http.hello);
const sever = http.createServer((req, res) => {
    console.log("ser");
})