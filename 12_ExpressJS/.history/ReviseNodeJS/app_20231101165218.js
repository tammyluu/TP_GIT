
//http, https
//const http = require("./http");// priority the same position category
const http = require("http");// priority the same position category
console.log(http.hello);
const server = http.createServer((req, res)=> {
    const {url}
    console.log("someone is calling...");
    res.write("hello!!!");
    res.end();
})
server.listen(3000);