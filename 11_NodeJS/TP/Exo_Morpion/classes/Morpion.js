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
  
    checkWin(player) {
      // Check horizontal
      for (let row = 0; row < this.rows; row++) {
        for (let col = 0; col <= this.cols - 4; col++) {
          if (
            this.grid[row][col] === player &&
            this.grid[row][col + 1] === player &&
            this.grid[row][col + 2] === player &&
            this.grid[row][col + 3] === player
          ) {
            return true;
          }
        }
      }
  
      // Check vertical
      for (let row = 0; row <= this.rows - 4; row++) {
        for (let col = 0; col < this.cols; col++) {
          if (
            this.grid[row][col] === player &&
            this.grid[row + 1][col] === player &&
            this.grid[row + 2][col] === player &&
            this.grid[row + 3][col] === player
          ) {
            return true;
          }
        }
      }
  
      // Check diagonals
      for (let row = 0; row <= this.rows - 4; row++) {
        for (let col = 0; col <= this.cols - 4; col++) {
          if (
            this.grid[row][col] === player &&
            this.grid[row + 1][col + 1] === player &&
            this.grid[row + 2][col + 2] === player &&
            this.grid[row + 3][col + 3] === player
          ) {
            return true;
          }
        }
      }
  
      for (let row = 0; row <= this.rows - 4; row++) {
        for (let col = 3; col < this.cols; col++) {
          if (
            this.grid[row][col] === player &&
            this.grid[row + 1][col - 1] === player &&
            this.grid[row + 2][col - 2] === player &&
            this.grid[row + 3][col - 3] === player
          ) {
            return true;
          }
        }
      }
  
      return false;
    }
  
    isFull() {
      for (let row of this.grid) {
        if (row.includes(' ')) {
          return false;
        }
      }
      return true;
    }
  }