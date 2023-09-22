export default class Student {
    constructor(firstName, lastName, subject, note ) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.subject = subject;
        this.note = note;
    }

    toString(){
        return ` Nom : ${this.lastName} - Prénom : ${this.prenom} - Matière : ${this.subject} - Note(s): ${this.note}`;
    }
}