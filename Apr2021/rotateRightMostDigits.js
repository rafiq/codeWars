function rotateRightmostDigits(num,length) {
    let numArray = num.toString().split("");
    return numArray.slice(0,-1 * length).join("") + rotateArray(numArray.slice(-1 * length)).join("");
}
function rotateArray(arr) {
    if (typeof arr !== "object") return undefined;
    return arr.slice(1).concat(arr.slice(0,1))
}
console.log(
    rotateRightmostDigits(735291, 1),//      // 735291
    rotateRightmostDigits(735291, 2),//      // 735219
    rotateRightmostDigits(735291, 3),//      // 735912
    rotateRightmostDigits(735291, 4),//      // 732915
    rotateRightmostDigits(735291, 5),//      // 752913
    rotateRightmostDigits(735291, 6),//      // 352917
)