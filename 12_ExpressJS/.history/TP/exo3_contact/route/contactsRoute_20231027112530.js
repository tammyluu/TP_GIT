import express from 'express'
import { authMiddleware } from '../middleware/auth.js';

const auth = express.Router();
const contactDao = 

// Application du endpoint d'authentication sur la route admin
auth.post('/admin', authMiddleware, (req, res) => {
    res.send(id, nom, prenom, telephone, email);
});

auth.get('/', (req, res) => {
    res.send(cont)
});

export default auth;