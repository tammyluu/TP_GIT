import {readFileSync, writeFileSync} from "fs";
import {v4 as uuidv4} from "uuid";
import {resolve} from "path";
export class CommandeDao{
    constructor(){
        this.file =resolve("./data/commandes.json");
        this.commandes = [];
    }

    readFile(){
        const file = readFileSync(this.file, {encoding:"utf8"});
        this.commandes = JSON.parse(file);
    }

    writeFile(){
        writeFileSync(this.file, JSON.stringify(this.commandes));
    }
    getAll() {
        return this.commandes;
      }
      save(commande) {
        // Génération d'un uuid
        commande.id = uuidv4();
        // Ajout au tableau de commandes
        this.commandes.push(commande);
        // Mise à jour du fichier commandes.json (on réécrit tout)
        this.writeFile();
        return commande;
      }
      save(listProd)
      findById(id) {
        return this.commandes.find((t) => t.id === id);
      }
    
      
    
}