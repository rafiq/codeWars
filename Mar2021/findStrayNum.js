function stray(numbers) {
    // let current = 0;
    // numbers.forEach((num,idx) => {
    //     if (numbers.indexOf(num) === numbers.lastIndexOf(num)) current = num;
    // });
    // return current;

    let num =4936;
    let digits = [];
    while (num > 0) {
        digits.unshift(getLastDigit(num))
        num = getRemainder(num);
    }
    return digits;

    // return num.toString().split("").map(num => +num)
  }

  function getLastDigit(num) {
      return num % 10;
  }
  function getRemainder(num) {
      return (num - getLastDigit(num)) / 10
  }
  console.log(
    stray([1, 1, 2]),// 2
  )