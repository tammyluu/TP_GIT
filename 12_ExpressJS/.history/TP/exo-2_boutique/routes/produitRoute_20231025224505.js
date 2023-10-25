import express from "express";
import {produit}
import {Produit} from "../models/Produit.js";


const produit = express.Router();
 produit.use(express.json());



produit.get("/", (req, res) => {
    res.json(produitDao.getAll());
})
produit.get("/:id", (req, res) => {
    let produit = produitDao.findById(req.params.id);
    if (produit == undefined) {
        res.status(404).json({code : 404,message: "Product not found"});
    }
    res.json(produit);
})
produit.post("/", (req, res) => {
    const {id,titre, prix, stock} = req.body;
    let produit = new Produit(null, titre, prix, stock);
    res.json(produitDao.save(produit));
})
export default produit;