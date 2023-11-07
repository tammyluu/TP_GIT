
const express = require('express');
const { PORT } = require('./config');
const app = express();
//route
app.get('/', (req, res) =>{
    res.send("hello baby!")
})
app.get('/user', (req, res) =>{
    res.send("hello user")
})
app.get('/user/:toto', (req, res) =>{
    const id = req.params.toto;
    const action = req.params.action;
    res.send(`${action} user: ${id}`)
})
app.listen(PORT,()=>{
    console.log(`Server is starting ${PORT}`);
});