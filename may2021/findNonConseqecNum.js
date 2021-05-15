function firstNonConsecutive (arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + 1 !== arr[i + 1]) return arr[i + 1]
    }
    return null;
}
// const first = firstNonConsecutive()
console.log(
    firstNonConsecutive([1,2,3,4,6,7,8]),// 6)
    firstNonConsecutive([ 1, 2, 3, 4 ]),// null
)