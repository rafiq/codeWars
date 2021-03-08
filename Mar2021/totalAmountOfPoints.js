function points(games) {
    let homeTeamScores = games.map(score => Number(score[0]));
    let awayTeamScores = games.map(score => Number(score[2]));

    return homeTeamScores.reduce((acc,curr,idx) => {
        curr === awayTeamScores[idx] ? acc += 1 : curr > awayTeamScores[idx] ? acc += 3 : curr < awayTeamScores[idx] ? acc += 0 : acc;
        return acc;
    },0)
}
console.log(
    points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) ,//, 30);
      points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) ,// 10);
      points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) ,// 0);
      points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) ,// 15);
      points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]) , //12);
)