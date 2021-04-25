function findLongestSubstr(s) {
    if (s.length === 0) return "";
    let maxStrArrray = [s[0]];
    let maxPos = 0;
    let current = 1;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1] && i !== s.length - 1) {
            current++;
        } else if (s[i] !== s[i - 1]) {
            maxStrArrray.push(s.substr((i - current),current));
            current = 1;
        } else if (i === s.length - 1) {
            current++;
            maxStrArrray.push(s.substr((i + 1 - current),current));
            current = 1;
        }

    }
    let maxStrArrrayNums = maxStrArrray.filter(el => {
        return (parseInt(el) == el)
    })
    let maxStrArrrayLetters = maxStrArrray.filter(el => {
        return el.toLowerCase() >= "a" && el.toLowerCase() <= "z"
    })
    maxStrArrray = maxStrArrrayLetters.concat(maxStrArrrayNums);
    let lengthsArray = maxStrArrray.map(x => x.length);
    maxPos = s.indexOf(maxStrArrray[lengthsArray.indexOf(Math.max(...lengthsArray))]);
    let maxLetter = maxStrArrray[lengthsArray.indexOf(Math.max(...lengthsArray))][0].charCodeAt();
    let maxLength = Math.max(...lengthsArray)
    return [`${maxLetter}`, +`${maxLength}`,[+`${maxPos}`, +`${maxPos + maxLength - 1}`]]
    // return maxStrArrray.reduce((acc,curr) => {
    //     acc[curr] = curr.length;
    //     return acc;
    // },{})

    return
}
console.log(
    // findLongestSubstr("1111aa994bbbb1111AAAAAFF?<mmMaaaaaaaaaaaaaaaaaaaaaaaaabf"),//['97', 25, [29, 53]]);
    // findLongestSubstr("1111aa994bbbb1111AAAAAFF????????????????????????????"),//['65', 5, [17, 21]]);
    // findLongestSubstr("1111aa994bbbb1111AAAAAFFcfgBBBBB"),//['65', 5, [17, 21]])
    findLongestSubstr("kkkkkk666666666666666666666666666vvvvvvvkkkkkkkkkkkkkktttttttttttttttttyyyyyyyyyyyyyyyyyyyyyyyVVVVVVVVVVVVVVVVVVVVVVVVVVVVVwwwwwwwwwwDDDDDDDDDDDDD||||||||||||||||||||||||||||||xxxxxxxxxxxxxxxxxxxxxxxKKKKKKKKKKKKKK444444444444444444444444OOOOOOOOOOOYYYYYYYYY%%%%%%%%%%%%%%%%%%%%%%%%%%SSSSSSSSSSSSSSSSSSSSSSSSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWWWWWWWWWWWWWWWW????????????oooooooooooooBBBBBBBBBBB777777777777777777GGGGGGGGGGGGGGGGGGGGGGGGGQQQQQQQQQQQQQQQQQQQQQQQQQQQQQhhhhhhhhhhhhhhhh===============DDDDDDDDDDEEEEEEEEEEE22222222rrrrrrrrrrrrrrrrrrrrrrllllllllllllllllllll2222222222222222222222uuuuuuuuuuuuuuIIIIIIIIIIIIIIIIIIIIIIuuuuuuuuuuuuuuuu55555555555555555555555555ZZZZZZZZZZZZZZZZZZZZZzzzzzzzzzzzzVVVVVjjjjjjjjjjj99999999999999ggggggggggggtttttttqqqqqqqqqqqqqqqqqqqqqqxxxxxxxxxx((((((((((((((((([[[[[[[[[[[[[[[[[[[[[[[[[[>>>>>>>>>>>>>>>kkkkkkkkkkkkkkk66666666666666666666666666666666666666666666QQQQQQQQ}}}}}}}}}}}}}}ddddddddddddddddddddddddMMMMMMMMMMMMMMMMMMMMMMMMMtttttttttttttttttttttttttttttXXXXXXXXXXXXXXXXllllllllllllllllll"),//'[\'54\', 44, [849, 892]]
    // findLongestSubstr(""),//CUSTOM
)
//   for (let i = 1; i < s.length; i++) {
    // if (s[i] !== s[i + 1]) {
    //     if (currentLength > maxLength)  {
    //         maxLength = currentLength;
    //         maxPos = currentPos;
    //         maxLetter = s[i].charCodeAt();
    //         currentLength = 0;
    //         currentLetter = "";
    //         currentPos = 0;
    //     } else {
    //         currentLength = 0;
    //     }
    // } else {
    //     if (currentPos === 0) {
    //         currentPos = i;
    //         currentLength++;
    //     }
    //     currentLength++;
    //     currentLetter = s[i];
    // }


    // return `[${longestString[0].charCodeAt()}, ${maxLength},[${maxPos}, ${maxLength - maxPos}]]`;
    // return sCopy






    // var chars = s.split('');
    // var currChar;
    // var str = "";
    // var longestString = "";
    // var hash = {};
    // for (var i = 0; i < chars.length; i++) {
    // currChar = chars[i];
    // if (!hash[chars[i]])
    // {
    // str += currChar;
    // hash[chars[i]] = {index:i};
    // }
    // else
    // {
    // if(longestString.length <= str.length)
    // {
    // longestString = str;
    // }
    // var prev_dupeIndex = hash[currChar].index;
    // var str_FromPrevDupe = s.substring(prev_dupeIndex + 1, i);
    // str = str_FromPrevDupe + currChar;
    // hash = {};
    // for (var j = prev_dupeIndex + 1; j <= i; j++) {
    // hash[s.charAt(j)] = {index:j};
    // }
    // }
    // }
    // return longestString.length > str.length ? longestString : str;




    // let currentChar = s[0];
    // let currentString = currentChar;
    // let longestString = currentChar;
    // let maxLength = longestString.length;
    // let maxPos = s.indexOf(longestString);
    // let currentLongestLength = 1;
    // sCopy = s.replace(/[^a-z]/gi,"");

    // for (let i = 1; i < sCopy.length; i++) {
    //     if (sCopy[i] === currentString) {
    //         currentString += currentChar;
    //         if (currentString.length > longestString.length) {
    //             currentLongestLength++;
    //             longestString = currentString;
    //         }
    //     } else {
    //         currentString = sCopy[i];
    //     }
    // }
    // let start = 0;
    // let end = 0;
    // let streakArray = [];
    // for (let i = 0; i < s.length - 1; i++) {
    //     if (s[i] === s[i + 1] && start === 0) {
    //         start = i;
    //         // i++
    //     }
    //     if (s[i] !== s[i + 1] ) {
    //         streakArray.push(s.slice(start,i + 1))
    //         start = 0;
    //         // i++
    //     }
    // }





    // return Math.max(...streakArray);



     // currentStr = s.substr((i - current),current)
        // console.log(currentStr)
        // if (s[i] !== s[i - 1] && currentStr.length > maxStr.length) {
        //     maxPos = i; //does this need to be index or plus 1?
        //     maxStr = currentStr;
        //     current = 1;
        // } else {
        //     current++;
        // }