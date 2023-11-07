const express = require('express');
const { PORT } = require('./config');
const fs = require('fs');//fileSystem
const app = express();
//create file
//read file
//write file
fs.writeFile("db.txt", {name: "David"}, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("write fille successfully");
});

app.listen(PORT, ()=>{
    console.log('Server is running on port '+PORT);
})