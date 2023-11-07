const express = require('express');
const {PORT} = require('./config');

const app = express();
//app.use => declarations middleware
app.use("/users", (req, res, next) => {
const email = "admin@gmail.com";
if (email ==="admin123@gmail.com")
    
}
app.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`);
});

