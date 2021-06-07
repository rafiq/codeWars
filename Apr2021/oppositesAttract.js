function lovefunc(flower1, flower2){
    return isEven(flower1) && isOdd(flower2) || isEven(flower2) && isOdd(flower1)
  }
  function isEven(num) {
      return num % 2 === 0;
  }
  function isOdd(num) {
      return num % 2 === 1;
  }
  console.log(
    lovefunc(1,4),// true)
    lovefunc(2,2),// false)
    lovefunc(0,1),// true)
    lovefunc(0,0),// false)
  )