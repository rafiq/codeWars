var summation = function (num) {
    let array = [];
    for (let i = 1; i <= num; i++) {
        array.push(i);
    }
    return array.reduce((acc,curr) => acc += curr,0);
  }
console.log(
summation(2),//3

summation(8),//36
)