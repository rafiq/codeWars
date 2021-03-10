let myText = "what makes the desert beautiful, said the little prince is that somewhere it hides a well";

function wordSearch(word, text){
// return text.includes(word);
    // let regex = /[,.!?\\-]/;
    // let cleanText = text.replace(regex,"")
    // return cleanText.split(" ").some(el => el === word);
    // return cleanText;
    return text.search("\\b"+word+"\\b") > -1;
}
console.log(
    wordSearch("desert",myText),//true);
    wordSearch("blue",myText),//false);
    wordSearch("well",myText),//true);
    wordSearch("house",myText),//false);
    wordSearch("beautiful",myText),//true);
    wordSearch("prince",myText),//true);
    wordSearch("le prince",myText),//false);
)