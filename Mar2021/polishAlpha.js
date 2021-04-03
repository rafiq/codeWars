const LETTERS = {
    ą:"a",
ć :"c",
ę :"e",
ł :"l",
ń :"n",
ó :"o",
ś :"s",
ź :"z",
ż :"z"
}

function correctPolishLetters (string) {
    let polishLetters = Object.keys(LETTERS).join("");

    return string.split("").reduce((acc,curr) =>{
        if (polishLetters.includes(curr)) acc += LETTERS[curr];
        else acc += curr;

        return acc;
    },"")
  }
  console.log(
    correctPolishLetters("Jędrzej Błądziński"),//"Jedrzej Bladzinski");
    correctPolishLetters("Lech Wałęsa"),//"Lech Walesa");
    correctPolishLetters("Maria Skłodowska-Curie"),//"Maria Sklodowska-Curie");
  )