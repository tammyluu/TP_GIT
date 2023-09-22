export default class Student {
    constructor(firstName, lastName, subject, note ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.subject = subject;
        this.note = note;
    }

    toString(){
        return ` Nom : ${this.nom} - Prénom : ${this.prenom} - Matière : ${this.subject} - Note(s): ${this.note}`;
    }
}