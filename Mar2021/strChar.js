function solve(s){
    let upper = 0;
    let lower = 0;
    let special = 0;
    let numbers = 0;

    for (let i = 0; i < s.length; i++) {
        if (!isLetter(s[i]) && isNaN(s[i])) special++;
        if (!isLetter(s[i]) && !isNaN(s[i])) numbers++;
        if (isLetter(s[i]) && s[i] === s[i].toLowerCase()) lower++;
        if (isLetter(s[i]) && s[i] === s[i].toUpperCase()) upper++;
    }
    return [upper, lower, numbers, special];
   }
   function isLetter(char) {
       return char.toLowerCase() >= "a" && char.toLowerCase() <= "z";
   }
   console.log(
    solve("Codewars@codewars123.com"),//[1,18,3,2]);
    solve("bgA5<1d-tOwUZTS8yQ"),//[7,6,3,2]);
    solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H"),//[9,9,6,9]);
    solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"),//[15,8,6,9]);
    solve("$Cnl)Sr<7bBW-&qLHI!mY41ODe"),// [10,7,3,6])
    solve("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft"),// [7,13,4,10]);
   )