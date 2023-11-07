import express from 'express';
const {PORT} = require('./config');

const app = express();

app.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`);
});

