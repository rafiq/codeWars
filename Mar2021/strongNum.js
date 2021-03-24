function strong(n) {

    let factorial = String(n).split("").reduce((acc,curr) => {
        acc += getFactorial(+curr);

        return acc;
    },0);
    return factorial === n ?  "STRONG!!!!" : "Not Strong !!" ;

  }
  function getFactorial(num) {
      if (num === 0 || num === 1)
      return 1;
      for (var i = num - 1; i >= 1; i--) {
          num *= i;
        }
        return num;
    }

    //   My code below didin't work probably because of the not accounting for the negative number. I am not sure why.
    // if (num < 0) return -1;
    // else if (num == 0) return 0;
    // else return (num * getFactorial(num - 1));
    // if (num < 0) return -1;
    // else if (num == 0) return 1;
    // else return (num * getFactorial(num - 1));
  console.log(
    strong(1),//"STRONG!!!!");

//"Testing for 2", () => {
  strong(2),//"STRONG!!!!");

//"Testing for 145", () => {
  strong(145),//"STRONG!!!!");

//"Testing for 7", () => {
  strong(7),//"Not Strong !!");

//"Testing for 93", () => {
  strong(93),//"Not Strong !!");

//"Testing for 185", () => {
  strong(185),//"Not Strong !!");

  )