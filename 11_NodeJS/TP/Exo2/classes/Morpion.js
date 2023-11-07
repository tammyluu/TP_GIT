export class Morpion {
  constructor() {
    this.grid = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ];
    this.currentPlayer = 'X';
  }

  isGameWon() {
    const winningCombos = [
      // Lignes
      [[0, 0], [0, 1], [0, 2]],
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      // Colonnes
      [[0, 0], [1, 0], [2, 0]],
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      // Diagonales
      [[0, 0], [1, 1], [2, 2]],
      [[0, 2], [1, 1], [2, 0]]
    ];

    for (const combo of winningCombos) {
      const [a, b, c] = combo;
      if (
        this.grid[a[0]][a[1]] &&
        this.grid[a[0]][a[1]] === this.grid[b[0]][b[1]] &&
        this.grid[a[0]][a[1]] === this.grid[c[0]][c[1]]
      ) {
        return true;
      }
    }
    return false;
  }

  play(row, col) {
    if (this.grid[row][col] === null) {
      this.grid[row][col] = this.currentPlayer;
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      return true;
    }
    return false;
  }

  isGridFull() {
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (this.grid[row][col] === null) {
          return false;
        }
      }
    }
    return true;
  }
}