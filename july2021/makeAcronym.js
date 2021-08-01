var makeAcronym = function(string){
    if (typeof string !== "string") return "Not a string"
    if (string === "") return ""
    if (string.match(/[^a-z ]/gi)) return "Not letters"

    return string.split(" ").map(el => el[0].toUpperCase()).join("")
};
console.log(
    makeAcronym('My aunt sally'),//'MAS','Output not as expected')
    makeAcronym('Hello codewarrior'),//'MAS','Output not as expected')
    makeAcronym('a42'),//'Not letters','Output not as expected')
    makeAcronym(64),//'Not a string','Output not as expected')
    makeAcronym({name: 'Abraham'}),//'Not a string','Output not as expected')
)