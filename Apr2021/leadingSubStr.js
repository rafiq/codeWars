function leadingSubstrings(str) {
    return [...str].reduce((acc,curr,i) => {
        acc.push(str.slice(0,i + 1))
        return  acc;
    },[]);
}

console.log(
    leadingSubstrings('abc'),//      // ["a", "ab", "abc"]
    leadingSubstrings('a'),//        // ["a"]
    leadingSubstrings('xyzzy'),//    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
)