const express = require('express');
const {PORT} = require('./config');

const app = express();
//app.use => 
app.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`);
});

