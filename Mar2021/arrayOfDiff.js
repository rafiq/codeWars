function arrayDiff(a, b) {
    let newArray = [];
    if (b.length === 0) return a;
    return a.reduce((acc,curr,idx) => {

            if (b.every(num => num !== curr)) acc.push(curr)

        return acc;
    },[])
}
console.log(
    arrayDiff([], [4,5]), //[], "a was [], b was [4,5]");
    arrayDiff([3,4], [3]), //[4], "a was [3,4], b was [3]");
    arrayDiff([1,8,2], []), //[1,8,2], "a was [1,8,2], b was []");
    arrayDiff([ 7, -18, -17, -16, 0, 19, 11, -20, -9, -13, 12, 8, 19 ], [ -17, 7, -13, 19, 19, -18, 12, -20 ]), //[-16, 0, 11, -9, 8]
)