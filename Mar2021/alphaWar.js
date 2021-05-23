function alphabetWar(fight)
{
    let leftPower = 0;
    let rightPower = 0;


    for (let i = 0; i < fight.length; i++) {
        if (fight[i]  )
    }
   return fight.split("").reduce((acc,curr) => {

        curr === "w" ? leftPower  += 4 :
        curr === "p" ? leftPower  += 3 :
        curr === "b" ? leftPower  += 2 :
        curr === "s" ? leftPower  += 1:
        curr === "m" ? rightPower -= 4:
        curr === "q" ? rightPower -= 3:
        curr === "d" ? rightPower -= 2:
        curr === "z" ? rightPower -= 1: acc;

        if (leftPower > rightPower) return "Left side wins!"
        else if (leftPower < rightPower) return "Right side wins!"
        else return "Let's fight again!"
   },0) // "Let's fight again!";
}
console.log(
    alphabetWar("z"), //"Right side wins!" );
    alphabetWar("zdqmwpbs") ,// "Let's fight again!" );
    alphabetWar("zzzzs"),// "Right side wins!" );
    alphabetWar("wwwwww"),// "Left side wins!" );
)