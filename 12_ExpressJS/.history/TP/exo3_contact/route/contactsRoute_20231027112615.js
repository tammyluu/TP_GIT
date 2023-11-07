import express from 'express'
import { authMiddleware } from '../middleware/auth.js';

const auth = express.Router();
const contactDao = new ContactDao();

// Application du endpoint d'authentication sur la route admin
auth.post('/admin', authMiddleware, (req, res) => {
    res.send(id, nom, prenom, telephone, email);
});

auth.get('/', (req, res) => {
    res.send(contactDao.getAll())
});
 // GET one customer by id
customers.get("/:id", (req, res) => {
    const customer = customerDao.getOneById(req.params.id);
    return customer === undefined ? res.sendStatus(404) : res.json(customer);
  });

export default auth;