function sumDigPow(a, b) {
    let rangeArray = new Array(b - a + 1).fill(0).map((el,idx) => a + idx);
    return rangeArray.filter(num => {
        if (isEureka(num)) return num;
    })
  }
  function isEureka(number) {
    return String(number).split("").reduce((acc,curr,idx) => {
        acc += Math.pow(curr,idx + 1);
        return acc;
    },0) === number
  }
  console.log(
    sumDigPow(1, 10),// [1, 2, 3, 4, 5, 6, 7, 8, 9])
    sumDigPow(1, 100),// [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
    sumDigPow(10, 100),//  [89])
    sumDigPow(90, 100),// [])
    sumDigPow(90, 150),// [135])
    sumDigPow(50, 150),// [89, 135])
    sumDigPow(10, 150),// [89, 135])
  )