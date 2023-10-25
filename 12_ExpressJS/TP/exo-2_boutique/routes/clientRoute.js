import express from "express";
import {ClientDao} from "../dao/ClientDao.js";
import {Client} from "../models/Client.js";


const client = express.Router();

const clientDao = new ClientDao();
clientDao.readFile()

client.get("/", (req, res) => {
    res.json(clientDao.getAll());
})
client.get("/:id", (req, res) => {
    let client = clientDao.findById(req.params.id);
    if (client == undefined) {
        res.status(404).json({code : 404,message: "Client not found"});
    }
    res.json(client);
})
client.post("/", (req, res) => {
    const { nom, prenom, tel} = req.body;
    let client = new Client(null, nom, prenom, tel);
    res.json(clientDao.save(client));
})
export default client;