function repeatedSubstringPattern(str) {
    let test = "";
    for (let i = 1; i < str.length - 1; i++) {
        test = str.slice(i);
        if (countPatterns(str,test)) return true
    }
    return false;
    // return countPatterns(str,"ab")
}
function countPatterns(str,test) {
    // let idx = "";
    // let count = 0;
    // let len = test.length;
    // while (str.length > 0) {
    //     str.split(test).splice(str.indexOf(test),len);
    //     count ++;
    // }
    // console.log(str.split(test))
    return str.split(test).length - 1 >= 2// str.indexOf(test);
}
console.log(
    repeatedSubstringPattern("abab"),//true
    repeatedSubstringPattern("aba"),//false;
    repeatedSubstringPattern("aabaaba"),//false;
)