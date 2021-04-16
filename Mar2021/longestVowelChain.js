function solve(s){
// const separateVowels = s.replace(/[^aeiou]/ig, ' ').split(' ');
// let longest = separateVowels.reduce((acc,curr) => {
//         return acc.length > curr.length ? acc : curr;
//         // return acc;
//     },[]);
//     return longest.length;

return Math.max(...s.match(/[aeiou]+/g).map(x => x.length));
}

function isVowel(letter) {
    return "aeiou".includes(letter)
}
console.log(
    solve("codewarriors"),//2);
    solve("suoidea"),//3);
    solve("ultrarevolutionariees"),//3);
    solve("strengthlessnesses"),//1);
    solve("cuboideonavicuare"),//2);
    solve("chrononhotonthuooaos"),//5);
    solve("iiihoovaeaaaoougjyaw"),//8);
)


    // let array = s.split("").reduce((acc,curr) => {
    //     if (!isVowel(curr)) {
    //         acc.push("");
    //     } else {
    //         acc.push(curr);
    //     }
    //     return acc;
    // },[]);
    // return array.join(" ").length;
    // return isVowel("a")