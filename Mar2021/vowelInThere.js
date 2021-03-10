function isVow(a){

    return a.map(el => {
        if (isVowel(el)) {
            return el = String.fromCharCode(el)
        } else return el;
    } );
}
function isVowel(num) {
    return [97,101,105,111,117].some(n => n === num);
}
console.log(
   isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]),//[118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]);
   isVow([101,121,110,113,113,103,121,121,101,107,103]),//["e",121,110,113,113,103,121,121,"e",107,103]);
)