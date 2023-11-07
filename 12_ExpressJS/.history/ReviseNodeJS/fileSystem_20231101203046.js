const express = require('express');
const { PORT } = require('./config');
const fs = require('fs');//fileSystem
const app = express();
//create file

app.listen(PORT, ()=>{
    console.log('Server is running on port '+PORT);
})