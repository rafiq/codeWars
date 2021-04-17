function productFib(prod){
    let startingNum = 0;
    for (let i = 1; i < prod; i++) {
        if (getFib(i) >= prod) {
            startingNum = i - 1;
        }
    }
    return startingNum;
  }
  function getFib(num) {
    let base = [0,1];
    for (let i = 1; i < num; i++) {
        base.push(base[i - 1] + base[i])
    }
    return base[base.length - 1]
  }
  console.log(
   productFib(714),// (21, 34, true),
//    productFib(4895),// [55, 89, true])
//    productFib(5895),// [89, 144, false])
//    productFib(74049690),// [6765, 10946, true])
//    productFib(84049690),// [10946, 17711, false])
//    productFib(193864606),// [10946, 17711, true])
//    productFib(447577),// [610, 987, false])
//    productFib(602070),// [610, 987, true])
  )
//   THis solution is crazy. I don't know what happened here
let [a, b] = [0, 1];
while(a * b < prod) [a, b] = [b, a + b];
return [a, b, a * b === prod];


// The below one is a little more understandable and is what I was thinking of doing first. I wanted to create a fib chart which I would use to stay under the fiven input number.
function productFib(prod){
    //cache fibonacci numbers
    var fib = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377,
              610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657,
              46368, 75025, 121393, 196418, 317811, 514229, 832040,
              1346269, 2178309, 3524578, 5702887, 9227465, 14930352,
              24157817, 39088169, 63245986, 102334155];


    for (var i = 0, j = fib.length; i < j; i++) {
      var x = fib[i] * fib[i + 1];

      if (x === prod) {
        return [fib[i], fib[i + 1], true];
      }
      else if (x > prod) {
        return [fib[i], fib[i + 1], false];
      }
    }
  }