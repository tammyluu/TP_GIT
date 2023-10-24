
import LineByLine from 'n-readlines';
import { mkdirSync } from 'fs';


const myFile = './myFile.txt'

let line;
let reader = new LineByLine(myFile);
while(line = reader.next()) {
    let directory = line.toString().trim();
    try {
        mkdirSync(directory);
        console.log(`Le répertoire ${directory} a bien été créé !`);
    } catch(err) {
        console.error(`Erreur lors de la création du dossier ${directory}`)
    }
}


