function pigIt(str){
    // let spacedStr = str.split(" ").reduce((acc,curr) => {
    //     if (curr === "!" || curr === "." || curr === "'" || curr === "?") {
    //         acc += " " + curr + " ";
    //     }   else acc += curr + " ";
    //     return acc;
    // },"")
    let puntuationStr = ".,':!?";
    let punctuationStr = str.replace(/[a-z ]/gi,"_");
    let cleanStr = str.replace(/[^a-z ]/gi,"");
    return str.split(" ").reduce((acc,curr,idx) => {
        if (!puntuationStr.includes(curr)) {
            acc.push(swithcLetters(curr))
        } else acc.push(curr)
        return acc;
    },[]).join(" ");
  }
  function swithcLetters(word) {
    if (word[0].toLowerCase() >= "a" && word[0].toLowerCase() <= "z")
    return word.slice(1) + word.slice(0,1) + "ay";
  }
  console.log(
    pigIt('Pig latin is cool'),//'igPay atinlay siay oolcay')
    pigIt('This is my string'),//'hisTay siay ymay tringsay')
    pigIt('Hello world !'),     // elloHay orldway !
    pigIt("O tempora o mores !"),     // 'Oay emporatay oay oresmay !'
  )