
const express = require('express');
const { PORT } = require('./config');
const app = express();
//route
app.get('/', (req, res) =>{
    res.send("hello baby!")
})
app.get('/', (req, res) =>{
    res.send("hello baby!")
})
app.listen(PORT,()=>{
    console.log(`Server is starting ${PORT}`);
});