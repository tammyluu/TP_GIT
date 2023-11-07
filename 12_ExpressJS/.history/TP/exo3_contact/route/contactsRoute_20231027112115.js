import express from 'express'
import { authMiddleware } from '../middleware/auth.js';

const auth = express.Router();

// Application du endpoint d'authentication sur la route admin
auth.post('/admin', authMiddleware, (req, res) => {
    res.send(id, nom, prenom, tel);
});

auth.get('/', (req, res) => {
    res.send("Bienvenue sur le routeur d'authentication")
});

export default auth;