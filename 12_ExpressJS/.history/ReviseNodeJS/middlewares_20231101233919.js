const express = require('express');
const {PORT} = require('./config');

const app = express();
app.use(express.json());
app.post("/login", (req, res) => {)

//app.use => declarations middleware
// 1st middleware
app.use("/users", (req, res, next) => {

if (user.email ===admin.email) {
    return next();
}
   res.send("email wrong "); 
});
//2 nd middleware
app.use("/users", (req, res, next) => {

if (user.password ===admin.password) {
    return next();
}
   res.send("password wrong "); 
});
app.get("/users", (req, res) => {
    res.send("You have all users ");
})
app.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`);
});

