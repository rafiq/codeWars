function featured(num) {
    let featuredNumber = toOddMultipleOf7(num)
    for (let i = num + 1; i < 9876543202; i += 7) {
        if (isSameDigits(i) && isOdd(i)) return i;
    }
    return "There is no possible number that satisfies those requirements.";
}
function isOdd(num) {
    return num % 2 === 1;
}
function isSameDigits(num) {
    let numStr = num.toString();
    return numStr.split("").every(el => {
         numStr = numStr.replace(el,"")
         return !numStr.includes(el)
    })
}
function isMultipleOfSeven(num) {
    return num % 7 === 0;
}
function toOddMultipleOf7(number) {
    do {
      number += 1;
    } while (number % 2 === 0 || number % 7 !== 0);

    return number;
  }
console.log(
    featured(12),//           // 21
    featured(20),//           // 21
    featured(21),//           // 35
    featured(997),//          // 1029
    featured(1029),//         // 1043
    featured(999999),//       // 1023547
    featured(999999987),//    // 1023456987
    featured(9876543200),//   // 9876543201
    featured(9876543201),//   // "There is no possible number that fulfills those requirements."
)