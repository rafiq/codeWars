function cleanString(s) {
    let result = "";
    let reversedStr = s.split("").reverse()
    let deleteCount = 0;

    for (let i = 0; i < s.length; i++) {
        if (reversedStr[i] === "#") {
            result += ""
            deleteCount++;
        }
        else if (deleteCount > 0) {
            deleteCount --;
            continue;
        } else {
            result += reversedStr[i];
        }
    }
    return result.split("").reverse().join("");
};

console.log(
    cleanString('abc#d##c'),// "ac")
    cleanString('abc####d##c#'),// "" )
)