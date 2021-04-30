function duplicateEncode(word){
    let mapping = {};
    word.toLowerCase().split("").forEach(letter => {
        mapping[letter] ? mapping[letter]++ : mapping[letter] = 1;
    })
    return word.toLowerCase().split("").reduce((acc,curr,idx) => {
        if (mapping[curr] > 1) acc += ")";
        else acc += "("

        return acc;
    },"")
}

console.log(
    duplicateEncode("din"),//"(((");
    duplicateEncode("recede"),//"()()()");
    duplicateEncode("Success"),//")())())",//"should ignore case");
    duplicateEncode("(( @"),//"))((");

)
