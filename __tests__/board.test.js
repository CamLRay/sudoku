import { Board } from "./../src/board.js";

describe("board", () => {
  test("It should create an object with a property that contains the given 9x9 2D array", () => {
    let completeBoard = [
      [4, 3, 5, 2, 6, 9, 7, 8, 1],
      [6, 8, 2, 5, 7, 1, 4, 9, 3],
      [1, 9, 7, 8, 3, 4, 5, 6, 2],
      [8, 2, 6, 1, 9, 5, 3, 4, 7],
      [3, 7, 4, 6, 8, 2, 9, 1, 5],
      [9, 5, 1, 7, 4, 3, 6, 2, 8],
      [5, 1, 9, 3, 2, 6, 8, 7, 4],
      [2, 4, 8, 9, 5, 7, 1, 3, 6],
      [7, 6, 3, 4, 1, 8, 2, 5, 9]
    ];
    let board = new Board(completeBoard);
    expect(board.boardArray).toEqual(completeBoard);
  });

  test("It should add the given number to the given position in boardArray", () => {
    let board = new Board(createEmptyBoardArray());
    board.addNumber(5, 0, 0);
    expect(board.boardArray[0][0]).toEqual(5);
  });

  test("It should return true if the given row is a valid row", () => {
    let board = new Board(createEmptyBoardArray());
    expect(board.checkRow(0)).toEqual(true);
  });

  test("It should return true if the given row is a valid row", () => {
    let board = new Board(createEmptyBoardArray());
    board.addNumber(5, 0, 0);
    board.addNumber(5, 1, 0);
    expect(board.checkRow(0)).toEqual(false);
  });

  test("It should return true if the given column is a valid column", () => {
    let board = new Board(createEmptyBoardArray());
    expect(board.checkColumn(0)).toEqual(true);
  });

  test("It should return true if the given column is a valid column", () => {
    let board = new Board(createEmptyBoardArray());
    board.addNumber(5, 0, 0);
    board.addNumber(5, 0, 1);
    expect(board.checkColumn(0)).toEqual(false);
  });

  test("It should return true if the given square is a valid square", () => {
    let board = new Board(createEmptyBoardArray());
    expect(board.checkSquare(0, 0)).toEqual(true);
  });

  test("It should return false if the given square is not a valid square", () => {
    let completeBoard = [
      [4, 3, 5, 2, 6, 9, 7, 8, 1],
      [6, 8, 2, 5, 7, 1, 4, 9, 3],
      [1, 9, 7, 8, 3, 4, 5, 6, 2],
      [8, 2, 6, 1, 9, 5, 3, 4, 7],
      [3, 7, 4, 6, 8, 2, 9, 1, 5],
      [9, 5, 1, 7, 4, 3, 6, 2, 8],
      [5, 1, 9, 3, 2, 6, 8, 7, 4],
      [2, 4, 8, 9, 5, 7, 1, 3, 6],
      [7, 6, 3, 4, 5, 8, 2, 5, 9]
    ];
    let board = new Board(completeBoard);
    expect(board.checkSquare(1, 2)).toEqual(false);
  });

  test("It should return true if the given board is empty", () => {
    let board = new Board(createEmptyBoardArray());
    expect(board.checkBoard()).toEqual(true);
  });

  test("It should return true if the given board is a valid board", () => {
    let completeBoard = [
      [4, 3, 5, 2, 6, 9, 7, 8, 1],
      [6, 8, 2, 5, 7, 1, 4, 9, 3],
      [1, 9, 7, 8, 3, 4, 5, 6, 2],
      [8, 2, 6, 1, 9, 5, 3, 4, 7],
      [3, 7, 4, 6, 8, 2, 9, 1, 5],
      [9, 5, 1, 7, 4, 3, 6, 2, 8],
      [5, 1, 9, 3, 2, 6, 8, 7, 4],
      [2, 4, 8, 9, 5, 7, 1, 3, 6],
      [7, 6, 3, 4, 1, 8, 2, 5, 9]
    ];
    let board = new Board(completeBoard);
    expect(board.checkBoard()).toEqual(true);
  });

  test("It should return false if the given board is not a valid board", () => {
    let completeBoard = [
      [4, 3, 5, 2, 6, 9, 7, 8, 1],
      [6, 8, 2, 5, 7, 1, 4, 9, 3],
      [1, 9, 7, 8, 3, 4, 5, 6, 2],
      [8, 2, 6, 1, 1, 5, 3, 4, 7], // <- two ones
      [3, 7, 4, 6, 8, 2, 9, 1, 5],
      [9, 5, 1, 7, 4, 3, 6, 2, 8],
      [5, 1, 9, 3, 2, 6, 8, 7, 4],
      [2, 4, 8, 9, 5, 7, 1, 3, 6],
      [7, 6, 3, 4, 1, 8, 2, 5, 9]
    ];
    let board = new Board(completeBoard);
    expect(board.checkBoard()).toEqual(false);
  });
});

function createEmptyBoardArray() {
  const boardArray = [];
  for (let i = 0; i < 9; i++) {
    boardArray.push([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  }

  return boardArray;
}