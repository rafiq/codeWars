function solve(s, k){
    let strArray =  s.split("");
    let alphaArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let j = 0;

    while (k > 0) {
        for (let i = 0; i < strArray.length; i++) {
            if (strArray[i] === alphaArray[j]) {
                // strArray =  strArray.slice(0,i)  +  strArray.slice(i + 1);
                strArray.splice(i,1)
                k--;
                break;
            }
        }
        j++;
    }
    return strArray.join("");
}
console.log(
    solve('abracadabra', 1),//'bracadabra');
    solve('abracadabra', 2),//'brcadabra');
    // solve('abracadabra', 6),//'rcdbr');
    // solve('abracadabra', 8),//'rdr');
    // solve('abracadabra', 50),//'');
)