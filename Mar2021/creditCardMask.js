// return masked string
function maskify(cc) {
    let padding = 0;
    let subStr = "";
    if (cc.length > 4) {
        padding = cc.length - 4;
        subStr = cc.slice(padding);
        return subStr.padStart(cc.length,"#");
    } else return cc;

}

console.log(
    maskify('4556364607935616'),// '############5616');
    maskify('1'), //'1');
    maskify('11111'),// '#1111');
    maskify(                "") ,//                ""

// "What was the name of your first pet?"
maskify("Skippy")                                   ,//"##ippy"
maskify("Nananananananananananananananana Batman!") ,//"####################################man!"
)