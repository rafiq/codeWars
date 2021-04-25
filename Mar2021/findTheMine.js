function mineLocation(field){
    // return field[2].indexOf(1)
    return field.reduce((acc,curr,idx) => {
        if (curr.includes(1)) {
            acc.push(idx);
            acc.push(curr.indexOf(1));
        }

        return acc;
    },[])
  }
  console.log(

   mineLocation([ [0, 0], [0, 1] ]),//[0, 0]);
   mineLocation([ [0, 0, 0], [0, 0, 1], [0, 0, 0] ]),//[0, 0]);
   mineLocation([ [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 1] ]),//[2, 2]);
  )

//   I like the below one just because ...well no reason. I like the use of forEach
function mineLocation(field){
    var mine;

    field.forEach(function(row, x) {
      row.forEach(function(cell, y) {
        if (cell === 1) {
          mine = [x, y];
        }
      });
    });

    return mine;
  }
// I like the below becaues I like to see double for loops
function mineLocation(field){
    for (var i = 0; i < field.length; i++) {
      for (var j = 0; j < field[i].length; j++) {
        if (field[i][j] === 1) {
          return [i, j]
        }
      }
    }
  }