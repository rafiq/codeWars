
var maxSequence = function(arr){
    let subArrays = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length + 1; j++) {
            subArrays.push(arr.slice(i,j))
        }
    }
    let maxSum = Math.max(...subArrays.map(el => sumArray(el)));
    if (maxSum <= 0) return 0;
    else return maxSum;
  }
  function sumArray(array) {
      return array.reduce((acc,curr) => acc + curr,0)
  }
  console.log(
    maxSequence([]), //0);
  maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]),// 6);
  )
// Very short answer below.
//   var maxSequence = function(arr){
//     var min = 0, ans = 0, i, sum = 0;
//     for (i = 0; i < arr.length; ++i) {
//       sum += arr[i];
//       min = Math.min(sum, min);
//       ans = Math.max(ans, sum - min);
//     }
//     return ans;
//   }