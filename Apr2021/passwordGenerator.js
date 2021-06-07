function passwordGen(){
    // let length = randomIntFromInterval(2,7);
    // return new Array(length).fill(0).reduce((acc,curr,idx) => {
    //     acc += randomIntFromInterval(0,9)
    //     acc += String.fromCharCode(randomIntFromInterval(65,90))
    //     acc += String.fromCharCode(randomIntFromInterval(97,122))
    //     return acc;
    // },"").slice(0,20)//.length
    var length = randomIntFromInterval(6,20);
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
for (var i = 0, n = charset.length; i < length; ++i) {
    result += charset.charAt(Math.floor(Math.random() * n));
}
if (result.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{6,})$/)) {return result}
      else {return passwordGen()}
// return result;
  }
  console.log(
    passwordGen(),
  )
  function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

//   function getRandomNum() {

//     return Math.floor(Math.random() * 10)
//   }
//   function getRandomLength() {
//       return Math.floor(Math.random() * 21 )
//   }