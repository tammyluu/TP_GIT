export default class Student {
    constructor(firstName, lastName, matier ) {
        this.titre = titre;
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
        this.telephone = telephone;
        this.email = email;
    }

    toString(){
        return `Titre : ${this.titre} - Nom : ${this.nom} - Prénom : ${this.prenom}`;
    }
}