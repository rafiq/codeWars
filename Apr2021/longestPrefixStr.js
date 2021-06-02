function longestPrefixStr(array) {
    let result = array[0];
    array.forEach(word => {
        result = isSameLetters(result,word)
    })
    return result;
}
function isSameLetters(word1,word2) {
    let result = "";
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) break;
        else result += word1[i]
    }
    return result;
}

console.log(
    longestPrefixStr(["flower","flow","floight"]),//"fl";
    longestPrefixStr(["dog","doracecar","docar"]),//""
    longestPrefixStr(["throne","dungeon"]),//""
    longestPrefixStr(["throne","throne"]),//"throne"
    longestPrefixStr(["interspecies","interstellar","interspace"]),//"inters"
)