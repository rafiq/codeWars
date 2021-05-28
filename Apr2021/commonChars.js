function commonChars(arr) {
    // let map = mapMaker(arr[0]);

    // // return arr.map(el => mapMaker(el))
    // for (let i = 1; i < arr.length; i++) {

    //     let tempMap = mapMaker(arr[i])
    //     arr[i].split("").forEach(char => {
    //         if (map[char]) map[char] = Math.min(map[char],tempMap[char]);

    //     })
    // }
    // return map
    // let index = 0;
    let firstWord = arr[0]
    for (let i = 1; i < arr.length; i++) {
        firstWord.split("").forEach(char => {
            if (!arr[i].includes(char)) {
                firstWord = firstWord.replace(char,"");
            }
            arr[i] = arr[i].replace(char,"");
        })
    }
    return firstWord.split("")
}
// function mapMaker(word) {
//     return word.split("").reduce((acc,curr) => {
//         acc[curr] ? acc[curr]++ : acc[curr] = 1;
//         return acc;
//     },{});
// }
console.log(
    commonChars(["bella","label","roller"]),//["e","l","l"];
    commonChars(["ab","bc"]),//["b"];
    commonChars(["cool","lock","cook"]),//["b"];
    commonChars(["hello","goodbye","booya","random"]),//["b"];
)