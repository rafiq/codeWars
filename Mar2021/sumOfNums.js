function getSum( a,b )
{
    let start = Math.min(a,b);
    let end = Math.max(a,b);
    let range = [];

    for (let i = start; i <= end; i++) {
        range.push(i)
    }
    if (a === b) return a;
    return range.reduce((a,b) => a + b);
}
console.log(
    getSum(0,-1),//-1);
    getSum(0,1),//1);
    getSum(1, 2),//3   // 1 + 2 = 3
getSum(0, 1),//1   // 0 + 1 = 1
getSum(1, 1),//1   // 1 Since both are same
getSum(-1, 0),//-1 // -1 + 0 = -1
getSum(-1, 2),//2
)