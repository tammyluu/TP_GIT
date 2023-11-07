
const express = require('express');
const { PORT } = require('./config');
const fs = require('fs');//fileSystem


const app = express();
app.use(express.text());

//route = endpoint
//get all users ->read file before get
app.get('/', (req, res) =>{
    res.send("hello user")
})
app.get('/users', (req, res) =>{
   
    const data = fs.readFileSync("user.txt");
    res.send(data.toString())
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
    //verify that file exists
    console.log(fs.existsSync("user.txt"));
    //save in file user.txt
    try {
        //when read file, file not exi
        const users = fs.readFileSync("user.txt").toString();
        const isCheck = users
        .split("\n")
        .some((word) => word.toLowerCase().trim() === data.toLowerCase());
        if (isCheck){
            res.send("User is already existed");
            return;
        }
        fs.appendFileSync("user.txt",data + "\n");
        res.send("Add successfully!");
    } catch (err) {
        console.log(err);
        res.send("file not found!");
   }      
})
app.listen(PORT,()=>{
    console.log(`Server is starting on port ${PORT}`);
});