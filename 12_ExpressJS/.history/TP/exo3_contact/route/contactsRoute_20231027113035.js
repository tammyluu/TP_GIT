import express from 'express'
import { authMiddleware } from '../middleware/auth.js';

const auth = express.Router();
const contactDao = new ContactDao();

// Application du endpoint d'authentication sur la route admin
auth.post('/admin', authMiddleware, (req, res) => {
    const { nom, prenom, telephone, email} = req.body;
    const contact = new Contact(null, nom, prenom, telephone, email);
    return res.json(contactDao.save)
});

auth.get('/', (req, res) => {
    res.send(contactDao.getAll())
});
 // GET one contact by id
auth.get("/:id", (req, res) => {
    const contact = contactDao.getOneById(req.params.id);
    return contact === undefined ? res.sendStatus(404) : res.json(contact);
  });

export default auth;