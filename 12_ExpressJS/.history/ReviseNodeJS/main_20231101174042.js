
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
    res.send(`hello user: ${id}`)
})
app.get('/user/:id/:action', (req, res) =>{
    const id = req.params.mon;
    const action = req.params.action;
    res.send(`hello user: ${id}`)
})
app.listen(PORT,()=>{
    console.log(`Server is starting ${PORT}`);
});