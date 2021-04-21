function generateHashtag (str) {
    str = str.trim();
    if (str === "") return false;

    let result = str.split(" ").reduce((acc,curr,idx) => {
        curr[0] ? acc += curr[0].toUpperCase() + curr.slice(1): acc;
        return acc;
    },"#");

    return is140Chars(result) ? result : false;

}
function is140Chars(word) {
    return word.length <= 140;
}
console.log(
    generateHashtag(""),// false, "Expected an empty string to return false")
    generateHashtag(" ".repeat(200)),// false, "Still an empty string")
    generateHashtag("Do We have A Hashtag"),// "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
    generateHashtag("Codewars"),// "#Codewars", "Should handle a single word.")
    generateHashtag("Codewars Is Nice"),// "#CodewarsIsNice", "Should remove spaces.")
    generateHashtag("Codewars is nice"),// "#CodewarsIsNice", "Should capitalize first letters of words.")
    generateHashtag("code" + " ".repeat(140) + "wars"),// "#CodeWars")
    generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"),// false, "Should return false if the final word is longer than 140 chars.")
    generateHashtag("a".repeat(139)),// "#A" + "a".repeat(138),// "Should work")
    generateHashtag("a".repeat(140)),// false, "Too long")
)