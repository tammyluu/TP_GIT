const express = require('express');
const {PORT} = require('./config');

const app = express();
app.use(express.json());
const user = null;
/* app.use(express.text());
app.post("/login", (req, res) => {
    const list  = req.body.split(",");
    const email = list.[0].slice(6);
    console.log(email);
}); */
app.post("/login", (req, res) => {
    const {email, pw} = req.body;
    console.log(req.body);
    console.log(email, pw);
});
//app.use => declarations middleware

app.use("/products", (req, res, next) => {


});
//2 nd middleware
app.use("/users", (req, res, next) => {

if (user.password ===admin.password) {
    return next();
}
   res.send("password wrong "); 
});
app.get("/products", (req, res) => {
    
})
app.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`);
});

