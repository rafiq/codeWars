function cleanString(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "#") {
            stack.pop();
        } else {
            stack.push(s[i])
        }
    }
    return stack.join("");
};
console.log(
    cleanString('abc#d##c'),// "ac")
    cleanString('abc####d##c#'),// "" )
)