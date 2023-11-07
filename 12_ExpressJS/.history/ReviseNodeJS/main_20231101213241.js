
const express = require('express');
const { PORT } = require('./config');
const fs = require('fs');//fileSystem

const app = express();
app.use(express.text());

//route = endpoint
app.get('/', (req, res) =>{
    res.send(getAll())
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
    const data = req.body;
    //save in file user.txt
    if (!data.user){
        fs.appendFileSync("user.txt", data + "\n");
        res.send("add successfully") 
    }esle{

    }
   
})
app.listen(PORT,()=>{
    console.log(`Server is starting on port ${PORT}`);
});