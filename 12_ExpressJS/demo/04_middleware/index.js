import express from 'express';


const app = express();

app.use(dateMiddleware);

app.use
function dateMiddleware(req, res, next) {
    req.dateReq = new Date();
    next();
}
app.use(dateMiddleware);
app.get('/', (req, res) => {
    console.log(req.dateReq);
    res.send("test middleware")
});
app.listen(3008, () => {
    console.log('http://127.0.0.1:3008');
})