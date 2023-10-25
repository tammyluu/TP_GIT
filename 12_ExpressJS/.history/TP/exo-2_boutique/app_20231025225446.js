import express from "express";
import cors from "cors";
import client from "./routes/clientRoute.js";
import commande from "./routes/commandeRoute.js";
import produit from "./routes/produitRoute.js";
import {ProduitDao} from "../dao/ProduitDao.js";

const app = express();
app
export const produitDao = new ProduitDao();

app.use(express.json());
app.use("/clients", client);
app.use("/commandes", commande);
app.use("/produits", produit);
//const db = new DataBase(DB_PATH[clients],[produits],[commandes])

app.listen(8000, () => {
   // db.read()
   produitDao.readFile();
    console.log(`http://localhost:8000/`);
});