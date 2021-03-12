function titleCase(title, minorWords = "") {
    let newTitle = "";
    minorWords = typeof minorWords !== "undefined" ? minorWords.toLowerCase().split(' ') : [];
    let array = title.toLowerCase().split(" ");
    if (title.length < 2) return "";

    array.forEach((word,idx) => {
        if (idx === array.length - 1) newTitle += word[0].toUpperCase() + word.slice(1);
        else if (minorWords === undefined) newTitle += word[0].toUpperCase() + word.slice(1) + " ";
        else if (idx === 0) {
            newTitle += `${word[0].toUpperCase()}${word.slice(1)} `;
        } else if (minorWords.includes(word)) newTitle += word + " ";
        else newTitle +=  word[0].toUpperCase() + word.slice(1) + " ";
    })
    return newTitle;
    // return minorWords.split(" ").includes("an");

    // return title.split(" ").reduce((acc,curr,idx) => {
    //     if (minorWords.split(" ").includes(curr) && idx !== 0) acc += curr;
    //     else acc += curr[0].toUpperCase() + curr.slice(1) + " ";
    //     return acc;
    // },"");
}
console.log(
    titleCase(''),// '')
    titleCase('a clash of KINGS', 'a an the of'), //'A Clash of Kings')
    titleCase('THE WIND IN THE WILLOWS', 'The In'),// 'The Wind in the Willows')
    titleCase('the quick brown fox'), //'The Quick Brown Fox')
)