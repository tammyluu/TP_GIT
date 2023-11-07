
const express = require('express');
const { PORT } = require('./config');
const app = express();
app.get('/', (req, res) =>[]
app.listen(PORT,()=>{
    console.log(`Server is starting ${PORT}`);
});