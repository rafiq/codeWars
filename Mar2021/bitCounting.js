var countBits = function(n) {
    let arrayOfSquares = [];
    let squareRoot = Math.pow(n,1 / 2);
    // return n.toString(2).match(/1/g) ? n.toString(2).match(/1/g).length : 0;
    return n.toString(2).split('0');
    // return Math.floor(Math.log2(n))
    // for (let i = 0; i < 100; i++) {
    //     arrayOfSquares.push(2**i)
    // }
    // if (n === 0) return 0;
    // return arrayOfSquares.reduce((acc,curr,idx) => {
    //     if (curr > n) return idx;
    // });
  };

  console.log(
    countBits(0),//0);
    countBits(4),//1);
    countBits(7),//3);
    countBits(9),//2);
    countBits(10),//2);
  )