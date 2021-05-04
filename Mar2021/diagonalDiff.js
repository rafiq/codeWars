function diagonalDifference(arr) {
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < arr.length; i++) {
            sum1 += arr[i * 4]
            sum2 +=  arr[i * 2 + 2]
    }
    return sum2;

}

console.log(
    diagonalDifference([11 ,2, 4,
        4 ,5, 6,
        10 ,8, -12])
)

var sum = 0;
for(var i = 0; i<n; i++){
    sum += a[i][i];
    sum -= a[i][n-i-1];
}
console.log(Math.abs(sum));