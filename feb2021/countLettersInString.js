function letterCount(s){
    let letterTable = {};

    for (let i = 0; i < s.length; i++) {
        if (letterTable[s[i]] === undefined) {
            letterTable[s[i]] = 1;
        } else {
            letterTable[s[i]]++;
        }
    }
    return letterTable;

  }

console.log(
    letterCount("codewars"),// {"a": 1, "c": 1, "d": 1, "e": 1, "o": 1, "r": 1, "s": 1, "w": 1});

)

// In this kata, you've to count lowercase letters in a given string and return the letter count in a hash with 'letter' as key and count as 'value'. The key must be 'symbol' instead of string in Ruby and 'char' instead of string in Crystal.