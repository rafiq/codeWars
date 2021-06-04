function solve(s){


    return Math.max(...s.replace(/[^aeiou]/g," ").split(" ").map(el => el.length));
   }
   console.log(
    solve("codewarriors"),//2);
    solve("suoidea"),//3);
    solve("ultrarevolutionariees"),//3);
    solve("strengthlessnesses"),//1);
    solve("cuboideonavicuare"),//2);
    solve("chrononhotonthuooaos"),//5);
    solve("iiihoovaeaaaoougjyaw"),//8);
   )