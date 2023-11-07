const express = require('express');
const { PORT } = require('./config');
const fs = require('fs');//fileSystem
const app = express();
//create file
//read file
//write file
fs.writeFile("user.txt",  "David new", (error) => {
    if (error) {
        console.log(error);
    }
    console.log("write fille successfully");
});
fs.appendFile("user.txt",  "\nDavid 123\n", (error) => { // \n newline
    if (error) {
        console.log(error);
    }
    console.log("write fille successfully");
});

app.listen(PORT, ()=>{
    console.log('Server is running on port '+PORT);
})