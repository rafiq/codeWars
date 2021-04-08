function encode(str) {
    let newStr = "";
    let alpha = "_abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < str.length; i++ ) {
        if (alpha.includes(str[i].toLowerCase())) {
            newStr += alpha.indexOf(str[i].toLowerCase())
        } else newStr += str[i];
    }

    return newStr;
   }

   console.log(
    encode('abc'),//'123');
    encode('ABCD'),//'1234');
    encode('ZzzzZ'),//'2626262626');
    encode('abc-#@5'),//'123-#@5');
   )