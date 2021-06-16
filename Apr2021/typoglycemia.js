ScrambleWords = function(str){

    let punctStr = "-',.";
    let cleanStr = str.replace(/[^a-z ]/gi,"").split(" ").map(el => gylcoThatWord(el)).join(" ")
    cleanStr = cleanStr.split("");

    for (let i = 0; i < str.length; i++) {
        if (punctStr.includes(str[i])) cleanStr.splice(i,0,str[i])
    }
    return cleanStr.join("")
  };
  function gylcoThatWord(word) {
      return word.length === 1 ? word : word.slice(0,1) + word.slice(1,-1).split("").sort().join("") + word.slice(-1);
  }
  console.log(
    ScrambleWords('professionals'),// 'paefilnoorsss', 'The first and last letters of a word should reamin in place with the inner letters sorted')
    ScrambleWords('i'),// 'i', 'Must handle single charater words')
    ScrambleWords('me'),// 'me', 'Must handle 2 charater words')
    ScrambleWords('you'),// 'you', 'Must handle 3 charater words')
    ScrambleWords('card-carrying'),// 'caac-dinrrryg', 'Only spaces separate words and punctuation should remain at the same place as it started')
    ScrambleWords("shan't"),// "sahn't", 'Punctuation should remain at the same place as it started')
    ScrambleWords('-dcba'),// '-dbca', 'Must handle special character at the start')
    ScrambleWords('dcba.'),// 'dbca.', 'Must handle special character at the end')
    ScrambleWords("you've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth."),// "you've gotta dacne like teehr's nbdooy wachintg, love like ylo'ul neevr be hrut, sing like teehr's nbdooy leiinnstg, and live like it's haeevn on earth.", 'Must handle a full sentence')
  )