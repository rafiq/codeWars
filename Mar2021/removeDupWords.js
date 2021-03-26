const removeConsecutiveDuplicates = s => {


    // let wordArray = s.split(" ")
    // let newArray = [];

    // for (let i = 0; i < wordArray.length; i++) {
    //     if (wordArray[i] === wordArray[i + 1]) continue;
    //     else newArray.push(wordArray[i])
    // }
    // return newArray;


    return s.split(" ").filter((x,i,arr) => x != arr[i-1]).join(" ");
} // your perfect code...

console.log(
    removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'),//'alpha beta gamma delta alpha beta gamma delta');
)