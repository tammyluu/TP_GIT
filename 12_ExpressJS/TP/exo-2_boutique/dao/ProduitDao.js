import {readFileSync, writeFileSync} from "fs";
import {v4 as uuidv4} from "uuid";
import {resolve} from "path";

export class ProduitDao{
    constructor(){
        this.file =resolve("./data/produits.json");
        this.produits = [];
    }

    readFile(){
        const file = readFileSync(this.file, {encoding:"utf8"});
        this.produits = JSON.parse(file);
    }

    writeFile(){
        writeFileSync(this.file, JSON.stringify(this.produits));
    }
    getAll() {
        return this.produits;
      }
      save(produit) {
        // Génération d'un uuid
        produit.id = uuidv4();
        // Ajout au tableau de produits
        this.produits.push(produit);
        // Mise à jour du fichier produits.json (on réécrit tout)
        this.writeFile();
        return produit;
      }
      findById(id) {
        return this.produits.find((t) => t.id === id);
      }
    
      
    
}