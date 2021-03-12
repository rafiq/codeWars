function nthChar(words){
    // let str = "";
    // for (let i = 0; i < words.length; i++) {
    //     str += words[i][i]
    // }
    // return str;

    return words.reduce((acc,curr,idx) => {
        acc += curr[idx];
        return acc;
    },"")
   }
console.log(
    nthChar(['yoda', 'best', 'has']), //'yes'
)