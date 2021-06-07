function palindromes(str) {
    // let result  = [];

    // substrings(str).forEach(el => {
    //     if (el === el.split("").reverse().join("") && el.length > 1) {
    //         result.push(el);
    //     }
    // });
    // return result
    let result = [];

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length + 1; j++) {
            result.push(str.slice(i,j));
        }
    }
    return result
}
function substrings(str) {
    let result = [];

    for (let i = 0; i < str.length; i++) {
        result.push(leadingSubstrings(str.slice(i)))
    }
    return result.flat();
}
function leadingSubstrings(str) {
    return [...str].reduce((acc,curr,i) => {
        acc.push(str.slice(0,i + 1))
        return  acc;
    },[]);
}
console.log(
    palindromes('abcde'),
    // returns
    // [ "a", "ab", "abc", "abcd", "abcde",
    //   "b", "bc", "bcd", "bcde",
    //   "c", "cd", "cde",
    //   "d", "de",
    //   "e" ]
// palindromes('madam'),//      // [ "madam", "ada" ]

// palindromes('hello-madam-did-madam-goodbye'),//
// // returns
// // [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
// //   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
// //   "-madam-", "madam", "ada", "oo" ]

// palindromes('knitting cassettes'),//
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
)