export default class Student {
    constructor(firstName, lastName, subject, note ) {
        this.firstName = firstName
    }

    toString(){
        return `Titre : ${this.titre} - Nom : ${this.nom} - Prénom : ${this.prenom}`;
    }
}