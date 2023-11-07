import readline  from 'readline';

export class Ihm {
    constructor(morpion) {
      this.morpion = morpion;
    }
  
    displayGrid() {
      console.log('Grille du Morpion :');
      for (let row = 0; row < 3; row++) {
        console.log(this.morpion.grid[row].map(cell => cell || ' ').join(' | '));
        if (row < 2) {
          console.log('---------');
        }
      }
    }
  
    playTurn() {
      // const readline = require('readline'); 
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
  
      this.displayGrid();
      console.log(`Tour du joueur ${this.morpion.currentPlayer}`);
      rl.question('Choisissez une ligne (0, 1 ou 2) : ', (row) => {
        rl.question('Choisissez une colonne (0, 1 ou 2) : ', (col) => {
          if (row >= 0 && row < 3 && col >= 0 && col < 3) {
            if (this.morpion.play(row, col)) {
              if (this.morpion.isGameWon()) {
                this.displayGrid();
                console.log(`Le joueur ${this.morpion.currentPlayer === 'X' ? 'O' : 'X'} a gagné !`);
                rl.close();
              } else if (this.morpion.isGridFull()) {
                this.displayGrid();
                console.log("Match nul !");
                rl.close();
              } else {
                rl.close();
                this.playTurn();
              }
            } else {
              console.log('Cette case est déjà occupée. Réessayez.');
              rl.close();
              this.playTurn();
            }
          } else {
            console.log('Veuillez entrer des valeurs valides (0, 1 ou 2). Réessayez.');
            rl.close();
            this.playTurn();
          }
        });
      });
    }
}
  
  
  