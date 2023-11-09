import express from 'express';
import { dateMiddleware, queryLogger } from './middleware/auth.js';
import auth from './route/contactsRoute.js';

const app = express();
app.use(express.json());
app.use(dateMiddleware);
app.use(queryLogger);
app.use('/auth', auth);
app.get('/', (req, res) => {
    console.log(req.dateRequest);
    res.json({id: 1});
});

app.listen(000, () => {
    console.log('http://127.0.0.1:4000')
});