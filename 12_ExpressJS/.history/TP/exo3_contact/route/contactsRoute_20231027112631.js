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
 // GET one contact by id
contacts.get("/:id", (req, res) => {
    const contact = contactDao.getOneById(req.params.id);
    return contact === undefined ? res.sendStatus(404) : res.json(contact);
  });

export default auth;