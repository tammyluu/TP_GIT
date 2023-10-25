import {readFileSync, writeFileSync} from "fs";
import {v4 as uuidv4} from "uuid";
import {resolve} from "path";
export class ClientDao{
    constructor(){
        this.file =resolve("./data/clients.json");
        this.clients = [];
    }

    readFile(){
        const file = readFileSync(this.file, {encoding:"utf8"});
        this.clients = JSON.parse(file);
    }

    writeFile(){
        writeFileSync(this.file, JSON.stringify(this.clients));
    }
    getAll() {
        return this.clients;
      }
      save(client) {
        // Génération d'un uuid
        client.id = uuidv4();
        // Ajout au tableau de clients
        this.clients.push(client);
        // Mise à jour du fichier clients.json (on réécrit tout)
        this.writeFile();
        return client;
      }
      findById(id) {
        return this.clients.find((t) => t.id === id);
      }
    
      
    
}