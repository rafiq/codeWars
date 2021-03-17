function solve(s, k){
    // let alphaArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // let count = k;
    // let str = s;
    // while (count > 0) {
    //     let len = 0;

    //     for (let i = 0; i < alphaArray.length; i++) {

    //         while (str.includes(alphaArray[i])) {
    //             len = s.match(new RegExp(alphaArray[i], "gi")).length;
    //                 str = str.slice(0,str.indexOf(alphaArray[i])) + str.slice(str.indexOf(alphaArray[i]) + 1);
    //                 count--;
    //         }

    //     }

    // }
    // return str

    let alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
    let cursor = 0;

    while(k > 0) {
        let len = 0;

        if(s.includes(alphabet[cursor]))
          len = s.match(new RegExp(alphabet[cursor], "gi")).length;

        if(len > 0) {
            for(let i=0; i<len; i++) {
                if(k > 0) {
                    s = s.replace(alphabet[cursor], "");
                    k--;
                } else
                    break;
            }
        }
        cursor++;
        if(cursor > 25)
            break;
    }
    return s;
}
console.log(
    solve('abracadabra', 1),//'bracadabra');
    solve('abracadabra', 2),//'brcadabra');
    // solve('abracadabra', 6),//'rcdbr');
    // solve('abracadabra', 8),//'rdr');
    // solve('abracadabra', 50),//'');
)