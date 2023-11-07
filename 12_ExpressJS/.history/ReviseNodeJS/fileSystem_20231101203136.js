const express = require('express');
const { PORT } = require('./config');
const fs = require('fs');//fileSystem
const app = express();
//create file
//read file
//write file
fs.writeFile("user.txt", "")

app.listen(PORT, ()=>{
    console.log('Server is running on port '+PORT);
})