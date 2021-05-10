let word = 'yams';
const leftLetters = ["q", "w", "e", "r", "t", "a", "s", "d", "f", "g", "z", "x", "c", "v", "b"];
const rightLetters = ["y", "u", "i", "o", "p", "h", "j", "k", "l", "n", "m"]
const comfortable_word = word => {

    for (let i = 0; i < word.length - 1; i++) {
        if ((leftLetters.includes(word[i]) && rightLetters.includes(word[i + 1])) || (rightLetters.includes(word[i]) && leftLetters.includes(word[i + 1]))) {

        } else return false;
    }
        return true;
  };
  console.log(
    comfortable_word(word), //true, `${word} is a comfortable word!`);
  )