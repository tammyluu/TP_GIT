//http, https
const http = require("./http");// priority the same position
console.log(http.hello);
const server = http.createServer((req, res)=> {
    console.log("someone is calling...");
    res.write("hello!!!");
    res.end();
})
server.listen(3000)