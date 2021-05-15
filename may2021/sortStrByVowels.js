function sortStringsByVowels(strings){
    let sortedStr = [];
    strings.forEach(el => {
        sortedStr.push([el, el.replace(/[^aeiou]/gi," ").split(" ").reduce((a,b) => {
            return a.length > b.length ? a : b;
        }).length])
    })

    return sortedStr.sort((a,b) => b[1] - a[1]).map(el => el[0]);
    // return strings[2].match(/(([aeiou])\2*)/gi).reduce((a,b) => {
    //     return a.length > b.length ? a : b;
    // })
    // return strings[2].replace(/[^aeiou]/gi," ").split(" ").reduce((a,b) => {
    //         return a.length > b.length ? a : b;
    //     }).length
}
// while (strings.length > 0) {
//     for (let i = 0; i < strings.length; i++) {
//         let max = Math.max(results);
//         sortedStr.push(strings[strings.indexOf(max)]);
//         strings = strings.splice(strings.indexOf(max),1,"")
//     }
// }
    console.log(
        sortStringsByVowels([ 'ioue', 'ee', 'uoiea' ]),//[\'uoiea\', \'ioue\', \'ee\']
        sortStringsByVowels([ 'none', 'uuu', 'Yuuuge!!' ]),//[\'uuu\', \'Yuuuge!!\', \'none\']
        // sortStringsByVowels(["aa","eee","oo","iiii"]),//["iiii","eee","aa","oo"]);
        // sortStringsByVowels(["a","e","ii","ooo","u"]),//["ooo","ii","a","e","u"]);
        // sortStringsByVowels( ["ioue","ee","uoiea"]) ,// ["uoiea", "ioue","ee"]);
        // sortStringsByVowels( ["high","day","boot"]),// ["boot","high","day"]);
        // sortStringsByVowels(["none","uuu","Yuuuge!!"]),// ["uuu","Yuuuge!!","none"]);
        // sortStringsByVowels(["AIBRH","","YOUNG","GREEEN"]),// ["GREEEN","AIBRH","YOUNG",""]);
        // sortStringsByVowels(["jyn","joan","jimmy","joey"]),// ["joan","joey","jimmy","jyn"]);
        // sortStringsByVowels(["uijijeoj","lkjlkjww2","iiutrqy"]),// ["iiutrqy","uijijeoj","lkjlkjww2"]);
        // sortStringsByVowels(["how about now","a beautiful trio of"]),// ["a beautiful trio of","how about now"]);
        // sortStringsByVowels(["every","bataux","is","waaaay","loose"]),// ["waaaay","bataux","loose","every","is"]);
    )