POSSIBLE_MOVES = [[2,-1],[2,1],[-2,-1],[-2,1],[1,2],[-1,2],[1,-2],[-1,-2]];

function chessKnight(cell) {
    let board = {
        a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8
    };
    let count = 0;
    let convertedPosition = cell.split("")
    convertedPosition[0] = board[convertedPosition[0]]
    convertedPosition = convertedPosition.map(Number)

    for (let i = 0; i < POSSIBLE_MOVES.length; i++) {
        let current = [];
        current[0] = convertedPosition[0] + POSSIBLE_MOVES[i][0];
        current[1] = convertedPosition[1] + POSSIBLE_MOVES[i][1];
        if (isPossible(current)) count++;
    }

    return count;
  }
  function isPossible(position) {

    if (position[0] > 8 || position[0] < 1) return false;
    if (position[1] > 8 || position[1] < 1) return false;
    return true;
  }
  console.log(
    chessKnight("a1"),//2)

    chessKnight("c2"),//6)

    chessKnight("d4"),//8)

    chessKnight("g6"),//6)
  )

//   ! This was a clever way to do this one
// No conversion needed of the letter, but they did convert from letter to char code, then back to a letter. I like how they used the filter method.
function chessKnight(cell) {
    var knightMoves = [[1,2],[1,-2],[-1, 2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]];

    var isValidPosition = (cell, move) => {
        let rank =  String.fromCharCode(cell.charCodeAt(0)+move[0]);
        let file = parseInt(cell[1]) + move[1];
        return rank>="a" && rank<="h" && file>=1 && file<=8;
      }
    return knightMoves.filter(move => isValidPosition(cell, move)).length;
  }