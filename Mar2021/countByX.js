function countBy(x, n) {
    let array = [];
    for (let i = x; i <= x * n; i += x) {
        array.push(i);
    }
    return array;
    // return [].reduce((acc,curr,idx) => {
    //     acc.push(idx)
    //     return acc;
    // },[])
}
console.log(
countBy(1,10),//[1,2,3,4,5,6,7,8,9,10]
countBy(2,5),//[2,4,6,8,10]
)