Math.roundTo = function (number, precision) {

    // if (number % 1)
    // return number.toFixed(precision);
    // let strNum = String(number).split(".");
    // if (strNum.length > 1) {
    //     return String(number).split(".")[1]
    // }
    // if (number.toFixed(precision))
    // let strNumArray = String(number.toFixed(precision + 1))
    // let length = String(number.toFixed(precision + 1)).length;

    // if (strNumArray[length - 1] < 6) +(strNumArray[length]) + 1
    // return  strNumArray// Math.floor(number.toFixed(precision)) === number.toFixed(precision)
    return Number(number.toFixed(precision))
  }
  console.log(
    Math.roundTo(3.1415926535, 4),// 3.1416);
    Math.roundTo(4, 5),// 4);
    Math.roundTo(4.1235343424, 6),// 4.123534);
    Math.roundTo(5.3035802, 3),// 5.304);
    Math.roundTo(0.9384930193848595, 15),// 0.938493019384860);
    Math.roundTo(9.9999, 3),// 10);
  )