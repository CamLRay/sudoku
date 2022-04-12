export function Board(boardArray) {
  this.boardArray = boardArray;
}

Board.prototype.addNumber = function(number, x, y) { 
  this.boardArray[y][x] = number;
};

Board.prototype.checkRow = function(rowNumber) {
  const row = this.boardArray[rowNumber];
  let prevNumbers = [];

  for (let i = 0; i < row.length; i++) {
    if (prevNumbers.includes(row[i])) {
      return false;
    } else if (row[i] !== 0) {
      prevNumbers.push(row[i]);
    }
  }

  return true;
};

Board.prototype.checkColumn = function(columnNumber) {
  let prevNumbers = [];
  for (let i = 0; i < this.boardArray.length; i++) {
    if (prevNumbers.includes(this.boardArray[i][columnNumber])) {
      return false;
    } else if (this.boardArray[i][columnNumber] !== 0) {
      prevNumbers.push(this.boardArray[i][columnNumber]);
    }
  }

  return true;
};

Board.prototype.checkSquare = function(x, y) {
  let prevNumbers = [];
  const xOffset = x * 3;
  const yOffset = y * 3;
  for (let i = 0 + yOffset; i < 3 + yOffset; i++) {
    for (let j = 0 + xOffset; j < 3 + xOffset; j++) {
      let currNumber = this.boardArray[i][j];
      if (prevNumbers.includes(currNumber)) {
        return false;
      } else if (currNumber !== 0) {
        prevNumbers.push(currNumber);
      }
    }
  }

  return true;
};

Board.prototype.checkBoard = function() {
  for (let i = 0; i < this.boardArray.length; i++) {
    if (!this.checkRow(i) || !this.checkColumn(i)) {
      return false;
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (!this.checkSquare(i, j)) {
        return false;
      }
    }
  }

  return true;
};