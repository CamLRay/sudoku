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
}