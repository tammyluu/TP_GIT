const express = require('express');
const {PORT} = require('./config');

const app = express();
app.use(express.json());
let user = null;
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
    user = {email, pw};// when
    res.json({status :true})
});
//app.use => declarations middleware

app.use("/products", (req, res, next) => {
if (user && user.email ===ADMIN.email && user.pw ===ADMIN.pw) {
    return next();
}
res.json({status :false, message : "you're not admin"});

});

app.get("/products", (req, res) => {
    res.json({status :true, data:"This is data" });
})
app.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`);
});

