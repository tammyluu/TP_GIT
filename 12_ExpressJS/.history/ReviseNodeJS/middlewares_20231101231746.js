const express = require('express');
const {PORT} = require('./config');

const app = express();
//app.use => declarations middleware
app.use("/users", (req, res, next) => {
const email = "admin@gmail.com";
if (email ==="admin@gmail.com"){
    return next();
}
   res.send("You don't have permission "); 
});
app.use("/users", (req, res, next) => {
const email = "admin@gmail.com";
if (email ==="admin@gmail.com"){
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

