//http, https
const http = require("./http");// priority the same position
console.log(http.hello);
const sever = http.createServer((req, res) => {
    console.log("server is started....");
    res.write ("Hello, world!");
    res.end
})
server.listen(3000)