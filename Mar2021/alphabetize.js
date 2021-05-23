function alphabetized(s) {
    let newStr = [];
    let strArray = s.split("");
    let alphabet = "abcdefghijklmnopqrstuvwxyz";

    for (let i of alphabet) {
        if (strArray.join("").toLowerCase().split("").includes(i)) {
            newStr.push(strArray.filter(char => char === i || char === i.toUpperCase()))
        }
    }

        return newStr.join("").replace(/,/g,"")
}
console.log(
    alphabetized('The Holy Bible'),// 'BbeehHilloTy')
)