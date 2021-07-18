function ranks(a) {
    var s = a.slice().sort(function(a,b){ return b - a });
    return a.map(function(v){ return s.indexOf(v) + 1 });
    // let map = a.reduce((acc,curr) => {
    //     acc[curr] ? acc[curr]++ : acc[curr] = 1;
    //     return acc
    // },{})

    // let sortedKeys = Object.keys(map).sort((a,b) => b - a)
    // for (let i = 0; i < sortedKeys.length; i++) {

    //     map[a[i]] = i + 1
    // }
    // return a.map(el => map[el])
    // return a.map(el => map[el] )
    // return a.map(el => {

    //     return
    // })
}
console.log(
    ranks([3,3,3,3,3,5,1]), //= [2,2,2,2,2,1,7]
)