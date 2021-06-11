function scramble(str1,str2) {

    let str1Map = str1.split("").reduce((acc,curr) => {
        acc[curr] ? acc[curr]++ : acc[curr] = 1;
        return acc;
    },{})
    let str2Map = str2.split("").reduce((acc,curr) => {
        acc[curr] ? acc[curr]++ : acc[curr] = 1;
        return acc;
    },{})
    let keys = Object.keys(str1Map)
    for (let i = 0; i < keys.length; i++) {
        let char = keys[i]
        if (str1Map[char] > str2Map[char]) return false;
    }
    return true;
}
console.log(
    scramble("big","bigger"),//
)