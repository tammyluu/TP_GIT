
//http, https
//const http = require("./http");// priority the same position category
const http = require("http");// priority the same position category
console.log(http.hello);
const server = http.createServer((req, res)=> {
    const {url} = req;
    // endpoint: /product/12345
    const productId = url.split("/product/")[1];
    console.log(productId);
    // /user/345
    console.log("someone is calling...");
    res.write(`<h1>My product : ${productId}</h1>`);
    res.end();
})
server.listen(3000);