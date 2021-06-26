

Math.ceil = function (x) {
    // if (x % 1 === 0) return x;
    // return (x + 1) - (x % 1)
    return +String(x).split(".")[0] + 1
  }
Math.floor = function(x) {
    return x - (x % 1)
}
Math.round = function(x) {
    return x - Math.floor(x) < .5 ? Math.floor(x) : Math.ceil(x)
    // return x - Math.floor(x) > 0.5
}
Math.abs = function(x) {
    return x < 0 ? x * -1 : x;
}
Math.max = function(arr) {

    return arr.reduce(function (p, v) {
        return ( p > v ? p : v );
      });

    // let max = -Infinity;
    // for (let i = 0; i < arr.length; i++) {
    //     if (max < arr[i]) {
    //         max = arr[i];
    //     }
    // }
    // return max
}
Math.min = function(arr) {
    let min = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min
}
Math.pow = function(x,y) {
    let result = 1;
    if (y === 0) return 1;

    for (let i = 0; i < y; i++) {
        result *= x;
    }
    return result;
}
  console.log(
    // Math.ceil(5.4),//6
    // Math.ceil(5),//5
    Math.ceil(1.01),//1
    Math.ceil(13.29),//13
    // Math.floor(5.4),//5
    // Math.round(5.4),//5
    // Math.abs(-9),//9
    Math.max([1,2,9]),//9
    // Math.min([1,2,9]),//1
    // Math.pow(3,2),//9
    // Math.pow(3,3),//9
    // Math.pow(3,0),//9
  )