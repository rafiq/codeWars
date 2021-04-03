function scale(strng, k, n) {
    if (strng.length === 0) return "";
    let newWord = [];
    let wordArray = strng.split("\n");
    let result = [];

    wordArray.forEach(word => {
        newWord.push(repeatLetters(word,k))
    })

    for (let i = 0; i < newWord.length; i++) {
        for (let j = 0; j < n; j++) {
            result.push(newWord[i])
        }
    }

    return result.join("\n");
}
function repeatLetters(str,times) {
    return str.split("").reduce((acc,curr,idx,arr) => {
        acc += curr.repeat(times)
        return acc;
    },"")
}
console.log(
    scale("abcd\nefgh\nijkl\nmnop", 2, 3),//"aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp";
    scale("", 5, 5),// "");
    scale("Kj\nSH", 1, 2),//"Kj\nKj\nSH\nSH");
)

// This is a nice way to do it and I was thinking of doing this, but I didn't want to have to slice it at the end. but it is fine
function scale(strng, k, n) {
    let l;
    return (l = strng
        .split("\n")
        .map(w => w
            .split("")
            .map(v => v.repeat(k))
            .join("")
        )
        .map(r => r ? (r+"\n").repeat(n) : "")
        .join("")
    ).substr(0,l.length-1)
}