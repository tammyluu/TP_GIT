//http, https
const http = require("./http");// priority the same position
console.log(http.hello);
const server = http.createServer(function(req, res) {
    console.log("someone is calling...");
    res.wr
})
server.listen(3000)