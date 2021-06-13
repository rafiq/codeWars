function sumPairs(ints, s) {
//     let result = [];

//     for (let i = 0; i < ints.length; i++) {
//         for (let j = i + 1; j < ints.length; j++) {
//             // console.log(i , j,ints[i]+ints[j],Math.min(j))
//             // console.log()
//             if (ints[i] + ints[j] === s) result.push([ints[i],ints[j]])// result.push([ints[i],ints[j]])
//         }
//     }
//     // return result.length === 0 ? undefined : result.filter(el => el[1] === Math.min(result.map(el => el[1])));
//  if (result.length > 1) return Math.min(result.map(el => el[1]))
//  else return result;
var seen = {}
for (var i = 0; i < ints.length; ++i) {
  if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
  seen[ints[i]] = true
  console.log(seen)
}
  }
  console.log(
    // sumPairs([1, 4, 8, 7, 3, 15], 8),// [1, 7], "Basic: [1, 4, 8, 7, 3, 15] should return [1, 7] for sum = 8");
    // sumPairs([1, -2, 3, 0, -6, 1], -6),// [0, -6], "Negatives: [1, -2, 3, 0, -6, 1] should return [0, -6] for sum = -6");
    // sumPairs([20, -13, 40], -7),// undefined, "No Match: [20, -13, 40] should return undefined for sum = -7");
    // sumPairs([1, 2, 3, 4, 1, 0], 2),// [1, 1], "First Match From Left: [1, 2, 3, 4, 1, 0] should return [1, 1] for sum = 2");
    sumPairs([10, 5, 2, 3, 7, 5], 10),// [3, 7], "First Match From Left REDUX!: [10, 5, 2, 3, 7, 5] should return [3, 7] for sum = 10");
    // sumPairs([4, -2, 3, 3, 4], 8),// [4, 4], "Duplicates: [4, -2, 3, 3, 4] should return [4, 4] for sum = 8");
    // sumPairs([0, 2, 0], 0),// [0, 0], "Zeroes: [0, 2, 0] should return [0, 0] for sum = 0");
    // sumPairs([5, 9, 13, -3], 10),// [13, -3], "Subtraction: [5, 9, 13, -3] should return [13, -3] for sum = 10");
  )
//   My solution worked, but it didn't work for finding the element that had the smallest second input. I have a solution below which I am tyring to understand how it is able to find the lower second element using the hash table.
// var seen = {}
// for (var i = 0; i < ints.length; ++i) {
//   if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
//   seen[ints[i]] = true
// }
// console.log(seen)