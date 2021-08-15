function sumArray(array) {
    if (!array) return 0
    if (array.length === 0 || array.length === 1) return 0
    return array.sort((a,b) => a - b).reduce((acc,curr,idx) => {
        if (idx === 0 || idx === array.length - 1) return acc
        acc += curr
        return acc
    },0)
}
console.log(
    sumArray([ 6, 2, 1, 8, 10 ]),//16
)