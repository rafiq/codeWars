function duplicateCount(text){
    let loweredText = text.toLowerCase();
    let countOfDups = 0;
    let mapping = {}
    for (let char of loweredText) {
        if (loweredText.indexOf(char) !== loweredText.lastIndexOf(char) && mapping[char] === undefined) {
            countOfDups++;
        }
        if (!mapping[char]) mapping[char] = 1;
    }
    return countOfDups;

    // let set = new Set(text)
    // return set;
  }
  console.log(
    duplicateCount(""),//0);
    duplicateCount("abcde"),//0);
    duplicateCount("aabbcde"),//2);
    duplicateCount("aabBcde"),//2,"should ignore case");
    duplicateCount("Indivisibility"),//1)
    duplicateCount("Indivisibilities"),//2, "characters may not be adjacent")
  )