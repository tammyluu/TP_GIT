const express = require('express');
const { PORT } = require('./config');
const fs = require('fs');//fileSystem
const app = express();
//create file
//read file
//write file
fs.writeFile("user.txt", "David", (error) => {
    if (error) {
        console.log(error);
    }
    console.log("write fille succ");
})

app.listen(PORT, ()=>{
    console.log('Server is running on port '+PORT);
})