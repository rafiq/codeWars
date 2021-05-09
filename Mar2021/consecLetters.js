// WOW!! the best answer really was the best because we are just checking to see if the sorted string is in a alphabet string for the fact that it will appear in the alphabet string in the exact same form as the string in its sorted form GENIUS!, and if it has duplicates or letters missing then if you check to see if that string is included in the alphabet string then it wont be there.

function solve(s){
    return isConsecutiveLetters(s) && noDups(s);
    // return [...s].sort().join('')
}
function noDups(str) {
    for (let i = 0; i < str.length - 1; i++) {
        if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) return false;
    }
    return true;
}
function isConsecutiveLetters(str) {
    let sortedNumsArray = str.split("").sort().map(el => el.charCodeAt())
        for (let i = 1; i < sortedNumsArray.length; i++) {
            if (sortedNumsArray[i] - sortedNumsArray[i - 1] !== 1) return false
        }
        return true;
}
console.log(
    solve("abc"),//true);
    solve("abd"),//false);
    solve("dabc"),//true);
    solve("abbc"),//false);
)

function solve(s) {
    return 'abcdefghijklmnopqrstuvwxyz'.includes([...s].sort().join(''));
  }