function showMe(yourID){

    return !yourID.includes(" ") && isCapital(yourID[0]) && isLetters(yourID.slice(1));
}
function isCapital(letter) {
    return (letter <= "A" || letter >= "Z")
}
function isLetters(word) {
    let regex = /^[A-Za-z_-]*$/;
    return regex.test(word)
}
console.log(
    showMe("1Francis"), //true, "Francis is a name !")
    showMe("Jean-Eluard"),// true, "Jean-Eluard is a name!")
    showMe("-Jean-Eluard"),// true, "Jean-Eluard is a name!")
    showMe("Le Mec"), //false, "Le Mec is not a name!")
    showMe("Bernard-Henry-Levy"), //true, "Bernard-Henry-Levy is a name!")
)