function uniqueSubStr(word1,word2) {
    let nonUnique = [];

    for (let i = 0; i < word1.length; i++) {
        if (word2.includes(word1[i])) nonUnique.push(word1[i]);
    }
    // return nonUnique;
    let joinedWordAB = word1 += word2;
    let joinedWordBA = word2 += word1;
    for (let letter of nonUnique) {
        joinedWordAB = joinedWordAB.split(letter).join(" ");
    }
    for (let letter of nonUnique) {
        joinedWordBA = joinedWordBA.split(letter).join(" ");
    }
    // return joinedWordAB.split(" ")
    // return joinedWordBA.split(" ")
    // return "piquancyrefocusing".split("i").join(" ").split("n").join(" ").split("u").join(" ").split("c").join(" ").split(" ").reduce((acc,curr,arr)=> {
    //     acc.length > curr.length ? acc = curr.length : acc;
    //     return acc;
    // },"")
    let BAMax = Math.max(...(joinedWordBA.split(" ").map(el => el.length)))
    let ABMax = Math.max(...(joinedWordAB.split(" ").map(el => el.length)))
    // return [BAMax, ABMax]
    return joinedWordAB.split(" ")
}
console.log(
uniqueSubStr("piquancy","refocusing")
)