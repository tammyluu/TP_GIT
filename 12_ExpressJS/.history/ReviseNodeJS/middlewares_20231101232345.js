const express = require('express');
const {PORT} = require('./config');

const app = express();
const user = {
    email: 'user@example.com',
    password: "123456"
}
const admin = {
    email: 'admin@gmail.com',
    password: "123456"
}

//app.use => declarations middleware
// 1s
app.use("/users", (req, res, next) => {

if (user.email ===admin.email) {
    return next();
}
   res.send("email wrong "); 
});
app.use("/users", (req, res, next) => {

if (user.email ===admin.email) {
    return next();
}
   res.send("email wrong "); 
});
app.get("/users", (req, res) => {
    res.send("You have all users ");
})
app.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`);
});

