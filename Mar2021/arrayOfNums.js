function convertMeIntoANumber(array) {


    return array.map(el => +el);

  }
  console.log(
    convertMeIntoANumber(["4","5","2"]),//[4, 5, 2]);
    convertMeIntoANumber(["1","65"]),//[1,65], 'should return [1, 65]');
    convertMeIntoANumber(["2","hola"]),//[2, NaN], 'should return [2, NaN]');
    convertMeIntoANumber(["0","-3","4"]),//[0, -3, 4], 'should return [0, -3, 4]');
  )