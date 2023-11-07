import { readFileSync, writeFileSync } from "fs";
import { v4 as uuidv4 } from "uuid";
import { resolve } from "path";

class ContactDao {
    constructor(){
        this.file = resolve("./contacts.csv");
        this.contacts = [];
    }
    readFile(){
        const file = readFileSync(this.file, { encoding: "utf-8" });
        this.contacts = JSON.parse(file);
    }
    writeFile() {
        writeFileSync(this.file, JSON.stringify(this.todos));
      }
    
      getAll() {
        return this.contacts;
      }
      save(contact) {
        // Génération d'un uuid
        contact.id = uuidv4();
        // Ajout au tableau de contacts
        this.contacts.push(contact);
        // Mise à jour du fichier db.json (on réécrit tout)
        this.writeFile();
        return contact;
      }
}