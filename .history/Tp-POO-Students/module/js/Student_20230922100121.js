export default class Student {
    constructor(firstName, lastName, subject, note ) {
        this.firstName = firstName;
        this.firstName = lastName;
        this.subject = subject;
        this.note = note;
    }

    toString(){
        return `Prénom : ${this.titre} - Nom : ${this.nom} - Prénom : ${this.prenom}`;
    }
}