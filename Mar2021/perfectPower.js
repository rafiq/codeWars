var isPP = function(n){
    let array = [2];

    // if (Math.sqrt(n) * Math.sqrt(n) === n) {
    //     array.unshift(Math.sqrt(n));
    //     return array;
    // } else return null;

    for (let i = 2; i < n; i++) {
        if (Number.isInteger(Math.pow(n,(1/i)))) {
            array.unshift( i);
        } else return null;
    }
    return array;
  }

console.log(
    isPP(4),// [2,2], //"4 = 2^2");
    isPP(9),// [3,2],// "9 = 3^2");
    isPP(5),// null, //"5 isn't a perfect number");
)