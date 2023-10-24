class Ihm {
    constructor(morpion) {
      this.morpion = morpion;
    }
  
    displayInstructions() {
      console.log('Bienvenue dans le jeu du Morpion !');
      console.log('Pour jouer, entrez le numéro de la colonne (0 - 6) où vous souhaitez placer votre jeton.');
      this.morpion.printGrid();
    }
  
    async getPlayerInput(player) {
      return new Promise((resolve) => {
        const readline = require('readline');
        const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout,
        });
  
        rl.question(`Joueur ${player}, choisissez une colonne : `, (answer) => {
          rl.close();
          resolve(parseInt(answer));
        });
      });
    }
  
    async playGame() {
      let currentPlayer = 'X';
  
      this.displayInstructions();
  
      while (true) {
        const column = await this.getPlayerInput(currentPlayer);
  
        if (column >= 0 && column < this.morpion.cols) {
          if (this.morpion.play(column, currentPlayer)) {
            this.morpion.printGrid();
            if (this.morpion.checkWin(currentPlayer)) {
              console.log(`Joueur ${currentPlayer} a gagné !`);
              break;
            } else if (this.morpion.isFull()) {
              console.log("Match nul !");
              break;
            } else {
              currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
          } else {
            console.log('La colonne est déjà remplie. Réessayez.');
          }
        } else {
          console.log('Colonne invalide. Choisissez une colonne entre 0 et 6.');
        }
      }
    }
  }
  
  const morpion = new Morpion(6, 7);
  const ihm = new Ihm(morpion);
  
  ihm.playGame();
  
  Ce code crée une instance de la classe Morpion pour gérer les règles du jeu et une instance de la classe Ihm pour gérer l'interaction avec le joueur. Le jeu se joue dans la console, et les joueurs alternent entre 'X' et 'O'. Vous pouvez personnaliser la taille de la grille et les règles du jeu selon vos besoins.
  