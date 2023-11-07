const express = require('express');
const {PORT} = require('./config');

const app = express();
const user = {
    email: 'user@example.com',
    password: "123456"
}
const admin = {
    email: 'admin@gmail.com",
}

//app.use => declarations middleware
app.use("/users", (req, res, next) => {
const email = "admin@gmail.com";
if (email ==="admin123@gmail.com"){
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

