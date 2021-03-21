function flipNumber(n)
{
    for (let i = 0; i < n.length; i++) {
        n = n.slice(0,i) + n.slice(i).split("").reverse().join("");
    }
    return n;
}
console.log(
    flipNumber("012"),//"201");
    flipNumber("012345"),//"504132");
    flipNumber("0123456789"),//"9081726354");
)