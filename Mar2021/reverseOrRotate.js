function revrot(str, sz) {
    let subStrArray = [];
    if (str.length === 0 || sz > str.length || sz <= 0) return "";
    for (let i = 0; i < str.length; i += sz) {
        subStrArray.push(str.substr(i,sz));
    }
    return subStrArray.reduce((acc,curr,idx) => {
        if (idx === subStrArray.length - 1 && curr.length < sz) acc += "";
        else if (addDigits(curr) % 2 === 0) acc += curr.split("").reverse().join("");
        else acc += rotateFirstDigit(curr)
        return acc;
    },"");
}
function addDigits(str) {
    return str.split("").reduce((acc,curr) => acc + Number(curr),0);
}
function rotateFirstDigit(str) {
    return str.slice(1) + str.slice(0,1);
}
console.log(
    // revrot("1234", 0),//"")
    // revrot("", 0),//"")
    // revrot("1234", 5),//"")
    // revrot("733049910872815764", 5),//"330479108928157")
    revrot("73304991087281576455176044327690580265896", 8),//'1994033775182780067155464327690480265895'
)