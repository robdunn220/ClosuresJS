// Counter
function counter(a) {
  function countit() {
    a += 1;
    return a;
  }
  return countit;
}

var count1 = counter(3);
var count2 = counter(7);

console.log(count1());
console.log(count2());
console.log(count1());
console.log(count2());
console.log(count1());

// Battleship
function fire(row, col) {
  function boardHide() {
    var board = [
      ['o', ' ', 'o', 'o', ' '],
      ['o', ' ', ' ', ' ', ' '],
      ['o', ' ', 'o', 'o', 'o'],
      ['o', ' ', ' ', ' ', ' '],
      [' ', ' ', 'o', ' ', 'o'],
      [' ', ' ', 'o', ' ', 'o']
    ];
    if (board[row][col] === 'o') {
      board[row][col] = 'x';
      return 'Hit!';
    } else {
      return 'Miss';
    }
  }
  return boardHide;
}

var board = fire(0, 1);

console.log(board());
