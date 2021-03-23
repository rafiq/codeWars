function f(s) {
    // let len = getPattern(s).length;
    // let array = [];
    // let originalArray = s.split("");

    // while (originalArray.length > 0) {
    //     array.push(originalArray.splice(0,len));
    // }
    // return [getPattern(s),array.length];
    // let repeat = s.length / getPattern(s).length;
    // return [getPattern(s),repeat]

    let regex = new RegExp(getPattern(s),"g");
    return s.match(regex).length;

}

function getPattern(s) {
    let pattern = "";

    for (let i = s.length; i >= 0; i--) {
        let length = s.slice(0,i).length;
        if (s.slice(0,i) === s.substr(i,length)) {
            pattern += s.slice(0,i);
        }
    }

    if (pattern.length === 0) return s;
    return pattern;


}
console.log(
    f("ababab"),// ["ab", 3])
    f("abcde"),// ["abcde", 1]
)