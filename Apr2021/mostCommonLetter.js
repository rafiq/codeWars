function replaceCommon(string, letter) {

    let mostCommonChar = string[0];

    for (let i = 0; i < string.length; i++) {
        if (string.split(string[i]).length - 1 > string.split(mostCommonChar).length - 1) mostCommonChar = string[i];
    }

    return string.split(" ").map(word => {
        return word.split(" ").reduce((acc,curr) => {
            if (curr === mostCommonChar) acc += letter;
            else acc += curr;
            return acc;
        },"")
    }).join(" ")
    // return string.split("").reduce((acc,curr) => {
    //     acc[curr] ? acc[curr]++ : acc[curr] = 1;

    //     return acc;
    // },{})
  }
  console.log(
    replaceCommon('my mom loves me as never did', 't'),//'ty tot loves te as never did');
    replaceCommon('real talk bro', 'n'),//'neal talk bno');
    replaceCommon('great job go ahead', 'k'),//'grekt job go khekd');
    replaceCommon('yyyaaa twwww ttt uuu ccca', 'p'),//'yyyppp twwww ttt uuu cccp');
  )