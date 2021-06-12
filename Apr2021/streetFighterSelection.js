const fighters = [
    ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];
function streetFighterSelection(fighters, position, moves){
    // var result = [];

    // moves.forEach(function(move) {
    //   if (move === "up") {
    //     position[0] = 0;
    //   }
    //   else if (move === "down") {
    //     position[0] = 1;
    //   }
    //   else if (move === "right") {
    //     position[1] = (position[1] === 5) ? 0 : position[1] + 1;
    //   }
    //   else if (move === "left") {
    //     position[1] = (position[1] === 0) ? 5 : position[1] - 1;
    //   }

    //   result.push(fighters[position[0]][position[1]]);
    // });

    // return result;
    let rowIndex = 0;
    let columnIndex = 0;
    let result = [];

    moves.forEach(el => {
        // if (columnIndex < 0) columnIndex = 0;
        // if (columnIndex > 1) columnIndex = 1;
        // if (rowIndex < 0) rowIndex = 5;
        // if (rowIndex > 5) rowIndex = 0;
    //     if (el === "up") {
    //         columnIndex--;
    //       }
    //       else if (el === "down") {
    //         columnIndex++;
    //       }
    //       else if (el === "right") {
    //         rowIndex = (rowIndex === 5) ? 0 : rowIndex += 1;
    //       }
    //       else if (el === "left") {
    //         rowIndex = (rowIndex === 0) ? 5 : rowIndex -= 1;
    //       }

    //       result.push(fighters[columnIndex][rowIndex]);
    // return result;
    // return fighters[columnIndex][rowIndex]
  })
}
  console.log(
        streetFighterSelection(fighters, [0,0], ['up', 'left', 'right', 'left', 'left']),//['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']),
        streetFighterSelection(fighters, [0,0], []), //[]);
        streetFighterSelection(fighters, [0,0], ["left","left","left","left","left","left","left","left"]), //['Vega', 'Balrog', 'Guile', 'Blanka', 'E.Honda', 'Ryu', 'Vega', 'Balrog']);


    // moves = ["right","right","right","right","right","right","right","right"];
    // describe("Solution", function(){
    //   it("should work when always moving right", function(){
    //     Test.assertSimilar(streetFighterSelection(fighters, [0,0], moves),['E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega', 'Ryu', 'E.Honda', 'Blanka']);
    //   });
    // });

    // moves = ["up","left","down","right","up","left","down","right"];
    // describe("Solution", function(){
    //   it("should use all 4 directions clockwise twice", function(){
    //     Test.assertSimilar(streetFighterSelection(fighters, [0,0], moves),['Ryu', 'Vega', 'M.Bison', 'Ken', 'Ryu', 'Vega', 'M.Bison', 'Ken']);
    //   });
    // });

    // moves = ["down","down","down","down"];
    // describe("Solution", function(){
    //   it("should work when always moving down", function(){
    //     Test.assertSimilar(streetFighterSelection(fighters, [0,0], moves), ['Ken', 'Ken', 'Ken', 'Ken']);
    //   });
    // });

    // moves = ["up","up","up","up"];
    // describe("Solution", function(){
    //   it("should work when always moving up", function(){
    //     Test.assertSimilar(streetFighterSelection(fighters, [0,0], moves), ['Ryu', 'Ryu', 'Ryu', 'Ryu']);
    //   });
    // });
  )
  const streetFighterSelection = (fighters, [i, j], moves) => {
    return moves.map(move => {
      if (move === 'up')    i = Math.max(i - 1, 0);
      if (move === 'down')  i = Math.min(i + 1, 1);
      if (move === 'left')  j = (j - 1 + 6) % 6;E
      if (move === 'right') j = (j + 1 + 6) % 6;

      return fighters[i][j];
    });
  };