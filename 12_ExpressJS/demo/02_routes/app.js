import express from 'express';

const app = express();
//permet la sérialisation de l'application
app.use(express.json())
app.get('/', (req, res) => {
    res.send('<h1>Hello Tammy!</h1>');
})
app.post('/users', (req, res) => {
    console.log(req.body);
    res.json(req.body);
})
//uitilisation des paramètres dans notre route avec la syntaxe : nomVariable
app.get('/user/:userId', (req, res) => {
    //Récuperer les paramètres de la requête de l'url en get : ex /users/1=?sort=123 {sort: "123"}
    console.log(req.query);
    res.json({userId :req.params.userId, firstName : 'toto', lastName : 'tata'});
})  
//middware mettre en ordre
app.get('/z', (req, res) => {
    res.send("you 're in section of Z!");
})
// utilisation Regex
app.get(/z/, (req, res) => {
    res.send('Welcome to Z!');
})

app.all('/secret', (req, res) => {
    res.json({secret : "you are my secret!"})
})

app.listen(3000, () => {
    console.log('http://127.0.0.1:3000');
})