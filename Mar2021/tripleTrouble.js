function tripledouble(num1, num2) {
    // let numStr = String(num1).split("");
    // let num2Str = String(num2).split("");

    // let num1Array = [];
    // let num2Array = [];
    // let currentStr = "";

    // for (let i = 0; i < numStr.length; i++) {
    //     if (numStr[i] === numStr[i + 1]) currentStr += numStr[i];
    //     if (numStr[i] !== numStr[i + 1] && currentStr.length > 1) {
    //         currentStr += numStr[i];
    //         num1Array.push(currentStr)
    //         currentStr = "";
    //     }
    // }
    // for (let i = 0; i < num2Str.length; i++) {
    //     if (num2Str[i] === num2Str[i + 1]) currentStr += num2Str[i];
    //     if (num2Str[i] !== num2Str[i + 1] && currentStr.length >= 1) {
    //         currentStr += num2Str[i];
    //         num2Array.push(currentStr)
    //         currentStr = "";
    //     }
    // }
    // return `${num1Array}\n${num2Array}\n`;
//  The below code uses three nestede for loops wehere the first two iterate over the letters and tries to see if there are three letters in a row in the first string, and if it finds it, then it initiates a third loop which searched the second string for that same digit in two consecutive pairs. It looks like I was on the right track but I was missing the charAt method which looks like it allows the program to read the individual chars in a string without haveing to make it into an array. Like I thought it is the missing piece that I wanted. This is also good, because this is showing me how to get a substring from a string and this is exactly what I need practice on.
var foundTripleDouble = false;
num1 = num1.toString();
num2 = num2.toString();

// for (var j = 0; j < num1.length; j++) {
//   digit = num1[j];
//   for (var i = 0; i <= num1.length-2; i++) {
//     if (( num1.charAt(i) === digit ) &&
//         ( num1.charAt(i+1) === digit ) &&
//         ( num1.charAt(i+2) === digit )) {

//           for (var k = 0; k < num2.length-1; k++) {
//             if (( num2.charAt(k) === digit ) &&
//                 ( num2.charAt(k+1) === digit )) {
//                   return 1;
//                 }
//           }
//     }
//   }
// }
// return 0;
//  The below method using the regular expression is very insightful and proves that regex is very good in shortening code, and should be learned. I will start digging into it to get better at it, but the code above is a good example of solving this problem with just using nested for loops. SO KNOW I SEE WHAT I WA MISSING. I had the dollar sign in front of the numbers and I shouldn't have had them. Old habit I guess. I thought I had to have them there but that is why I need to learn regex.
    for (let i = 0; i < 10; i++) {
        const reg1 = new RegExp(`${i}{3}`);
        const reg2 = new RegExp(`${i}{2}`);
        if (reg1.test(num1) && reg2.test(num2)) return 1
    }
    return 0;
    // for (let i = 0; i < 10; i++) {
    //     if (new RegExp(`${i}{3}`).test(num1) && new RegExp(`${i}{2}`).test(num2)) {
    //       return 1;
    //     }
    //   }
    //   return 0;
  }

  console.log(
    tripledouble(451999277,41177722899),//1);
    tripledouble(1222345, 12345),//0);
    tripledouble(12345, 12345),//0);
    tripledouble(666789, 12345667),//1);
    tripledouble(10560002, 100),//1);
    tripledouble(1112, 122),//0);
  )