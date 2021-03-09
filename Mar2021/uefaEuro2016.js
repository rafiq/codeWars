function uefaEuro2016(teams, scores){
    let homeTeam = teams[0];
    let awayTeam = teams[1];
    let homeScore = scores[0];
    let awayScore = scores[1];

    if (homeScore === awayScore) return `At match ${homeTeam} - ${awayTeam}, teams played draw.`;
    else if (homeScore > awayScore) return `At match ${homeTeam} - ${awayTeam}, ${homeTeam} won!`;
    else return `At match ${homeTeam} - ${awayTeam}, ${awayTeam} won!`
  }


console.log(
    uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) ,// "At match Germany - Ukraine, Germany won!"
    uefaEuro2016(['Belgium', 'Italy'],[0, 2]), // "At match Belgium - Italy, Italy won!"
    uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."
)