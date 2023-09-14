/**
 * B-I-N-G-O
 *
 * A Bingo Card contain 25 squares arranged in a 5x5 grid (five columns
 * and five rows). Each space in the grid contains a number between 1
 * and 75. The center space is marked "FREE" and is automatically filled.
 *
 * As the game is played, numbers are drawn. If the player's card has
 * that number, that space on the grid is filled.
 *
 * A player wins BINGO by completing a row, column, or diagonal of filled
 * spaces.
 *
 * Your job is to complete the function that takes a bingo card and array
 * of drawn numbers and return 'true' if that card has achieved a win.
 *
 * A bingo card will be 25 element array. With the string 'FREE' as the
 * center element (index 12). Although developers are unscrupulous, they
 * will pass valid data to your function.
 */


function checkForBingo(bingoCard, drawnNumbers) {
  const size = Math.sqrt(bingoCard.length);

  // Create arrays to keep track of drawn numbers in each row, column, and diagonals.
  const rowCount = new Array(size).fill(0);
  const colCount = new Array(size).fill(0);
  let mainDiagonalCount = 0;
  let antiDiagonalCount = 0;

  for (let index = 0; index < bingoCard.length; index++) {
    const cell = bingoCard[index];
    const row = Math.floor(index / size);
    const col = index % size;

    // Update counts if the number is drawn or if it's the "FREE" cell.
    if (drawnNumbers.includes(cell) || cell === 'FREE') {
      rowCount[row]++;
      colCount[col]++;
      if (row === col) mainDiagonalCount++;
      if (row + col === size - 1) antiDiagonalCount++;
    }

    // Check if any row, column, or diagonal is complete.
    if (rowCount[row] === size || colCount[col] === size || mainDiagonalCount === size || antiDiagonalCount === size) {
      return true;
    }
  }

  return false;
}


module.exports = checkForBingo;

// here are some samples

// this should return true with diagonal + free
console.log(checkForBingo(
  [
    8, 29, 35, 54, 65,
    13, 24, 44, 48, 67,
    9, 21, 'FREE', 59, 63,
    7, 19, 34, 53, 61,
    1, 20, 33, 46, 72
  ],
  [
    8, 24, 53, 72
  ]
));

// this should return false
console.log(checkForBingo(
  [
   8, 29, 35, 54, 65,
   13, 24, 44, 48, 67,
   9, 21, 'FREE', 59, 63,
   7, 19, 34, 53, 61,
   1, 20, 33, 46, 72
  ],
  [
    1, 33, 53, 65, 29, 75
  ]
));