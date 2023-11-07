
const express = require('express');
const { PORT } = require('./config');
const app = express();
//route
app.get('/', (req, res) =>{
    res.send("hello baby!")
})
app.get('/user', (req, res) =>{
    res.send("hello user")
    res.
})
app.listen(PORT,()=>{
    console.log(`Server is starting ${PORT}`);
});