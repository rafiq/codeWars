// I really need to remember this that a number modulo one and equal to zero is a perfect root of a number.

var isSquare = function(n){
   return Math.sqrt(n) % 1;
    // return n ? n % Math.sqrt(n) === 0 : true;
  }

  console.log(
    isSquare(83),// false, "-1: Negative numbers cannot be square numbers");
    isSquare( 0),// true, "0 is a square number (0 * 0)");
    isSquare( 3),// false, "3 is not a square number");
    isSquare( 4),// true, "4 is a square number (2 * 2)");
    isSquare(25),// true, "25 is a square number (5 * 5)");
    isSquare(26),// false, "26 is not a square number");
  )