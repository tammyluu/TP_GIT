
//http, https
//const http = require("./http");// priority the same position category
const http = require("http");// priority the same position category
console.log(http.hello);
const server = http.createServer((req, res)=> {
    const {url} = req;
    // /product/123
    const productId = url.split("/product/")[1];
    console.log(productId);
    console.log("someone is calling...");
    res.write("<h1>My product");
    res.end();
})
server.listen(3000);