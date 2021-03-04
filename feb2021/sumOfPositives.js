function positiveSum(arr) {
    let result = 0;
    arr.forEach(num => {
        if (num > 0) {
            result += num;
        }
    })
    return result;
}

console.log(positiveSum([-1,2,3,4,-5]))//9
console.log(
    positiveSum([1,2,3,4,5]),//15,
    positiveSum([1,-2,3,4,5]),//13,
    positiveSum([]),//0,
    positiveSum([-1,-2,-3,-4,-5]),//0),
)