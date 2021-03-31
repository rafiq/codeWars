ScrambleWords = function(str){
    let cleanStr = str.replace(/[^a-z" "]/g,"").split(" ");
    cleanStr = cleanStr.map(el => getScramble(el)).join(" ")
    str.split("").reduce((acc,curr,idx) => {
        if (curr === "," || curr === "'" || curr === "." || curr === "-") cleanStr =  cleanStr.slice(0,idx) + str[idx] + cleanStr.slice(idx)
        return acc;
    },"")
    return cleanStr.length === 1 ? cleanStr.slice(0,1) : cleanStr;

//     let s = str.replace(/[^a-z ]/g, '').replace(/([a-z])([a-z]+)([a-z])/g, (_,a,b,c)=>a+[...b].sort().join``+c)
//   for (let i = 0; i < str.length; ++i) {
//     if (/[^a-z ]/.test(str[i])) s = s.slice(0,i) + str[i] + s.slice(i)
//   }
//   return s
  };
  function getScramble(word) {
    return word[0] + word.slice(1,-1).split("").sort().join("")  + word[word.length - 1];
  }
  console.log(
    // ScrambleWords('professionals'),//'paefilnoorsss', 'The first and last letters of a word should reamin in place with the inner letters sorted')
    ScrambleWords('i'),//'i', 'Must handle single charater words')
    // ScrambleWords('me'),//'me', 'Must handle 2 charater words')
    // ScrambleWords('you'),//'you', 'Must handle 3 charater words')
    // ScrambleWords('card-carrying'),//'caac-dinrrryg', 'Only spaces separate words and punctuation should remain at the same place as it started')
    // ScrambleWords("shan't"),//"sahn't", 'Punctuation should remain at the same place as it started')
    // ScrambleWords('-dcba'),//'-dbca', 'Must handle special character at the start')
    // ScrambleWords('dcba.'),//'dbca.', 'Must handle special character at the end')
    // ScrambleWords("you've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth."),//"you've gotta dacne like teehr's nbdooy wachintg, love like ylo'ul neevr be hrut, sing like teehr's nbdooy leiinnstg, and live like it's haeevn on earth.", 'Must handle a full sentence')
  )