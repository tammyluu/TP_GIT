//http, https
const http = require("./http");// priority the same position
console.log(http.hello);
http.createServer((req, res) => {)