import express from "express";
import client from "./routes/clientRoute.js";
import commande from "./routes/commandeRoute.js";
import produit from "./routes/produitRoute.js";


const app = express();
const produit = express.Router();

app.use(express.json());
app.use("/clients", client);
app.use("/commandes", commande);
app.use("/produits", produit);
//const db = new DataBase(DB_PATH[clients],[produits],[commandes])

app.listen(8000, () => {
   // db.read()
   
    console.log(`http://localhost:8000/`);
});