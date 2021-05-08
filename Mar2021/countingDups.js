function duplicateCount(text){

    let textLowerCase = text.toLowerCase();
    let mapping = {};
    for (let i = 0; i < text.length; i++) {
        if (mapping[textLowerCase[i]]) mapping[textLowerCase[i]]++;
        else mapping[textLowerCase[i]] = 1;
    }

    return Object.entries(mapping).reduce((acc,curr) => {
        if (curr[1] > 1) acc++;
        return acc;
    },0);
    // return text.split("").map(letter => {
    //     return text.match(letter)
    // })
  }

console.log(
    duplicateCount(""),//0);
    duplicateCount("abcde"),//0);
    duplicateCount("aabbcde"),//2);
    duplicateCount("aabBcde"),//2,"should ignore case");
    duplicateCount("Indivisibility"),//1)
    duplicateCount("Indivisibilities"),//2, "characters may not be adjacent")
)