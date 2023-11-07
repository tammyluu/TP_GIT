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
app.use("/users", (req, res, next) => {

if (user.email ===admin.){
    return next();
}
   res.send("You don't have permission "); 
});
app.get("/users", (req, res) => {
    res.send("You have all users ");
})
app.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`);
});

