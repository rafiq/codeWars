const multiplicationTable=(m,n)=> Array(Array.from(new Array(m), (x, i) => m - i).reduce((acc,curr,idx) => acc + curr)).fill(0).reduce((acc,curr,idx) => {

})
//  Array(n).fill(0).reduce((acc,curr,idx) => {
    //  m === n ? acc += `${idx + 1} * ${n} = ${(idx + 1) * n}\n` :
    // m < n ? idx < m ? acc += `${idx + 1} * ${m} = ${(idx + 1) * m}\n` : acc += `${idx} * ${n} = ${(idx + 1) * n}\n` :

    // if m < n Array.from(new Array(m), (x, i) => m - i)
//     idx > n ? acc += `${idx + 1} * ${m} = ${(idx + 1) * m}\n` : acc += `${idx} * ${n} = ${(idx + 1) * n}\n`

    // if m > n Array(Array.from(new Array(m), (x, i) => m - i).reduce((acc,curr,idx) => acc + curr)).fill(0)



//     return acc;
// },"")
console.log(
    // multiplicationTable(1,2),//   `1 * 1 = 1 1 * 2 = 2  2 * 2 = 4`)

    // multiplicationTable(3,4),// `1 * 3 = 3  2 * 3 = 6  3 * 3 = 9 1 * 4 = 4  2 * 4 = 8  3 * 4 = 12  4 * 4 = 16`)

    // multiplicationTable(3,3),//`1 * 3 = 3  2 * 3 = 6  3 * 3 = 9`)
    multiplicationTable(3,1),//`1 * 3 = 3  2 * 3 = 6  3 * 3 = 9 1 * 2 = 2  2 * 2 = 4 1 * 1 = 1`)
)