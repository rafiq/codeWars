function golfScoreCalculator(parList, scoreList){



    return scoreList.split("").reduce((acc,curr,idx,arr) => {
        acc += Number(curr) - Number(parList[idx])
        return acc;
    },0)
}
console.log(
    golfScoreCalculator('443454444344544443', '353445334534445344'),// -1);
)