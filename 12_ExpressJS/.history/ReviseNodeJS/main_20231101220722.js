
const express = require('express');
const { PORT } = require('./config');
const fs = require('fs');//fileSystem

const app = express();
app.use(express.text());

//route = endpoint
//get all users 
app.get('/', (req, res) =>{
    const data = fs.readFileSync("user.txt");
    res.send(data.toString())
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
    const user = data.user.findIndex()
    if (user !==-1 ){
        fs.appendFileSync("user.txt", data + "\n");
        res.send("add successfully") 
    }else{
        res.send("user is already existed");
    }
   
})
app.listen(PORT,()=>{
    console.log(`Server is starting on port ${PORT}`);
});