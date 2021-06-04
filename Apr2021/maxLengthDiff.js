let  s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
let  s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) return -1;
    let lengthArray1 = a1.map(el => el.length);
    let lengthArray2 = a2.map(el => el.length);
    let [max1,min1] = [Math.max(...lengthArray1),Math.min(...lengthArray1)];
    let [max2,min2] = [Math.max(...lengthArray1),Math.min(...lengthArray2)];

    // num1 = a1[lengthArray1.indexOf(max)];
    // num2 = a2[lengthArray2.indexOf(min)];
    return [max1,min1,max2,min2]
}
console.log(
    mxdiflg(s1, s2),// 13,
)