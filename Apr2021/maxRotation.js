function maxRotation(num) {
    let numString = num.toString();

    for (let i = numString.length; i >= 2; i--) {
        // numString = numString.slice(0,i) + rotateArray(numString.slice(i))
        // console.log(numString)
        numString = rotateRightmostDigits(numString,i)
    }

    return +numString;
}
function rotateRightmostDigits(num,length) {
    let numArray = num.toString().split("");
    return numArray.slice(0,-1 * length).join("") + rotateArray(numArray.slice(-1 * length)).join("");
}
function rotateArray(arr) {
    if (typeof arr !== "object") return undefined;
    return arr.slice(1).concat(arr.slice(0,1))
}
console.log(
    maxRotation(735291),//          // 321579
    maxRotation(3),//               // 3
    maxRotation(35),//              // 53
    maxRotation(105),//             // 15 -- the leading zero gets dropped
    maxRotation(8703529146),//      // 7321609845
)