
const express = require('express');
const { PORT } = require('./config');
const fs = require('fs');//fileSystem
const app = express();
//route = endpoint
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
/* app.get('/user/:myId/:action', (req, res) =>{
    const id = req.params.myId;
    const action = req.params.action;
    res.send(`${action} user: ${id}`)
}) */
app.get('/user/:myId/:action', (req, res) =>{
    const{id,action} =req.params;
    res.send(`${action} user: ${id}`)
})
app.post('/users', (req, res)=>{
    const {name, age} = req.body;
    const id = user.length + 1;
    const user = {id, name, age};
    todos.push(user);
    res.status(201).json(user);
})
app.listen(PORT,()=>{
    console.log(`Server is starting on port ${PORT}`);
});