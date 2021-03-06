function solution(fullText, searchText){
    // return fullText.matchAll(searchText);
    // let count = 0;


    // for (let i = 0; i < fullText.length; i++) {
    //     if (searchText.length > 1) {
    //         return fullText.split(searchText).length - 1;
    //     }

    //     if (fullText[i] === searchText) count++;
    // }


    // return count;
    return fullText.split(searchText).length - 1;
}
console.log(
    solution('abcdeb','b'),// 2);
    solution('abc','b'),// 1);
    solution('abbc','bb'),// 1);
    solution('aa_bb_cc_dd_bb_e', 'bb'),// 2
)