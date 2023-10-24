export class Morpion {
    constructor(rows, cols) {
      this.rows = rows;
      this.cols = cols;
      this.grid = Array.from({ length: rows }, () => Array(cols).fill(' '));
    }
  
    printGrid() {
      for (let row of this.grid) {
        console.log(row.join(' | '));
      }
    }
  
    play(column, player) {
      for (let i = this.rows - 1; i >= 0; i--) {
        if (this.grid[i][column] === ' ') {
          this.grid[i][column] = player;
          return true;
        }
      }
      return false; // Column is already full
    }
    
}