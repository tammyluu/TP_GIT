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
    
}