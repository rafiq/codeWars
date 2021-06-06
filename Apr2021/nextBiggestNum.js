function nextBiggerNum(num) {
    let max = Number(String(num).split("").sort((a,b) => b - a).join(""));
    for (let i = num + 1; i <= max; i++) {
        if (isSameDigits(i,num)) return i;
    }
    return -1;
    // return isSameDigits(32,23);
}
function isSameDigits(num, haystack) {

    let sortedNum = String(num).split("").sort((a,b) => a - b);
    let sortedHaystack = haystack.toString().split("").sort((a,b) => a - b);

    // for (let i = 0; i < sortedHaystack.length; i++) {
    //     if (sortedHaystack[i] !== sortedNum[i]) return false;
    // }
    // return true;
    return sortedNum.join("") === sortedHaystack.join("")
}
console.log(
    nextBiggerNum(9),// -1
    nextBiggerNum(12),// 21
    nextBiggerNum(513),// 531
    nextBiggerNum(2017),// 531
    nextBiggerNum(111),// 531
    nextBiggerNum(531),// 531
    nextBiggerNum(123456789),// 531
)