function validateWord(s)
{


    let charCount = s.toLowerCase().split("").reduce((acc,curr) => {
        acc[curr] ? acc[curr]++ : acc[curr] = 1;

        return acc;
    },{});

    return Object.values(charCount).every((val,_,arr) => val === arr[0]);


    // return charArray.every((arr,idx) => arr[1] === arr[]);
    // return charCount
}
console.log(
    validateWord("abcabc"),//true, "The word was: \"abcabc\" \n");
    validateWord("Abcabc"),//true, "The word was: \"Abcabc\" \n");
    validateWord("abc123"),//true, "The word was: \"abc123\" \n");
    validateWord("abcabcd"),//false, "The word was: \"abcabcd\" \n");
    validateWord("abc!abc!"),//true, "The word was: \"abc!abc!\" \n");
    validateWord("abc:abc"),//false, "The word was: \"abc:abc\" \n");
)