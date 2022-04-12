import { Board } from "./../src/board.js";

describe("board", () => {
  const boardArray = [];
  for (let i = 0; i < 9; i++) {
    boardArray.push([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  }

  let newBoardArray = boardArray.concat([]);
  const board = new Board(newBoardArray);

  test("It should create an object with a property that contains the given 9x9 2D array", () => {
    expect(board.boardArray).toEqual(newBoardArray);
  });

  test("It should add the given number to the given position in boardArray", () => {
    board.addNumber(5, 0, 0);
    expect(board.boardArray[0][0]).toEqual(5);
  });

  test("It should return true if the given row is a valid row", () => {
    expect(board.checkRow(0)).toEqual(true);
  });

  test("It should return true if the given row is a valid row", () => {
    board.addNumber(5, 0, 0);
    board.addNumber(5, 1, 0);
    expect(board.checkRow(0)).toEqual(false);
  });
});