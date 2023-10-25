import express from "express";
import {CommandeDao} from "../dao/CommandeDao.js";
import {Commande} from "../models/Commande.js";




const commande = express.Router();

const commandeDao = new CommandeDao();
commandeDao.readFile();

commande.get("/", (req, res) => {
    res.json(commandeDao.getAll());
})
commande.get("/:id", (req, res) => {
    let commande = commandeDao.findById(req.params.id);
    if (!commande) {
        res.status(404).json({code : 404,message: "Commande not found"});
    }
    res.json(commande);
})
commande.post("/", (req, res) => {
    const { client, listProd} = req.body;
    let commande = new Commande(null, client,listProd);
    res.json(commandeDao.save(commande));
})
export default commande