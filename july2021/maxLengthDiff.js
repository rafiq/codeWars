function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) return -1

    let a1Sorted = a1.sort((a,b) => a.length - b.length)
    let a2Sorted = a2.sort((a,b) => a.length - b.length)

    return Math.max(Math.abs(a1Sorted[0].length-a2Sorted[a2Sorted.length-1].length),Math.abs(a2Sorted[0].length-a1Sorted[a1Sorted.length-1].length));
//     if (a1.length === 0 || a2.length === 0) return -1
//   let l1 = a1.map(str => str.length)
//   let l2 = a2.map(str => str.length)
//   return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
}
var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
console.log(
   mxdiflg(s1, s2),// 13);
)