


export class Ihm {
    constructor() {
        this.personnes = [];
    }
    async menu() {
        let choix = "";
        while (choix!== "q") {
            console.log("1 - Joueur 1");
            console.log("2 - Joueur 2");
            console.log("q - quitter");
            choix = await input("Saisir une option: ");
            switch (choix) {
                case "1":
                    this.jeu.joueur1();
                    break;
                case "2":
                    this.jeu.joueur2();
                    break;    
            }
    }
    console.log("Good bye");
}
}