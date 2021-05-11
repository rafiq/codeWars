function changeToNums(str) {
    let regexArray = [/\szero\s/gi,/\sone\s/gi,/\stwo\s/gi,/\sthree\s/gi,/\sfour\s/gi,/\sfive\s/gi,/\ssix\s/gi,/\sseven\s/gi,/\seight\s/gi,/\snine\s/gi];

    for (let i = 0; i < str.length; i++) {
        if (regexArray[i]) str.replace(regexArray[i], i)
        console.log(regexArray[i])
    }

    return str
}
console.log(
    changeToNums("two one none" ),//"2 1 none"
)