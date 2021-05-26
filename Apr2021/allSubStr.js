function substrings(str) {
    let result = [];

    for (let i = 0; i < str.length; i++) {
        result.push(leadingSubstrings(str.slice(i)))
    }
    return result//.flat();
}
function leadingSubstrings(str) {
    return [...str].reduce((acc,curr,i) => {
        acc.push(str.slice(0,i + 1))
        return  acc;
    },[]);
}
console.log(
    substrings('abcde'),
// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]
)