//http, https
const http = require("./http");// priority the same position
console.log(http.hello);
const server = http.createServer((req, res) => {
    console.log("some....");
    res.write ("Hello, world!");
    res.end();
})
server.listen(3000)