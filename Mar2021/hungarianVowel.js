function dative(word) {
    const frontVowels = "e, é, i, í, ö, ő, ü, ű";
    const backVowels = "a, á, o, ó, u, ú";
    for (let i = word.length - 1; i > 0; i--) {
        if (frontVowels.includes(word[i]) ) return word + "nek";
        if (backVowels.includes(word[i])) return word + "nak";
    }
    return "not one of those words";
}
console.log(
    dative("kéz"),// "kéznek"],
    // dative("ablak"),// "ablaknak"],
    // dative("tükör"),// "tükörnek"],
    // dative("keret"),// "keretnek"],
    // dative("otthon"),// "otthonnak"],
    // dative("virág"),// "virágnak"],
    // dative("tett"),// "tettnek"],
    // dative("rokkant"),// "rokkantnak"],
    // dative("rossz"),// "rossznak"],
    // dative("gonosz"),// "gonosznak"],
)